# Template Editing

## Inline or dialog template editing

The dialog/inline template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog/Inline` and [`editSetting.template`](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

{% tab template="grid/dialogtemplate", sourceFiles="index.ts,index.css,index.html",es5Template="dialogtemplate" %}

```typescript
import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataUtil } from '@syncfusion/ej2-data';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

Grid.Inject(Edit, Toolbar);

let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    },
    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
            // EJ2-control Rendering
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
            new CheckBox({ label: 'Verified', checked: args.rowData.Verified }, args.form.elements.namedItem('Verified'));
            new NumericTextBox({value: args.rowData.Freight, format: 'C2', placeholder: 'Freight', floatLabelType: 'Always' }, args.form.elements.namedItem('Freight') as HTMLInputElement );
             // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
            }
        }
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

> The template form editors should have **name** attribute.

## Template context

The Essential JS2 packages has a built-in template engine. Using the template engine, you can access the row information inside the HTML element and bind the attributes, values, or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not.

In the following code example, the `OrderID` textbox has been disabled by using the `isAdd` property.

```html
// The disabled attributes will be added based on the isAdd property.
<input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if}  ${if(isAdd)}'' ${else} disabled ${/if}/>

```

The following code example illustrates rendering the `OrderID` textbox, when a new record is added.

```html

${if(isAdd)}
<div class="form-group col-md-6">
    <div class="e-float-input e-control-wrapper">
        <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} />
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
    </div>
</div>
${/if}

```

> The dialog/inline dialog template syntax supports the ES6 expression string literals, and you can refer to the [`Template Engine`](../../common/template-engine) for more template syntax.

## Render editors as components

You can convert the form editors to EJ2 controls in the [`actionComplete`](../../api/grid/#actioncomplete) event based on the `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the drop-down list control in the `actionComplete` event.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);
            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
        }
    }

```

## Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](../../api/grid/#actionbegin) event at the time of setting `requestType` to `save`.

In the following code example, the `freight` value has been formatted and updated.

``` typescript
    actionBegin: (args: SaveEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['Freight'] = parseFloat(args.form.querySelector("#Freight").value);
        }
    }

```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state, focus the valid input element in the
[`actionComplete`](../../api/grid/#actioncomplete)
event based on `requestType` as `beginEdit`.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](../../api/grid/#actioncomplete) event.

```typescript

    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

## Render tab component inside the dialog template

You can use the [`tab`](../../../tab/) component inside the dialog edit UI using the dialog template feature. The dialog template feature can be enabled by defining the [`editSettings.mode`](../../api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](../../api/grid/editSettings/#template) as SCRIPT element ID or HTML string which holds the template.

To include the tab components in the dialog, follow the given steps:

**Step 1**:

Initialize the template for your tab component.

```html
        <div>
        <div id="edittab"></div>
            <div id="tab1">
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="OrderID" name="OrderID" type="text" value=${if(isAdd)} '' ${else} ${OrderID} ${/if} ${if(isAdd)} '' ${else} disabled ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="OrderID">Order ID</label>
                        </div>
                    </div>
                </div>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper">
                            <input id="CustomerID" name="CustomerID" type="text" value=${if(isAdd)} '' ${else} ${CustomerID} ${/if} />
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="CustomerID">Customer ID</label>
                        </div>
                    </div>
                </div>
                <button id='next' class='e-info e-btn' style="float: right" type='button'> next</button>
            </div>

            <div id="tab2" style='display: none'>
                <div class="form-row" >
                    <div class="form-group col-md-6">
                        <input type="text" name="ShipCountry" id="ShipCountry" value=${if(isAdd)} '' ${else} ${ShipCountry} ${/if} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="checkbox" name="Verified" id="Verified" ${if(isAdd)} '' ${else} checked ${/if} />
                    </div>
                </div>
                <button id='submit' class='e-info e-btn' style="float: right" type='button'> submit</button>
            </div>
        </div>

```

**Step 2**:

To render the tab component, use the [`actionComplete`](../../api/grid/#actionComplete) event of the grid.

```typescript

    let tabObj: Tab = new Tab({
        showCloseButton: false,
        selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
        items: [
            { header: { 'text': 'Details' }, content: '#tab1' },
            { header: { 'text': 'Verify' }, content: '#tab2' },
        ]
    });
    tabObj.appendTo('#edittab');

```

The following example demonstrates rendering the tab control inside the edit dialog. The tab control contains two tabs. You can fill the first tab and then navigate to the second tab. The validation for first tab will be done before navigating to the second tab.

{% tab template="grid/tabtemplate", sourceFiles="index.ts,index.css,index.html",es5Template="tabtemplate" %}

```typescript
import { Grid, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { Tab } from '@syncfusion/ej2-navigations';
import { CheckBox } from '@syncfusion/ej2-buttons';

Grid.Inject(Edit, Toolbar);

let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true } },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {

            let tabObj: Tab = new Tab({
                showCloseButton: false,
                selecting:  (e) => {if(e.isSwiped) {e.cancel = true;} if(e.selectingIndex === 1) {e.cancel = !validate(1)}},
                items: [
                    { header: { 'text': 'Details' }, content: '#tab1' },
                    { header: { 'text': 'Verify' }, content: '#tab2' },
                ]
            });
            tabObj.appendTo('#edittab');

            new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);

            new CheckBox({ label: 'Verified', checked: args.rowData.Verified }, args.form.elements.namedItem('Verified'));
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
            }

            document.getElementById('next').onclick = () => {
                moveNext();
            }

            function validate(tab) {
                let valid: boolean = true;
                 [].slice.call(document.getElementById('tab' + tab).querySelectorAll('[name]')).forEach(element => {
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

            function moveNext() {
                if (validate(1)) {
                    tabObj.select(1);
                }
            }
            document.getElementById('submit').onclick = () => {
                if (validate(2)) {
                    grid.endEdit();
                }
            }
        }
    }
});
grid.appendTo('#Grid');

```

{% endtab %}