---
title: "How To"
component: "Gantt"
description: "Learn how to change schedule start date and end date values dynamically in the JS 2 Gantt control."
---

# Change schedule date

In the Gantt control, you can change the schedule start and end dates by clicking the custom button programmatically using the [`updateProjectDates`](../../api/gantt/#updateprojectdates) method. You can pass the start and end dates as method arguments to the [`updateProjectDates`](../../api/gantt/#updateprojectdates) method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% tab template="gantt/how-to changescheduledates", es5Template="changeScheduleDates" %}

```typescript

import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: data,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    }
});

gantt.appendTo('#Gantt');

let dateBtn: Button = new Button();
dateBtn.appendTo('#updateSchedule');

document.getElementById('updateSchedule').addEventListener('click', () => {
    gantt.updateProjectDates(new Date('01/10/2019'), new Date('06/20/2019'), true);
});

```

{% endtab %}
