
local MIDIEDITOR_RELEASE_VERSION_STRING = "3.4.1"
set_version(MIDIEDITOR_RELEASE_VERSION_STRING)
set_allowedplats("windows", "linux", "macosx")
option("fluidsynth", {
    description = "enable fluidsynth support",
    default = true,
    values = {true, false},
    showmenu = true,
})
option("generate-repository", {
    description = "generate repositiory to update online repositories",
    default = false,
    values = {true, false},
    showmenu = true,
})
option("libraries-from-apt", {
    description = "use libraries from apt rather than xmake-repo",
    default = false,
    values = {true, false},
    showmenu = is_host("linux") and (linuxos.name() == "ubuntu"),
})

if has_config("plat") then
    includes("scripts/xmake/packages/" .. get_config("plat") .. ".lua")
    add_all_requires()
end

target("translation") do
    set_kind("phony")
    add_packages("qt5widgets")
    on_build(function (target)
        print("compiling translation file")
        import("core.project.config")
        import("lib.detect.find_tool")

        -- get lrelease
        local lrelease_tool = assert(
            find_tool("lrelease", {check = "-help"}),
            "lrelease.exe not found!")
        local lrelease = lrelease_tool.program

        local translation_declare = {}
        for _, filepath in ipairs(os.files("locale/*.ts")) do
            table.insert(translation_declare, filepath)
        end
        os.iorunv(lrelease, translation_declare)
    end)
end

local installdir = "packaging/org.midieditor.midieditor/data/"
target("ProMidEdit") do
    add_deps("translation")
    set_languages("cxx11")
    add_packages({
        "rtmidi",
        "qt5widgets"
    })
    add_rules("qt.widgetapp")
    add_frameworks({
        "QtGui",
        "QtWidgets",
        "QtCore",
        "QtNetwork",
        "QtXml",
        "QtMultimedia",
        "QtMultimediaWidgets"
    })
    add_files("src/**.cpp")
    add_files("src/**.h")
    add_files("resources.qrc")
    if is_arch("x86_64") then
        add_defines("__ARCH64__")
    end
    if has_config("fluidsynth") then
        add_defines("USE_FLUIDSYNTH")
        add_packages("fluidsynth")
    end
    add_defines("MIDIEDITOR_RELEASE_VERSION_ID_DEF=" .. 0)
    add_defines("MIDIEDITOR_RELEASE_DATE_DEF=" .. os.date("%x"))
    add_defines("MIDIEDITOR_RELEASE_VERSION_STRING_DEF=" .. MIDIEDITOR_RELEASE_VERSION_STRING)
    if is_plat("linux", "bsd") then
        add_defines({
            "__LINUX_ALSASEQ__",
            "__LINUX_ALSA__"
        })
        add_syslinks("asound")
    elseif is_plat("windows") then
        add_defines("__WINDOWS_MM__")
        add_syslinks("winmm")
        add_files("midieditor.rc")
    elseif is_plat("macosx") then
        add_defines("__MACOSX_CORE__")
        add_frameworks("CoreMidi", "CoreAudio", "CoreFoundation")
        -- TODO: icons
        add_installfiles("midieditor.icns")
    end
    
    local bindir = path.join(installdir, "bin")
    local plugindir = path.join(bindir, "plugins")
    set_installdir(installdir)
    if is_plat("windows") then
        local configs = {
            "--plugindir", plugindir,
            "--libdir", bindir
        }
        set_values("qt.deploy.flags", configs)
        after_install(function (target) 
            os.rm(path.join(bindir, "**", "dsengine.dll"))
        end)
        after_uninstall(function (target)
            os.rm(path.join(installdir, "**", "*.dll"))
            os.rm(path.join(installdir, "**", "*.exe"))
        end)
    end
end

