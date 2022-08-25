---
title: "State Persistence"
component: "Gantt"
description: "Learn how to persist the Gantt state and model in the browser’s local storage."
---

# State Persistence

State persistence refers to the Gantt's state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.
State persistence stores gantt’s model object in the local storage when the [`enablePersistence`](../api/gantt/#enablepersistence) is defined as true.

## Get or set localStorage value

If the [`enablePersistence`](../api/gantt/#enablepersistence) property is set to true, the gantt property value is saved in the `window.localStorage` for reference. You can get/set the localStorage value by using the `getItem`/`setItem` method in the `window.localStorage`.

```typescript
//get the Gantt model.
let value: string = window.localStorage.getItem('ganttGantt'); //"ganttGantt" is component name + component id.
let model: Object = JSON.parse(model);

```

```typescript
//set the Gantt model.
window.localStorage.setItem('ganttGantt', JSON.stringify(model)); //"ganttGantt" is component name + component id.

```

> You can refer to our [`JavaScript Gantt`](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [`JavaScript Gantt example`](https://ej2.syncfusion.com/demos/#/material/gantt/default.html) to knows how to present and manipulate data.

## Prevent columns from persisting

When the [enablePersistence](../../api/gantt/#enablepersistence) property is set to true, the Gantt properties such as [Filtering](../api/gantt/#allowfiltering), [Sorting](../api/gantt/#allowsorting) , and [Columns](../api/gantt/#columns) will persist. You can use the `addOnPersist` method to prevent these Gantt properties from persisting.

The following example demonstrates how to prevent Gantt columns from persisting. In the [dataBound](../api/gantt/#databound) event of the Gantt, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>Note: When the `enablePersistence` property is set to true, the Gantt features such as column template, column formatter, header text, and value accessor will not persist.

{% tab template="gantt/column-prevent", es5Template="columnprevent" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150},
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150},
    ],
    enablePersistence: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    dataBound: dataBound
});
gantt.appendTo('#Gantt');

function dataBound(args: any) {
    let cloned = this.addOnPersist;
    this.addOnPersist = function (key: any) {
        key = key.filter((item: string)  => item !== "columns");
        return cloned.call(this, key);
    };
}

document.getElementById('add').onclick = () => {
    let obj = { field: "Progress", headerText: 'Progress', width: 100 };
    gantt.columns.push(obj as any); //you can add the columns by using the Gantt columns method
    gantt.treeGrid.refreshColumns();
};

document.getElementById('remove').onclick = () => {
    gantt.columns.pop();
    gantt.treeGrid.refreshColumns();
};

```

{% endtab %}

## Persist the header template and header Text

By default, the Gantt properties such as column template, header text, header template, column formatter, and value accessor will not persist when [enablePersistence](../api/gantt/#enablepersistence) is set to true. Because the column template and header text can be customized at the application level.

If you wish to restore all these column properties, then you can achieve it by cloning the gantt's columns property using JavaScript Object’s assign method and storing this along with the persist data manually. While restoring the settings, this column object must be assigned to the gantt's columns property to restore the column settings as demonstrated in the following sample.

{% tab template="gantt/column-persist", es5Template="columnpersist" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
        { field: 'TaskName', headerText: 'Task Name', width: 150, headerTemplate: '#customertemplate' },
        { field: 'StartDate', headerText: 'StartDate', width: 150 },
        { field: 'Duration', headerText: 'Duration', width: 150}
        { field: 'Progress', headerText: 'Progress', width: 150 },
    ],
    enablePersistence: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    }
});
gantt.appendTo('#Gantt');

let savedProperties: any;
document.getElementById('restore').onclick = () => {
    savedProperties = JSON.parse(gantt.getPersistData());
    var gridColumnsState = Object.assign([], gantt.ganttColumns);
    savedProperties.columns.forEach((col: {
        field: any;
        headerText: any;
        template: any;
        headerTemplate: any;
    }) => {
        let headerText = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerText'];
        let colTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['template'];
        let headerTemplate = gridColumnsState.find((colColumnsState) => colColumnsState.field === col.field)['headerTemplate'];
        col.headerText = 'Text Changed';
        col.template = colTemplate;
        col.headerTemplate = headerTemplate; //likewise you can restore required column properties as per your wants.
    }
  );
    console.log(savedProperties);
    gantt.treeGrid.setProperties(savedProperties);
};

```

{% endtab %}
