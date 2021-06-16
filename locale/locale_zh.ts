<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>AboutDialog</name>
    <message>
        <location filename="../src/gui/AboutDialog.cpp" line="37"/>
        <source>About</source>
        <translation>关于MidiEditor</translation>
    </message>
</context>
<context>
    <name>AdditionalMidiSettingsWidget</name>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="38"/>
        <source>Additional Midi Settings</source>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="45"/>
        <source>Default ticks per quarter note:</source>
        <translation>四分音符的tick数：</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="53"/>
        <source>Note: There aren&apos;t many reasons to change this. MIDI files have a resolution for how many ticks can fit in a quarter note. Higher values = more detail. Lower values may be required for compatibility. Only affects new files.</source>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="58"/>
        <source>Manually stop notes</source>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="64"/>
        <source>Note: the above option should not be enabled in general. It is only required if the stop button does not stop playback as expected (e.g. when some notes are not stopped correctly).</source>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="69"/>
        <source>Metronome loudness:</source>
        <translation>节拍器音量：</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="79"/>
        <source>Start command:</source>
        <translation>启动前运行：</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="83"/>
        <source>The start command can be used to start additional software components (e.g. Midi synthesizers) each time, MidiEditor is started. You can see the output of the started software / script in the field below.</source>
    </message>
</context>
<context>
    <name>AutomaticUpdateDialog</name>
    <message>
        <location filename="../src/gui/AutomaticUpdateDialog.cpp" line="42"/>
        <source>Note</source>
     </message>
    <message>
        <location filename="../src/gui/AutomaticUpdateDialog.cpp" line="53"/>
        <source>&lt;html&gt;&lt;body&gt;&lt;h3&gt;Enable Automatic Checking for Updates?&lt;/h3&gt;&lt;p&gt;Click below to enable or disable automatic checking for updates. &lt;/p&gt;&lt;p&gt;You can enable this option now, or later by navigating to Edit - Settings - Updates in the menu bar. You can always update your preference in that very same Settings page.&lt;/p&gt;&lt;p&gt;&lt;p&gt;&lt;b&gt;Privacy Note&lt;/b&gt;&lt;/p&gt;&lt;p&gt;When checking for updates, MidiEditor transmits your IP address as well as the currently installed version of MidiEditor and you operating system to a server which is located within the European Union.&lt;/p&gt;&lt;p&gt;Please read our privacy policy at &lt;a href=&quot;https://www.midieditor.org/updates-privacy&quot;&gt;www.midieditor.org/updates-privacy&lt;/a&gt; for further information.&lt;/p&gt;&lt;p&gt;By enabling the option, you confirm that you have read and understood the terms under which MidiEditor provides this service and that you agree to them.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
    </message>
    <message>
        <location filename="../src/gui/AutomaticUpdateDialog.cpp" line="99"/>
        <source>No, thanks!</source>
        <translation>不检查更新</translation>
    </message>
    <message>
        <location filename="../src/gui/AutomaticUpdateDialog.cpp" line="103"/>
        <source>Yes, enable checks</source>
        <translation>自动检查更新</translation>
    </message>
</context>
<context>
    <name>ChannelListItem</name>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="48"/>
        <source>Channel </source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="50"/>
        <source>General Events</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="56"/>
        <source>none</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="67"/>
        <source>Channel visible</source>
     </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="75"/>
        <location filename="../src/gui/ChannelListWidget.cpp" line="117"/>
        <source>Channel audible</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="82"/>
        <source>Solo mode</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="91"/>
        <source>Select instrument</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="104"/>
        <source>Hide channel</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="106"/>
        <source>Show channel</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="115"/>
        <source>Mute channel</source>
    </message>
    <message>
        <location filename="../src/gui/ChannelListWidget.cpp" line="144"/>
        <source>Events affecting all channels</source>
    </message>
