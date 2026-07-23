var ganttChart = new ej.gantt.Gantt({
    dataSource: [],
    height: '450px',
    emptyRecordTemplate: '#emptyRecordTemplate',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 3
    },
   
});

ganttChart.appendTo('#Gantt');