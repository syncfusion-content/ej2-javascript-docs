window.getMonthHeaderText = function (date) {
    return date.toLocaleString('en-us', { month: 'short' }) + ' ' + date.getFullYear();
};
var data = new ej.base.extend([], window.resourceData, null, true);

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2021, 7, 4),
    firstMonthOfYear: 6,
    monthsCount: 6,
    monthHeaderTemplate: '<div class="date-text">${getMonthHeaderText(data.date)}</div>',
    resourceHeaderTemplate: '#resourceTemplate',
    views: [
        { option: 'Year' },
        { option: 'TimelineYear', displayName: 'Horizontal Year', isSelected: true },
        { option: 'TimelineYear', displayName: 'Vertical Year', orientation: 'Vertical' }
    ],
    group: {
        resources: ['Projects', 'Categories']
    },
    resources: [
        {
            field: 'ProjectId', title: 'Choose Project', name: 'Projects',
            dataSource: [
                { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                { text: 'PROJECT 2', id: 2, color: '#56ca85' },
                { text: 'PROJECT 3', id: 3, color: '#df5286' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }, {
            field: 'TaskId', title: 'Category',
            name: 'Categories', allowMultiple: true,
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
                { text: 'Steven', id: 2, groupId: 2, color: '#7fa900' },
                { text: 'Robert', id: 3, groupId: 3, color: '#ea7a57' },
                { text: 'Smith', id: 4, groupId: 1, color: '#5978ee' },
                { text: 'Micheal', id: 5, groupId: 2, color: '#df5286' },
                { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
            ],
            textField: 'text', idField: 'id', groupIDField: 'groupId', colorField: 'color'
        }
    ],
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');