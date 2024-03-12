import { Grid, Toolbar, PdfExport,ClickEventArgs,PdfExportProperties } from '@syncfusion/ej2-grids';
import { data, changedData} from './datasource.ts';

Grid.Inject(Toolbar, PdfExport);

let grid: Grid = new Grid({
    dataSource: data,
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 110},
        { field: 'ShipName', headerText: 'Ship Name', width: 120}
    ],
    height: 220
});
grid.appendTo('#Grid');

function toolbarClick(args: ClickEventArgs) {
    if (args.item.id === 'Grid_pdfexport') { 
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        let pdfExportProperties: PdfExportProperties = {
            dataSource: changedData,
        };
        (grid as Grid).pdfExport(pdfExportProperties);
    } 
}