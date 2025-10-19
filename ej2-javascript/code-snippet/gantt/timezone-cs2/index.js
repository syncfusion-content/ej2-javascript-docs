 var gantt = new ej.gantt.Gantt({
    dataSource: GanttData,
    editSettings: {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    taskFields: {
        id: 'taskID',
        name: 'taskName',
        startDate: 'startDate',
        duration: 'duration',
        progress: 'progress',
        dependency: 'predecessor',
        parentID: 'parentID'
    },
    timelineSettings: {
        timelineUnitSize: 65,
        topTier: {
            unit: 'Day',
            format: 'MMM dd, yyyy'
        },
        bottomTier: {
            unit: 'Hour',
            format: 'hh:mm a'
        }
    },
    timezone: 'America/New_York',
    durationUnit: 'Hour',
    includeWeekend: true,
    dateFormat: 'hh:mm a',
    height: '450px',
    dayWorkingTime: [{ from: 0, to: 23 }],
    actionComplete: actionComplete
});
function actionComplete(args) {
    if (args.action == "TaskbarEditing") {
        console.log(args.data.ganttProperties.endDate);
	}
}
gantt.appendTo('#Gantt');