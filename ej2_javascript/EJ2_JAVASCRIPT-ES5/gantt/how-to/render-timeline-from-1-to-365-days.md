---
title: "How To"
component: "Gantt"
description: "Learn how to Render timeline from 1 to 365 days."
---

# Render timeline from 1 to 365 days

Gantt chart contains different types of in-built timeline view modes and it can be defined by using [`timelineViewMode`](../api/gantt/timelineViewMode/) property and also we can customize the timescale mode of top tier and bottom tier by using [`topTier.unit`](../api/gantt/timelineTierSettingsModel/#unit) and [`bottomTier.unit`](../api/gantt/timelineTierSettingsModel/#unit) properties. Timeline tier’s unit can be defined by using [`unit`](../api/gantt/timelineTierSettings/#unit) property and  [`format`](../api/gantt/timelineTierSettings/#format) property was used to define date format of timeline cell and [`formatter`](../api/gantt/timelineTierSettings/#formatter) property was used to define custom method to format the date value of timeline cell.

In the [`bottomTier.unit`](../api/gantt/timelineTierSettingsModel/#unit) timescale mode, it is possible to display timeline from 1 to 365 days by making use of the formatter in the `timelineSettings` property. The following example shows how to use the formatter method for timeline cells.

{% tab template="gantt/render-timeline-from-1-to-365-days", es5Template="render-timeline-from-1-to-365-days"%}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    timelineSettings: {
        timelineUnitSize: 50,
        topTier: {
            unit: "Month",
            format: "MMM dd, y"
        },
        bottomTier: {
            unit: "Day",
            formatter: date => {
                let presentDate = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                );
                var start = new Date(presentDate.getFullYear(), 0, 0);
                var diff = Number(presentDate) - Number(start);
                var oneDay = 1000 * 60 * 60 * 24;
                var day = Math.floor(diff / oneDay);
                return day;
            }
          }
    },
    projectStartDate: new Date("01/01/2019"),
    projectEndDate: new Date("01/01/2020")
    });

    gantt.appendTo('#Gantt');

```

{% endtab %}