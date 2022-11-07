---
title: "Timeline"
component: "Gantt"
description: "Learn about timeline modes and customizations in the Essential JS 2 Gantt control."
---

# Timeline

In the Gantt control, timeline is used to represent the project duration as individual cells with defined unit and formats.

## Timeline view modes

Gantt contains the following in-built timeline view modes:

* Hour
* Day
* Week
* Month
* Year

Timescale mode in Gantt can be defined by using [`timelineViewMode`](../api/gantt/timelineViewMode/) property and also we can define timescale mode of top tier and bottom tier by using [`topTier.unit`](../api/gantt/timelineTierSettingsModel/#unit) and [`bottomTier.unit`](../api/gantt/timelineTierSettingsModel/#unit) properties.

### Week timeline mode

In the `Week` timeline mode, the upper part of the schedule header displays the weeks, whereas the bottom half of the header displays the days. Refer to the following code example.

{% tab template="gantt/timeline", es5Template="weekMode" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { WeekData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: WeekData,
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
        timelineViewMode: 'Week'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Month timeline mode

In the `Month` timeline mode, the upper part of the schedule header displays the months, whereas the bottom header of the schedule displays its corresponding weeks. Refer to the following code example.

{% tab template="gantt/timeline", es5Template="monthMode" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { MonthData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: MonthData,
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
        timelineViewMode: 'Month',
        timelineUnitSize: 150
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Year timeline mode

In the `Year` timeline mode, the upper schedule header displays the years whereas, the bottom header displays its corresponding months. Refer to the following code example.

{% tab template="gantt/timeline", es5Template="yearMode" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { YearData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: YearData,
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
        timelineViewMode: 'Year',
        timelineUnitSize: 70
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Day timeline mode

In the `Day` timeline mode, the upper part of the header displays the days whereas, the bottom schedule header displays its corresponding hours. Refer to the following code example.

{% tab template="gantt/timeline", es5Template="dayMode" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { DayData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: DayData,
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
        timelineViewMode: 'Day'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### Hour timeline mode

An `Hour` timeline mode tracks the tasks in minutes scale. In this mode, the upper schedule header displays hour scale and the lower schedule header displays its corresponding minutes.

{% tab template="gantt/timeline", es5Template="hourMode" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { HourData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: HourData,
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
        timelineViewMode: 'Hour'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Week start day customization

In the Gantt control, you can customize the week start day using the [`weekStartDay`](../api/gantt/timelineSettings/#weekstartday) property. By default, the [`weekStartDay`](../api/gantt/timelineSettings/#weekstartday) is set to 0, which specifies the Sunday as a start day of the week. But, you can customize the week start day by using the following code example.

{% tab template="gantt/timeline", es5Template="weekStartDay" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { WeekStartData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: WeekStartData,
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
        timelineViewMode: 'Week',
        weekStartDay: 3
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Customize automatic timescale update action

In the Gantt control, the schedule timeline will be automatically updated when the tasks date values are updated beyond the project start date and end date ranges. This can be enabled or disabled using the [`updateTimescaleView`](../api/gantt/timelineSettings/#updatetimescaleview) property.

{% tab template="gantt/timeline", es5Template="updateTimescaleView" %}

```typescript
import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { timelineData } from 'datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: timelineData,
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
        updateTimescaleView: false
    },
    editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}