import { Grid, Edit, Toolbar, EditEventArgs, ChangeEventArgs, Filter } from '@syncfusion/ej2-grids';
import { employeeDetails } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject( Edit, Toolbar, Filter);

let jobRole: { [key: string]: Object }[] = [
    { role: 'TeamLead' },
    { role: 'Manager' },
    { role: 'Engineer' },
    { role: 'Sales' },
    { role: 'Support' }
];

let salaryDetails: { [key: string]: Object }[] = [
    { salary: 6000 },
    { salary: 17000 },
    { salary: 18000 },
    { salary: 26000 },
    { salary: 25000 },
    { salary: 40000 },
    { salary: 35000 },
    { salary: 55000 },
    { salary: 65000 },
];

let grid: Grid = new Grid({
    dataSource: employeeDetails,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    load: () => {
        let column = grid.getColumnByField('Salary');
        column.validationRules = {
            required: [customFn,'Please enter valid salary'],
        };
    },
    actionBegin: (args: EditEventArgs) => {
        window['role'] = args.rowData as { Role: string }['Role'];
    },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'Role', headerText: 'Role', width: 120, editType: 'dropdownedit',
            edit: {
                params: {
                    query: new Query(),
                    dataSource: jobRole,
                    fields: { value: 'role', text: 'role' },
                    allowFiltering: true,
                    change: valChange
                }
           }
        },
        { field: 'Salary', headerText: 'Salary', width: 160, textAlign: 'Right', editType: 'dropdownedit',
            edit: {
                params: {
                    query: new Query(),
                    dataSource: salaryDetails,
                    fields: { value: 'salary', text: 'salary' },
                    allowFiltering: true
                }
            }
        },
        { field: 'Address', headerText: 'Address', width: 160, validationRules: { required: true }}
    ]
});
grid.appendTo('#Grid');

window.role = '';

function customFn(args) {
    let formObj = grid.editModule.formObj.element['ej2_instances'][0];
    switch (window['role']) {

        case 'Sales':
            if ((args.value >= 5000) && (args.value < 15000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

            break;

        case 'Support':
            if ((args.value >= 15000 && args.value < 19000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

            break;

        case 'Engineer':
            if ((args.value >= 25000 && args.value < 30000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

            break;

        case 'TeamLead':
            if ((args.value >= 30000) && (args.value < 50000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

            break;

        case 'Manager':
            if ((args.value >= 50000) && (args.value < 70000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

            break;

    }
    return false;
}

function valChange(args: ChangeEventArgs) {
    window['role'] = args.value.toString(); // Explicitly cast args.value to string
    let formObj = grid.editModule.formObj.element['ej2_instances'][0];

    switch ( window['role']) {

        case 'Sales':
            formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

            break;

        case 'Support':
            formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

            break;

        case 'Engineer':
            formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

            break;

        case 'TeamLead':
            formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

            break;

        case 'Manager':
            formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

            break;
    }
}

declare global {
    interface Window {
        role: string;
    }
}