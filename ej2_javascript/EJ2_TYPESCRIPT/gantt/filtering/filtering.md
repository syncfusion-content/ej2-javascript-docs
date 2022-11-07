---
title: "Filtering"
component: "Gantt"
description: "Learn how to filter rows in the Gantt using the menu filtering. Also learn how to use custom filter components in the Essential JS 2 Gantt control."
---

# Filtering

Filtering allows you to view specific or related records based on filter criteria. This can be done in the Gantt control by using the filter menu support and toolbar search support. To enable filtering in the Gantt control, set the [`allowFiltering`](../api/gantt/#allowfiltering) to true. Menu filtering support can be configured using the [`filterSettings`](../api/gantt/filterSettings/) property and toolbar searching can be configured using the [`searchSettings`](../api/gantt/searchSettings/) property.

To use filter, inject the [`Filter`](../api/gantt/#filtermodule) module into the Gantt control.

## Menu filtering

The Gantt control provides the menu filtering support for each column. You can enable the filter menu by setting the [`allowFiltering`](../api/gantt/#allowfiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tab template="gantt/initialLoadFiltering", es5Template="filterMenu" %}

```typescript
import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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
    filterSettings: {
        type: 'Menu'
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');


```

{% endtab %}

>The [`allowFiltering`](../api/gantt/#allowfiltering) property should be set to `true` to enable the filter menu.
>Setting the [`columns.allowFiltering`](../api/gantt/column/#allowfiltering) property to `false` prevents rendering filter menu for a particular column.

## Filter hierarchy modes

The Gantt supports a set of filtering modes with the [`filterSettings.hierarchyMode`](../api/gantt/filterSettings/#hierarchymode) property. The following are the types of filter hierarchy modes available in the Gantt control:

* `Parent`: This is the default filter hierarchy mode in Gantt. The filtered records are displayed with its parent records. If the filtered records do not have any parent record, then only the filtered records will be displayed.

* `Child`: Displays the filtered records with its child record. If the filtered records do not have any child record, then only the filtered records will be displayed.

* `Both`: Displays the filtered records with its both parent and child records. If the filtered records do not have any parent and child records, then only the filtered records will be displayed.

* `None`: Displays only the filtered records.

{% tab template="gantt/filtering", es5Template="filterHierarchyMode" %}

```typescript
import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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

let dropDownMode: DropDownList = new DropDownList({
    dataSource: [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ],
    fields: { text: 'mode', value: 'id' },
    value: 'Parent',
    change: (e: ChangeEventArgs) => {
        let mode: any = <string>e.value;
        gantt.filterSettings.hierarchyMode = mode;
        gantt.clearFiltering();
    }
});
dropDownMode.appendTo('#mode');

```

{% endtab %}

## Initial filter

To apply the filter at initial rendering, set the filter to `predicate` object in the [`filterSettings.columns`](../api/gantt/filterSettings/#columns) property.

{% tab template="gantt/initialLoadFiltering", es5Template="initialFilter" %}

```typescript

import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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
    filterSettings: {
        columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
        { field: 'TaskID', matchCase: false, operator: 'equal', predicate: 'and', value: 2 }]
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Filter operators

The filter operator for a column can be defined in the `filterSettings.columns.operator` property.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for the values that are not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether the value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the `filterSettings.columns.operator` value is `equal`

## Diacritics

By default, the Gantt control ignores the diacritic characters while filtering. To include diacritic characters, set the [`filterSettings.ignoreAccent`](../api/gantt/filterSettings/#ignoreaccent) to true.

In the following sample, type **Perform** in the **TaskName** column to filter diacritic characters.

{% tab template="gantt/diacriticsFilter", es5Template="diacriticsFilter" %}

```typescript

import { Gantt, Filter } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
    {
        TaskID: 1,
        TaskName: 'Projéct initiàtion',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site locàtion', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50 },
            {TaskID: 3, TaskName: 'Perförm soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            {TaskID: 4, TaskName: 'Soil tëst appröval', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develöp floor plan for estimàtion', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List matërials', StartDate: new Date('04/04/2019'),Duration: 3, Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Progress: 50 }
        ]
    }];

Gantt.Inject(Filter);

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
    filterSettings: {
        ignoreAccent: true
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Filtering a specific column by method

You can filter the columns dynamically by using the [`filterByColumn`](../api/gantt/#filterbycolumn) method.

{% tab template="gantt/filterByColumn", es5Template="filterByColumn" %}

```typescript

import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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

let filterBtn: Button = new Button();
filterBtn.appendTo('#filter');

document.getElementById('filter').addEventListener('click', () => {
    gantt.filterByColumn('TaskName', 'startswith', 'Iden');
});

```

{% endtab %}

## Clear filtered columns

You can clear all the filtering condition done in the Gantt control by using the [`clearFiltering`](../api/gantt/#clearfiltering) method.
The following code snippet explains the above behavior.

{% tab template="gantt/clearFilter", es5Template="clearFilter" %}

```typescript

import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter);

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
    allowFiltering: true,
    filterSettings: {
        columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
        { field: 'Progress', matchCase: false, operator: 'equal', predicate: 'and', value: 50 }]
    }
});
gantt.appendTo('#Gantt');

let filterBtn: Button = new Button();
filterBtn.appendTo('#clearFilter');

document.getElementById('clearFilter').addEventListener('click', () => {
    gantt.clearFiltering();
});

```

{% endtab %}

## Custom component in filter menu

The [`column.filter.ui`](../api/gantt/column/#filter) is used to add custom filter components to a particular column.
To implement custom filter ui, define the following functions:

* `create`:  Creates custom component.
* `write`: Wire events for custom component.
* `read`: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the TaskName column.

{% tab template="gantt/initialLoadFiltering", es5Template="customComponent" %}

```typescript

import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

Gantt.Inject(Filter);

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
     columns: [
            { field: 'TaskID' },
            { field: 'TaskName', filter: {
                ui: {
                    create: (args: { target: Element, column: Object }) => {
                        let db: Object = new DataManager(gantt.treeGrid.grid.dataSource);
                        let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        this.dropInstance = new DropDownList({
                            dataSource: new DataManager(gantt.treeGrid.grid.dataSource),
                            fields: { text: 'TaskName', value: 'TaskName' },
                            placeholder: 'Select a value',
                            popupHeight: '200px'
                        });
                        this.dropInstance.appendTo(flValInput);
                    },
                    write: (args: {
                        column: Object, target: Element, parent: any,
                        filteredValue: number | string
                    }) => {
                        this.dropInstance.value = args.filteredValue;
                    },
                    read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                        args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);
                    }
                }
                }
            },
            { field: 'StartDate' },
            { field: 'Duration' }
        ],
    allowFiltering: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}