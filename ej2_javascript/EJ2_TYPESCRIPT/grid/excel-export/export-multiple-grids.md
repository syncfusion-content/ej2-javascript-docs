# Export Multiple Grids

The excel export provides an option to export multiple grid data in the same excel file.

## Same sheet

The excel export provides support to export multiple grids in same sheet. To export in same sheet, define `multipleExport.type` as `AppendToSheet` in `exportProperties`. It have an option to provide blank rows between grids. These blank rows count can be defined by using the`multipleExport.blankRows`.

{% tab template="grid/export-mutiple-grid",es5Template="samesheet" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let firstGrid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ]
});
let secondGrid: Grid = new Grid({
    dataSource: employeeData.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', width: 140, headerText: 'Last Name', type: 'string' },
        { field: 'City', headerText: 'City', textAlign: 'Right', width: 120 },
        { field: 'BirthDate', headerText: 'Birth Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ]
});

firstGrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'FirstGrid_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'AppendToSheet', blankRows: 2 }
        };

        let firstGridExport: Promise<any> = firstGrid.excelExport(appendExcelExportProperties, true);
        firstGridExport.then((fData: any) => {
            secondGrid.excelExport(appendExcelExportProperties, false, fData);
        });
    }

}
firstGrid.appendTo('#FirstGrid');
secondGrid.appendTo('#SecondGrid');


```

{% endtab %}

>By default, `multipleExport.blankRows` value is 5.

## New sheet

Excel exporting provides support to export multiple grids in new sheet. To export in new sheet, define  `multipleExport.type` as `NewSheet` in `exportProperties`.

{% tab template="grid/export-mutiple-grid",es5Template="newsheet" %}

```typescript

import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let firstGrid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' }
    ]
});
let secondGrid: Grid = new Grid({
    dataSource: employeeData.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'LastName', width: 140, headerText: 'Last Name', type: 'string' },
        { field: 'City', headerText: 'City', textAlign: 'Right', width: 120 },
        { field: 'BirthDate', headerText: 'Birth Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ]
});

firstGrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'FirstGrid_excelexport') {

        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'NewSheet' }
        };

        let firstGridExport: Promise<any> = firstGrid.excelExport(appendExcelExportProperties, true);
        firstGridExport.then((fData: any) => {
            secondGrid.excelExport(appendExcelExportProperties, false, fData);
        });
    }
}

firstGrid.appendTo('#FirstGrid');
secondGrid.appendTo('#SecondGrid');

```

{% endtab %}