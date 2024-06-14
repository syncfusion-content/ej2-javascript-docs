


import { MultiColumnComboBox, ColumnModel } from '@syncfusion/ej2-multicolumn-combobox';


let columnsData: ColumnModel[] = [
    { field: 'EmpID', header: 'Employee ID', width: 90 },
    { field: 'Name', width: 90, header: 'Name' },
    { field: 'Designation', header: 'Designation', width: 90 },
    { field: 'Country', header: 'Country', width: 70 }
];

let multiComboBoxObject: MultiColumnComboBox = new MultiColumnComboBox({
    dataSource: [],
    columns: columnsData,
    placeholder:"Select an employee",
    fields: { text: 'Name', value: 'EmpID' },
    noRecordsTemplate: "<span class='norecord'> NO RECORDS FOUND </span>"
});

// render initialized MultiColumn ComboBox
multiComboBoxObject.appendTo('#multicolumn');



