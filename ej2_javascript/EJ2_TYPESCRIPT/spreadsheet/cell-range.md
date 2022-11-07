---
title: "Cell Range"
component: "Spreadsheet"
description: "Learn the various operations that you can perform in range of cells of the Essential JS 2 Spreadsheet."
---

# Cell Range

A group of cells in a sheet is known as cell range.

## Wrap text

Wrap text allows you to display large content as multiple lines in a single cell. By default, the wrap text support is enabled. Use the [`allowWrap`](../api/spreadsheet/#allowwrap) property to enable or disable the wrap text support in spreadsheet.

Wrap text can be applied or removed to a cell or range of cells in the following ways,

* Using the `wrap` property in `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect wrap button from ribbon toolbar to apply or remove the wrap text to the selected range.
* Using the [`wrap`](../api/spreadsheet/#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in spreadsheet.

{% tab template="spreadsheet/wrap-text", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-wrap-text", iframeHeight="450px", isDefaultActive=true %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ index: 1, width: 100 }, { width: 140 }, { width: 90 }, { width: 150 }, { width: 120 }, { width: 90 }, { width: 180 }];

// Set wrap text to H2 to H5 cells through cell binding
let rows: RowModel[] = [{ height: 30 }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }, { cells: [{ index: 7, wrap: true }] }];

let sheets: SheetModel[] = [{ name: 'Movie List', ranges: [{ dataSource: data }], rows: rows, columns: columns }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:B5');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:D5');
        // To wrap the cells from E2 to E5 range
        spreadsheet.wrap('E2:E5');
        // To unwrap the H3 cell
        spreadsheet.wrap('H3', false);
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Wrap text

The following features have some limitations in wrap text:

* Sorting with wrap text applied data.
* Merge with wrap text.

## Merge cells

Merge cells allows users to span two or more cells in the same row or column into a single cell. When cells with multiple values are merged, top-left most cell data will be the data for the merged cell. By default, the merge cells option is enabled. Use [`allowMerge`](../api/spreadsheet/#allowmerge) property to enable or disable the merge cells option in spreadsheet.

You can merge the range of cells in the following ways,

* Set the `rowSpan` and `colSpan` property in `cell` to merge the number of cells at initial load.
* Select the range of cells and apply merge by selecting the desired option from ribbon toolbar.
* Use [`merge`](../api/spreadsheet/#merge) method to merge the range of cells, once the component is loaded.

The available merge options in spreadsheet are,

| Type | Action |
|-------|---------|
| Merge All | Combines all the cells in a range in to a single cell (default). |
| Merge Horizontally | Combines cells in a range as row-wise. |
| Merge Vertically | Combines cells in a range as column-wise. |
| UnMerge | Splits the merged cells into multiple cells. |

The following code example shows the merge cells operation in spreadsheet.

{% tab template="spreadsheet/merge-cells", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-merge-cells", iframeHeight="450px" %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let columns: ColumnModel[] = [{ width: 90 }, { width: 150 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 120 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }];

let rows: RowModel[] = [{ height: 35 }, { height: 35, cells: [
    // Merging the 2nd cells of rows 2 and 3 through cell binding.
    { index: 1, rowSpan: 2 },
    // Merging the 2nd row's 3rd and 4th cells through cell binding.
    { colSpan: 2 },
    // Merging the 2nd row's 7th, 8th and 9th cells through cell binding.
    { index: 6, colSpan: 3 },
    // Merging the 2nd and 3rd rows 11th, 12th and 13th cells through cell binding.
    { index: 10, rowSpan: 2, colSpan: 3 },
    { index: 13, colSpan: 2 }, { index: 17, colSpan: 2 } ] },
    { height: 35, cells: [{ index: 3, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 13, colSpan: 3 }, { index: 17, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 5, colSpan: 2 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 },
    { index: 17, colSpan: 2 }] }, { height: 35, cells: [{ index: 2, colSpan: 3 }, { index: 6, colSpan: 4 }, { index: 16, colSpan: 2 }] },
    { height: 35, cells: [{ index: 2, colSpan: 4 }, { index: 7, colSpan: 3 }, { index: 15, colSpan: 2 }, { index: 17, colSpan: 2 }] }];

let sheets: SheetModel[] = [{ name: 'Merge Cells', ranges: [{ dataSource: data }], columns: columns, rows: rows }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
        spreadsheet.numberFormat('h:mm AM/PM', 'C1:S1');
        spreadsheet.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
        // Merging the `K4:M4` cells using method
        spreadsheet.merge('K4:M4');
        // Merging the 5th and 6th row cells across 11th, 12th and 13th column
        spreadsheet.merge('K5:M6', 'Vertically');
        // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
        spreadsheet.merge('N4:O6', 'Horizontally');
    },
    // Removed the unwanted support for this samples
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Merge

The following features have some limitations in Merge:

* Merge with filter.
* Merge with wrap text.

## Data Validation

Data Validation is used to restrict the user from entering the invalid data. You can use the [`allowDataValidation`](../api/spreadsheet/#allowDataValidation) property to enable or disable data validation.

> * The default value for `allowDataValidation` property is `true`.

### Apply Validation

You can apply data validation to restrict the type of data or the values that users enter into a cell.

You can apply data validation by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Data Validation item.
* Use the [`addDataValidation()`](../api/spreadsheet/#addDataValidation) method programmatically.

### Clear Validation

Clear validation feature is used to remove data validations from the specified ranges or the whole worksheet.

You can clear data validation rule by one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Validation item.
* Use the [`removeDataValidation()`](../api/spreadsheet/#removeDataValidation) method programmatically.

### Highlight Invalid Data

Highlight invalid data feature is used to highlight the previously entered invalid values.

You can highlight an invalid data by using one of the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Highlight Invalid Data item.
* Use the [`addInvalidHighlight()`](../api/spreadsheet/#addInvalidHighlight) method programmatically.

### Clear Highlighted Invalid Data

Clear highlight feature is used to remove the highlight from invalid cells.

You can clear the highlighted invalid data by using the following ways,

* Select the Data tab in the Ribbon toolbar, and then choose the Clear Highlight item.
* Use the [`removeInvalidHighlight()`](../api/spreadsheet/#removeInvalidHighlight) method programmatically.

{% tab template="spreadsheet/data-validation", sourceFiles="app.ts,index.html", es5Template="es5-data-validation", iframeHeight="500px" , isDefaultActive=true %}

```typescript

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

let sheet: SheetModel[] = [
    {
        name: 'PriceDetails',
        rows: [
            {
                    index: 0,
                    cells: [{ index: 0, value: 'Seller Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 1, value: 'Customer Id', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 2, value: 'Customer Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 3, value: 'Product Name', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 4, value: 'Product Price', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 5, value: 'Sales Date', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 5, value: 'Billing Time', style:{fontWeight : "bold", textAlign: "center"} },
                    { index: 6, value: 'Total Price', style:{fontWeight : "bold", textAlign: "center"} }]
                },
                {
                    index: 1,
                    cells: [{ index: 0, value: 'John'},
                    { index: 1, value: '1', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Nash'},
                    { index: 3, value: 'Digger', validation:{ type: 'List', value1: 'Digger, Digger, Cherrypicker' }},
                    { index: 4, value: '50000', validation:{ type: 'List', value1: '50000,50000,45000' }},
                    { index: 5, value: '04/11/2019'},
                    { index: 6, value: '11:34:32 AM'},
                    { index: 7, value: '1,45,000.00'}]
                },
                {
                    index: 2,
                    cells: [{ index: 0, value: 'Mike'},
                    { index: 1, value: '2', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Jim'},
                    { index: 3, value: 'Cherrypicker', validation:{ type: 'List', value1: 'Cherrypicker, JCB, Wheelbarrow' }},
                    { index: 4, value: '45000', validation:{ type: 'List', value1: '45000,90000,40' }},
                    { index: 5, value: '04/11/2019'},
                    { index: 6, value: '10:15:00 AM'},
                    { index: 7, value: '1,40,040.00'}]
                },
                {
                    index: 3,
                    cells: [{ index: 0, value: 'shane' },
                    { index: 1, value: '3', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Sean'},
                    { index: 3, value: 'Kango', validation:{ type: 'List', value1: 'Kango, Ropes' }},
                    { index: 4, value: '450', validation:{ type: 'List', value1: '450, 95' }},
                    { index: 5, value: '06/25/2019'},
                    { index: 6, value: '01:30:11 PM'},
                    { index: 7, value: '545.00'}]
                },
                {
                    index: 4,
                    cells: [{ index: 0, value: 'John' },
                    { index: 1, value: '1', validation: { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1'}},
                    { index: 2, value: 'Nash'},
                    { index: 3, value: 'JCB', validation:{ type: 'List', value1: 'JCB, Ropes, scaffolding' }},
                    { index: 4, value: '90000', validation:{ type: 'List', value1: '90000, 95, 10000' }},
                    { index: 5, value: '09/22/2019'},
                    { index: 6, value: '12:30:02 PM'},
                    { index: 7, value: '1,00,095.00' }]
                }
        ],
        columns: [
            { width: 88,  }, { width: 88 }, { width: 106 }, { width: 98 }, { width: 88 }, { width: 86 }, { width: 107 }, { width: 81}
        ]
    }
];

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: sheet,
  created: () => {
            //Add Data validation to range.
            spreadsheet.addDataValidation({ type: 'TextLength' , operator: 'LessThanOrEqualTo' , value1: '4' }, 'A2:A5');
            spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }, 'B2:B5');
            spreadsheet.addDataValidation({ type: 'Date', operator: 'NotEqualTo', value1: '04/11/2019'}, 'F2:F5');
            spreadsheet.addDataValidation({ type: 'Time', operator: 'Between', value1: '10:00:00 AM', value2: '11:00:00 AM' }, 'G2:G5');
            spreadsheet.addDataValidation({ type: 'Decimal', operator: 'LessThan', value1: '100000.00'}, 'H2:H5');
            //Highlight Invalid Data.
            spreadsheet.addInvalidHighlight('A1:H5');
        }
});

spreadsheet.appendTo('#spreadsheet');
```

{% endtab %}

### Limitations of Data validation

The following features have some limitations in Data Validation:

* Entire row data validation.
* Insert row between the data validation.
* Copy/paste with data validation.
* Delete cells between data validation applied range.

## Auto Fill

Auto Fill is used to fill the cells with data based on adjacent cells. It also follows a pattern from adjacent cells if available. There is no need to enter the repeated data manually. You can use `allowAutoFill` property to enable/disable the auto fill support. You can also use `showFillOptions` property to enable/disable the fill option and `fillType` property to change the default auto fill option which is available in `autoFillSettings`.

You can do this by one of the following ways,

* Using “AutoFillOptions” menu which is open, while drag and drop the cell using fill handle element.
* Use the autoFill() method programmatically.

The available parameters in `autoFill()` method are,

| Parameter | Type | Description |
|-----|------|----|
| fillRange | `string` | Specifies the fill range. |
| dataRange | `string` | Specifies the data range. |
| direction | `AutoFillDirection` | Specifies the direction("Up","Right","Down","Left")to be filled. |
| fillType | `AutoFillType` | Specifies the fill type("CopyCells","FillSeries","FillFormattingOnly","FillWithoutFormatting") for autofill action. |

In Auto Fill we have following options,

* Copy Cells
* Fill Series
* Fill Formatting Only
* Fill Without Formatting

>* The default auto fill option is “FillSeries” which can be referred from `fillType` property.

### Copy Cells

To copy the selected cell content to the adjacent cells. You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Copy Cells” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “CopyCells” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Series

To fill the series of numbers, characters, or dates based on selected cell content to the adjacent cells with their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Series” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillSeries” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Formatting Only

To fill the cell style and number formatting based on the selected cell content to the adjacent cells without their content.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Formatting Only” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillFormattingOnly” as fill type in `autoFill` method to fill the adjacent cells.

### Fill Without Formatting

To fill series of numbers, characters, or dates based on the selected cells to the adjacent cells without their formats.

You can do this by one of the following ways,

* Using fill handle to select the adjacent cell range and “Fill Without Formatting” option in “AutoFillOptions” menu to fill the adjacent cells.
* Using “FillWithoutFormatting” as fill type in `autoFill` method to fill the adjacent cells.

In the following sample, you can enable/disable the fill option on the button click event by using the `showFillOptions` property in `autoFillSettings`.

{% tab template="spreadsheet/autofill", sourceFiles="app.ts,index.html,datasource.ts", es5Template="es5-autofill", iframeHeight="550px" , isDefaultActive=true %}

```typescript
import { Spreadsheet, SheetModel, ColumnModel, RowModel, getFormatFromType } from '@syncfusion/ej2-spreadsheet';
import { Button } from '@syncfusion/ej2-buttons';
import { defaultData } from './datasource.ts';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let sheets: SheetModel[] = [
            {
                name: 'Price Details',
                ranges: [{ dataSource: defaultData , startCell: 'A1' }],
                rows: [
                    {
                        height: 30
                    }
                ],
                rowCount: 200,
                columns: [
                    { width: 130 }, { width: 100 }, { width: 100 }
                ]
            }
        ];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,
    autoFillSettings: { fillType: 'FillSeries', showFillOptions: true },
    created: function () {
             spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
             spreadsheet.autoFill('D4:D11','D2:D3', 'Down','CopyCells');
             spreadsheet.autoFill('E4:E11','E2:E3','Down','FillSeries');
             spreadsheet.autoFill('B4:B11','B2:B3','Down','FillFormattingOnly');
             spreadsheet.autoFill('C4:C11','C2:C3','Down','FillWithoutFormatting');
    }
});

