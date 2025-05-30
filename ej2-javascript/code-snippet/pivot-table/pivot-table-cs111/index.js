import {} from './es5-datasource.js';
var remoteData = new ej.data.DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
  adaptor: new ej.data.ODataV4Adaptor(),
  crossDomain: true,
});

remoteData.defaultQuery = new ej.data.Query().take(2);
var pivotTableObj = new ej.pivotview.PivotView({
  dataSourceSettings: {
    dataSource: remoteData,
    expandAll: false,
    columns: [{ name: 'CustomerID', caption: 'Customer ID' }],
    rows: [
      { name: 'ShipCountry', caption: 'Ship Country' },
      { name: 'ShipCity', caption: 'Ship City' },
    ],
    values: [{ name: 'Freight' }],
  },
  height: 350,
  width: '100%',
  gridSettings: { columnWidth: 120 },
});
pivotTableObj.appendTo('#PivotTable');
