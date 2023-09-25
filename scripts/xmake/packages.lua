
function add_all_requires()
    add_repositories("local-repo scripts/xmake")
    add_requires("rtmidi")
    add_requires("fluidsynth")
    add_requires("qt5widgets")
    add_requires("qtifw")
end