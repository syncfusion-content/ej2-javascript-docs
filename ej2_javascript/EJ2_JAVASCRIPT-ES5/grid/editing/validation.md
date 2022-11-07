# Validation

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
Grid uses `Form Validator` component for column validation.
You can set validation rules by defining the [`columns.validationRules`](../../api/grid/column/#validationrules).

{% tab template="grid/grid",es5Template="editvalidation" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Custom validation

You can define your own custom validation rules for the specific columns by using `Form Validator custom rules`.

In the below demo, custom validation applied for `CustomerID` column.

{% tab template="grid/grid",es5Template="customedit" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    return args['value'].length >= 5;
};

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: [customFn, 'Need atleast 5 letters'] } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

### Custom validation based on dropdown change

You can apply validation rules and messages to a column based on another column value in edit mode. You can achieve this requirement by using the custom validation feature of Grid.

In the following sample, dropdownlist edit type is used for the **Role** and **Salary** columns. Here, you can apply the custom validation in the **Salary** column based on the value selected in the **Role** column.

{% tab template="grid/grid",es5Template="dropdown-change" %}

```typescript
import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { employeeDetails } from './datasource.ts';
import { Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Edit, Toolbar);

let jobRole: { [key: string]: Object }[] = [
    { role: 'TeamLead', destId: '0' },
    { role: 'Manager', destId: '1' },
    { role: 'Engineer', destId: '2' },
    { role: 'Sales', destId: '3' },
    { role: 'Support', destId: '4' },
];

let salaryDetails: { [key: string]: Object }[] = [
    { salary: '11000', destId: '1' },
    { salary: '13500', destId: '2' },
    { salary: '16500', destId: '2' },
    { salary: '18500', destId: '1' },
    { salary: '21500', destId: '2' },
    { salary: '23000', destId: '2' },
];

let grid: Grid = new Grid({
    dataSource: employeeDetails,
    allowPaging: true,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    load: () => {
        var column = grid.getColumnByField('Salary');
        column.validationRules = {
            required: [customFn, window['Please enter valid salary']],
        };
    },
    columns: [
        {
            field: 'EmployeeID',
            headerText: 'Employee ID',
            isPrimaryKey: true,
            textAlign: 'Right',
            width: 120
        },
        {
            field: 'Role',
            headerText: 'Role',
            width: 120,
            editType: 'dropdownedit',
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
        {
            field: 'Salary',
            headerText: 'Salary',
            width: 160,
            editType: 'dropdownedit',
            edit: {
                params: {
                    query: new Query(),
                    dataSource: salaryDetails,
                    fields: { value: 'salary', text: 'salary' },
                    allowFiltering: true
                }
            }
        },
        {
            field: 'Address',
            headerText: 'Address',
            width: 160
        }
    ]
});
grid.appendTo('#Grid');

(window as any).role = '';

function customFn(args) {
    switch (window['role']) {
        case 'Engineer':
            if (args.value > 10000 && args.value < 15000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary';
            }
        break;

        case 'TeamLead':
            if (args.value > 15000 && args.value < 20000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary';
            }
        break;

        case 'Manager':
            if (args.value > 20000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Sales':
            if (args.value > 5000 && args.value < 25000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;

        case 'Support':
            if (args.value > 10000 && args.value < 19000) {
                return true;
            } else {
                this.rules['Salary']['required'][1] = 'Please enter valid Manager Salary';
            }
        break;
    }
    return false;
}

function valChange(args) {
    window['role'] = args.value;
}

```

{% endtab %}