var grid = new ej.grids.Grid({
    dataSource: categoryData,
    columns: [
            {
                headerText: 'Discontinued', textAlign: 'Center',
                template: '#template', width: 150
            },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 150 },
            { field: 'CategoryName', headerText: 'Category Name', width: 150 },
            { field: 'ProductName', headerText: 'Product Name', width: 150 }
        ],
    height: 315
});
grid.appendTo('#Grid');