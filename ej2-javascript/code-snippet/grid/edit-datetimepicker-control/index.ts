
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid(
  {
    dataSource: data,
    editSettings:  { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', validationRules: { required: true, number: true }, isPrimaryKey: true, width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', validationRules:  { required: true }, width: 150},
        { field: 'OrderDate', headerText: 'Order Date', width: 150, format: 'MM-dd-yyyy hh mm aa', editType: 'datetimepickeredit', validationRules:  { required: true }, edit: { params: {
            showClearButton : false,
            format:'MM-dd-yyyy hh:mm aa',
            start:'Year',
           }}}
    ],
    height: 265
  });
grid.appendTo('#Grid');