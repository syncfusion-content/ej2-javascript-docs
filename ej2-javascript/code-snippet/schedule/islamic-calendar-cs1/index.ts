

import {
    Schedule, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth,
    Resize, DragAndDrop, MonthAgenda, CalendarType
} from '@syncfusion/ej2-schedule';
import { Ajax, loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
import { scheduleData } from './datasource.ts';
import arNumberData from '@syncfusion/ej2-cldr-data/main/ar/numbers.json';
import artimeZoneData from '@syncfusion/ej2-cldr-data/main/ar/timeZoneNames.json';
import arGregorian from '@syncfusion/ej2-cldr-data/main/ar/ca-gregorian.json';
import arIslamic from '@syncfusion/ej2-cldr-data/main/ar/ca-islamic.json';
import arNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

Schedule.Inject(Day, Week, WorkWeek, Month, TimelineViews, TimelineMonth, Agenda, MonthAgenda, Resize, DragAndDrop);
Calendar.Inject(Islamic);
loadCldr(arNumberData, artimeZoneData, arGregorian, arIslamic, arNumberingSystem);
let localeTexts: string;
let ajax: Ajax = new Ajax('./locale.json', 'GET', false);
ajax.onSuccess = (value: string) => {
    localeTexts = value;
};
ajax.send();
L10n.load(JSON.parse(<string>localeTexts));
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    enableRtl: true,
    calendarMode: 'Islamic',
    views: [
        { option: 'Day' },
        { option: 'TimelineDay' },
        { option: 'Week' },
        { option: 'TimelineWeek' },
        { option: 'Month' },
        { option: 'TimelineMonth' },
        { option: 'Agenda' },
        { option: 'MonthAgenda' }
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
setCulture('ar');


