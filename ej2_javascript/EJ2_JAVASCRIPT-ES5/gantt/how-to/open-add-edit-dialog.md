---
title: "How To"
component: "Gantt"
description: "Learn how to dynamically open the ADD and Edit Dialog's in Gantt control."
---

# Open add/edit dialog dynamically

Gantt add and edit dialogs can be opened dynamically by using [`openAddDialog`](../../api/gantt/#openadddialog) and [`openEditDialog`](../../api/gantt/#openeditdialog) methods. The following code example shows how to open add and dialog on separate button click actions.

{% tab template="gantt/openEditAddDialog", es5Template="openEditAddDialog"%}

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
        allowAdding: true,
        allowEditing: true,
        allowTaskbarEditing: true
    }
});

gantt.appendTo('#Gantt');

let editBtn: Button = new Button();
editBtn.appendTo('#editDialog');

let addBtn: Button = new Button();
addBtn.appendTo('#addDialog');

document.getElementById('editDialog').addEventListener('click', () => {
    gantt.editModule.dialogModule.openEditDialog(getValue('TaskID', gantt.selectionModule.getSelectedRecords()[0]));
});

document.getElementById('addDialog').addEventListener('click', () => {
    gantt.editModule.dialogModule.openAddDialog();
});

```

{% endtab %}

>NOTE: We should select any one of the row in Gantt to open the edit dialog.