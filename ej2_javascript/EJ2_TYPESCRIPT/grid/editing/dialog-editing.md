# Dialog Editing

In Dialog edit mode, when you start editing the currently selected row data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog`.

{% tab template="grid/grid",es5Template="dialog" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
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

## Customize edit dialog

You can customize the Header and Footer appearance of the edit dialog in the [`actionComplete`](../../api/grid/#actioncomplete) event based on `requestType` as `beginEdit` or `add`.

In the following example, We have customized the dialog's height and title of the dialog's header and also we have changed the button content name in the dialog's footer.

{% tab template="grid/grid",es5Template="customizedialog" %}

```typescript
import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Dialog } from '@syncfusion/ej2-popups';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    actionComplete: (args: DialogEditEventArgs) => {
                if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
                    let dialog: Dialog = args.dialog;
                    // set the height of the dialog
                    dialog.height = 400;
                    // change the header of the dialog
                    dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
                    // change the footer button name of the dialog
                    dialog.getButtons()[0].content = "Ok";
                    dialog.getButtons()[1].content = "Close";
                }
            },  
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right',
                  width: 100, isPrimaryKey: true },
                { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Show or hide columns in dialog editing

You can show hidden columns or hide visible column's editor in the dialog while editing the grid record using [`actionBegin`](../../api/grid/#actionbegin) event.

In the `actionBegin` event, based on `requestType` as `beginEdit` or  `add`. We can show or hide the editor by using `column.visible` property.

In the `actionBegin` event, based on `requestType` as `save`. We can reset the properties back to the column state.

In the below example, we have rendered the grid columns `CustomerID` as hidden column and `ShipCountry` as visible column. In the edit mode, we have changed the `CustomerID` column to visible state and `ShipCountry` column to hidden state.

{% tab template="grid/grid",es5Template="show-hide-columns" %}

```typescript
import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, visible: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionBegin: function(args: DialogEditEventArgs) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = true;
                }
                else if (this.columns[i].field == "ShipCountry") {
                    this.columns[i].visible = false;
                }
            }
        }
        if (args.requestType === 'save') {
            for (var i = 0; i < this.columns.length; i++) {
                if (this.columns[i].field == "CustomerID") {
                    this.columns[i].visible = false;
                }
                else if (this.grid.columns[i].field == "ShipCountry") {
                    this.columns[i].visible = true;
                }
            }
        }
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

## Use wizard like dialog editing

Wizard helps you to create intuitive step-by-step forms to fill. You can achieve the wizard-like editing by using the dialog template feature. It supports your own editing template by defining the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

The following example demonstrates the wizard-like editing in the grid with obtrusive validation.

{% tab template="grid/wizardtemplate", sourceFiles="index.ts,index.css,index.html",es5Template="wizardtemplate" %}

```typescript
import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { CheckBox } from '@syncfusion/ej2-buttons';

Grid.Inject(Edit, Toolbar);

let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true }},
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true }},
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '300px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
            new CheckBox({ label: 'Verified', checked: args.rowData.Verified }, args.form.elements.namedItem('Verified'));
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
            }
            initializeWizard();
        }
    }
});
grid.appendTo('#Grid');

function initializeWizard() {
    let currentTab = 0;

    document.getElementById('nextBtn').onclick = function () {
        if (validate()) {
            if (this.innerHTML !== 'SUBMIT'){
                currentTab++;
                nextpre(currentTab);
            } else {
                grid.endEdit();
            }
        }
    }
    function validate(tab) {
        let valid: boolean = true;
            [].slice.call(document.getElementById('tab' + currentTab).querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
        return false;
        }
        return true;
    }
    document.getElementById('prevBtn').onclick = function () {
        if (validate()) {
            currentTab--;
            nextpre(currentTab);
        }
    }
}


function nextpre(current) {
    let tabs: HTMLElement[] = [].slice.call(document.getElementsByClassName('tab'))
    tabs.forEach(element => element.style.display = 'none');
    tabs[current].style.display = '';
    if(current) {
        document.getElementById('prevBtn').style.display = '';
        document.getElementById('nextBtn').innerHTML = 'SUBMIT';
    } else {
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').innerHTML = 'NEXT';
    }
}

```

{% endtab %}