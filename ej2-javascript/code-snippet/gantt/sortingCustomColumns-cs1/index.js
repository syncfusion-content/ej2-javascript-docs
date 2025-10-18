var ganttChart = new ej.gantt.Gantt({
dataSource: GanttData,
height: '450px',
allowSorting: true,
taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
},
columns: [
    { field: 'TaskID', headerText: 'Task ID' },
    { field: 'Progress', headerText: 'Progress' },
    { field: 'TaskName', headerText: 'Task Name' },
    { field: 'StartDate', headerText: 'Start Date' },
    { field: 'Duration', headerText: 'Duration' },
    { field: 'CustomColumn', headerText: 'CustomColumn' }
]
});
ganttChart.appendTo('#Gantt');

var sortBtn= new ej.buttons.Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    var ganttObj= document.getElementById('Gantt').ej2_instances[0];
	ganttObj.sortModule.sortColumn('CustomColumn',"Ascending",false)
});