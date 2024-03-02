ej.grids.Grid.Inject(ej.grids.Group, ej.grids.LazyLoadGroup, ej.grids.InfiniteScroll);
var grid = new ej.grids.Grid({
    dataSource: data,
    enableInfiniteScrolling: true,
    allowGrouping: true,
    groupSettings: { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'ProductName', headerText: 'Product Name', width: 100 },
        { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 120 }
    ],
    height: 315,
});
grid.appendTo('#Grid');