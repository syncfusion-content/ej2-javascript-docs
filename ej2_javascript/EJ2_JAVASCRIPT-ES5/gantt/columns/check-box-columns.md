# Checkbox Column

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../api/gantt/column/#displayascheckbox) property as **true**.

{% tab template="gantt/checkbox", es5Template="checkbox" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        verified: 'verified'
    },
    splitterSettings: {
        columnIndex: 5
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'verified', headerText: 'Verified', displayAsCheckBox: true, type: 'boolean' },
        { field: 'Duration', headerText: 'Duration' }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Controlling Grid actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](../api/gantt/#allowfiltering), [`allowSorting`](../api/gantt/#allowsorting), [`allowReordering`](../api/gantt/#allowreordering), and [`allowEditing`](../api/gantt/#editsettings) properties.

{% tab template="gantt/Grid-actions", es5Template="Grid-actions" %}

```typescript

import { Gantt, Filter, Sort, Resize, ColumnMenu, Reorder, Selection, Edit }  from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection, Filter, Sort, Resize, Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    allowFiltering: true,
    allowSorting: true,
    allowReordering: true,
    splitterSettings: {
        position: '75%'
    },
    editSettings: {
        allowEditing: true
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress', allowReordering: false },
        { field: 'TaskName', headerText: 'Task Name', allowSorting: false },
        { field: 'StartDate', headerText: 'Start Date', allowEditing: false },
        { field: 'Duration', headerText: 'Duration', allowFiltering: false }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](../common/internationalization/#number-formatting) or [date](../common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* date time

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](../api/gantt/#datasource).
> In case if the first record of the [`dataSource`](../api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.