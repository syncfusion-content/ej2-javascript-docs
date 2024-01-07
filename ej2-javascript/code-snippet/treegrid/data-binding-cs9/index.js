ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var data = new ej.data.DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    batchUrl: "Home/Remove",
    adaptor: new ej.data.UrlAdaptor
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    height: 260,
    allowPaging: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

