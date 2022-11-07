# Adding new tasks

Tasks can be dynamically added to the Gantt project by enabling the [`editSettings.allowAdding`](../api/gantt/editSettings/#allowadding) property.

## Toolbar

A row can be added to the Gantt component from the toolbar while the [`editSettings.allowAdding`](../api/gantt/editSettings/#allowadding) property is set to true. On clicking the toolbar add icon, you should provide the task information in the add dialog.

{% tab template="gantt/rows", es5Template="addingRow" %}

```typescript

import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true
    },
    toolbar: ['Add']
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> By default, the new row will be added to the top most row in the Gantt control.

## Context menu

A row can also be added above, below or child of the selected row by using context menu support. For this, we need to enable the property[`enableContextMenu`](../api/gantt/#enablecontextmenu) and inject the [`ContextMenu`](../api/gantt/#contextmodule) module into the Gantt control.

{% tab template="gantt/managingTasks", es5Template="contextmenu" %}

```typescript

import { Gantt, Edit, ContextMenu, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, ContextMenu, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    enableContextMenu: true,
    editSettings: {
        allowAdding: true
    },
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Using method

You can add rows to the Gantt control dynamically using the [`addRecord`](../api/gantt/#addrecord) method and you can define the add position of the default new record by using the [`rowPosition`](../api/gantt/rowPosition/) property. You can also pass the `rowIndex` as an additional parameter.

* Top of all the rows.
* Bottom to all the existing rows.
* Above the selected row.
* Below the selected row.
* As child to the selected row.

{% tab template="gantt/addRow", es5Template="addRow" %}

```typescript

import { Gantt, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true
    }
});
gantt.appendTo('#Gantt');

let addBtn: Button = new Button();
addBtn.appendTo('#addRow');

document.getElementById('addRow').addEventListener('click', () => {
    let record: Object = {
        TaskID: 10,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        Duration: 3,
        Progress: 50
    };
    gantt.editModule.addRecord(record, 'Below', 2);
});


```

{% endtab %}