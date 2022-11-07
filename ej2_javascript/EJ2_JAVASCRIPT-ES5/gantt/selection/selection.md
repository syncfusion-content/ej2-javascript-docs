---
title: "Selection"
component: "Gantt"
description: "Learn how to select the rows and custmize selection action in the Essential JS 2 Gantt control."
---

# Selection

Selection provides an option to highlight a row or a cell. It can be done using arrow keys or by scrolling down the mouse. To disable selection in the Gantt control, set the [`allowSelection`](../api/gantt/#allowselection) to false.

To select data, inject the [`Selection`](../api/gantt/#selectionmodule) module into the Gantt control.

The Gantt control supports two types of selection that can be set by using the [`selectionSettings.type`](../api/gantt/selectionSettings/#type) property. They are:

* `Single`: Sets a single value by default and allows only selection of a single row or a cell.
* `Multiple`: Allows you to select multiple rows or cells. To perform the multi-selection, press and hold the CTRL key and click the desired rows or cells.

## Selection mode

The Gantt control supports three types of selection modes that can be set by using the [`selectionSettings.mode`](../api/gantt/selectionSettings/#mode). They are:

* `Row`: Allows you to select only rows, and the row value is set by default.
* `Cell`: Allows you to select only cells.
* `Both`: Allows you to select rows and cells at the same time.

{% tab template="gantt/selection", es5Template="bothType"%}

```typescript

import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Selection);

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
    selectionSettings: {
        mode: 'Both'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}