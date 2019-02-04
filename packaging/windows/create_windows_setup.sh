#!/bin/sh
#
# -------------- This script is used to create the windows installer. ---------- #
#
# Required environment variables:
#
# MIDIEDITOR_RELEASE_VERSION_ID=2
# MIDIEDITOR_RELEASE_VERSION_STRING=3.1.0
# MIDIEDITOR_PACKAGE_VERSION=1
# MIDIEDITOR_BINARY_WINDOWS=relative/path/to/ProMidEdit.exe
# INSTALLJAMMER=/path/to/installjammer
#

# Setup folder structure
mkdir ProMidEdit-win32
mkdir ProMidEdit-win32/win_root/

# Copy binary
cp $MIDIEDITOR_BINARY_WINDOWS ProMidEdit-win32/win_root/ProMidEdit.exe

# Copy assistant files
cp -R packaging/windows/assistant ProMidEdit-win32/win_root/assistant

# Copy metronome
cp -R packaging/metronome ProMidEdit-win32/win_root/metronome

# Create manual
cp -R promidedit-manual/. ProMidEdit-win32/win_root/assistant
cp -a packaging/manual/. ProMidEdit-win32/win_root/assistant
D=${PWD}
cd ProMidEdit-win32/win_root/assistant
qcollectiongenerator promidedit-collection.qhcp -o promidedit-collection.qhc
cd $D

cp -R packaging/windows/windows-installer/. ProMidEdit-win32

cd ProMidEdit-win32

sh ../$INSTALLJAMMER -DVersion $MIDIEDITOR_RELEASE_VERSION_STRING --build-for-release windows-installer.mpi

cd ..

mkdir releases
cp -a ProMidEdit-win32/output/ProMidEdit-$MIDIEDITOR_RELEASE_VERSION_STRING-Setup.exe releases/ProMidEdit-$MIDIEDITOR_RELEASE_VERSION_STRING-Setup.exe
