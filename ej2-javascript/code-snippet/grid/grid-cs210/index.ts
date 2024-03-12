import { Grid, Toolbar, PdfExport,  ClickEventArgs,PdfExportProperties} from '@syncfusion/ej2-grids';
import { data,employeeData } from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let firstGrid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    exportGrids: ['FirstGrid', 'SecondGrid'],
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
      {field: 'OrderID',headerText: 'Order ID',textAlign: 'Right',width: 120,type: 'number'},
      {field: 'CustomerID',width: 140,headerText: 'Customer ID',type: 'string'},
      {field: 'ShipCity',headerText: 'Ship City',textAlign: 'Right',width: 120},
      {field: 'ShipName',headerText: 'Ship Name',textAlign: 'Right',width: 120}
    ]
});
firstGrid.appendTo('#FirstGrid');

let SecondGrid: Grid = new Grid({
    dataSource: employeeData,
    allowPdfExport: true,
    columns: [
      {field: 'EmployeeID',headerText: 'Employee ID',textAlign: 'Right',width: 90},
      {field: 'FirstName',headerText: 'First Name',width: 100},
      {field: 'LastName',headerText: 'Last Name',width: 100},
      {field: 'City', headerText: 'City', width: 100 }
    ]
});
SecondGrid.appendTo('#SecondGrid');

let appendPdfExportProperties: PdfExportProperties = {
  multipleExport: { type: 'NewPage' },
};

function toolbarClick(args: ClickEventArgs) {
  if (args.item.text === 'PDF Export') {
    // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
    (firstGrid as Grid).pdfExport(appendPdfExportProperties, true);
  }
};