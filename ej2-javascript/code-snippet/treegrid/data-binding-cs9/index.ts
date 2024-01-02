import { TreeGrid, Page }from '@syncfusion/ej2-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

TreeGrid.Inject(Page);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    batchUrl: "Home/Remove",
    adaptor: new UrlAdaptor
});


let treegrid: TreeGrid = new TreeGrid({
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
treegrid.appendTo('#TreeGrid');