import { Grid, Edit, Toolbar,QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
<<<<<<< HEAD
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
=======
import { CheckBox,ChangeEventArgs } from '@syncfusion/ej2-buttons';
>>>>>>> 3e4292b7c985da37c845d13e076d35157e5979e7
import { data } from './datasource.ts';

Grid.Inject(Edit,Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: {   allowEditing: true, allowAdding: true, allowDeleting: true },
    queryCellInfo: queryCellInfo,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID' ,isPrimaryKey: true,textAlign: 'Right', width: 120,validationRules: { required: true}},
        { field: 'CustomerID', headerText: 'Customer Name', width: 120,validationRules: { required: true  } },
        { field: 'OrderDate', headerText: 'Order Date',editType: 'datepickeredit',format: "M/d/yy" ,textAlign: 'Right',validationRules: { required: true  } , width: 130,type: 'date'},
        { field: 'Freight', headerText: 'Freight',format: 'C2',textAlign: 'Right', width: 90,validationRules: { required: true, min: 1, max: 1000 }},
        { field: 'Verified',headerText: 'Verified',textAlign: 'Right', width: 90,validationRules: { required: true  },template: '#template'}
    ],
    height: 315
});
grid.appendTo('#Grid');

function queryCellInfo(args: QueryCellInfoEventArgs) {
    if (args.column.headerText === 'Verified') {
        let checkbox: CheckBox = new CheckBox
        ({  
            checked: (args.data as any).Verified,
<<<<<<< HEAD
             change: function (changeArgs: ChangeEventArgs) {
                (args.data as any).Verified = changeArgs.checked;
                let rowIndex = grid.getRowIndexByPrimaryKey(args.data.OrderID);
                grid.updateRow(rowIndex, args.data);
            },
=======
            change: function (changeArgs: ChangeEventArgs) {
                (args.data as any).Verified = changeArgs.checked;
                let rowIndex = grid.getRowIndexByPrimaryKey(args.data.OrderID);
                grid.updateRow(rowIndex, args.data);
            }, 
>>>>>>> 3e4292b7c985da37c845d13e076d35157e5979e7
        });
        checkbox.appendTo(args.cell.querySelector('input'));
    }
  }

