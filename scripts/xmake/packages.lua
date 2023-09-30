
function add_all_requires()
    add_requires("fluidsynth")
    add_requires("qt5widgets")
    if is_plat("linux") then
        add_requires("rtmidi", {configs = {alsa = true}})
    else
        add_requires("qtifw")
        add_requires("rtmidi")
    end
end