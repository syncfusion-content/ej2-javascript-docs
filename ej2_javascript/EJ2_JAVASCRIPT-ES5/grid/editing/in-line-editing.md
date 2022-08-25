# Inline Editing

In Normal edit mode, when you start editing the currently selected record is changed to edit state.
You can change the cell values and save edited data to the data source.
To enable Normal edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Normal`.

{% tab template="grid/grid",es5Template="inline" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
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

> Normal edit mode is default mode of editing.

## Automatically update the column based on another column edited value

You can update the column value based on another column edited value by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% tab template="grid/grid",es5Template="autoupdateinline" %}

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
    mode: 'Normal',
    newRowPosition: 'Top'
  },
  allowPaging: true,
  pageSettings: { pageCount: 5 },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
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
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var formEle = grid.element.querySelector('form').ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement('TotalCost');
              totalCostFieldEle.value = priceObj.value * stockObj.value;
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
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function(args) {
              var formEle = grid.element.querySelector('form').ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement('TotalCost');
              totalCostFieldEle.value = priceObj.value * stockObj.value;
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
      allowEditing: false,
      width: 140,
      format: 'C2',
    }
  ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Cancel edit based on condition

You can prevent the CRUD operations of the Grid by using condition in the [`actionBegin`](../../api/grid/#actionbegin) event with requestType as `beginEdit` for editing, `add` for adding and `delete` for deleting actions.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% tab template="grid/grid",es5Template="canceleditinline" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let isAddable: boolean = true;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'Role', headerText: 'Role', width: 120, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    actionBegin: actionBegin,
    height: 240
});
grid.appendTo('#Grid');

function actionBegin(args) {
  if (args.requestType == 'beginEdit') {
    if (args.rowData['Role'].toLowerCase() == 'employee') {
      args.cancel = true;
    }
  }
  if (args.requestType == 'delete') {
    if (args.data[0]['Role'].toLowerCase() == 'employee') {
      args.cancel = true;
    }
  }
  if (args.requestType == 'add') {
    if (!isAddable) {
      args.cancel = true;
    }
  }
}

var button = document.createElement('button');
button.innerText = 'Grid is Addable';
document.body.insertBefore(button, document.body.children[0])
button.addEventListener('click', btnClick.bind(this));

function btnClick(args) {
  args.target.innerText == 'Grid is Addable' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
  isAddable = !isAddable;
}
```

{% endtab %}

## Perform CRUD action programmatically

Grid methods can be used to perform CRUD operations programmatically. The [addRecord](../../api/grid/#addrecord), [deleteRecord](../../api/grid/#deleterecord), and [startEdit](../../api/grid/#startedit) methods are used to perform CRUD operations in the following demo.

* To add a new record to the Grid, use the [addRecord](../../api/grid/#addrecord) method. In this method, you can pass the data parameter to add a new record to the Grid, and the index parameter to add a record at a specific index. If you call this method with no parameters, it will create an empty row in the Grid.

* To change the selected row to the edit state, use the [startEdit](../../api/grid/#startedit) method.

* If you need to update the row data in the Grid’s datasource, you can use the [updateRow](../../api/grid/#updaterow) method. In this method, you need to pass the index value of the row to be updated along with the updated data.

* If you need to update the particular cell in the row, you can use the [setCellValue](../../api/grid/#setcellvalue) method. In this method, you need to pass the primary key value of the data source, field name, and new value for the particular cell.

* To remove a selected row from the Grid, use the [deleteRecord](../../api/grid/#deleterecord) method. For both edit and delete operations, you must select a row first.

> **Note:** In both normal and dialog editing modes, these methods can be used.

{% tab template="grid/programmaticedit", es5Template="programmaticedit" %}

```typescript

import { Grid, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey:true  },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('add').onclick = () => {
    grid.addRecord({ "OrderID": "10248", "CustomerID": "RTER", "ShipCity": "America", "ShipName": "Hanari"  });
};

document.getElementById('edit').onclick = () => {
    grid.startEdit();
};

document.getElementById('delete').onclick = () => {
    grid.deleteRecord();
};

document.getElementById('updaterow').onclick = () => {
    grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari'  });
};

document.getElementById('updatecell').onclick = () => {
    grid.setCellValue((grid.currentViewData[0] as any).OrderID,'CustomerID','Value Changed');
};

```

{% endtab %}

## Confirmation dialog

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](../../api/grid/editSettings/#showdeleteconfirmdialog) as `true`

{% tab template="grid/grid",es5Template="deleteconfirm" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
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

> The `showDeleteConfirmDialog` supports all type of edit modes.

## Default column values on add new row

The grid provides an option to set the default value for the columns when adding a new record in it.
To set a default value for the particular column by defining the [`columns.defaultValue`](../../api/grid/column/#defaultvalue).

{% tab template="grid/grid",es5Template="defaultvalue" %}

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
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 }, defaultValue: 'HANAR' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Adding a new row at the bottom of the Grid

By default, a new row will be added at the top of the grid. You can change it by setting [`editSettings.newRowPosition`](../api/grid/editSettings/#newRowPosition) as `Bottom`.

{% tab template="grid/grid",es5Template="addnewrowposition" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Bottom' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

> Add newRowPostion is supported for `Normal` and `Batch` editing modes.

## Move the focus to a particular cell instead of first cell while editing a row

The [recordDoubleClick](../../api/grid/#recordDoubleClick) event allows you to move the focus to the corresponding cell (the cell that you doubled-clicked to edit a row) instead of the first cell in edit form. With the help of this event, you can focus the double-clicked column in inline edit mode.

{% tab template="grid/focus", es5Template="doubleclick" %}

```typescript
import { Grid, Page, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Toolbar, Edit);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,
    mode: "Normal"
    },
    recordDoubleClick: recordDoubleClick,
    actionComplete: actionComplete,
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', editType: "numericedit", textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, editType: "datetimepickeredit",
        format: { type: "dateTime", format: "M/d/y hh:mm a" }, },
        { field: "ShipCountry", headerText: "Ship Country", editType: "dropdownedit",  width: 150, edit: { params: { popupHeight: "300px" } }
    }
    ],
    height: 220
});
grid.appendTo('#Grid');

var fieldName;
function recordDoubleClick(e) {
  var clickedColumnIndex = e.cell.getAttribute("aria-colindex");
  fieldName = this.columnModel[parseInt(clickedColumnIndex)].field;
}

function actionComplete(e) {
  if (e.requestType === "beginEdit") {
    // focus the column
    e.form.elements[grid.element.getAttribute("id") + fieldName].focus();
  }
}

```

{% endtab %}