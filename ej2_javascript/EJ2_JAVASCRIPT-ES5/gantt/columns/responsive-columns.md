# Responsive columns

You can toggle the column visibility based on media queries, which are defined in the [`hideAtMedia`](../api/gantt/column/#hideatmedia). The [`hideAtMedia`](../api/gantt/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tab template="gantt/columns", es5Template="hideAtMedia" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        position: '75%'
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '200', hideAtMedia: '(min-width: 700px)' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100', hideAtMedia: '(max-width: 500px)' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]

});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Change tree/expander column

The tree/expander column is a column in the Gantt control, that has icons to expand or collapse the parent records. You can define the tree column index in the Gantt control by using the [`treeColumnIndex`](../api/gantt/#treecolumnindex) property and the default value of this property is `0`. The following code example shows how to use this property.

{% tab template="gantt/columns", es5Template="treeColumnIndex" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 3
    },
    height: '450px',
    treeColumnIndex: 2
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Show or Hide columns dynamically

You can show or hide gantt columns dynamically using external buttons by invoking the [`showColumn`](../api/gantt/#showcolumn) or [`hideColumn`](../api/gantt/#hidecolumn) method.

{% tab template="gantt/show-hide", es5Template="show-hide" %}

```typescript

import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        position: '75%'
    },
    editSettings: {
        allowEditing: true
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' }
    ]
});
gantt.appendTo('#Gantt');
let show: Button = new Button();
show.appendTo('#show');
let hide: Button = new Button();
hide.appendTo('#hide');
document.getElementById('show').addEventListener('click', () => {
   gantt.showColumn(['TaskName', 'Duration']);
});
document.getElementById('hide').addEventListener('click', () => {
   gantt.hideColumn(['TaskName', 'Duration']);
});

```

{% endtab %}