spreadsheet.appendTo('#spreadsheet');

var button: Button = new Button();
button.appendTo('#showfillbtn');

button.element.onclick = (): void => {
    var spreadsheetObj = document.getElementById("spreadsheet").ej2_instances[0];
    var showFillOptions = spreadsheetObj.autoFillSettings.showFillOptions;
    spreadsheetObj.autoFillSettings.showFillOptions = !showFillOptions; //To change whether fill options need to be shown or not.
};
```

{% endtab %}

### Limitations of Autofill

The following features have some limitations in Autofill:

* Flash Fill option in Autofill feature.
* Fill with Conditional Formatting applied cells.

## Clear

Clear feature helps you to clear the cell contents (formulas and data), formats (including number formats, conditional formats, and borders) in a spreadsheet. When you apply clear all, both the contents and the formats will be cleared simultaneously.

### Apply Clear Feature

You can apply clear feature by using one of the following ways,

* Select the clear icon in the Ribbon toolbar under the Home Tab.
* Using the [`clear()`](../api/spreadsheet/#clear) method to clear the values.

Clear has the following types in the spreadsheet,

| Options | Uses |
|-----|------|
| `Clear All` | Used to clear all contents, formats, and hyperlinks.  |
| `Clear Formats` | Used to clear the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents` | Used to clear the contents (formulas and data) in a cell. |
| `Clear Hyperlinks` | Used to clear the hyperlink in a cell. |