</context>
<context>
    <name>CompleteMidiSetupDialog</name>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="32"/>
        <source>No Sound?</source>
        <translation>没有听到声音？</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="41"/>
        <source>&lt;h1&gt;Complete MIDI Setup&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;完成MIDI设置&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="45"/>
        <source>It appears that you did not complete your midi setup!</source>
        <translation>您未完成MIDI设置</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="52"/>
        <source>&lt;h3&gt;Output is not connected&lt;/h3&gt;&lt;p&gt;In order to play your music, you have to connect MidiEditor to a midi device (on your computer or externally) which can play your sounds.&lt;/br&gt;&lt;/p&gt;</source>
        <translation>&lt;h3&gt;未连接输出设备&lt;/h3&gt;&lt;p&gt;您需要将Midieditor与电脑自带或外置Midi播放设备连接，才能播放音乐。&lt;/br&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="60"/>
        <source>&lt;h3&gt;Input is not connected&lt;/h3&gt;&lt;p&gt;In order to record music, MidiEditor must be connected to a midi device that you will record music on.&lt;/br&gt;&lt;/p&gt;</source>
        <translation>&lt;h3&gt;未连接输入设备&lt;/h3&gt;&lt;p&gt;您需要将Midieditor与Midi录制设备连接，才能录制音乐。&lt;/br&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="67"/>
        <source>&lt;p&gt;Please refer to the manual for further instructions.&lt;p/&gt;</source>
        <translation>&lt;p&gt;查阅手册以获取更多信息&lt;p/&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/CompleteMidiSetupDialog.cpp" line="88"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>DonateDialog</name>
    <message>
        <location filename="../src/gui/DonateDialog.cpp" line="31"/>
        <source>Donate</source>
        <translation>捐赠</translation>
    </message>
    <message>
        <location filename="../src/gui/DonateDialog.cpp" line="40"/>
        <source>&lt;h1&gt;Donate&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;捐赠&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/DonateDialog.cpp" line="44"/>
        <source>Please read the developer&apos;s note below</source>
        <translation>请阅读下面的开发者注记：</translation>
    </message>
    <message>
        <location filename="../src/gui/DonateDialog.cpp" line="49"/>
        <source>&lt;html&gt;&lt;body&gt;&lt;h3&gt;Reasons to donate&lt;/h3&gt;&lt;p&gt;Dear User,&lt;br&gt;I offer MidiEditor for free and I hope you enjoy it. Please note that I developed the editor during my spare time and that I&apos;ve been working on it for more than four years by now! If MidiEditor is useful for you, please send me a little donation so that I can at least cover my huge coffee-bill ;)  &lt;br&gt;&lt;/p&gt;&lt;h3&gt;How to donate&lt;/h3&gt;&lt;p&gt;Donating is very simple - and secure. Please visit the &quot;Donate&quot; section at the editor&apos;s project page in order to make a donation.&lt;br&gt;&lt;a href=&quot;https://midieditor.org/donate&quot;&gt;https://midieditor.org/donate&lt;/a&gt;&lt;/p&gt;&lt;h3&gt;Thank you!&lt;/h3&gt;&lt;p&gt;Your donation will help me to maintain and update MidiEditor.&lt;/p&gt;&lt;h3&gt;Other ways to Contribute&lt;/h3&gt;&lt;p&gt;&lt;a href=&quot;https://github.com/markusschwenk/midieditor&quot;&gt;Rate MidiEditor and provide feedback&lt;/a&gt; to let me and other users know about how you liked the software!&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translatorcomment>translate.google.com</translatorcomment>
        <translation>&lt;html&gt; &lt;body&gt; &lt;h3&gt; Причины для пожертвования &lt;/h3&gt; &lt;p&gt; Уважаемый пользователь, &lt;br&gt; Я предлагаю MidiEditor бесплатно и надеюсь, вам понравится. Обратите внимание, что я разрабатывал редактор в свободное время и работаю над ним уже более четырех лет! Если MidiEditor полезен для вас, пожалуйста, пришлите мне небольшое пожертвование, чтобы я мог хотя бы покрыть мой огромный счет за кофе;) &lt;br&gt; &lt;/p&gt; &lt;h3&gt; Как сделать пожертвование &lt;/h3&gt; &lt;p&gt; Пожертвование очень просто - и безопасно. Пожалуйста, посетите раздел «Пожертвования» на странице проекта редактора, чтобы сделать пожертвование. &lt;br&gt; &lt;a href=&quot;https://midieditor.org/donate&quot;&gt; https://midieditor.org/donate&lt;/a &gt; &lt;/p&gt; &lt;h3&gt; Спасибо! &lt;/h3&gt; &lt;p&gt; Ваше пожертвование поможет мне поддерживать и обновлять MidiEditor. &lt;/p&gt; &lt;h3&gt; Другие способы внести свой вклад &lt;/h3&gt; &lt;p&gt; &lt;a href = &quot;https://github.com/markusschwenk/midieditor&quot;&gt; Оцените MidiEditor и оставьте отзыв &lt;/a&gt;, чтобы сообщить мне и другим пользователям о том, как вам понравилось программное обеспечение! &lt;/p&gt; &lt;/body&gt; &lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/DonateDialog.cpp" line="89"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>EventWidget</name>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="589"/>
        <location filename="../src/gui/EventWidget.cpp" line="632"/>
        <source>Property</source>
        <translation>属性</translation>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="590"/>
        <location filename="../src/gui/EventWidget.cpp" line="633"/>
        <location filename="../src/gui/EventWidget.cpp" line="813"/>
        <location filename="../src/gui/EventWidget.cpp" line="819"/>
        <location filename="../src/gui/EventWidget.cpp" line="825"/>
        <location filename="../src/gui/EventWidget.cpp" line="843"/>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="649"/>
        <location filename="../src/gui/EventWidget.cpp" line="861"/>
        <location filename="../src/gui/EventWidget.cpp" line="871"/>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="763"/>
        <location filename="../src/gui/EventWidget.cpp" line="803"/>
        <source>Midi Event</source>
        <translation>Midi 事件</translation>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="766"/>
        <source>Channel Pressure Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="769"/>
        <source>Control Change Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="772"/>
        <source>Key Pressure Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="775"/>
        <source>Key Signature Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="778"/>
        <source>Note On/Off Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="781"/>
        <source>Pitch Bend Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="784"/>
        <source>Program Change Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="787"/>
        <source>Sysex Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="790"/>
        <source>Temo Change Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="793"/>
        <source>Text Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="796"/>
        <source>Time Signature Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="799"/>
        <source>Unknown Event</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="809"/>
        <source>On Tick</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="814"/>
        <location filename="../src/gui/EventWidget.cpp" line="820"/>
        <location filename="../src/gui/EventWidget.cpp" line="826"/>
        <location filename="../src/gui/EventWidget.cpp" line="838"/>
        <location filename="../src/gui/EventWidget.cpp" line="844"/>
        <location filename="../src/gui/EventWidget.cpp" line="849"/>
        <source>Channel</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="818"/>
        <source>Control</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="824"/>
        <location filename="../src/gui/EventWidget.cpp" line="836"/>
        <source>Note</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="830"/>
        <source>Key</source>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="834"/>
        <source>Off Tick</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="835"/>
        <source>Duration</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="837"/>
        <source>Velocity</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="848"/>
        <source>Program</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="853"/>
        <location filename="../src/gui/EventWidget.cpp" line="872"/>
        <source>Data</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="857"/>
        <source>Tempo</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="862"/>
        <source>Text</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="866"/>
        <source>Numerator</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="867"/>
        <source>Denominator</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="876"/>
        <source>Track</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="905"/>
        <source>Track </source>
    </message>
