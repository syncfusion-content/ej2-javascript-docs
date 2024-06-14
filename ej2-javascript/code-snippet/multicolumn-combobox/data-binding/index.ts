


import { MultiColumnComboBox, ColumnModel } from '@syncfusion/ej2-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const columns: ColumnModel[] = [
    { field: 'EmployeeID', header: 'Employee ID', width: 120 },
    { field: 'FirstName', header: 'Name', width: 130 },
    { field: 'Designation', header: 'Designation', width: 120 },
    { field: 'Country', header: 'Country', width: 90 },
];

let multicolumnObj: MultiColumnComboBox = new MultiColumnComboBox({
    dataSource: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    }),
    columns: columns,
    fields: { text: 'FirstName', value: 'EmployeeID' },
    placeholder: 'Select a name',
    popupHeight: '230px'
});
multicolumnObj.appendTo('#multicolumn');



