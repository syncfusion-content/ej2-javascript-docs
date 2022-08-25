---
title: "Holidays"
component: "Gantt"
description: "Learn how to highlight the non-working days in the Essential JS 2 Gantt control."
---

# Holidays

Non-working days in a project can be displayed in the Gantt control using the [`holidays`](../api/gantt/#holidays) property. Each holiday can be defined with the following properties:

* [`from`](../api/gantt/holiday/#from): Defines start date of the holiday(s).
* [`to`](../api/gantt/holiday/#to): Defines end date of the holiday(s).
* [`label`](../api/gantt/holiday/#label): Defines the description or label for the holiday.
* [`cssClass`](../api/gantt/holiday/#cssclass): Formats the holidays label in the Gantt chart.

To highlight the holidays, inject the [`DayMarkers`](../api/gantt/#daymarkersmodule) module into the Gantt control.

The following code example shows how to display the non-working days in the Gantt control.

{% tab template="gantt/holidays", es5Template="holidays" %}

```typescript

import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(DayMarkers);

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
    holidays: [{
        from: "04/04/2019",
        to: "04/05/2019",
        label: " Public holidays",
        cssClass: "e-custom-holiday"

    },
    {
        from: "04/12/2019",
        to: "04/12/2019",
        label: " Public holiday",
        cssClass: "e-custom-holiday"

    }]
});
gantt.appendTo('#Gantt');

```

{% endtab %}