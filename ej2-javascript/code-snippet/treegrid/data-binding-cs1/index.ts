

import { TreeGrid, Page }from '@syncfusion/ej2-treegrid';
import { Ajax } from '@syncfusion/ej2-base';

TreeGrid.Inject(Page);
let treegrid: TreeGrid = new TreeGrid({
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    pageSettings: {pageSize: 7},
    allowPaging: true,
    treeColumnIndex: 1,
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' },
        { field: 'Progress', headerText: 'Progress', width: 80, textAlign: 'Right' }
    ]
});
treegrid.appendTo('#TreeGrid');

let button: HTMLElement = document.createElement('button');
button.textContent = 'Bind Data';
treegrid.element.parentNode.insertBefore(button, treegrid.element);
button.addEventListener("click", function(e){
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData","GET");
    treegrid.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data: string) {
        treegrid.hideSpinner();
        treegrid.dataSource = JSON.parse(data);
    };
});



