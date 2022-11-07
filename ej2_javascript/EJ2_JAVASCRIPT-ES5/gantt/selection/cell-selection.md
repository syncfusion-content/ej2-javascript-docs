# Cell selection

You can select a cell in the Gantt control by setting the [`selectionSettings.mode`](../api/gantt/selectionSettings/#mode) property to cell. You can get the selected cell information using the [`getSelectedRowCellIndexes`](../api/gantt/selection/#getselectedrowcellindexes) method. This method returns the result as an object collection, which has `cellIndexes` and `rowIndex` information of the selected cells.

Find the code example below to enable the cell selection in Gantt.

{% tab template="gantt/selection", es5Template="cellSelection"%}

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
        mode: 'Cell'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Selecting multiple cells

You can select multiple cells by setting the [`selectionSettings.type`](../api/gantt/selectionSettings/#type) property to multiple and the [`selectionSettings.mode`](../api/gantt/selectionSettings/#mode) property to cell. Multiple cells can be selected by holding the CTRL key and selecting the cells. The following code example demonstrates how to select multiple cells.

{% tab template="gantt/selection", es5Template="multipleCellSelection"%}

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
        mode: 'Cell',
        type: 'Multiple'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Selecting a cell dynamically

You can select a cell dynamically using the [`selectCell`](../api/gantt/selection/#selectcell) method. Refer to the following code example for details.

{% tab template="gantt/selectCell", es5Template="selectCell"%}

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
        mode: 'Cell'
    }
});
gantt.appendTo('#Gantt');

let cellBtn: Button = new Button();
cellBtn.appendTo('#selectCell');

document.getElementById('selectCell').addEventListener('click', () => {
    gantt.selectionModule.selectCell({ cellIndex: 1, rowIndex: 1 });
});

```

{% endtab %}

## Customize cell selection action

While selecting a cell in Gantt, the [`cellSelecting`](../api/gantt/#cellselecting) and [`cellSelected`](../api/gantt/#cellselected) event will be triggered. The [`cellSelecting`](../api/gantt/#cellselecting) event will be triggered on initialization of cell selection action, and you can get the current selecting cell information to prevent the selection of a particular cell in a particular row. The [`cellSelected`](../api/gantt/#cellselected) event will be triggered on completion of cell selection action, and you can get the current selected cell’s information. The following code example demonstrates how to prevent the selection of the cell using the [`cellSelecting`](../api/gantt/#cellselecting) event.

{% tab template="gantt/selection", es5Template="cellSelectingEvent"%}

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
    cellSelecting: function (args: any) {
        if (args.data.TaskID == 4 && args.cellIndex.cellIndex == 1) {
            args.cancel = true;
        }
    },
    selectionSettings: {
        mode: 'Cell'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Toggle selection

The toggle selection allows you to select and deselect a specific row or cell. To enable toggle selection, set the `enableToggle` property of the selectionSettings to `true`. If you click the selected row or cell, then it will be deselected and vice versa.
By default, the `enableToggle` property is set to `false`.

{% tab template="gantt/toggleselection", es5Template="toggleselection"%}

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
        type: 'Multiple',
        enableToggle: true
    }
});
gantt.appendTo('#Gantt');

let toggleBtn: Button = new Button();
toggleBtn.appendTo('#toggle');

document.getElementById('toggle').addEventListener('click', () => {
    gantt.selectionSettings.enableToggle = false;
});

```

{% endtab %}

## Clear selection

You can clear the selected cells and selected rows by using a method called [`clearSelection`](../api/gantt/#clearselection). The following code example demonstrates how to clear the selected rows in Gantt Chart.

{% tab template="gantt/clearselection", es5Template="clearselection"%}

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

let clrBtn: Button = new Button();
clrBtn.appendTo('#clearSelection');

document.getElementById('selectRows').addEventListener('click', () => {
    gantt.selectionModule.selectRows([1, 3, 5]); // passing the record index as array collection
});

document.getElementById('clearSelection').addEventListener('click', () => {
    gantt.clearSelection(); // Clear the selected rows
});

```

{% endtab %}

## Get selected row indexes and records

You can get the selected row indexes by using the [`getSelectedRowIndexes`](../api/gantt/#getselectedrowindexes) method. And by using [`getSelectedRecords`](../api/gantt/#getSelectedRecords) method, you can get the selected record details.

{% tab template="gantt/selection", es5Template="getindex"%}

```typescript

import { Gantt, Selection, RowSelectEventArgs } from '@syncfusion/ej2-gantt';
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
    },
    rowSelected: rowSelected
});
gantt.appendTo('#Gantt');

function rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = gantt.selectionModule.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    let selectedrecords: Object[] = gantt.selectionModule.getSelectedRecords();  // get the selected records.
    console.log(selectedrecords); // to print the selected records in console window.
}

```

{% endtab %}

## Multiple Selection based on condition

You can select multiple rows based on condition by using the [`selectRows`](../api/grid/#selectrows) method.

In the following code, the rows which contains `TaskId` value as 3 and 4 are selected at initial rendering.

{% tab template="gantt/selection", es5Template="multiRows"%}

```typescript

import { Gantt, Selection, RowSelectEventArgs } from '@syncfusion/ej2-gantt';
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
    },
    dataBound: () => {
        var rowIndexes = [];
        gantt.treeGrid.grid.dataSource.forEach((data,index) => {
            if (data.TaskID === 3 || data.TaskID === 4) {
               rowIndexes.push(index);
            }
            });
        gantt.selectRows(rowIndexes);
    },
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## See Also

* [Touch interaction](./touch-interaction/#selection)