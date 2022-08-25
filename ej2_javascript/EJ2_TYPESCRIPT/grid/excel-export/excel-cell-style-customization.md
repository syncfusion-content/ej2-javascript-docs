# Excel Cell Style Customization

## Conditional cell formatting

Grid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](../../api/grid/#excelQueryCellInfo) event. In this event, we can format the grid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Freight` column in the exported excel by `args.cell` and `backColor` property.

{% tab template="grid/grid",es5Template="cell-format-excel" %}

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
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ],
    height: 230
});
grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
}
grid.excelQueryCellInfo = (args: Object) => {
        if(args.column.field == 'Freight'){
            if(args.value < 30) {
                args.style = {backColor: '#99ffcc'};
            }
            else if(args.value < 60) {
                args.style = {backColor: '#ffffb3'};
            }
            else {
                args.style = {backColor: '#ff704d'};
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
grid.appendTo('#Grid');

```

{% endtab %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the `theme` in `exportProperties` .

{% tab template="grid/grid",es5Template="exceltheme" %}

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
            theme:
                {
                    header: { fontName: 'Segoe UI', fontColor: '#666666' },
                    record: { fontName: 'Segoe UI', fontColor: '#666666' },
                    caption: { fontName: 'Segoe UI', fontColor: '#666666' }
                }
        };
        grid.excelExport(excelExportProperties);

    }
}
grid.appendTo('#Grid');

```

{% endtab %}

>By default, material theme is applied to exported excel document.

## Rotate a header text to a certain degree in the exported grid

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the [excelHeaderQueryCellInfo](../../api/grid#excelheaderquerycellinfo) event of the Grid.

The `excelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported. Customize the column header in this event.

In the following demo, using the `rotation` property of the style argument in the `excelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

{% tab template="grid/toolbar-dropdown",es5Template="excel-header" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page, ActionEventArgs  } from '@syncfusion/ej2-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string', customAttributes:{ class: 'orientationcss' }, textAlign: 'Center' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    created: setHeaderHeight,
    excelHeaderQueryCellInfo: (args) => {
        let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        if (args.gridCell.column.field == 'Freight') {
            args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
        }
        else {
            args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
        }
        args.cell.cellHeight = textWidth;
    },
    excelQueryCellInfo: (args) => {
        if (args.column.field == 'Freight') {
            if (args.value < 30) {
                args.style = { backColor: '#99ffcc' };
            }
            else if (args.value < 60) {
                args.style = { backColor: '#ffffb3' };
            }
            else {
                args.style = { backColor: '#ff704d' };
            }
        }
    }
    height: 230
});
grid.appendTo('#Grid');

function setHeaderHeight(args: ActionEventArgs): void {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth;
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px';
    }
}

grid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'Grid_excelexport') {
        grid.excelExport();
    }
}

let degree = [90, 180, 45, 135, 225, -90];
let dropDownListObject: DropDownList = new DropDownList({
    dataSource: degree,
    placeholder: "Select a degree"
});
dropDownListObject.appendTo('#ddlelement');

```

{% endtab %}