var data = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ej.data.ODataAdaptor,
    crossDomain: true
});

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: data,
        expandAll: true,
        filters: [],
        columns: [{ name: 'CustomerID', caption: 'Customer Name' }],
        rows: [{ name: 'OrderID', caption: 'Order ID' } ],
        values: [{ name: 'Freight' }]
    },
    height: 350,
    width: '100%',
    gridSettings: { columnWidth: 120 }
});
pivotTableObj.appendTo('#PivotTable');


