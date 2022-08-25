---
title: "Tooltip"
component: "Gantt"
description: "Learn how to enable the tooltip and customize the default toolitp for the tasks in the Essential JS 2 Gantt control."
---

# Tooltip

The Gantt control has a support to display a tooltip for various UI elements like taskbar, timeline cells, and grid cells

## Enable tooltip

In the Gantt control, you can enable or disable the mouse hover tooltip for the following UI elements using the [`tooltipSettings.showTooltip`](../api/gantt/tooltipSettings/#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Event marker

{% tab template="gantt/gantt-tooltip", es5Template="enableTooltip" %}

```typescript

import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';

Gantt.Inject(DayMarkers);

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location',BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/09/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/08/2019'),BaselineEndDate: new Date('04/12/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation',BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/08/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    eventMarkers: [
        {
            day: '04/10/2019',
            label: 'Project approval and kick-off'
        }
    ],
    renderBaseline: true,
    baselineColor: 'red',
    tooltipSettings: {
        showTooltip: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> The default value of the [`tooltipSettings.showTooltip`](../api/gantt/tooltipSettings/#showtooltip) property is true.

## Timeline cells tooltip

In the Gantt control, you can enable or disable the mouse hover tooltip of timeline cells using the [`timelineSettings.showTooltip`](../api/gantt/timelineSettings/#showtooltip) property. The default value of this property is true. The following code example shows how to enable the timeline cells tooltip in Gantt.

{% tab template="gantt/gantt-tooltip", es5Template="timelinecellTooltip" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

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
    timelineSettings: {
        showTooltip: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Cell tooltip

You can enable or disable the Grid cell tooltip using the [`columns.clipMode`](../api/gantt/column/#clipmode) property.

{% tab template="gantt/gantt-tooltip", es5Template="gridcellTooltip" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

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
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150', clipMode: 'EllipsisWithTooltip' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150', clipMode: 'Clip' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});
gantt.appendTo('#Gantt');


```

{% endtab %}

### Clip mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](../api/gantt/column/#clipmode) property.

The following are three types of `clipMode`:

* `Clip`: Truncates the cell content when it overflows its area.
* `Ellipsis`: Displays ellipsis when content of the cell overflows its area.
* `EllipsisWithTooltip`: Displays ellipsis when content of the cell overflows its area; it displays the tooltip content when hover over ellipsis.

> NOTE
> By default, all the column's [`clipMode`](../api/gantt/column/#clipmode) property is defined as `EllipsisWithTooltip`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt control can be customized using the [`tooltipSettings.taskbar`](../api/gantt/tooltipSettings/#taskbar) property. You can map the template script element’s ID value or template string directly to this property.

{% tab template="gantt/taskbarTooltip", es5Template="taskbarTemplate" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

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
    tooltipSettings: {
        showTooltip: true,
        taskbar: '#taskbarTooltip'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Connector line tooltip

The default connector line tooltip in the Gantt control can be customized using the [`tooltipSettings.connectorLine`](../api/gantt/tooltipSettings/#connectorline) property. You can map the value to this property as template script element ID or template string format. The following code example shows how to use the [`tooltipSettings.connectorLine`](../api/gantt/tooltipSettings/#connectorline) property.

{% tab template="gantt/connectorLineTooltip", es5Template="dependencyLineTemplate" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    tooltipSettings: {
        showTooltip: true,
        connectorLine: '#dependencyLineTooltip'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Taskbar editing tooltip

The taskbar editing tooltip can be customized using the [`tooltipSettings.editing`](../api/gantt/tooltipSettings/#editing) property. The following code example shows how to customize the taskbar editing tooltip in Gantt.

{% tab template="gantt/editingTooltip", es5Template="editingTemplate" %}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);

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
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
    },
    tooltipSettings: {
        showTooltip: true,
        editing: '#editingTooltip'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Baseline tooltip

A baseline tooltip can be customized using the [`tooltipSettings.baseline`](../api/gantt/tooltipSettings/#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tab template="gantt/baselineTooltip", es5Template="baselineTemplate" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location',BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/09/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/08/2019'),BaselineEndDate: new Date('04/12/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation',BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/08/2019'), Duration: 0, Progress: 50 }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        progress: 'Progress',
        child: 'subtasks'
    },
    tooltipSettings: {
        showTooltip: true,
        baseline: '#baselineTooltip'
    },
    renderBaseline: true,
    baselineColor: 'red'
});
gantt.appendTo('#Gantt');

```

{% endtab %}