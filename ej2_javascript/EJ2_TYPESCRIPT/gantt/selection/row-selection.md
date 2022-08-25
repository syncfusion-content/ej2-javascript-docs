# Row selection

The row selection in the Gantt control can be enabled or disabled using the [`allowSelection`](../api/gantt/#allowselection) property. You can get the selected row object using the [`getSelectedRecords`](../api/gantt/selection/#getselectedrecords) method. The following code example shows how to disable the row selection in Gantt.

{% tab template="gantt/selection", es5Template="disableSelection"%}

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
    allowSelection: false
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> `Row` selection is the default type of Gantt selection mode.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [`selectedRowIndex`](../api/gantt/#selectedrowindex) property. Find the following code example for details.

{% tab template="gantt/selection", es5Template="initialLoadSelection"%}

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
    selectedRowIndex: 3,
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Selecting a row dynamically

You can also select a row dynamically using the [`selectRow`](../api/gantt/selection/#selectrow) method. The following code demonstrates how to select a row dynamically by clicking the custom button.

{% tab template="gantt/selectRow", es5Template="selectRow"%}

```typescript

import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
    }
});
gantt.appendTo('#Gantt');

let selectBtn: Button = new Button();
selectBtn.appendTo('#selectRow');

document.getElementById('selectRow').addEventListener('click', () => {
    gantt.selectionModule.selectRow(2); // passing the record index to select the row
});

```

{% endtab %}

## Multiple row selection

You can select multiple rows by setting the [`selectionSettings.type`](../api/gantt/selectionSettings/#type) property to `multiple`. You can select more than one row by holding down the CTRL key while selecting multiple rows. The following code example explains how to enable multiple selection in Gantt.

{% tab template="gantt/selection", es5Template="multipleRowSelection"%}

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
        mode: 'Row',
        type: 'Multiple'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Selecting multiple rows dynamically

You can also select rows dynamically using the [`selectRows`](../api/gantt/selection/#selectrows) method. The following code demonstrates how to select rows dynamically by clicking the custom button.

{% tab template="gantt/selectMultipleRow", es5Template="selectMultipleRow"%}

```typescript

import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
        mode: 'Row',
        type: 'Multiple'
    }
});
gantt.appendTo('#Gantt');

let selBtn: Button = new Button();
selBtn.appendTo('#selectRows');

document.getElementById('selectRows').addEventListener('click', () => {
    gantt.selectionModule.selectRows([1, 2, 3]); // passing the record index as array collection
});

```

{% endtab %}

## Customize row selection action

While selecting a row in Gantt, the [`rowSelecting`](../api/gantt/#rowselecting) and [`rowSelected`](../api/gantt/#rowselected) events will be triggered. The the [`rowSelecting`](../api/gantt/#rowselecting) event will be triggered on initialization of row selection, and you can get the previously selected row and current selecting row’s information, which is used to prevent selection of a particular row. The [`rowSelected`](../api/gantt/#rowselected) event will be triggered on completion of row selection action, and you can get the current selected row’s information through this event. The following code example demonstrates how to prevent the selection of a row using the [`rowSelecting`](../api/gantt/#rowselecting) event.

{% tab template="gantt/selection", es5Template="rowSelectingEvent"%}

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
    rowSelecting: function (args: any) {
        if (args.data.TaskID == 4) {
            args.cancel = true;
        }
    },
    selectionSettings: {
        mode: 'Row'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

In the Gantt control, when you click an already selected row, selection will be cleared. While deselecting a row in Gantt, the [`rowDeselecting`](../api/gantt/#rowdeselecting) and [`rowDeselected`](../api/gantt/#rowselected) events will occur. The [`rowDeselecting`](../api/gantt/#rowdeselecting) event will occur on initialization of deselecting row, and you can get the current deselecting row’s information to prevent the deselection of particular row. The [`rowDeselected`](../api/gantt/#rowselected) event will occur on completion of row deselection action, and you can get the current deselected row’s information.