target("remoteVST") do
    -- add_deps("translation")
    set_languages("cxx11")
    add_packages({
        "qt5widgets"
    })
    add_rules("qt.widgetapp")
    add_frameworks({
        "QtGui",
        "QtCore",
    })
    add_includedirs("remoteVST")
    add_files({
        "remoteVST/main.cpp", "remoteVST/mainwindow.cpp", "remoteVST/VST/VST.cpp"
    })
    add_files({
        "remoteVST/mainwindow.h", "remoteVST/VST/VST.h"
    })
    add_defines("QT_DISABLE_DEPRECATED_BEFORE=0x060000")
    add_files("remoteVST/resources/resources.qrc")
    
    local installdir = "packaging/org.midieditor.remotevst/data/encoders"
    local bindir = path.join(installdir, "bin")
    local plugindir = path.join(bindir, "plugins")
    set_installdir(installdir)
    if is_plat("windows") then
        local configs = {
            "--plugindir", plugindir,
            "--libdir", bindir
        }
        set_values("qt.deploy.flags", configs)
        after_install(function (target) 
            os.rm(path.join(bindir, "**", "dsengine.dll"))
        end)
        after_uninstall(function (target)
            os.rm(path.join(installdir, "**", "*.dll"))
            os.rm(path.join(installdir, "**", "*.exe"))
        end)
    end
end

target("manual") do
    set_kind("phony")
    set_enabled(is_plat("windows"))
    set_installdir("packaging/org.midieditor.manual/data/manual")
    add_installfiles("manual/(**)")
end

target("installer") do
    set_kind("phony")
    set_enabled(is_plat("windows", "linux"))
    add_deps("ProMidEdit")
    
    set_installdir(installdir)
    if is_plat("windows") then
        add_deps("manual")
        add_packages("qtifw")
        after_install(function (target, opt)
            import("core.project.config")
            local qtifw_dir = target:pkg("qtifw"):installdir()
            local binarycreator_path = path.join(qtifw_dir, "/bin/binarycreator.exe")
            local repogen_path = path.join(qtifw_dir, "/bin/repogen.exe")
            if config.get("generate-repository") then
                print("generate site")
                print("  generate repository")
                local repo_argv = {
                    "--update-new-components",
                    "--packages", "packaging",
                    path.join(config.buildir(), "website", "repository")
                }
                os.iorunv(repogen_path, repo_argv)
                print("  generate installer")
                local package_argv = {
                    "--config", "scripts/packaging/windows/config.xml",
                    "--packages", "packaging",
                    path.join(config.buildir(), "website", "ProMidiEdit.exe")
                }
                os.iorunv(binarycreator_path, package_argv)
                print("  copy online manual")
                os.cp("manual/*", path.join(config.buildir(), "website"))
            else
                print("generate off-line installer")
                local package_argv = {
                    "--config", "scripts/packaging/windows/config.xml",
                    "--packages", "packaging",
                    "packaging/Install.exe"
                }
                os.iorunv(binarycreator_path, package_argv)
            end
        end)
    elseif is_plat("linux") and linuxos.name() == "ubuntu" then
        add_installfiles("scripts/packaging/debian/ProMidEdit.desktop", {prefixdir = "usr/share/applications"})
        add_installfiles("scripts/packaging/debian/logo48.png", {prefixdir = "usr/share/pixmaps"})
        add_installfiles("scripts/packaging/debian/copyright", {prefixdir = "usr/share/doc/promidedit/copyright"})
        add_installfiles("$(buildir)/control", {prefixdir = "DEBIAN"})
        add_configfiles("scripts/packaging/debian/control", {
            pattern = "{(.-)}",
            variables = {
                PACKAGE = 1,
                DEPENDS = "libc6(>=2.19), libfluidsynth3, qtbase5-dev, qtdeclarative5-dev, libqt5webkit5-dev, libsqlite3-dev, qt5-default, qtmultimedia5-dev, libqt5multimedia5, qttools5-dev-tools, libqt5multimedia5-plugins, libasound2, libgstreamer1.0-0, gstreamer1.0-plugins-base, gstreamer1.0-plugins-good, gstreamer1.0-plugins-bad, gstreamer1.0-plugins-ugly, gstreamer1.0-libav, gstreamer1.0-doc, gstreamer1.0-tools",
                SIZE = 70, -- in kb, todo
            }
        })
        after_install(function (target, opt)
            import("core.project.config")
            local installdir_glob = path.join(target:installdir(), "**")
            for _, file in ipairs(os.dirs(installdir_glob)) do
                os.runv("chmod", {"755", file})
            end
            for _, file in ipairs(os.files(installdir_glob)) do
                os.runv("chmod", {"644", file})
            end
            os.runv("chmod", {
                "+x", path.join(target:installdir(), "bin", target:deps()["ProMidEdit"]:filename())})
            os.iorunv("fakeroot", {"dpkg-deb", "--build", target:installdir()})
        end)
    end
end
