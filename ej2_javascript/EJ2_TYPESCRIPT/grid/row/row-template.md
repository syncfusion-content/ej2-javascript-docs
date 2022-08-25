# Row template

The [`rowTemplate`](../../api/grid/#rowtemplate) has an option to customise the look and behavior of the grid rows. The [`rowTemplate`](../../api/grid/#rowtemplate) property accepts either
the [template string](../../common/template-engine) or HTML element ID.
{% tab template="grid/row-template", sourceFiles="index.ts,index.html,index.css",es5Template="rowtemplate" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { headerText: 'Employee Image', width: 150, textAlign: 'Center', field: 'OrderID' },
        { headerText: 'Employee Details', width: 300, field: 'EmployeeID' }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

>The [`rowTemplate`](../../api/grid/#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](../../api/grid/#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](../../api/grid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tab template="grid/row-template-format", sourceFiles="index.ts,index.html,index.css",es5Template="format" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

let intl: Internationalization = new Internationalization();

let dFormatter: Function = intl.getDateFormat({ skeleton: 'yMd', type: 'date' });

(<IWindow>window).formatDate = (date: Date) => dFormatter(date);

let grid: Grid = new Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { headerText: 'Employee Image', width: 150, textAlign: 'Center', field: 'OrderID' },
        { headerText: 'Employee Details', width: 300, field: 'EmployeeID' }
    ],
    height: 315
});
grid.appendTo('#Grid');

interface IWindow extends Window {
    formatDate?: Function;
}

```

{% endtab %}

## Limitations

Row template feature is not compatible with all the features which are available in grid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows & columns
* Virtual & Infinite scrolling
* Column chooser
* Column menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view