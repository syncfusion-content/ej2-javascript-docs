ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150},
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') { 
        grid.pdfExport();
    }
}