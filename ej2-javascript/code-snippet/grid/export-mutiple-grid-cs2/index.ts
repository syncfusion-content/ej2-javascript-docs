


import { Grid, Toolbar, ExcelExport, ExcelExportProperties, Page } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(Toolbar, ExcelExport, Page);

let firstGrid: Grid = new Grid({
    dataSource: data.slice(0, 5),
    allowPaging: true,
    allowExcelExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['ExcelExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
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
        { field: 'City', headerText: 'City', width: 120 },
    ]
});

firstGrid.toolbarClick = (args: Object) => {
    if (args['item'].id === 'FirstGrid_excelexport') {
        let appendExcelExportProperties: ExcelExportProperties = {
            multipleExport: { type: 'NewSheet' }
        };
        firstGrid.excelExport(appendExcelExportProperties, true);;
    }
}

firstGrid.appendTo('#FirstGrid');
secondGrid.appendTo('#SecondGrid');



