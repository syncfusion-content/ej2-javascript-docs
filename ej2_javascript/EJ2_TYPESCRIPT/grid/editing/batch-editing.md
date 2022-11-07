# Batch Editing

In Batch edit mode, when you double-click on the grid cell, then the target cell changed to edit state.
You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's `Update` button or by externally invoking the [`batchSave`]../api/grid/edit/#batchsave) method.
To enable Batch edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Batch`.

{% tab template="grid/grid",es5Template="batch" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Automatically update the column based on another column edited value in batch mode

You can update the column value based on another column edited value in Batch mode by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% tab template="grid/grid",es5Template="autoupdatebatch" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { productData } from './productData.ts';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar);

var priceElem: HTMLElement;;
var priceObj: NumericTextBox;
var stockElem: HTMLElement;;
var stockObj: NumericTextBox;

let grid: Grid = new Grid({
  dataSource: productData,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Batch',
    newRowPosition: 'Top'
  },
  allowPaging: true,
  pageSettings: { pageCount: 5 },
  toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
  columns: [
    {
      field: 'ProductID',
      isPrimaryKey: true,
      headerText: 'Product ID',
      textAlign: 'Right',
      validationRules: { required: true, number: true },
      width: 140
    },
    {
      field: 'ProductName',
      headerText: 'Product Name',
      validationRules: { required: true },
      width: 140
    },
    {
      field: 'UnitPrice',
      headerText: 'UnitPrice',
      textAlign: 'Right',
      edit: {
        create: function() {
          priceElem = document.createElement('input');
          return priceElem;
        },
        read: function() {
          return priceObj.value;
        },
        destroy: function() {
          priceObj.destroy();
        },
        write: function(args) {
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var totalCostValue = args.value * rowData['UnitsInStock'];
              grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
            }
          });
          priceObj.appendTo(priceElem);
        }
      },
      width: 140,
      format: 'C2',
      validationRules: { required: true }
    },
    {
      field: 'UnitsInStock',
      headerText: 'Units In Stock',
      textAlign: 'Right',
      edit: {
        create: function() {
          stockElem = document.createElement('input');
          return stockElem;
        },
        read: function() {
          return stockObj.value;
        },
        destroy: function() {
          stockObj.destroy();
        },
        write: function(args) {
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var totalCostValue = args.value * rowData['UnitPrice'];
              grid.updateCell(rowIndex, 'TotalCost', totalCostValue);
            }
          });
          stockObj.appendTo(stockElem);
        }
      },
      width: 140,
      validationRules: { required: true }
    },
    {
      field: 'TotalCost',
      headerText: 'Total Unit Cost',
      textAlign: 'Right',
      width: 140,
      format: 'C2',
    }
  ]
});
grid.appendTo('#Grid');

grid.cellEdit= function(args){
  if(args.columnName == "TotalCost"){
    args.cancel= true;
  }
}

```

{% endtab %}

## Cancel edit based on condition in batch mode

You can prevent the CRUD operations of the Batch edit Grid by using condition in the [`cellEdit`](../../api/grid/#cellEdit), [`beforeBatchAdd`](../../api/grid/#beforeBatchAdd) and [`beforeBatchDelete`](../../api/grid/#beforeBatchDelete) events for Edit, Add and Delete actions respectively.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% tab template="grid/grid",es5Template="canceleditbatch" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'Role', headerText: 'Role', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    cellEdit: cellEdit,
    beforeBatchAdd: beforeBatchAdd,
    beforeBatchDelete: beforeBatchDelete,  
    height: 240
});
grid.appendTo('#Grid');

function cellEdit(args) {
  if (args.rowData['Role'] == 'Employee') {
    args.cancel = true;
  }
}
function beforeBatchAdd(args) {
  if (!isAddable) {
    args.cancel = true;
  }
}
function beforeBatchDelete(args) {
  if (args.rowData['Role'] == 'Employee') {
    args.cancel = true;
  }
}

var button = document.createElement('button');
button.innerText = 'Grid is Addable';
document.body.insertBefore(button, document.body.children[0]);
button.addEventListener('click', btnClick.bind(this));

function btnClick(args) {
  args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
  isAddable = !isAddable;
}

```

{% endtab %}

## Confirmation dialog

By default, grid will show the confirm dialog when saving or canceling or performing any actions like filtering, sorting, etc.

{% tab template="grid/grid",es5Template="batchconfirm" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { showConfirmDialog: true, showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

> * [`editSettings.showConfirmDialog`](../../api/grid/editSettings/#showconfirmdialog) requires the `editSettings.mode` to be `Batch`
> * If [`editSettings.showConfirmDialog`](../../api/grid/editSettings/#showconfirmdialog) set to `false`, then confirmation dialog does not display in batch editing.