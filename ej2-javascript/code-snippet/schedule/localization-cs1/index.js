ej.base.setCulture('fr-CH');
loadCultureFiles();
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    locale: 'fr-CH',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
function loadCultureFiles() {
    var files = ['https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/localization-cs1/ca-gregorian.json',
        'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/localization-cs1/numbers.json',
        'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/localization-cs1/numberingSystems.json',
        'https://helpej2.syncfusion.com/javascript/documentation/code-snippet/schedule/localization-cs1/timeZoneNames.json'];
    var loader = ej.base.loadCldr;
    var loadCulture = function (prop) {
        var val, ajax;
        ajax = new ej.base.Ajax('./' + files[prop], 'GET', false);
        ajax.onSuccess = function (value) {
            val = value;
        };
        ajax.send();
        loader(JSON.parse(val));
    };
    for (var prop = 0; prop < files.length; prop++) {
        loadCulture(prop);
    }
}
scheduleObj.appendTo('#Schedule');