


import { MultiColumnComboBox, ColumnModel } from '@syncfusion/ej2-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const columns: ColumnModel[] = [
    { field: 'OrderID', header: 'Order ID', width: 120 },
    { field: 'CustomerID', header: 'Customer ID', width: 130 },
    { field: 'ShipCountry', header: 'Ship Country', width: 120 }
];

let virtualComboboxObj: MultiColumnComboBox = new MultiColumnComboBox({
    dataSource: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Orders',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    }),
    columns: columns,
    enableVirtualization: true,
    fields: { text: 'ShipCountry', value: 'CustomerID' },
    popupHeight: '230px',
    placeholder: 'Select a country',
    gridSettings: { rowHeight: 40 }
});
virtualComboboxObj.appendTo('#multicolumn');



