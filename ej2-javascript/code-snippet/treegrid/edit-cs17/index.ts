import { TreeGrid, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

TreeGrid.Inject(Edit, Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    batchUrl: "Home/Remove",
    adaptor: new UrlAdaptor
});

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'parentItem',
    hasChildMapping: 'isParent',
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', isPrimaryKey: true, width: 90, textAlign: 'Right'},
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        {
            field: 'StartDate', headerText: 'Start Date', width: 90, textAlign: 'Right', editType: 'datepickeredit', type: 'date', format: 'yMd'
        },
        { field: 'Priority', headerText: 'Priority', width: 80, validationRules: { required: true } }
    ],
    height: 270
});
treeGridObj.appendTo('#TreeGrid');