
import { sampleData } from './es5-datasource.js';
ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Sort, ej.grids.Filter);
var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    allowFiltering: true,
    columns: [
                { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
                { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
                {
                    field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' 
                },
                { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ],
    pageSettings: {pageSize: 11},
    allowPaging: true,
    allowSorting: true
});

treeGridObj.appendTo('#TreeGrid');

