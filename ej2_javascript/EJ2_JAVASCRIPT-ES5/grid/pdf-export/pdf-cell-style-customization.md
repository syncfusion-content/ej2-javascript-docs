# PDF Cell Style Customization

## Conditional cell formatting

Grid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](../../api/grid/#pdfquerycellinfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Freight` column in the exported document by `args.cell` and `backgroundColor` property.

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
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
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
grid.pdfQueryCellInfo = (args: Object) => {
        if(args.column.field == 'Freight'){
            if(args.value < 30) {
                args.style = {backgroundColor: '#99ffcc'};
            }
            else if(args.value < 60) {
                args.style = {backgroundColor: '#ffffb3'};
            }
            else {
                args.style = {backgroundColor: '#ff704d'};
            }
        }
    }
grid.queryCellInfo = (args: Object) => {
        if(args.column.field == 'Freight'){
            if(args.data['Freight'] < 30) {
                args.cell.bgColor = '#99ffcc';
            }
            else if(args.data['Freight'] < 60) {
                args.cell.bgColor = '#ffffb3';
            }
            else {
                args.cell.bgColor = '#ff704d';
            }
        }
    }

```

{% endtab %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `exportProperties` .

{% tab template="grid/grid",es5Template="exporttheme" %}

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
            theme: {
                header: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true, borders: { color: '#64FA50', lineStyle: 'Thin' }
                },
                record: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                },
                caption: {
                    fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                }
            }
        };
        grid.pdfExport(exportProperties);
    }
}

```

{% endtab %}

> By default, material theme is applied to exported PDF document.