</context>
<context>
    <name>EventWidgetDelegate</name>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="325"/>
        <source>Edited </source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="530"/>
        <source>The entered type refers to known Meta Event (</source>
    </message>
    <message>
        <location filename="../src/gui/EventWidget.cpp" line="547"/>
        <source>The data must not contain byte 0xF7 (End of SysEx)</source>
    </message>
</context>
<context>
    <name>FileLengthDialog</name>
    <message>
        <location filename="../src/gui/FileLengthDialog.cpp" line="31"/>
        <source>File duration (ms): </source>
        <translation>文件播放时间（毫秒）：</translation>
    </message>
    <message>
        <location filename="../src/gui/FileLengthDialog.cpp" line="36"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/gui/FileLengthDialog.cpp" line="38"/>
        <source>Accept</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../src/gui/FileLengthDialog.cpp" line="49"/>
        <source>File duration</source>
        <translation>文件播放时间</translation>
    </message>
    <message>
        <location filename="../src/gui/FileLengthDialog.cpp" line="53"/>
        <source>Change file duration</source>
        <translation>修改文件持续时间</translation>
    </message>
</context>
<context>
    <name>InstrumentChooser</name>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="39"/>
        <source>Choose Instrument for Channel </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="41"/>
        <source>Instrument: </source>
        <translation>乐器</translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="48"/>
        <source>&lt;b&gt;Warning:&lt;/b&gt; this will edit the event at tick 0 of the file.&lt;br&gt;If there is a Program Change Event after this tick,&lt;br&gt;the instrument selected there will be audible!&lt;br&gt;If you want all other Program Change Events to be&lt;br&gt;removed, select the box below.</source>
        <translatorcomment>Particaly translate.google.com</translatorcomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="54"/>
        <source>Remove other Program Change Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="56"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="58"/>
        <source>Accept</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../src/gui/InstrumentChooser.cpp" line="93"/>
        <source>Edited instrument for channel</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="351"/>
        <source>Add track</source>
        <translation>添加 track</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="359"/>
        <location filename="../src/gui/MainWindow.cpp" line="1785"/>
        <source>All tracks audible</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="365"/>
        <location filename="../src/gui/MainWindow.cpp" line="1774"/>
        <source>Mute all tracks</source>
        <translation>静音所有 tracks</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="373"/>
        <location filename="../src/gui/MainWindow.cpp" line="1796"/>
        <source>Show all tracks</source>
        <translation>显示所有 tracks</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="379"/>
        <location filename="../src/gui/MainWindow.cpp" line="1807"/>
        <source>Hide all tracks</source>
        <translation>隐藏所有 tracks</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="391"/>
        <source>Tracks</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="401"/>
        <location filename="../src/gui/MainWindow.cpp" line="1118"/>
        <source>All channels audible</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="407"/>
        <location filename="../src/gui/MainWindow.cpp" line="1107"/>
        <source>Mute all channels</source>
        <translation>静音所有 channel</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="415"/>
        <source>Show all channels</source>
        <translation>显示所有 channel</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="421"/>
        <location filename="../src/gui/MainWindow.cpp" line="1140"/>
        <source>Hide all channels</source>
        <translation>隐藏所有 channel</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="431"/>
        <source>Channels</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="441"/>
        <source>Protocol</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="446"/>
        <source>Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="454"/>
        <source>Add new events to ...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="456"/>
        <source>Channel: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="460"/>
        <source>Channel </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="465"/>
        <source>Track: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="748"/>
        <source>Information</source>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="748"/>
        <source>No events recorded.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="923"/>
        <location filename="../src/gui/MainWindow.cpp" line="978"/>
        <source>Channels/Tracks mute</source>
        <translation>静音 Channels/Tracks</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="924"/>
        <location filename="../src/gui/MainWindow.cpp" line="979"/>
        <source>One or more channels/tracks are not audible. They will be audible in the saved file.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="925"/>
        <location filename="../src/gui/MainWindow.cpp" line="980"/>
        <source>Save file</source>
        <translation>保存文件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="929"/>
        <location filename="../src/gui/MainWindow.cpp" line="988"/>
        <location filename="../src/gui/MainWindow.cpp" line="1071"/>
        <location filename="../src/gui/MainWindow.cpp" line="1084"/>
        <location filename="../src/gui/MainWindow.cpp" line="1745"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="929"/>
        <location filename="../src/gui/MainWindow.cpp" line="988"/>
        <source>The file could not be saved. Please make sure that the destination directory exists and that you have the correct access rights to write into this directory.</source>
        <translation>无法保存文件，请确认您保存文件的目录存在，而且您可以写入这个目录。</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="949"/>
        <source>Save file as...</source>
        <translation>另存为...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <source>Save file?</source>
        <translation>保存文件？</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <source>Save file </source>
        <translation>保存文件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <source> before closing?</source>
        <translation>在关闭之前？</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <location filename="../src/gui/MainWindow.cpp" line="2144"/>
        <source>Save</source>
        <translation>保存</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <source>Close without saving</source>
        <translation>丢弃更改并退出程序</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="997"/>
        <location filename="../src/gui/MainWindow.cpp" line="1037"/>
        <location filename="../src/gui/MainWindow.cpp" line="1153"/>
        <location filename="../src/gui/MainWindow.cpp" line="1247"/>
        <location filename="../src/gui/MainWindow.cpp" line="1527"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1024"/>
        <source>Open file</source>
        <translation>打开文件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1025"/>
        <source>MIDI Files(*.mid *.midi);;All Files(*)</source>
        <translation>MIDI 文件(*.mid *.midi);;所有文件(*)</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1071"/>
        <source>The file [</source>
        <translation>文件[</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1071"/>
        <source>]does not exist!</source>
        <translation>]不存在！</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1084"/>
        <source>The file is damaged and cannot be opened. </source>
        <translation>文件损坏或格式不正确，Midieditor无法打开文件 </translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1129"/>
        <source>All channels visible</source>
        <translation>所有Channel可见</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1275"/>
        <source> - Untitled Document[*]</source>
        <translation> - 未命名文档[*]</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1288"/>
        <source>Scalefactor</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1289"/>
        <source>Scalefactor:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1299"/>
        <location filename="../src/gui/MainWindow.cpp" line="2543"/>
        <source>Scale events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1322"/>
        <location filename="../src/gui/MainWindow.cpp" line="2418"/>
        <source>Align left</source>
        <translation>左对齐</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1350"/>
        <location filename="../src/gui/MainWindow.cpp" line="2425"/>
        <source>Align right</source>
        <translation>右对齐</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1383"/>
        <source>Equalize</source>
        <translation>分散对齐</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1407"/>
        <source>Remove event(s)</source>
        <translation>移除事件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1424"/>
        <source>Remove all events from channel </source>
        <translation>移除该 Channel 内的所有事件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1445"/>
        <source>Move selected events to channel </source>
        <translation>将已选事件移动至该 Channel 内</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1471"/>
        <source>Move selected events to track </source>
        <translation>将已选事件移动至该 Track 内</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1614"/>
        <location filename="../src/gui/MainWindow.cpp" line="1634"/>
        <source>Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1630"/>
        <location filename="../src/gui/MainWindow.cpp" line="2257"/>
        <source>Same as selected for new events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1632"/>
        <source>Keep track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1655"/>
        <source>Mute channel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1665"/>
        <source>Select solo channel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1678"/>
        <source>Channel visibility changed</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1713"/>
        <source>Edit Track Name</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1716"/>
        <location filename="../src/gui/MainWindow.cpp" line="1756"/>
        <source>Set Track Name</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1717"/>
        <source>Track name (Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1738"/>
        <source>Remove track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1745"/>
        <source>The selected track can&apos;t be removed!
 It&apos;s the last track of the file.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1757"/>
        <source>Track name (New Track)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1758"/>
        <source>New Track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1818"/>
        <source>Show track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="1829"/>
        <source>Mute track</source>
        <translation></translation>
    </message>
    <message>
        <source>Select all events from channel </source>
        <translation type="vanished">Выбрать все события на канале </translation>
    </message>
    <message>
        <source>Select all events from track </source>
        <translation type="vanished">Выбрать все события на дорожке </translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2179"/>
        <source>Select all</source>
        <translation>全选</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2000"/>
        <source>Set spread-time</source>
        <translation>设置持续时间</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2001"/>
        <source>Spread time [ms]</source>
        <translation>持续时间 [毫秒]</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2016"/>
        <source>Spread events</source>
        <translation>Распространение событий</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2064"/>
        <source>Spreading done</source>
        <translation>Распространено</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2064"/>
        <source>Spreaded </source>
        <translation>Распространено</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2064"/>
        <source> events</source>
        <translation> событий</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2089"/>
        <source>Note: </source>
        <translation>Учтите: </translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2114"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2115"/>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2116"/>
        <source>Tools</source>
        <translation>工具</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2117"/>
        <source>View</source>
        <translation>视图</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2118"/>
        <location filename="../src/gui/MainWindow.cpp" line="2847"/>
        <source>Playback</source>
        <translation>回放</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2119"/>
        <source>Midi</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2120"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2123"/>
        <source>New</source>
        <translation>新建</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2129"/>
        <location filename="../src/gui/MainWindow.cpp" line="2830"/>
        <source>Open...</source>
        <translation>打开...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2135"/>
        <source>Open recent..</source>
        <translation>最近打开的文件...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2150"/>
        <source>Save as...</source>
        <translation>另存为...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2158"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2165"/>
        <source>Undo</source>
        <translation>撤销</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2171"/>
        <source>Redo</source>
        <translation>重做</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2180"/>
        <source>Select all visible events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2185"/>
        <source>Select all events from channel...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2196"/>
        <source>Select all events from track...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2231"/>
        <source>Copy events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2238"/>
        <location filename="../src/gui/MainWindow.cpp" line="2885"/>
        <source>Paste events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2239"/>
        <location filename="../src/gui/MainWindow.cpp" line="2886"/>
        <source>Paste events at cursor position</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2244"/>
        <source>Paste to track...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2245"/>
        <source>Paste to channel...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2246"/>
        <source>Paste options...</source>
        <translation>粘贴选项...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2260"/>
        <source>Keep channel</source>
        <translatorcomment>??</translatorcomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2275"/>
        <location filename="../src/gui/MainWindow.cpp" line="2783"/>
        <source>Settings...</source>
        <translation>设置...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2281"/>
        <source>Current tool...</source>
        <translation>当前工具...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2408"/>
        <source>Remove events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2410"/>
        <source>Remove selected events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2432"/>
        <source>Equalize selection</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2441"/>
        <source>Quantify selection</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2448"/>
        <source>Quantization fractions</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2457"/>
        <location filename="../src/gui/MainWindow.cpp" line="2631"/>
        <source>Whole note</source>
        <translation>全音符</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2459"/>
        <location filename="../src/gui/MainWindow.cpp" line="2633"/>
        <source>Half note</source>
        <translation>二分音符</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2461"/>
        <location filename="../src/gui/MainWindow.cpp" line="2635"/>
        <source>Quarter note</source>
        <translation>四分音符</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2463"/>
        <location filename="../src/gui/MainWindow.cpp" line="2637"/>
        <source>th note</source>
        <translation>分音符</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2476"/>
        <source>Quantify tuplet...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2482"/>
        <source>Repeat tuplet quantization</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2490"/>
        <source>Spread selection</source>
        <translatorcomment>?</translatorcomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2497"/>
        <source>Add track...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2503"/>
        <source>Remove events from channel...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2514"/>
        <source>Move events to channel...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2525"/>
        <source>Move events to track...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2531"/>
        <source>Transpose selection...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2539"/>
        <source>Set file duration</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2550"/>
        <source>Magnet</source>
        <translation>吸附</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2560"/>
        <source>Zoom...</source>
        <translation>缩放...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2561"/>
        <source>Horizontal out</source>
        <translation>- 水平缩小</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2568"/>
        <source>Horizontal in</source>
        <translation>+ 水平放大</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2575"/>
        <source>Vertical out</source>
        <translation>- 垂直缩小</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2582"/>
        <source>Vertical in</source>
        <translation>+ 垂直放大</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2591"/>
        <source>Restore default</source>
        <translation>还原默认</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2608"/>
        <source>Colors ...</source>
        <translation>颜色...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2609"/>
        <source>From channels</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2614"/>
        <source>From tracks</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2623"/>
        <source>Raster</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2629"/>
        <source>Off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2659"/>
        <source>Play</source>
        <translation>播放</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2664"/>
        <source>Pause</source>
        <translation>暂停</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2674"/>
        <source>Record</source>
        <translation>录制</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2680"/>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2687"/>
        <source>Back to begin</source>
        <translation>返回开头</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2697"/>
        <source>Previous measure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2706"/>
        <source>Next measure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2733"/>
        <source>Playback speed...</source>
        <translation>回放速度...</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2768"/>
        <source>Lock screen while playing</source>
        <translation>回放时锁定视图</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2775"/>
        <source>Metronome</source>
        <translation>节拍器</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2788"/>
        <source>Connect Midi In/Out</source>
        <translation>连接 Midi 输入/输出设备</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2797"/>
        <source>Midi panic</source>
        <translation>Midi 故障</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2804"/>
        <source>Manual</source>
        <translation>手册</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2808"/>
        <source>About MidiEditor</source>
        <translation>关于 MidiEditor</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2812"/>
        <source>Donate</source>
        <translation>捐赠</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2968"/>
        <location filename="../src/gui/MainWindow.cpp" line="2970"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="2997"/>
        <source>Quantify events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MainWindow.cpp" line="3068"/>
        <source>Quantify tuplet</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>MatrixWidget</name>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="361"/>
        <source>Measure </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="424"/>
        <source>Control Change</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="428"/>
        <source>Tempo Change</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="432"/>
        <source>Time Signature</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="436"/>
        <source>Key Signature.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="440"/>
        <source>Program Change</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="444"/>
        <source>Key Pressure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="448"/>
        <source>Channel Pressure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="452"/>
        <source>Text</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="456"/>
        <source>Pitch Bend</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="460"/>
        <source>System Exclusive</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MatrixWidget.cpp" line="464"/>
        <source>(Unknown)</source>
        <translation>（未知）</translation>
    </message>
</context>
<context>
    <name>MidiFile</name>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="60"/>
        <source>Tempo Track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="65"/>
        <source>New Instrument</source>
        <translation>添加新乐器</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="99"/>
        <source>File opened</source>
        <translation>已打开的文件</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="106"/>
        <source>Error: File could not be opened.</source>
        <translation>错误：无法打开文件</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="140"/>
        <source>Error: Bad format in file header (Expected MThd).</source>
        <translation>错误：文件头不正确（应为MThd）</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="165"/>
        <source>Error: MThdTrackLength wrong (expected 6).</source>
        <translation>错误：文件头长度不正确（应为6个字节）</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="172"/>
        <source>Error: MidiFormat v. 2 cannot be loaded with this Editor.</source>
        <translation>错误：此编辑器不支持 MidiFormat v. 2</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="189"/>
        <source>Error in Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="196"/>
        <source>Warning: found OnEvent without OffEvent (line </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="196"/>
        <source>) - removing...</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="209"/>
        <source>Error: Bad format in track header (Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="209"/>
        <source>, Expected MTrk).</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="260"/>
        <source>Warning: detected offEvent without prior onEvent. Skipping!</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="295"/>
        <source>Error: track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="295"/>
        <source>not ended as expected. </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="304"/>
        <source>Warning: no TimeSignatureEvent detected at tick 0. Adding default value.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="669"/>
        <source>Acoustic Grand Piano</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="672"/>
        <source>Bright Acoustic Piano</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="675"/>
        <source>Electric Grand Piano</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="678"/>
        <source>Honky-tonk Piano</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="681"/>
        <source> Electric Piano 1</source>
        <translation>电钢琴1</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="684"/>
        <source>Electric Piano 2</source>
        <translation>电钢琴2</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="687"/>
        <source>Harpsichord</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="690"/>
        <source>Clavinet (Clavi)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="693"/>
        <source>Celesta</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="696"/>
        <source>Glockenspiel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="699"/>
        <source>Music Box</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="702"/>
        <source>Vibraphone</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="705"/>
        <source>Marimba</source>
        <translation>马林巴琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="708"/>
        <source>Xylophone</source>
        <translation>木琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="711"/>
        <source>Tubular Bells</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="714"/>
        <source>Dulcimer</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="717"/>
        <source>Drawbar Organ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="720"/>
        <source>Percussive Organ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="723"/>
        <source>Rock Organ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="726"/>
        <source>Church Organ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="729"/>
        <source>Reed Organ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="732"/>
        <source>Accordion</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="735"/>
        <source>Harmonica</source>
        <translation>口琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="738"/>
        <source>Tango Accordion</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="741"/>
        <source>Acoustic Guitar (nylon)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="744"/>
        <source>Acoustic Guitar (steel)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="747"/>
        <source>Electric Guitar (jazz)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="750"/>
        <source>Electric Guitar (clean)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="753"/>
        <source>Electric Guitar (muted)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="756"/>
        <source>Overdriven Guitar</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="759"/>
        <source>Distortion Guitar</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="762"/>
        <source>Guitar harmonics</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="765"/>
        <source>Acoustic Bass</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="768"/>
        <source>Electric Bass (finger)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="771"/>
        <source>Electric Bass (pick)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="774"/>
        <source>Fretless Bass</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="777"/>
        <source>Slap Bass 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="780"/>
        <source>Slap Bass 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="783"/>
        <source>Synth Bass 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="786"/>
        <source>Synth Bass 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="789"/>
        <source>Violin</source>
        <translation>小提琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="792"/>
        <source>Viola</source>
        <translation>中提琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="795"/>
        <source>Cello</source>
        <translation>大提琴</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="798"/>
        <source>Contrabass</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="801"/>
        <source>Tremolo Strings</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="804"/>
        <source>Pizzicato Strings</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="807"/>
        <source>Orchestral Harp</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="810"/>
        <source>Timpani</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="813"/>
        <source>String Ensemble 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="816"/>
        <source>String Ensemble 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="819"/>
        <source>Synth Strings 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="822"/>
        <source>Synth Strings 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="825"/>
        <source>Choir Aahs</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="828"/>
        <source>Voice Oohs</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="831"/>
        <source>Synth Choir</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="834"/>
        <source>Orchestra Hit</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="837"/>
        <source>Trumpet</source>
        <translation>小号</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="840"/>
        <source>Trombone</source>
        <translation>长号</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="843"/>
        <source>Tuba</source>
        <translation>大号</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="846"/>
        <source>Muted Trumpet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="849"/>
        <source>French Horn</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="852"/>
        <source>Brass Section</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="855"/>
        <source>Synth Brass 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="858"/>
        <source>Synth Brass 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="861"/>
        <source>Soprano Sax</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="864"/>
        <source>Alto Sax</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="867"/>
        <source>Tenor Sax</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="870"/>
        <source>Baritone Sax</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="873"/>
        <source>Oboe</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="876"/>
        <source>English Horn</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="879"/>
        <source>Bassoon</source>
        <translation>巴松管</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="882"/>
        <source>Clarinet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="885"/>
        <source>Piccolo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="888"/>
        <source>Flute</source>
        <translation>笛</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="891"/>
        <source>Recorder</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="894"/>
        <source>Pan Flute</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="897"/>
        <source>Blown Bottle</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="900"/>
        <source>Shakuhachi</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="903"/>
        <source>Whistle</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="906"/>
        <source>Ocarina</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="909"/>
        <source>Lead 1 (square)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="912"/>
        <source>Lead 2 (sawtooth)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="915"/>
        <source>Lead 3 (calliope)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="918"/>
        <source>Lead 4 (chiff)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="921"/>
        <source>Lead 5 (charang)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="924"/>
        <source>Lead 6 (voice)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="927"/>
        <source>Lead 7 (fifths)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="930"/>
        <source>Lead 8 (bass + lead)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="933"/>
        <source>Pad 1 (new age)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="936"/>
        <source>Pad 2 (warm)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="939"/>
        <source>Pad 3 (polysynth)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="942"/>
        <source>Pad 4 (choir)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="945"/>
        <source>Pad 5 (bowed)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="948"/>
        <source>Pad 6 (metallic)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="951"/>
        <source>Pad 7 (halo)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="954"/>
        <source>Pad 8 (sweep)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="957"/>
        <source>FX 1 (rain)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="960"/>
        <source>FX 2 (soundtrack)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="963"/>
        <source>FX 3 (crystal)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="966"/>
        <source>FX 4 (atmosphere)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="969"/>
        <source>FX 5 (brightness)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="972"/>
        <source>FX 6 (goblins)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="975"/>
        <source>FX 7 (echoes)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="978"/>
        <source>FX 8 (sci-fi)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="981"/>
        <source>Sitar</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="984"/>
        <source>Banjo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="987"/>
        <source>Shamisen</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="990"/>
        <source>Koto</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="993"/>
        <source>Kalimba</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="996"/>
        <source>Bag pipe</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="999"/>
        <source>Fiddle</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1002"/>
        <source>Shanai</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1005"/>
        <source>Tinkle Bell</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1008"/>
        <source>Agogo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1011"/>
        <source>Steel Drums</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1014"/>
        <source>Woodblock</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1017"/>
        <source>Taiko Drum</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1020"/>
        <source>Melodic Tom</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1023"/>
        <source>Synth Drum</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1026"/>
        <source>Reverse Cymbal</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1029"/>
        <source>Guitar Fret Noise</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1032"/>
        <source>Breath Noise</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1035"/>
        <source>Seashore</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1038"/>
        <source>Bird Tweet</source>
        <translation>鸟鸣</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1041"/>
        <source>Telephone Ring</source>
        <translation>电话铃声</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1044"/>
        <source>Helicopter</source>
        <translation>直升机</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1047"/>
        <source>Applause</source>
        <translation>掌声</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1050"/>
        <source>Gunshot</source>
        <translation>枪声</translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1053"/>
        <source>out of range</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1060"/>
        <source>Bank Select (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1063"/>
        <source>Modulation Wheel (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1066"/>
        <source>Breath Controller (MSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1070"/>
        <source>Foot Controller (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1073"/>
        <source>Portamento Time (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1076"/>
        <source>Data Entry (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1079"/>
        <source>Channel Volume (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1082"/>
        <source>Balance (MSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1086"/>
        <source>Pan (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1089"/>
        <source>Expression (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1092"/>
        <source>Effect Control 1 (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1095"/>
        <source>Effect Control 2 (MSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1099"/>
        <source>General Purpose Controller 1 (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1102"/>
        <source>General Purpose Controller 2 (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1105"/>
        <source>General Purpose Controller 3 (MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1108"/>
        <source>General Purpose Controller 4 (MSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1112"/>
        <source>Bank Select (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1115"/>
        <source>Modulation Wheel (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1118"/>
        <source>Breath Controller (LSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1122"/>
        <source>Foot Controller (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1125"/>
        <source>Portamento Time (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1128"/>
        <source>Data Entry (LSB) Channel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1131"/>
        <source>Channel Volume (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1134"/>
        <source>Balance (LSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1138"/>
        <source>Pan (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1141"/>
        <source>Expression (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1144"/>
        <source>Effect Control 1 (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1147"/>
        <source>Effect Control 2 (LSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1151"/>
        <source>General Purpose Controller 1 (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1154"/>
        <source>General Purpose Controller 2 (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1157"/>
        <source>General Purpose Controller 3 (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1160"/>
        <source>General Purpose Controller 4 (LSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1164"/>
        <source>Sustain Pedal</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1167"/>
        <source>Portamento On/Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1170"/>
        <source>Sostenuto</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1173"/>
        <source>Soft Pedal</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1176"/>
        <source>Legato Footswitch</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1179"/>
        <source>Hold 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1182"/>
        <source>Sound Controller 1</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1185"/>
        <source>Sound Controller 2</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1188"/>
        <source>Sound Controller 3</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1191"/>
        <source>Sound Controller 4</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1194"/>
        <source>Sound Controller 5</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1197"/>
        <source>Sound Controller 6</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1200"/>
        <source>Sound Controller 7</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1203"/>
        <source>Sound Controller 8</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1206"/>
        <source>Sound Controller 9</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1209"/>
        <source>Sound Controller 10 (GM2 default: Undefined)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1212"/>
        <source>General Purpose Controller 5</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1215"/>
        <source>General Purpose Controller 6</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1218"/>
        <source>General Purpose Controller 7</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1221"/>
        <source>General Purpose Controller 8</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1224"/>
        <source>Portamento Control </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1228"/>
        <source>Effects 1 Depth (default: Reverb Send)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1231"/>
        <source>Effects 2 Depth (default: Tremolo Depth)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1234"/>
        <source>Effects 3 Depth (default: Chorus Send)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1237"/>
        <source>Effects 4 Depth (default: Celeste [Detune] Depth)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1240"/>
        <source>Effects 5 Depth (default: Phaser Depth)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1243"/>
        <source>Data Increment</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1246"/>
        <source>Data Decrement</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1249"/>
        <source>Non-Registered Parameter Number (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1252"/>
        <source>Non-Registered Parameter Number(MSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1255"/>
        <source>Registered Parameter Number (LSB)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1258"/>
        <source>Registered Parameter Number(MSB) </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1262"/>
        <source>All Sound Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1265"/>
        <source>Reset All Controllers</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1268"/>
        <source>Local Control On/Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1271"/>
        <source>All Notes Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1274"/>
        <source>Omni Mode Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1277"/>
        <source>Omni Mode On</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1280"/>
        <source>Poly Mode Off</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1283"/>
        <source>Poly Mode On</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/midi/MidiFile.cpp" line="1287"/>
        <source>undefined</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>MidiInput</name>
    <message>
        <location filename="../src/midi/MidiInput.cpp" line="49"/>
        <source>MidiEditor input</source>
        <translation>MidiEditor 输入</translation>
    </message>
</context>
<context>
    <name>MidiOutput</name>
    <message>
        <location filename="../src/midi/MidiOutput.cpp" line="47"/>
        <source>MidiEditor output</source>
        <translation>MidiEditor 输出</translation>
    </message>
</context>
<context>
    <name>MidiSettingsWidget</name>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="118"/>
        <source>Choose the Midi ports on your machine to which MidiEditor connects in order to play and record Midi data.</source>
        <translation>选择此电脑上的MIDI设备，以输入/输出MIDI信号</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="122"/>
        <source>Midi output: </source>
        <translation>MIDI输出：</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="129"/>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="148"/>
        <source>Refresh port list</source>
        <translation>刷新设备列表</translation>
    </message>
    <message>
        <location filename="../src/gui/MidiSettingsWidget.cpp" line="139"/>
        <source>Midi input: </source>
        <translation>MIDI输入：</translation>
    </message>
</context>
<context>
    <name>MidiTrack</name>
    <message>
        <location filename="../src/midi/MidiTrack.cpp" line="58"/>
        <source>Untitled track</source>
        <translation>未命名 Track</translation>
    </message>
</context>
<context>
    <name>MiscWidget</name>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="46"/>
        <source>Velocity</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="48"/>
        <source>Control Change</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="50"/>
        <source>Pitch Bend</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="52"/>
        <source>Key Pressure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="54"/>
        <source>Channel Pressure</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="401"/>
        <location filename="../src/gui/MiscWidget.cpp" line="444"/>
        <source>Changed selection</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="416"/>
        <source>Cleared selection</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="494"/>
        <source>Edited velocity</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="535"/>
        <location filename="../src/gui/MiscWidget.cpp" line="849"/>
        <source>Edited Control Change Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="539"/>
        <location filename="../src/gui/MiscWidget.cpp" line="853"/>
        <source>Edited Pitch Bend Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="543"/>
        <location filename="../src/gui/MiscWidget.cpp" line="857"/>
        <source>Edited Key Pressure Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="547"/>
        <location filename="../src/gui/MiscWidget.cpp" line="861"/>
        <source>Edited Channel Pressure Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="677"/>
        <source>Inserted Control Change Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="681"/>
        <source>Inserted Pitch Bend Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="685"/>
        <source>Inserted Key Pressure Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="689"/>
        <source>Inserted Channel Pressure Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="693"/>
        <source>Inserted Tempo Change Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="822"/>
        <source>Changed velocity</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/MiscWidget.cpp" line="865"/>
        <source>Edited Tempo Change Events</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NToleQuantizationDialog</name>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="20"/>
        <source>Tuplet Quantization</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="23"/>
        <source>tuplet: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="24"/>
        <source>instead of: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="45"/>
        <source>Whole note</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="47"/>
        <source>Half note</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="49"/>
        <source>Quarter note</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="51"/>
        <source>th note</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="63"/>
        <source>Ok</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../src/gui/NToleQuantizationDialog.cpp" line="67"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/Terminal.cpp" line="79"/>
        <source>Started process</source>
        <translation>进程已启动</translation>
    </message>
    <message>
        <location filename="../src/Terminal.cpp" line="106"/>
        <source>Trying to set Input Port to </source>
        <translation>正在将输入设备设为 </translation>
    </message>
    <message>
        <location filename="../src/Terminal.cpp" line="111"/>
        <location filename="../src/Terminal.cpp" line="129"/>
        <source>Found port </source>
        <translation>找到设备</translation>
    </message>
    <message>
        <location filename="../src/Terminal.cpp" line="124"/>
        <source>Trying to set Output Port to </source>
        <translation>正在将输出设备设为 </translation>
    </message>
    <message>
        <location filename="../src/tool/EraserTool.cpp" line="31"/>
        <source>Eraser (remove Events)</source>
        <translation>橡皮擦（移除 Event）</translation>
    </message>
    <message>
        <location filename="../src/tool/EraserTool.cpp" line="66"/>
        <source>Remove event</source>
        <translation>移除 Event</translation>
    </message>
    <message>
        <location filename="../src/tool/EventMoveTool.cpp" line="39"/>
        <source>Move Events (all directions)</source>
        <translation>移动 Event （所有方向）</translation>
    </message>
    <message>
        <location filename="../src/tool/EventMoveTool.cpp" line="42"/>
        <source>Move Events (up and down)</source>
        <translation>移动 Event （垂直）</translation>
    </message>
    <message>
        <location filename="../src/tool/EventMoveTool.cpp" line="45"/>
        <source>Move Events (left and right)</source>
        <translation>移动 Event （水平）</translation>
    </message>
    <message>
        <location filename="../src/tool/EventMoveTool.cpp" line="160"/>
        <source>Move events</source>
        <translation>移动 Event </translation>
    </message>
    <message>
        <location filename="../src/tool/EventTool.cpp" line="226"/>
        <source>Paste </source>
        <translation>粘贴 </translation>
    </message>
    <message>
        <location filename="../src/tool/EventTool.cpp" line="226"/>
        <source> events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="52"/>
        <source>Create new Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="120"/>
        <source>Create note</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="142"/>
        <source>Create Program Change Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="153"/>
        <source>Create Time Signature Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="164"/>
        <source>Create Tempo Change Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="174"/>
        <source>Create Key Signature Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="184"/>
        <source>Create Control Change Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="193"/>
        <source>Create Key Pressure Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="202"/>
        <source>Create Channel Pressure Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="219"/>
        <source>Create Text Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="230"/>
        <source>Create Unknown Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/NewNoteTool.cpp" line="238"/>
        <source>Create SysEx Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/SelectTool.cpp" line="34"/>
        <source>Select Events (Box)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/SelectTool.cpp" line="39"/>
        <source>Select single Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/SelectTool.cpp" line="44"/>
        <source>Select all Events on the left side</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/SelectTool.cpp" line="49"/>
        <source>Select all Events on the right side</source>
        <translation></translation>
    </message>
    <message>
        <source>Selection changed</source>
        <translation type="vanished">选区改变</translation>
    </message>
    <message>
        <location filename="../src/tool/SizeChangeTool.cpp" line="38"/>
        <source>Change the duration of the selected event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/SizeChangeTool.cpp" line="140"/>
        <source>Change event duration</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/tool/StandardTool.cpp" line="48"/>
        <source>Standard Tool</source>
        <translation>标准工具</translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="72"/>
        <source>Text Event</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="92"/>
        <source>General text</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="94"/>
        <source>Copyright</source>
        <translation>版权</translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="96"/>
        <source>Trackname</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="98"/>
        <source>Instrument name</source>
        <translation>乐器名</translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="100"/>
        <source>Lyric</source>
        <translation>旋律</translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="102"/>
        <source>Marker</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/MidiEvent/TextEvent.cpp" line="104"/>
        <source>Comment</source>
        <translation>注释</translation>
    </message>
</context>
<context>
    <name>RecordDialog</name>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="60"/>
        <source>Add </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="60"/>
        <source> recorded Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="62"/>
        <source>Add to track: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="65"/>
        <location filename="../src/gui/RecordDialog.cpp" line="80"/>
        <source>Same as selected for new events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="67"/>
        <source>Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="77"/>
        <source>Add tochannel: </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="81"/>
        <source>Keep channel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="83"/>
        <source>Channel </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="90"/>
        <source>Select events to add:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="94"/>
        <source>Note on/off Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="95"/>
        <source>Control Change Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="96"/>
        <source>Pitch Bend Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="97"/>
        <source>Channel Pressure Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="98"/>
        <source>Key Pressure Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="99"/>
        <source>Program Change Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="100"/>
        <source>System Exclusive Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="101"/>
        <source>Tempo Change Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="102"/>
        <source>Time Signature Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="103"/>
        <source>Key Signature Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="104"/>
        <source>Text Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="105"/>
        <source>Unknown Events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="109"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="113"/>
        <source>Ok</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="156"/>
        <source>Added recorded events</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="228"/>
        <source>Cancel?</source>
        <translation>放弃更改？</translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="230"/>
        <source>Do you really want to cancel? The recorded events will be lost.</source>
        <translation>确实要取消录制？已录制的 Events 将会丢失</translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="231"/>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <location filename="../src/gui/RecordDialog.cpp" line="233"/>
        <source>No</source>
        <translation>否</translation>
    </message>
</context>
<context>
    <name>RemoteServer</name>
    <message>
        <location filename="../src/remote/RemoteServer.cpp" line="39"/>
        <source>Not connected</source>
        <translation>未连接</translation>
    </message>
</context>
<context>
    <name>RemoteSettingsWidget</name>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="30"/>
        <source>Android Remote</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="35"/>
        <source>Enter IP and Port for the connection</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="39"/>
        <source>Enter IP and Port for the connection.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="42"/>
        <source>IP:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="48"/>
        <source>Port:</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="66"/>
        <source>Enter number</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="66"/>
        <source>Port is no number!</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="74"/>
        <source>Restart</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/RemoteSettingsWidget.cpp" line="74"/>
        <source>You have to restart MidiEditor to connect!</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../src/gui/SettingsDialog.cpp" line="86"/>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>TempoDialog</name>
    <message>
        <location filename="../src/gui/TempoDialog.cpp" line="22"/>
        <source>Edit Tempo</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>TimeSignatureDialog</name>
    <message>
        <location filename="../src/gui/TimeSignatureDialog.cpp" line="26"/>
        <source>Change Meter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TrackListItem</name>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="51"/>
        <source>Track </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="56"/>
        <source>New Track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="66"/>
        <source>Track visible</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="73"/>
        <location filename="../src/gui/TrackListWidget.cpp" line="111"/>
        <source>Track audible</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="82"/>
        <source>Rename track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="87"/>
        <source>Remove track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="99"/>
        <source>Hide track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="101"/>
        <source>Show track</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/TrackListWidget.cpp" line="109"/>
        <source>Mute track</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>TransposeDialog</name>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="32"/>
        <source>Number of semitones: </source>
        <translation>移动几个半音的距离: </translation>
    </message>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="39"/>
        <source>up</source>
        <translation>向上</translation>
    </message>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="40"/>
        <source>down</source>
        <translation>向下</translation>
    </message>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="45"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="47"/>
        <source>Accept</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../src/gui/TransposeDialog.cpp" line="66"/>
        <source>Transpose selection</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>UpdateDialog</name>
    <message>
        <location filename="../src/gui/UpdateDialog.cpp" line="37"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="../src/gui/UpdateDialog.cpp" line="46"/>
        <source>&lt;h1&gt;Update Available&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;新版本已发布&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/gui/UpdateDialog.cpp" line="50"/>
        <source>New Version: </source>
        <translation>新版本：</translation>
    </message>
    <message>
        <location filename="../src/gui/UpdateDialog.cpp" line="92"/>
        <source>No, remind me later</source>
        <translation>不要更新，稍后提醒我</translation>
    </message>
</context>
<context>
    <name>UpdateSettingsWidget</name>
    <message>
        <location filename="../src/gui/UpdateSettingsWidget.cpp" line="11"/>
        <source>Updates</source>
        <translation>更新</translation>
    </message>
    <message>
        <location filename="../src/gui/UpdateSettingsWidget.cpp" line="18"/>
        <source>&lt;p&gt;&lt;b&gt;Privacy Note&lt;/b&gt;&lt;/p&gt;&lt;p&gt;When checking for updates, MidiEditor transmits your IP address as well as the currently installed version of MidiEditor and you operating system to a server which is located within the European Union.&lt;/p&gt;&lt;p&gt;Please read our privacy policy at &lt;a href=&quot;https://www.midieditor.org/updates-privacy&quot;&gt;www.midieditor.org/updates-privacy&lt;/a&gt; for further information.&lt;/p&gt;&lt;p&gt;By enabling the option, you confirm that you have read and understood the terms under which MidiEditor provides this service and that you agree to them.&lt;/p&gt;</source>
        <translatorcomment>translate.google.com</translatorcomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gui/UpdateSettingsWidget.cpp" line="36"/>
        <source>Automatically check for Updates</source>
        <translation>自动检查更新</translation>
    </message>
</context>
</TS>
