


import { MultiColumnComboBox, ColumnModel } from '@syncfusion/ej2-multicolumn-combobox';

let data: Function = (count: number) => {
    let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
    let hours = [8, 12, 16];
    let status = ["Pending", "Completed", "In Progress"];
    let designation = ["Engineer", "Manager", "Tester"];
    let result: Object[] = [];
    for (let i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.floor(Math.random() * names.length)],
            Designation: designation[Math.floor(Math.random() * designation.length)],
            Estimation: hours[Math.floor(Math.random() * hours.length)],
            Status: status[Math.floor(Math.random() * status.length)]
        });
    }
    return result;
};

const columns: ColumnModel[] = [
    { field: 'TaskID', header: 'Task ID', width: 100 },
    { field: 'Engineer', header: 'Engineer', width: 140 },
    { field: 'Designation', header: 'Designation', width: 130 },
    { field: 'Estimation', header: 'Estimation', width: 120 },
    { field: 'Status', header: 'Status', width: 120, }
];

let virtualComboboxObj: MultiColumnComboBox = new MultiColumnComboBox({
    dataSource: data(150),
    columns: columns,
    enableVirtualization: true,
    fields: { text: 'Engineer', value: 'TaskID'},
    popupHeight: '230px',
    placeholder: 'Select an engineer',
    gridSettings: { rowHeight: 40 }
});
virtualComboboxObj.appendTo('#multicolumn');



