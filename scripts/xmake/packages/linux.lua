
function add_all_requires()
    if linuxos.name() == "ubuntu" then
        add_requires("apt::libasound2-dev")
        if has_config("libraries-from-apt") then
            add_requires("apt::libfluidsynth-dev", {alias = "fluidsynth"})
            add_requires({
                "apt::qtbase5-dev", "apt::qtdeclarative5-dev", "apt::libqt5webkit5-dev",
                "apt::qt5-default", "apt::qttools5-dev-tools", "apt::qtmultimedia5-dev",
                "apt::libqt5multimedia5", "apt::libqt5multimedia5-plugins"
            }, {alias = "qt5widgets"})
        else
            add_requires("fluidsynth")
            add_requires("qt5widgets")
        end
    else
        add_requires("fluidsynth")
        add_requires("qt5widgets")
    end
    add_requires("rtmidi", {configs = {alsa = true}})
end