### Methods

Clear the cell contents and formats in the Spreadsheet document by using the [clear](../api/spreadsheet/#clear) method. The [clear](../api/spreadsheet/#clear) method has `type` and `range` as parameters. The following code example shows how to clear the cell contents and formats in the button click event.

{% tab template="spreadsheet/clear", sourceFiles="app.ts,index.html", es5Template="es5-clear", iframeHeight="500px" %}

```typescript

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";
import { orderData } from './datasource.ts';

//Initialize action items.
let items: ItemModel[] = [
  {
    text: "Clear All"
  },
  {
    text: "Clear Formats"
  },
  {
    text: "Clear Contents"
  },
  {
    text: "Clear Hyperlinks"
  }
];

// Initialize the DropDownButton component.
let drpDownBtn: DropDownButton = new DropDownButton({
  items: items,
  cssClass: "e-round-corner",
  select: (args: MenuEventArgs) => {
    if (args.item.text === 'Clear All')
      spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
    if (args.item.text === 'Clear Formats')
      spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
    if (args.item.text === 'Clear Contents')
      spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
    if (args.item.text === 'Clear Hyperlinks')
      spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
  }
});

// Render initialized DropDownButton.
drpDownBtn.appendTo("#element");

//Initialize the SpreadSheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: [{
                ranges: [{ dataSource: orderData }],
                columns: [{ width: 80 }, { width: 80 },{ width: 80},
                          { width: 160 }, { width: 100 }, {width: 150}]
            }],
    created: (): void => {
        spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt'}, 'A1:E1');
        spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
    },
  }
});
spreadsheet.appendTo('#spreadsheet');

```

{% endtab %}

## See Also

* [Rows and columns](./rows-and-columns)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
