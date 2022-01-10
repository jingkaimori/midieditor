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

#include "SelectTool.h"
#include "../MidiEvent/MidiEvent.h"
#include "../MidiEvent/NoteOnEvent.h"
#include "../MidiEvent/SysExEvent.h"
#include "../gui/MatrixWidget.h"
#include "../midi/MidiFile.h"
#include "StandardTool.h"

SelectTool::SelectTool(int type)
    : EventTool() {
    stool_type = type;
    x_rect = 0;
    y_rect = 0;
    x_rect2 = 0;
    y_rect2 = 0;
    switch (stool_type) {
    case SELECTION_TYPE_BOX: {
        setImage(":/run_environment/graphics/tool/select_box.png");
        setToolTipText(QObject::tr("Select Events (Box)"));
        break;
    }
    case SELECTION_TYPE_BOX2: {
        setImage(":/run_environment/graphics/tool/select_box2.png");
        setToolTipText(QObject::tr("Select Events using lines (Box)"));
        break;
    }
    case SELECTION_TYPE_BOX3: {
        setImage(":/run_environment/graphics/tool/select_box3.png");
        setToolTipText(QObject::tr("Select Events using lines from/to current cursor (Box)"));
        break;
    }
    case SELECTION_TYPE_SINGLE: {
        setImage(":/run_environment/graphics/tool/select_single.png");
        setToolTipText(QObject::tr("Select single Events"));
        break;
    }
    case SELECTION_TYPE_LEFT: {
        setImage(":/run_environment/graphics/tool/select_left.png");
        setToolTipText(QObject::tr("Select all Events on the left side"));
        break;
    }
    case SELECTION_TYPE_RIGHT: {
        setImage(":/run_environment/graphics/tool/select_right.png");
        setToolTipText(QObject::tr("Select all Events on the right side"));
        break;
    }
    case SELECTION_TYPE_CURSOR: {
        setImage(":/run_environment/graphics/tool/select_cursor.png");
        setToolTipText(QObject::tr("Select all Events from/to the current cursor"));
        break;
    }
    }
}

SelectTool::SelectTool(SelectTool& other)
    : EventTool(other) {
    stool_type = other.stool_type;
    x_rect = 0;
    y_rect = 0;
    x_rect2 = 0;
    y_rect2 = 0;
}

void SelectTool::draw(QPainter* painter) {
    paintSelectedEvents(painter);
    if (stool_type == SELECTION_TYPE_BOX && (x_rect || y_rect)) {
        painter->setPen(Qt::gray);
        painter->setBrush(QColor(0, 0, 0, 100));
        painter->drawRect(x_rect, y_rect, mouseX - x_rect, mouseY - y_rect);
    } else if ((stool_type == SELECTION_TYPE_BOX2 || stool_type == SELECTION_TYPE_BOX3) && (x_rect2 || y_rect2)) {
        if(stool_type == SELECTION_TYPE_BOX2) {
            painter->setPen(Qt::gray);
            painter->setBrush(QColor(0, 0, 0, 100));
            painter->drawRect(0, y_rect2, matrixWidget->width() - 1, mouseY - y_rect2);
        } else if (mouseIn) {
            painter->setPen(Qt::black);
            painter->setPen(Qt::gray);
            painter->setBrush(QColor(0, 0, 0, 100));

            int tick = file()->tick(matrixWidget->msOfXPos(mouseX));
            int xx = matrixWidget->xPosOfMs(matrixWidget->msOfTick(file()->cursorTick()));
            if(file()->cursorTick()<tick) painter->drawRect(xx, y_rect2, mouseX-xx, mouseY - y_rect2);
            else painter->drawRect(mouseX, y_rect2, xx-mouseX, mouseY - y_rect2);

        }
    } else if (stool_type == SELECTION_TYPE_RIGHT || stool_type == SELECTION_TYPE_LEFT || stool_type == SELECTION_TYPE_CURSOR) {
        if (mouseIn) {
            painter->setPen(Qt::black);
            painter->setPen(Qt::gray);
            painter->setBrush(QColor(0, 0, 0, 100));
            if (stool_type == SELECTION_TYPE_CURSOR) {
                int tick = file()->tick(matrixWidget->msOfXPos(mouseX));
                int xx = matrixWidget->xPosOfMs(matrixWidget->msOfTick(file()->cursorTick()));
                if(file()->cursorTick()<tick) painter->drawRect(xx, 0, mouseX-xx, matrixWidget->height() - 1);
                 else painter->drawRect(mouseX, 0, xx-mouseX/*matrixWidget->width() - 1*/, matrixWidget->height() - 1);

            } else
            if (stool_type == SELECTION_TYPE_LEFT) {
                painter->drawRect(0, 0, mouseX, matrixWidget->height() - 1);
            } else {
                painter->drawRect(mouseX, 0, matrixWidget->width() - 1, matrixWidget->height() - 1);
            }
        }
    }
}

bool SelectTool::press(bool leftClick) {
    Q_UNUSED(leftClick);

    y_rect=0;
    x_rect=0;
    y_rect2=0;
    x_rect2=0;

    if (stool_type == SELECTION_TYPE_BOX) {
        y_rect = mouseY;
        x_rect = mouseX;
    } else if (stool_type == SELECTION_TYPE_BOX2 || stool_type == SELECTION_TYPE_BOX3) {
        y_rect2 = mouseY;
        x_rect2 = mouseX;
    }


    return true;
}

