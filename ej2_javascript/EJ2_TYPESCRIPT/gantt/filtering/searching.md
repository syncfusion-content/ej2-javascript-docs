# Search

You can search records in the Gantt control by using the [`search`](../api/gantt/#search) method with search key as a parameter. The Gantt control provides an option to integrate the search text box in the toolbar by adding the search item to the [`toolbar`](../api/gantt/#toolbar) property.

To search records, inject the `Filter` module into the Gantt control.

{% tab template="gantt/searching", es5Template="searching" %}

```typescript

import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: ['Search']
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Initial search

In the Gantt control, you can load a task with some search criteria and this can be done by using the [`searchSettings`](../api/gantt/searchSettings/) property.
To apply search at initial rendering, set the value for [`fields`](../api/gantt/searchSettings/#fields), [`operator`](../api/gantt/searchSettings/#operator), [`key`](../api/gantt/searchSettings/#key), and [`ignoreCase`](../api/gantt/searchSettings/#ignorecase) in the [`searchSettings`](../api/gantt/searchSettings/) property.

{% tab template="gantt/searching", es5Template="initialSearch" %}

```typescript

import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: ['Search'],
    searchSettings: { fields: ['TaskName'], operator: 'contains', key: 'List', ignoreCase: true }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> By default, Gantt searches all the bound column values. To customize this behavior, define the [`searchSettings.fields`](../api/gantt/searchSettings/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](../api/gantt/searchSettings/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for the values that are not equal to the specified value.

> By default, the [`searchSettings.operator`](../api/gantt/searchSettings/#operator) value is `contains`.

## Search by external button

To search the Gantt records from an external button, invoke the [`search`](../api/gantt/#search) method.

{% tab template="gantt/externalSearch", es5Template="externalSearch" %}

```typescript

import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    allowFiltering: true
});
gantt.appendTo('#Gantt');

let searchBtn: Button = new Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', () => {
    let searchText: string = (<HTMLInputElement>document.getElementsByClassName('searchtext')[0]).value;
    gantt.search(searchText);
});

```

{% endtab %}

>Note: You should set the [`allowFiltering`](../api/gantt/#allowfiltering) property to `true` for searching the content externally.

## Search specific columns

By default, the Gantt control searches all the columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](../api/gantt/searchSettings/#fields) property.

{% tab template="gantt/searching", es5Template="specificColumn" %}

```typescript

import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: ['Search'],
    searchSettings: { fields: ['TaskName', 'Duration'] }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> In above sample, you can search only **TaskName** and **Duration** column values.

## Clear search by external button

You can set [`searchSettings.key`](../api/gantt/searchSettings/#key) property as `empty` string, to clear the searched Gantt records from external button.

{% tab template="gantt/clear-search", es5Template="clear" %}

```typescript
import { Gantt, Filter, Toolbar } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    toolbar: ['Search'],
    searchSettings: { fields: ['TaskName'], operator: 'contains', key: 'Perform', ignoreCase: true },
});
gantt.appendTo('#Gantt');

let clearBtn: Button = new Button();
clearBtn.appendTo('#clear');

document.getElementById('clear').addEventListener('click', () => {
   gantt.searchSettings.key='';
});

```

{% endtab %}