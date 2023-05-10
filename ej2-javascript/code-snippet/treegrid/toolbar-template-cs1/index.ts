

import { TreeGrid, Toolbar, Filter } from '@syncfusion/ej2-treegrid';
import { EmitType } from '@syncfusion/ej2-base';
import { sampleData } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

TreeGrid.Inject(Toolbar, Filter);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    var target: Element = (<HTMLElement>args.originalEvent.target).closest('.e-toolbar-item');
    if (args.item.id === 'toolbarfilter') {
        treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
    }
};

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: sampleData,
    childMapping: 'subtasks',
    allowFiltering: true,
    toolbarTemplate: '#toolbar-template',
    toolbarClick: clickHandler,
    height: 270,
    treeColumnIndex: 1,
    columns: [
            { field: 'taskID', headerText: 'Task ID', width: 90, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Task Name', width: 180, textAlign: 'Left' },
            {
                field: 'startDate', headerText: 'Start Date', width: 90, textAlign: 'Right', type: 'date', format: 'yMd'
            },
            { field: 'duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');



