let customers = new ej.data.DropDownList({
    //bind the DataManager instance to dataSource property.
    dataSource: new ej.data.DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ej.data.ODataV4Adaptor,
        crossDomain: true
    }),
    query: new ej.data.Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
    fields: { text: 'ContactName', value: 'CustomerID' },
    placeholder:"Select a customer",
    sortOrder: 'Ascending'
});

customers.appendTo('#ddlelement');