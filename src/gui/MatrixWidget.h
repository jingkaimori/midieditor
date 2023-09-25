/*
 * MidiEditor
 * Copyright (C) 2010  Markus Schwenk
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#ifndef MATRIXWIDGET_H_
#define MATRIXWIDGET_H_

#include "PaintWidget.h"

#include <QApplication>
#include <QColor>
#include <QMap>
#include <QMouseEvent>
#include <QPaintEvent>
#include <QPainter>
#include <QPalette>
#include <QPixmap>
#include <QResizeEvent>
#include <QWidget>
#include <QTextCodec>
#include "../tool/EventMoveTool.h"

class MidiFile;
class TempoChangeEvent;
class TimeSignatureEvent;
class MidiEvent;
class GraphicObject;
class NoteOnEvent;

class MatrixWidget : public PaintWidget {

    Q_OBJECT

  public:
    MatrixWidget(QWidget* parent = 0);
    void setFile(MidiFile* file);
    MidiFile* midiFile();
    QList<MidiEvent*>* activeEvents();
    QList<MidiEvent*>* velocityEvents();

    double lineHeight();
    int lineAtY(int y);
    int msOfXPos(int x);
    int timeMsOfWidth(int w);
    bool eventInWidget(MidiEvent* event);
    int yPosOfLine(int line);
    void setScreenLocked(bool b);
    bool screenLocked();
    int minVisibleMidiTime();
    int maxVisibleMidiTime();

    void setColorsByChannel();
    void setColorsByTracks();
    bool colorsByChannel();

    bool getPianoEmulation();
    void setPianoEmulation(bool);

    void playNote(int);

    int msOfTick(int tick);
    int xPosOfMs(int ms);
    QList<QPair<int, int> > divs();

    bool visible_Controlflag;
    bool visible_PitchBendflag;
    bool visible_TimeLineArea3;
    bool visible_TimeLineArea4;

    bool visible_karaoke;

public slots:
    void scrollXChanged(int scrollPositionX);
    void scrollYChanged(int scrollPositionY);
    void zoomHorIn();
    void zoomHorOut();
    void zoomVerIn();
    void zoomVerOut();
    void zoomStd();
    void timeMsChanged(int ms, bool ignoreLocked = false);
    void registerRelayout();
    void calcSizes();
    void takeKeyPressEvent(QKeyEvent* event);
    void takeKeyReleaseEvent(QKeyEvent* event);
    void setDiv(int div);
    int div();

  signals:
    void sizeChanged(int maxScrollTime, int maxScrollLine, int valueX,
                     int valueY);
    void objectListChanged();
    void scrollChanged(int startMs, int maxMs, int startLine, int maxLine);

  protected:
    void paintEvent(QPaintEvent* event);
    void mouseMoveEvent(QMouseEvent* event);
    void resizeEvent(QResizeEvent* event);
    void enterEvent(QEvent* event);
    void leaveEvent(QEvent* event);
    void mousePressEvent(QMouseEvent* event);
    void mouseDoubleClickEvent(QMouseEvent* /*event*/);
    void mouseReleaseEvent(QMouseEvent* event);
    void keyPressEvent(QKeyEvent* e);
    void keyReleaseEvent(QKeyEvent* event);
    void wheelEvent(QWheelEvent* event);

  private:
    void pianoEmulator(QKeyEvent*);
    void paintChannel(QPainter* painter, int channel);
    void paintPianoKey(QPainter* painter, int number, int x, int y,
                       int width, int height);

    bool _isPianoEmulationEnabled = true;

    int startTick, endTick, startTimeX, endTimeX, startLineY, endLineY,
        lineNameWidth, timeHeight, msOfFirstEventInList;
    double scaleX, scaleY;
    MidiFile* file;

    QRectF ToolArea, PianoArea, TimeLineArea, TimeLineArea2,
        TimeLineArea3, TimeLineArea4;
    bool screen_locked;
    // pixmap is the painted widget (without tools and cursorLines).
    // it will be zero if it needs to be repainted
    QPixmap* pixmap;

    // saves all TempoEvents from one before the first shown tick to the
    // last in the window
    QList<MidiEvent*>* currentTempoEvents;
    QList<TimeSignatureEvent*>* currentTimeSignatureEvents;

    // All Events to show in the velocityWidget are saved in velocityObjects
    QList<MidiEvent *> *objects, *velocityObjects;
    QList<QPair<int, int> > currentDivs;

    // To play the pianokeys, there is one NoteOnEvent
    NoteOnEvent* pianoEvent;

    bool _colorsByChannels;
    int _div;

    QMap<int, QRect> pianoKeys;

    //here num 0 is key E.
    static const unsigned sharp_strip_mask = (1 << 4) | (1 << 6) | (1 << 9) | (1 << 11) | (1 << 1);

};


#endif
