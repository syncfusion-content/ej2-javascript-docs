# Edit Types

## Customize editors using params

The [`columns.editType`](../../api/grid/column/#edittype) is used to define the editor component for any particular column.
You can set the [`columns.editType`](../../api/grid/column/#edittype) based on data type of the column.

* [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* [`TextBox`](../../textbox) component for string data type.

* [`DropDownList`](../../drop-down-list) component to show all unique values related to that field.

* [`CheckBox`](../../check-box) component for boolean data type.

* [`DatePicker`](../../datepicker) component for date data type.

* [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](../../api/grid/column/#edit).

The following table describes editor component and their example edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tab template="grid/grid",es5Template="celledit" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', type: 'date', width: 120, format: { type:'date', format:'dd.MM.yyyy' } ,editType: 'datepickeredit', edit: { params: { format:'dd.MM.yy' }  } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2', edit: { params: { decimals: 2, value: 5 } } },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150, edit: { params: { value: 'Germany' } } },
        { field: 'Verified', displayAsCheckBox: true,editType: "booleanedit", textAlign: 'Center',width: 100,  edit: { params: { checked: true} }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

> If edit type is not defined in the column, then it will be considered as the `stringedit` type (Textbox component) .

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the number of decimal places will be restricted to two in the NumericTextBox while editing the numeric column. We can restrict to type the decimal points in a NumericTextBox by using the `validateDecimalOnType` and `decimals` properties of NumericTextBox.

In the below demo, while editing the row we have restricted to type the decimal point value in the NumericTextBox of `Freight` column.

{% tab template="grid/prevent-decimal-points",es5Template="template" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 150, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        {
            field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 150, edit: {
                params: {
                    validateDecimalOnType: true,
                    decimals: 0,
                    format: "N"
                }
            }
        },
        { field: 'ShipCity', headerText: 'Ship City', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

### Provide custom data source and enabling filtering to DropDownList

You can provide data source to the DropDownList by using the [`columns.edit.params`](../../api/grid/column/#edit) property.

While setting new data source using edit params, you must specify a new `query` property too for the dropdownlist as follows,

```typescript
{
    params: {
        query: new Query(),
        dataSource: country,
        fields: { value: 'ShipCountry', text: 'ShipCountry' },
        allowFiltering: true
        }
}
```

You can also enable filtering for the dropdownlist by passing the `allowFiltering` as `true` to the edit params.

In the below demo, DropDownList is rendered with custom Datasource for the `ShipCountry` column and enabled filtering to search dropdownlist items.

{% tab template="grid/grid",es5Template="filteringDropdownlist" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let country: { [key: string]: Object }[] = [
    { ShipCountry: 'United States', countryId: '1' },
    { ShipCountry: 'Australia', countryId: '2' },
    { ShipCountry: 'India', countryId: '2' }
];

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        {
            field: 'ShipCountry', headerText: 'Ship Country', width: 120, editType: 'dropdownedit', edit: {
                params: {
                    query: new Query(),
                    dataSource: country,
                    fields: { value: 'ShipCountry', text: 'ShipCountry' },
                    allowFiltering: true
                }
            }
        }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

### Open popup while focusing the edit dropdown list

You can open the DropDownList popup while focusing the cell by invoking the [`showPopup`](../../api/drop-down-list/#showpopup) method inside the ['focus'](../../api/drop-down-list/#focus) event of DropDownList component.

In the below demo, we have bound the focus event for the edit DropDownList using the [`columns.edit.params`](../api/grid/column/#edit) property.

{% tab template="grid/grid",es5Template="openPopup" %}

```typescript
import { Grid, Edit, Toolbar, EJ2Intance } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country',  edit: { params: { focus: ddFocus } }, editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

function ddFocus(e: {event: MouseEvent | KeyboardEvent | TouchEvent}): void {
  ((e.event.target as HTMLElement).querySelector('.e-dropdownlist') as EJ2Intance).ej2_instances[0].showPopup();
}

```

{% endtab %}

## Custom editors using template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

### Render TimePicker component while editing

Use the cell edit template feature of the Grid to render the TimePicker component in the Grid edit form. In the below sample, we have rendered TimePicker component in the **OrderDate** column.

{% tab template="grid/grid",es5Template="timepicker" %}

```typescript
import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { TimePicker } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';

Grid.Inject(Edit, Toolbar, Page);

let ddElem: HTMLElement;
let timeObject: TimePicker;

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2',textAlign: 'Right', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'hh:mm', width: 150, edit: {
        create: createOrderDateFn,
        destroy: destroyOrderDateFn,
        read: readOrderDateFn,
        write: writeOrderDateFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createOrderDateFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function destroyOrderDateFn() {
  timeObject.destroy();
}
function readOrderDateFn() {
  return timeObject.value;
}
function writeOrderDateFn(args) {
  enableRipple(true);
  timeObject = new TimePicker({
    value: args.rowData[args.column.field],
    step: 60
  });
  timeObject.appendTo(ddElem);
}

```

{% endtab %}

### Render AutoComplete component while editing

Use the cell edit template feature of the Grid to render the AutoComplete component in the Grid edit form. In the below sample, we have rendered AutoComplete component in the **CustomerID** column.

{% tab template="grid/grid",es5Template="autocomplete" %}

```typescript
import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Edit, Toolbar, Page);

let inpuEle: HTMLElement;
let autoCompleteIns: AutoComplete;
let autoCompleteData: { [key: string]: Object }[] = [
  { CustomerID: 'VINET', Id: '1' },
  { CustomerID: 'TOMSP', Id: '2' },
  { CustomerID: 'HANAR', Id: '3' },
  { CustomerID: 'VICTE', Id: '4' },
  { CustomerID: 'SUPRD', Id: '5' }
];

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140, edit: {
        create: createCustomerIDFn,
        destroy: destroyCustomerIDFn,
        read: readCustomerIDFn,
        write: writeCustomerIDFn }
    },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2',textAlign: 'Right', width: 120 },
    { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'yMd', editType: 'datepickeredit', width: 150 }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createCustomerIDFn() {
  inpuEle = document.createElement('input');
  return inpuEle;
}
function destroyCustomerIDFn() {
  autoCompleteIns.destroy();
}
function readCustomerIDFn() {
  return autoCompleteIns.value;
}
function writeCustomerIDFn(args) {
  autoCompleteIns = new AutoComplete({
    allowCustom: true,
    value: args.rowData[args.column.field],
    dataSource: autoCompleteData,
    fields: { value: 'CustomerID', text: 'CustomerID' }
  });
  autoCompleteIns.appendTo(inpuEle);
}

```

{% endtab %}

### Render MultiSelect DropDown component while editing

Use the cell edit template feature of the Grid to render the MultiSelect DropDown component in the Grid edit form. In the below sample, we have rendered MultiSelect DropDown component in the **ShipCity** column.

{% tab template="grid/grid",es5Template="multiselectdd" %}

```typescript
import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';

Grid.Inject(Edit, Toolbar, Page);

let ddElem: HTMLElement;
let multiSelectObj: MultiSelect;
let multiselectDatasource = [
  { ShipCity: 'Reims', Id: '1' },
  { ShipCity: 'Münster', Id: '2' },
  { ShipCity: 'Rio de Janeiro', Id: '3' },
  { ShipCity: 'Lyon', Id: '4' },
  { ShipCity: 'Charleroi', Id: '5' }
];

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2', textAlign: 'Right', width: 120 },
    { field: 'ShipCity', headerText: 'Ship City', type: 'string', width: 180, edit: {
        create: createShipCityFn,
        read: readShipCityFn,
        destroy: destroyShipCityFn,
        write: writeShipCityFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createShipCityFn() {
  ddElem = document.createElement('input');
  return ddElem;
}
function readShipCityFn() {
  return multiSelectObj.value.join(',');
}
function destroyShipCityFn() {
  multiSelectObj.destroy();
}
function writeShipCityFn(args) {
  {
    let multiSelectVal = args.rowData[args.column.field]
      ? args.rowData[args.column.field].split(',')
      : [];
    multiSelectObj = new MultiSelect({
      value: multiSelectVal,
      dataSource: multiselectDatasource,
      fields: { value: 'ShipCity', text: 'ShipCity' },
      floatLabelType: 'Never',
      mode: 'Box'
    });
    multiSelectObj.appendTo(ddElem);
  }
}

```

{% endtab %}

### Render RichTextEditor component while editing

Use the cell edit template feature of the Grid to render the RichTextEditor component in the Grid edit form. In the below sample, we have rendered RichTextEditor component in the **ShipAddress** column, so we use [allowTextWrap](../../api/grid/#allowtextwrap) property to true.

{% tab template="grid/grid",es5Template="richtexteditor" %}

```typescript
import { Grid, Edit, Toolbar, Page, Column } from '@syncfusion/ej2-grids';
import { purchaseData } from './datasource.ts';
import { TextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar, Page);

let tbElem: HTMLElement;
let textEditor: TextBox;

let grid: Grid = new Grid({
  dataSource: purchaseData,
  allowPaging: true,
  allowTextWrap: true,
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
  created: function (args) {
    this.keyConfigs.enter = '';
  },
  columns: [
    { field: 'OrderID', headerText: 'Order ID', type: 'number', isPrimaryKey: true, validationRules: { required: true }, textAlign: 'Right', width: 100 },
    { field: 'CustomerID', headerText: 'Customer ID', type: 'string', width: 140 },
    { field: 'Freight', headerText: 'Freight', type: 'number', editType: 'numericedit', format: 'C2', textAlign: 'Right', width: 120 },
    { field: 'ShipAddress', headerText: 'Ship Address', type: 'string', valueAccessor: valueAccessor, disableHtmlEncode: false, width: 180, edit: {
        create: createShipAddressFn,
        destroy: destroyShipAddressFn,
        read: readShipAddressFn,
        write: writeShipAddressFn }
    }
  ],
  pageSettings: { pageSize: 7 },
  height: 255,
});
grid.appendTo('#Grid');

function createShipAddressFn() {
  tbElem = document.createElement('textarea');
  return tbElem;
}
function destroyShipAddressFn() {
  textEditor.destroy();
}
function readShipAddressFn() {
  return textEditor.value;
}
function writeShipAddressFn(args) {
    textEditor = new TextBox({
      multiline: true,
      value: args.rowData[args.column.field],
      floatLabelType: 'Auto'
    });
    textEditor.appendTo(tbElem);
}

function valueAccessor(field, data, column) {
  var value = data[field];
  if (value != undefined) {
    return value.split('\n').join('<br>');
  } else {
    return '';
  }
}

```

{% endtab %}

## Access editor components

You can access the component instance from the component element using the `ej2_instances` property.

In the below demo, you can access the Editor component instance while adding or editing actions on the [`actionComplete`](../../api/grid/#actioncomplete) event.

{% tab template="grid/grid",es5Template="editor" %}

```typescript
import { Grid, Edit, Toolbar, EditEventArgs, EJ2Intance } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    actionComplete: (args: EditEventArgs) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            let tr: Element = args.row;
            let numericTextBox: Element = tr.querySelector('.e-numerictextbox'); // numeric TextBox component element
            if (numericTextBox) {
                console.log('NumericTextBox instance: ', (<EJ2Intance>numericTextBox).ej2_instances[0]); // numeric TextBox instance
            }
            let dropDownList: Element = tr.querySelector('.e-dropdownlist'); // dropDownList component element
            if (dropDownList) {
                console.log('DropDownList instance: ', (<EJ2Intance>dropDownList).ej2_instances[0]); // dropDownList instance
            }
        }
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}