bool SelectTool::release() {

    if (!file()) {
        return false;
    }
    //file()->protocol()->startNewAction(QObject::tr("Selection changed"), image());
    ProtocolEntry* toCopy = copy();

    if (!QApplication::keyboardModifiers().testFlag(Qt::ShiftModifier) && !QApplication::keyboardModifiers().testFlag(Qt::ControlModifier)) {
        clearSelection();
    }

    if (stool_type == SELECTION_TYPE_BOX || stool_type == SELECTION_TYPE_SINGLE) {
        int x_start, y_start, x_end, y_end;
        if (stool_type == SELECTION_TYPE_BOX) {
            x_start = x_rect;
            y_start = y_rect;
            x_end = mouseX;
            y_end = mouseY;
            if (x_start > x_end) {
                int tmp = x_start;
                x_start = x_end;
                x_end = tmp;
            }
            if (y_start > y_end) {
                int tmp = y_start;
                y_start = y_end;
                y_end = tmp;
            }
        } else if (stool_type == SELECTION_TYPE_SINGLE) {

            x_start = mouseX;
            y_start = mouseY;
            x_end = mouseX + 1;
            y_end = mouseY + 1;
        }
        foreach (MidiEvent* event, *(matrixWidget->activeEvents())) {
            SysExEvent* sys = dynamic_cast<SysExEvent*>(event);

            if(sys) {
                QByteArray c = sys->data();
                if(c[1]== (char) 0x66 && c[2]==(char) 0x66 && c[3]=='V') continue;
            }
            if (inRect(event, x_start, y_start, x_end, y_end)) {
                selectEvent(event, false);
            }
        }
    } else if (stool_type == SELECTION_TYPE_RIGHT || stool_type == SELECTION_TYPE_LEFT || stool_type == SELECTION_TYPE_CURSOR) {
        int tick = file()->tick(matrixWidget->msOfXPos(mouseX));
        int start = 0, end = tick;
        if (stool_type == SELECTION_TYPE_LEFT) {

        } else if (stool_type == SELECTION_TYPE_RIGHT) {
            end = file()->endTick();
            start = tick;
        } else if (stool_type == SELECTION_TYPE_CURSOR) {
            if(file()->cursorTick() < tick){
                start = file()->cursorTick();
            }
            else {
                end = file()->cursorTick();
                start = tick;
            }
        }
        foreach (MidiEvent* event, *(file()->eventsBetween(start, end))) {
            SysExEvent* sys = dynamic_cast<SysExEvent*>(event);

            if(sys) {
                QByteArray c = sys->data();
                if(c[1]== (char) 0x66 && c[2]==(char) 0x66 && c[3]=='V') continue;
            }
            selectEvent(event, false);
        }
    } else if (stool_type == SELECTION_TYPE_BOX2 || stool_type == SELECTION_TYPE_BOX3) {

        int start=0, end = file()->endTick();
        if(stool_type == SELECTION_TYPE_BOX3) {
            int tick = file()->tick(matrixWidget->msOfXPos(mouseX));
            if(file()->cursorTick() < tick){
                start = file()->cursorTick();
                end = tick;
            }
            else {
                end = file()->cursorTick();
                start = tick;
            }
        }
        int l_start = matrixWidget->lineAtY(y_rect2);
        int l_end = matrixWidget->lineAtY(mouseY);

        if (l_start > l_end) {
            int tmp = l_start;
            l_start = l_end;
            l_end = tmp;
        }

        foreach (MidiEvent* event, *(file()->eventsBetween(start, end))) {
            SysExEvent* sys = dynamic_cast<SysExEvent*>(event);

            if(sys) {
                QByteArray c = sys->data();
                if(c[1]== (char) 0x66 && c[2]==(char) 0x66 && c[3]=='V') continue;
            }
            if(event->line() >= l_start && event->line() <= l_end)
            selectEvent(event, false);
        }

    }

    x_rect = 0;
    y_rect = 0;
    x_rect2 = 0;
    y_rect2 = 0;

    protocol(toCopy, this);
    if (_standardTool) {
        Tool::setCurrentTool(_standardTool);
        _standardTool->move(mouseX, mouseY);
        _standardTool->release();
    }
    return true;
}

bool SelectTool::inRect(MidiEvent* event, int x_start, int y_start, int x_end, int y_end) {
    return pointInRect(event->x(), event->y(), x_start, y_start, x_end, y_end) || pointInRect(event->x(), event->y() + event->height(), x_start, y_start, x_end, y_end) || pointInRect(event->x() + event->width(), event->y(), x_start, y_start, x_end, y_end) || pointInRect(event->x() + event->width(), event->y() + event->height(), x_start, y_start, x_end, y_end) || pointInRect(x_start, y_start, event->x(), event->y(), event->x() + event->width(), event->y() + event->height());
}

bool SelectTool::move(int mouseX, int mouseY) {
    EditorTool::move(mouseX, mouseY);
    return true;
}

ProtocolEntry* SelectTool::copy() {
    return new SelectTool(*this);
}

void SelectTool::reloadState(ProtocolEntry* entry) {
    SelectTool* other = dynamic_cast<SelectTool*>(entry);
    if (!other) {
        return;
    }
    EventTool::reloadState(entry);
    x_rect = 0;
    y_rect = 0;
    stool_type = other->stool_type;
}

bool SelectTool::releaseOnly() {
    return release();
}

bool SelectTool::showsSelection() {
    return true;
}
