ej.treegrid.TreeGrid.Inject(ej.treegrid.Page, ej.treegrid.Sort);

var data = new ej.data.DataManager({
  url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
  adaptor: new ej.data.WebApiAdaptor(),
  crossDomain: true
});
var treeGridObj = new ej.treegrid.TreeGrid({
  dataSource: data,
  hasChildMapping: 'isParent',
  idMapping: 'TaskID',
  parentIdMapping: 'ParentItem',
  treeColumnIndex: 1,
  height: 400,
  allowPaging: true,
  allowSorting: true,
  loadingIndicator: { indicatorType: 'Shimmer' },
  columns: [
      { field: 'TaskID', headerText: 'Task ID', width: 120, textAlign: 'Right' },
      { field: 'TaskName', headerText: 'Task Name', width: 240, textAlign: 'Left' },
      { field: 'StartDate', headerText: 'Start Date', width: 140, textAlign: 'Right', type: 'date', format: 'yMd' },
      { field: 'Duration', headerText: 'Duration', width: 130, textAlign: 'Right' },
      { field: 'Progress', headerText: 'Progress', width: 130 }
  ],
  pageSettings: { pageCount: 3 }
});
treeGridObj.appendTo('#TreeGrid');

