---
title: "PDF Export"
component: "Grid"
description: "Documentation on exporting DataGrid content to PDF format and customizing the exported document with multi-export, headers and footers, and file name changes."
---

# PDF Export

PDF export allows exporting Grid data to PDF document. You need to use the
 [`pdfExport`](../../api/grid/#pdfexport) method for exporting. To enable PDF export in the grid, set the [`allowPdfExport`](../../api/grid/#allowpdfexport) as true.

To use PDF export, inject the `PdfExport` module in grid.

{% tab template="grid/grid",es5Template="padfexport" %}

```typescript

import { Grid, Page, Toolbar, PdfExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
if (args['item'].id === 'Grid_pdfexport') {
        grid.pdfExport();
    }

}

```

{% endtab %}

## Show spinner while exporting

You can show/ hide spinner component while exporting the grid using `showSpinner`/ `hideSpinner` methods. You can use `toolbarClick` event to show spinner before exporting and hide a spinner in the `pdfExportComplete` or `excelExportComplete` event after the exporting.

In the `toolbarClick` event, based on the parameter `args.item.id` as `Grid_pdfexport` or `Grid_excelexport` we can call the `showSpinner` method from grid instance.

In the `pdfExportComplete` or `excelExportComplete` event, We can call the `hideSpinner` method.

In the below demo, we have rendered the default spinner component when exporting the grid.

{% tab template="grid/grid",es5Template="show-spinner-export" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport, ExcelExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowExcelExport: true,
    toolbar: ['PdfExport', 'ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', textAlign: 'Right', width: 140 }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.showSpinner();
        grid.pdfExport();
    }
    if (args['item'].id === 'Grid_excelexport') {
        grid.showSpinner();
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.hideSpinner();
    }
grid.excelExportComplete = () => {
        grid.hideSpinner();
    }

```

{% endtab %}

## Custom data source

PDF export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`

{% tab template="grid/grid",es5Template="exportcustom" %}

```typescript

import { Grid, Toolbar, Page, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let exportProperties: PdfExportProperties = {
            dataSource: data,
        };
        grid.pdfExport(exportProperties);
    }
}


```

{% endtab %}

## Passing additional parameters to the server when exporting

You can pass the additional parameter in the `query` property by invoking `addParams` method. In the `toolbarClick` event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed `recordcount` as `12` using `addParams` method.

{% tab template="grid/grid",es5Template="addparams-exporting" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, ExcelExport } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Toolbar, PdfExport, ExcelExport);

let queryClone: Object;
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowExcelExport: true,
    toolbar: ['PdfExport', 'ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', textAlign: 'Right', width: 140 }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        queryClone = grid.query;
        grid.query = new Query().addParams("recordcount", "12");
        grid.pdfExport();
    }
    if (args['item'].id === 'Grid_excelexport') {
        queryClone = grid.query;
        grid.query = new Query().addParams("recordcount", "12");
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.query = queryClone;
    }
grid.excelExportComplete = () => {
        grid.query = queryClone;
    }

```

{% endtab %}

## Passing the selected records to the server using ajax request via custom toolbar button click

You can pass the selected records to the server with the help of an ajax request. In the `toolbarClick` event, you can get the selected records using the [`getSelectedRecords`](../../api/grid/#getselectedrecords) method and pass the selected records to the server using the **data** property of the ajax.

```typescript
import { Grid, Page,Toolbar } from '@syncfusion/ej2-grids';
import { Ajax } from '@syncfusion/ej2-base';

Grid.Inject(Page,Toolbar);
let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    toolbar: ['Selected'],
    columns: [
        { type: 'checkbox', width: 50, },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
        { field: 'CustomerID', width: 140, headerText: 'CustomerID'},
        { field: 'ShipCity', headerText: 'Ship Country', width: 140 }
    ],
    toolbarClick: function (args) {
        if (args.item.text === 'Selected') {
            var selectedRecord = this.getSelectedRecords();
            var ajax = new Ajax({
                url: "/Home/SelectRecord",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(selectedRecord),
                successHandler: function (response) {
                    console.log(JSON.parse(response));
                },
                failure: function (response) {
                    alert(response);
                }
            });
            ajax.send();
        }
    },
});
grid.appendTo('#Grid');
```

The selected record details are bound to the `row` parameter. Please refer to the following screenshot.

![Selected record](../images/selected.jpg)

## See Also

* [How to Exporting Grid in Cordova application](../how-to/exporting-grid-in-cordova-application)