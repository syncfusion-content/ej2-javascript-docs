ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.VirtualScroll, ej.treegrid.Sort, ej.treegrid.Filter, ej.treegrid.Toolbar);

var data = new ej.data.DataManager({
    adaptor: new ej.data.UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentValue',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    expandStateMapping: 'IsExpanded',
    enableVirtualization: true,
    height: 400,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {pageSize: 30},
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
    
treeGridObj.appendTo('#TreeGrid');

