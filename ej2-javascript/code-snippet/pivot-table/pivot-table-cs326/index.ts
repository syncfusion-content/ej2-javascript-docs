

import { PivotView } from '@syncfusion/ej2-pivotview';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

let remoteData: DataManager = new DataManager({
  url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders',
  adaptor: new ODataAdaptor(),
  crossDomain: true
});
remoteData.defaultQuery = new Query().take(2);

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: remoteData,
        expandAll: false,
        columns: [{ name: 'CustomerID', caption: 'Customer ID' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        values: [{ name: 'Freight' }]
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



