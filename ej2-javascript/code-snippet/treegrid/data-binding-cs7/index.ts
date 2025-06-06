

import { TreeGrid, Page } from '@syncfusion/ej2-treegrid';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/SelfReferenceData',
    adaptor: new WebApiAdaptor, crossDomain: true
});

TreeGrid.Inject(Page);
let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    hasChildMapping: 'isParent',
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    height: 260,
    allowPaging: true,
    query: new Query().addParams('ej2treegrid', 'true'),
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');



