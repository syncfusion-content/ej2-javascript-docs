ej.gantt.Gantt.Inject(ej.gantt.Selection,
    ej.gantt.Toolbar,
    ej.gantt.DayMarkers,
    ej.gantt.Edit,
    ej.gantt.Filter,
    ej.gantt.Sort,
    ej.gantt.ContextMenu);


var isRowDropped = false;
var ganttChart = new ej.gantt.Gantt({
    dataSource: WBSData,
    allowSorting: true,
    enableContextMenu: true,
    enableWBS: true,
    dataBound: function () {
        if (isRowDropped) {
            ganttChart.enableAutoWbsUpdate = false;
            isRowDropped = false;
        }
    },
    actionBegin: function (args) {
        if (args.requestType === "beforeDrop") {
            isRowDropped = true;
            ganttChart.enableAutoWbsUpdate = false;
        }
    },
    enableAutoWbsUpdate: false,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    },
    treeColumnIndex: 2,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'WBSCode', headerText: 'WBS Code', width: '150px' },
        { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px' },
        { field: 'StartDate', headerText: 'Start Date', width: '140px' },
        { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
        { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
        { field: 'Progress', headerText: 'Progress' },
    ],
    eventMarkers: [
        {
            day: new Date('04/2/2024'),
            label: 'Project Initiation'
        }
    ],
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    allowPdfExport: true,
    allowSelection: true,
    splitterSettings: {
        columnIndex: 4,
    },
    selectionSettings: {
        mode: 'Row',
        type: 'Single',
        enableToggle: false
    },
    tooltipSettings: {
        showTooltip: true
    },
    filterSettings: {
        type: 'Menu'
    },
    allowFiltering: true,
    gridLines: "Both",
    highlightWeekends: true,
    timelineSettings: {
        showTooltip: true,
        topTier: {
            unit: 'Week',
            format: 'dd/MM/yyyy'
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        }
    },
    labelSettings: {
        taskLabel: '${Progress}%'
    },
    taskbarHeight: 20,
    rowHeight: 40,
    height: '550px',
    allowUnscheduledTasks: true,
    projectStartDate: new Date('03/31/2024'),
    projectEndDate: new Date('05/30/2024'),
});
ganttChart.appendTo('#Gantt');

