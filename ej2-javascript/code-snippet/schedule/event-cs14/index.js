var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    allowDragAndDrop: false,
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');