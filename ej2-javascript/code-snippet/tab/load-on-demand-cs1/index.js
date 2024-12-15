ej.base.enableRipple(true);
var tabObj = new ej.navigations.Tab({
    items: [
        {
            header: { text: 'Calendar' },
            content: '#Calendar'
        },
        {
            header: { text: 'Schedule' },
            content: '#Schedule',
        },
    ]

});
tabObj.appendTo('#element');

var calendar = new ej.calendars.Calendar();
calendar.appendTo('#Calendar');

var schedule = new ej.schedule.Schedule({
    width: '100%',
    height: '450px'
});
schedule.appendTo('#Schedule');
