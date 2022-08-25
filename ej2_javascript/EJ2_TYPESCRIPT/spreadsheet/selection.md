---
title: "Selection"
component: "Spreadsheet"
description: "This section helps you to learn about how to use Selection support in the Spreadsheet control."
---

# Selection

Selection provides interactive support to highlight the cell, row, or column that you select. Selection can be done through Mouse, Touch, or Keyboard interaction. To enable selection, set `mode` as `Single` | `Multiple` in [`selectionSettings`](../api/spreadsheet/#selectionsettings). If you set `mode` to `None`, it disables the UI selection.

> * The default value for `mode` in  `selectionSettings` is `Multiple`.

You have the following options in Selection,

* Cell selection
* Row selection
* Column selection

## Cell selection

Cell selection is used to select a single or multiple cells. It can be performed using the [`selectRange`](../api/spreadsheet/#selectRange) method.

**User Interface**:

* Click on a cell to select it (or) use the `arrow` keys to navigate to it and select it.
* To select a range, select a cell, then use the left mouse button to select and drag over to other cells (or) use the `Shift + arrow` keys to select the range.
* To select non-adjacent cells and cell ranges, hold `Ctrl` and select the cells.

You can quickly locate and select specific cells or ranges by entering their names or cell references in the Name box, which is located to the left of the formula bar, and also select named or unnamed cells or ranges by using the Go To (`Ctrl+G`) command.

## Row selection

Row selection is used to select a single or multiple rows.

**User Interface**:

You can perform row selection in any of the following ways,

* By clicking the row header.
* To select multiple rows, select a row header with the left mouse button and drag over to other row headers (or) use the `Shift + arrow` keys to select multiple rows.
* To select non-adjacent rows, hold `Ctrl` and select the row header.
* You can also use the `selectRange` method for row selection.

The following sample shows the row selection in the spreadsheet, here selecting the 5th row using the `selectRange` method.

{% tab template="spreadsheet/selection", sourceFiles="app.ts,index.html", es5Template="es5-selection", iframeHeight="450px", isDefaultActive=true %}

```typescript

import { Spreadsheet, ColumnModel, getRangeAddress } from '@syncfusion/ej2-spreadsheet';
import { budgetData} from './datasource.ts';

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    selectionSettings: { mode: 'Multiple' },
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
            let colCount: number = spreadsheet.getActiveSheet().colCount;
            spreadsheet.selectRange(getRangeAddress([4, 0, 4, colCount]));
        }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

```

{% endtab %}

## Column selection

Column selection is used to select a single or multiple columns.

**User Interface**:

You can perform column selection in any of the following ways,

* By clicking the column header.
* To select multiple columns, select a column header with the left mouse button and drag over to other column headers (or) use the `Shift + arrow` keys to select the multiple columns.
* To select non-adjacent columns, hold `Ctrl` and select the column header.
* You can also use the `selectRange` method for row selection.

The following sample shows the column selection in the spreadsheet, here selecting the 3rd column using  the `selectRange` method.

{% tab template="spreadsheet/selection", sourceFiles="app.ts,index.html", es5Template="es5-selection", iframeHeight="450px", isDefaultActive=true %}

```typescript

import { Spreadsheet, ColumnModel, getRangeAddress } from '@syncfusion/ej2-spreadsheet';
import { budgetData} from './datasource.ts';

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    selectionSettings: { mode: 'Multiple' },
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
            let rowCount: number = spreadsheet.getActiveSheet().rowCount;
            spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
        }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

```

{% endtab %}

## How to remove selection in the spreadsheet

The following sample shows, how to remove the selection in the spreadsheet. Here changing the `mode` as `None` in [`selectionSettings`](../api/spreadsheet/#selectionsettings) to disable's the UI selection.

{% tab template="spreadsheet/selection", sourceFiles="app.ts,index.html", es5Template="es5-selection", iframeHeight="450px", isDefaultActive=true %}

```typescript

import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { budgetData} from './datasource.ts';

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns }],
    selectionSettings: { mode: 'None' },
    created: (): void => {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
        },
    // Triggers before going to the editing mode.
    cellEdit: (args: CellEditEventArgs): void => {
         args.cancel = true;
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

```

{% endtab %}

## Limitations

* We have a limitation while performing the Select All(`ctrl + A`). You can do this only by clicking the Select All button at the top left corner.