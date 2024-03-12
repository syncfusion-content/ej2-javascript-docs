ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport);

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPdfExport: true,
    toolbarClick: toolbarClick,
    toolbar: ['PdfExport'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipAddress', headerText: 'ShipAddress', width: 130 },
        { field: 'ShipRegion', headerText: 'ShipRegion', width: 90 },
        { field: 'ShipPostalCode', headerText: 'Ship PostalCode', width: 90 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 }
    ],
    height: 272
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    checked: false,
});
toggle.appendTo('#switch');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        // 'Grid_pdfexport' -> Grid control id + _ + toolbar item name
        var pdfExportProperties = {
            allowHorizontalOverflow: !(toggle.checked)
        };
        grid.pdfExport(pdfExportProperties);
    }
}