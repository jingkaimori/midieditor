
function add_all_requires()
    add_requires("rtmidi")
    add_requires("fluidsynth")
    add_requires("qt5widgets")
    if not is_plat("linux") then
        add_requires("qtifw")
    end
end