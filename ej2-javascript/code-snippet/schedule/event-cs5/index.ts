import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let data: object[] = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2026, 0, 28, 10, 0),
    EndTime: new Date(2026, 0, 28, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
    RecurrenceException: '20260129T043000Z,20260131T043000Z,20260202T043000Z'
}];

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2026, 0, 28),
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');