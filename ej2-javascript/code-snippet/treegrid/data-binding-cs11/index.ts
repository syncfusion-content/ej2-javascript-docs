import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent, VirtualScroll, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import './App.css';

TreeGrid.Inject(Edit, VirtualScroll, Sort, Filter, Toolbar);

let dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: dataManager,
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
treegrid.appendTo('#TreeGrid');