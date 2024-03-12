ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);

var grid = new ej.grids.Grid({
    dataSource: data,
    gridLines: 'Both',
    allowPdfExport: true,
    allowPaging: true,
    toolbar: ['PdfExport'],
    pdfQueryCellInfo: pdfQueryCellInfo,
    queryCellInfo: queryCellInfo,
    toolbarClick: toolbarClick,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        {field: 'Freight', headerText: 'Freight', width: 80},
        { field: 'ShipCity', headerText: 'Ship City', width: 100},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100}
    ],
    height: 272
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport();
    }
}

function queryCellInfo(args) {
    let data = (args.data).OrderID;
    switch (data) {
        case 10248:
            if ((args.column).field === 'CustomerID') {
                args.rowSpan = 2;
            }
            break;
        case 10250:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 2;
            }
            break;
        case 10252:
            if ((args.column).field === 'OrderID') {
                args.rowSpan = 3;
            }
            break;
        case 10256:
            if ((args.column).field === 'CustomerID') {
                args.colSpan = 3;
            }
            break;
        case 10261:
            if ((args.column).field === 'Freight') {
                args.colSpan = 2;
            }
            break;
    }
}

function pdfQueryCellInfo(args)
{
    let data = (args.data).OrderID;
        switch (data) {
            case 10248:
                if ((args.column).field === 'CustomerID') {
                    (args.cell ).rowSpan = 2;
                }
                break;
            case 10250:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 2;
                }
                break;
            case 10252:
                if ((args.column).field === 'OrderID') {
                    (args.cell ).rowSpan = 3;
                }
                break;
            case 10256:
                if ((args.column).field === 'CustomerID') {
                    args.colSpan = 3;
                }
                break;
            case 10261:
                if ((args.column).field === 'Freight') {
                    args.colSpan = 2;
                }
                break;
        }
}