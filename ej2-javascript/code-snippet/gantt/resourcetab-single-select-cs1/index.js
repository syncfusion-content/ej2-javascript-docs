var ganttChart = new ej.gantt.Gantt({
    height: '450px',
    dataSource: GanttData,
    treeColumnIndex: 1,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('04/28/2019'),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        parentID: 'ParentID'
    },
    editSettings: {
        allowEditing: true
    },
    labelSettings: {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    },
    splitterSettings: {
      columnIndex: 3
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    },
    editDialogFields: [
        { type: 'Resources'}
    ],
    resources: ProjectResources,
    columns: [
        { field: 'TaskID', width: 70 },
        { field: 'TaskName', headerText: 'Task Name', width: 220 },
        { field: 'resources', headerText: 'Resources', width: 160 },
        { field: 'Duration', width: 100 }
    ],
    
    actionBegin(args) {
        if (args.requestType == 'beforeOpenEditDialog') {
            // Remove the checkbox column from the Resources tab.
            args.Resources.columns.splice(0, 1);
            // Disable resource selection for a specific task.
            if (args.rowData.TaskID == 3) {
                args.Resources.allowSelection = false;
            }
        }
    },
    actionComplete(args) {
        if (args.requestType == 'openEditDialog') {
            // Get the Resources tab instance.
            var tabObj = document.getElementById('Gantt_Tab').ej2_instances[0];
            // Get the resource Grid instance from the Resources tab.
            var gridObj = document.getElementById('GanttResourcesTabContainer_gridcontrol').ej2_instances[0];
            // Configure the resource grid to allow only a single selection.
            gridObj.selectionSettings = {
                checkboxOnly: false,
                type: 'Single',
                persistSelection: false
            };
        }
    }
});

ganttChart.appendTo('#Gantt');