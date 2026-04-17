var data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2026, 0, 28, 10, 0),
    EndTime: new Date(2026, 0, 28, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
    RecurrenceException: '20260129T043000Z,20260131T043000Z,20260202T043000Z'
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2026, 0, 28),
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');