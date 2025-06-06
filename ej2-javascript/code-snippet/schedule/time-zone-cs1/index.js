var data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 9, 0),
    EndTime: new Date(2018, 1, 15, 10, 0)
}];

var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');