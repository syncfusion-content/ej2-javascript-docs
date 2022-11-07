# PDF Export Options

## Export current page

PDF export provides an option to export the current page into PDF. To export current page, define the `exportType` to `CurrentPage`.

{% tab template="grid/grid",es5Template="exportpage" %}

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
            exportType: 'CurrentPage'
        };
        grid.pdfExport(exportProperties);
    }
}

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

## Export filtered data only

You can export the filtered data by defining the resulted data in `exportProperties.dataSource` before export.

In the below Pdf exporting demo, We have gotten the filtered data by applying filter query to the grid data and then defines the resulted data in `exportProperties.dataSource` and pass it to `pdfExport` method.

{% tab template="grid/exporting-filtered-data", es5Template="exporting-filtered-data" %}

```typescript
import { Grid, Page, Toolbar, PdfExport, Filter } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';
import {DataManager} from '@syncfusion/ej2-data';

Grid.Inject(Page, Toolbar, PdfExport, Filter);
let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPdfExport: true,
        allowPaging: true,
        allowFiltering: true,
        toolbar: ['PdfExport'],
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
        let pdfdata;
        let query = grid.renderModule.data.generateQuery(); // get grid corresponding query
        for (var i = 0; i < query.queries.length; i++) {
            if (query.queries[i].fn == 'onPage') {
                query.queries.splice(i, 1);    // remove page query to get all records
                break;
            }
        }
        let fdata = new DataManager({ json: data }).executeQuery(query).then((e: any) => {
            pdfdata = <Object[]>e.result;   // get all filtered records
            let exportProperties = {
                dataSource: pdfdata,
            };
            grid.pdfExport(exportProperties);
        }).catch((e) => true);
    }
}

```

{% endtab %}

## Export hidden columns

PDF export provides an option to export hidden columns of Grid by defining the `includeHiddenColumn` as `true`.

{% tab template="grid/grid",es5Template="exporthidden" %}

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
        { field: 'ShipCountry', width: 140, headerText: 'Ship Country', visible: false },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let exportProperties: PdfExportProperties = {
            includeHiddenColumn: true
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}

## Show or hide columns

You can show a hidden column or hide a visible column while exporting the grid using [`toolbarClick`](../../api/grid/#toolbarclick) and [`pdfExportComplete`](../../api/grid/#pdfexportcomplete) events.

In the `toolbarClick` event, based on `args.item.id` as `Grid_pdfexport`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the pdfExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `CustomerID` as a hidden column in the grid. While exporting, we have changed `CustomerID` to visible column and `ShipCity` as hidden column.

{% tab template="grid/grid",es5Template="show-hide-pdf" %}

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
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'ShipCity', textAlign: 'Right', width: 140 }
    ],
    height: 230
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
        grid.pdfExport();
    }
}
grid.pdfExportComplete = () => {
        grid.columns[1].visible = false;
        grid.columns[3].visible = true;
    }

```

{% endtab %}

## Change page orientation

Page orientation can be changed Landscape(Default Portrait) for the exported document using the `exportProperties`.

{% tab template="grid/grid",es5Template="pageorientation" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
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
            pageOrientation: 'Landscape',
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}

## Change page size

Page size can be customized for the exported document using the `exportProperties`.
Supported page sizes are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

{% tab template="grid/grid" ,es5Template="pagesize" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
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
            pageSize: 'Letter'
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}

## Define file name

You can assign the file name for the exported document by defining `fileName` property in [`PdfExportProperties`](../../api/grid/pdfExportProperties).

{% tab template="grid/grid",es5Template="pdfexportfile" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    pageSettings: { pageSize: 6 },
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 220
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let exportProperties: PdfExportProperties = {
           fileName:"new.pdf"
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}

## Font customization

### Default fonts

By default, grid uses `Helvetica` font in the exported document. You can change the default font by using `pdfExportProperties.theme` property. The available default fonts are,

* Helvetica
* TimesRoman
* Courier
* Symbol
* ZapfDingbats

The code example for changing default font,

```typescript

    import { PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';

    ...

    let pdfExportProperties: PdfExportProperties = {
        theme: {
            header: {font:  new PdfStandardFont(PdfFontFamily.TimesRoman, 11, PdfFontStyle.Bold),
            caption: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 9) },
            record: { font: new PdfStandardFont(PdfFontFamily.TimesRoman, 10) }
        }
    };

```

### Add custom font

You can change the default font of Grid header, content and caption cells in the exported document by using `pdfExportProperties.theme` property.

In the following example, we have used Advent Pro font to export the grid with Hungarian fonts.

{% tab template="grid/gridcustomfont", sourceFiles="index.ts,index.html,datasource.ts", es5Template="customfont" %}

```typescript

import { Grid, Page, Toolbar, PdfExport, Group, PdfExportProperties } from '@syncfusion/ej2-grids';
import { data, adventProFont } from './datasource.ts';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

Grid.Inject(Page, Toolbar, PdfExport, Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowPdfExport: true,
    allowGrouping: true,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Rendelés azonosító', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Ügyfél-azonosító', type: 'string' },
        { field: 'Freight', headerText: 'fuvar', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Rendelés dátuma', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 172
});
grid.appendTo('#Grid');
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_pdfexport') {
        let pdfExportProperties: PdfExportProperties = {
            theme: {
                header: {font:  new PdfTrueTypeFont(adventProFont, 12) },
                caption: { font: new PdfTrueTypeFont(adventProFont, 10) },
                record: { font: new PdfTrueTypeFont(adventProFont, 9) }
            }
        };
        grid.pdfExport(pdfExportProperties);
    }
}

```

{% endtab %}

> `PdfTrueTypeFont` accepts base 64 format of the Custom Font.