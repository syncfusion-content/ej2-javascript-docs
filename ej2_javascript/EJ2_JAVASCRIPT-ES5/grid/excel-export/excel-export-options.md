# Excel Export Options

The excel export provides an option to customize mapping of the grid to excel document.

## Export current page

The excel export provides an option to export the current page into excel. To export current page, define `exportType` to `CurrentPage`.

{% tab template="grid/grid",es5Template="exportcurrent" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            exportType: 'CurrentPage'
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');

```

{% endtab %}

## Export the selected records only

You can export the selected records data by passing it to `exportProperties.dataSource` Property in the `toolbarClick` event.

In the below exporting demo, We can get the selected records using `getSelectedRecords` method and pass the selected data to `PdfExport` or `excelExport` property.

{% tab template="grid/grid", es5Template="exporting-selected-data" %}

```typescript
import { Grid, Page, Toolbar, PdfExport, Filter, ExcelExport } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';
import {DataManager} from '@syncfusion/ej2-data';

Grid.Inject(Page, Toolbar, PdfExport, Filter, ExcelExport);
let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPdfExport: true,
        allowExcelExport: true,
        allowPaging: true,
        allowFiltering: true,
        selectionSettings: {type: 'Multiple'},
        toolbar: ['PdfExport', 'ExcelExport'],
        pageSettings: { pageCount: 5, pageSize: 5 },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 150 }
        ],
    });
grid.appendTo('#Grid');
grid.toolbarClick = (args: ClickEventArgs) => {
    if (args.item.id === 'Grid_pdfexport') {
        let pdfdata = grid.getSelectedRecords();
            let exportProperties = {
                dataSource: pdfdata,
            };
            grid.pdfExport(exportProperties);
        }
    else if (args.item.id === 'Grid_excelexport') {
        let exceldata = grid.getSelectedRecords();
            let exportProperties = {
                dataSource: exceldata,
            };
            grid.pdfExport(exportProperties);
        }
    }

```

{% endtab %}

## Export hidden columns

The excel export provides an option to export hidden columns of grid by defining `includeHiddenColumn` as `true`.

{% tab template="grid/grid",es5Template="exporthide" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page)

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCountry', width: 140, headerText: 'Ship Country', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            includeHiddenColumn: true
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');

```

{% endtab %}

## Show or hide columns

You can show a hidden column or hide a visible column while printing the grid using [`toolbarClick`](../../api/grid/#toolbarclick) and [`excelExportComplete`](../../api/grid/#excelExportComplete) events.

In the `toolbarClick` event, based on `args.item.id` as `Grid_excelexport`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `CustomerID` as a hidden column in the grid. While exporting, we have changed `CustomerID` to visible column and `ShipCity` as hidden column.

{% tab template="grid/grid",es5Template="show-hide-excel" %}

```typescript

import { Grid, Toolbar, ExcelExport, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140, textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
        grid.excelExport();
    }
}
grid.pdfExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }
grid.appendTo('#Grid');

```

{% endtab %}

## Export with filter options

The excel export provides an option to export with filter option in excel by defining `enableFilter` as **true** .
It requires the [`allowFiltering`](../../api/grid/#allowfiltering) to be true.

{% tab template="grid/grid",es5Template="excel-enablefilter" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page, Filter} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    allowFiltering: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            enableFilter: true
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');

```

{% endtab %}

## Exporting grouped records

The excel export provides outline option for grouped records which hides the detailed data for better viewing.
In grid, we have provided the outline option for the exported document when the data's are grouped.

{% tab template="grid/grid",es5Template="exportgroup" %}

```typescript

import { Grid, Toolbar, ExcelExport, Group} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    allowGrouping: true,
    groupSettings: { columns: ['OrderID', 'CustomerID']};
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
}
grid.appendTo('#Grid');

```

{% endtab %}

## Define file name

You can assign the file name for the exported document by defining `fileName` property in [`ExcelExportProperties`](../../api/grid/#excelExportProperties).

{% tab template="grid/grid",es5Template="exportfilename" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        let excelExportProperties: ExcelExportProperties = {
            fileName:"new.xlsx"
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');

```

{% endtab %}