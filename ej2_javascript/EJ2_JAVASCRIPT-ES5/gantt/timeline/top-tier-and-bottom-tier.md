# Top tier and Bottom tier

Gantt control contains two tier layout in timeline, we can customize the top tier and bottom tier using [`topTier`](../api/gantt/timelineSettings/#toptier) and [`bottomTier`](../api/gantt/timelineSettings/#bottomtier) properties. Timeline tier's unit can be defined by using [`unit`](../api/gantt/timelineTierSettings/#unit) property and [`format`](../api/gantt/timelineTierSettings/#format) property was used to define date format of timeline cell and [`count`](../api/gantt/timelineTierSettings/#count) property was used to define how many unit will be combined as single cell and [`formatter`](../api/gantt/timelineTierSettings/#formatter) property was used to define custom method to format the date value of timeline cell.

{% tab template="gantt/timeline", es5Template="topBottomTier" %}

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
        topTier: {
            format: 'MMM',
            unit: 'Month'
        },
        bottomTier: {
            unit: 'Day'
        }
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Combining timeline cells

In Gantt, timeline cells in top tier and bottom tier can be combined with number of timeline units, this can be acheived by using [`topTier.count`](../api/gantt/timelineTierSettings/#count) and [`bottomTier.count`](../api/gantt/timelineTierSettings/#count) properties. Please refer the below sample.

{% tab template="gantt/timeline", es5Template="combineCells" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { Data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: Data,
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
        timelineUnitSize: 100,
        topTier: {
            unit: 'Year'
        },
        bottomTier: {
            unit: 'Month',
            count: 6
        }
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Format value of timeline cell

In the Gantt control, you can format the value of top and bottom timeline cells using the standard date format string or the custom formatter method. This can be done using the [`topTier.format`](../api/gantt/timelineTierSettings/#format), [`topTier.formatter`](../api/gantt/timelineTierSettings/#formatter), [`bottomTier.format`](../api/gantt/timelineTierSettings/#format) and [`bottomTier.formatter`](../api/gantt/timelineTierSettings/#formatter) properties. The following example shows how to use the formatter method for timeline cells.

{% tab template="gantt/timeline", es5Template="formatCells" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { Data } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: Data,
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
        topTier: {
            unit: 'Month',
            count: 3,
            formatter: (date) => {
                var month = date.getMonth();
                if (month >= 0 && month <= 2) {
                    return 'Q1';
                } else if (month >= 3 && month <= 5) {
                    return 'Q2';
                } else if (month >= 6 && month <= 8) {
                    return 'Q3';
                } else {
                    return 'Q4';
                }

            }
        },
        bottomTier: {
            unit: 'Month',
            format: 'MMM'
        }
    },
    projectStartDate: new Date('01/04/2019'),
    projectEndDate: new Date('12/30/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Timeline cell width

In the Gantt control, you can define the width value of timeline cell using the [`timelineSettings.timelineUnitSize`](../api/gantt/timelineSettings/#timelineunitsize) property. This value will be set to the bottom timeline cell, and the width value of top timeline cell will be calculated automatically based on bottom tier cell width using the [`topTier.unit`](../api/gantt/timelineTierSettings/#unit) and [`timelineSettings.timelineUnitSize`](../api/gantt/timelineSettings/#timelineunitsize) properties. Refer to the following example.

{% tab template="gantt/timeline", es5Template="timelineWidth" %}

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
        timelineUnitSize:200
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}