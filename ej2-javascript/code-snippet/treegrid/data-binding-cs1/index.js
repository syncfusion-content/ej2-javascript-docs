ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var treeGridObj = new ej.treegrid.TreeGrid({
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    pageSettings: {pageSize: 7},
    allowPaging: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: 80, textAlign: 'Right' },
        { field: 'TaskName', headerText: 'Task Name', width: 200, textAlign: 'Left' },
        { field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd' },
        { field: 'Duration', headerText: 'Duration', width: 90, textAlign: 'Right' },
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

let button = document.createElement('button');
button.textContent = 'Bind Data';
treeGridObj.element.parentNode.insertBefore(button, treeGridObj.element);
button.addEventListener("click", function(e){
    let ajax = new ej.base.Ajax("https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData","GET");
    treeGridObj.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data) {
        treeGridObj.hideSpinner();
        treeGridObj.dataSource = JSON.parse(data);
    };
});

