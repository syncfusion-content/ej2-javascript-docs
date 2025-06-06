import { Schedule, TimelineViews } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'TimelineDay', startHour: '10:00', endHour: '15:30' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');