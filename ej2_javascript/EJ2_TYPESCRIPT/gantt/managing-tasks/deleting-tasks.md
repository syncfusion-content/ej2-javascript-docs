# Deleting tasks

A task delete option in the Gantt control can be enabled by enabling the [`ediSettings.allowDeleting`](../api/gantt/editSettings/#allowdeleting) property. Tasks can be deleted by clicking the delete toolbar item or using the `deleteRow` method. You can call this method dynamically on any custom actions like button click. The following code example shows how to enable the delete option in the Gantt control.

{% tab template="gantt/deleteRecord", es5Template="deleteRecord"%}

```typescript

import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';
import { getValue } from  '@syncfusion/ej2-base';

Gantt.Inject(Edit, Selection);

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
        allowDeleting: true
    }
});
gantt.appendTo('#Gantt');

let delBtn: Button = new Button();
delBtn.appendTo('#deleteRecord');

document.getElementById('deleteRecord').addEventListener('click', () => {
    gantt.editModule.deleteRecord(getValue('TaskID', gantt.selectionModule.getSelectedRecords()[0]));
});

```

{% endtab %}

> NOTE: You should select any one of the rows in the Gantt control to perform task delete action.
> You should set the [`allowDeleting`](../api/gantt/editSettings/#allowdeleting) value to `true` to delete the record dynamically.

## Delete confirmation message

Delete confirmation message is used to get the confirmation from users before deleting a task. This confirmation message can be enabled by setting the [`editSettings.showDeleteConfirmDialog`](../api/gantt/editSettings/#showdeleteconfirmdialog) property to true.

The following code snippet explains how to enable the delete confirmation message in Gantt.

{% tab template="gantt/editing", es5Template="deleteConfirmationDialog"%}

```typescript

import { Gantt, Edit, Toolbar, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Toolbar, Selection);

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
    toolbar: ['Delete'],
    editSettings: {
        allowDeleting: true,
        showDeleteConfirmDialog: true
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}