---
title: "How To"
component: "Gantt"
description: "Learn how to set the setScrollTop position in Gantt chart side."
---

# Set the vertical scroll position

In the Gantt control, you can set the vertical scroller position dynamically by clicking the custom button using the [`setScrollTop`](../../api/gantt/#setscrolltop) method.

{% tab template="gantt/how-to setscrolltop", es5Template="setScrollTop" %}

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
    },
    splitterSettings: {
        position: "50%"
    }
});
gantt.appendTo('#Gantt');

let scrollBtn: Button = new Button();
scrollBtn.appendTo('#scrollTop');

document.getElementById('scrollTop').addEventListener('click', () => {
    gantt.ganttChartModule.scrollObject.setScrollTop(300);
});


```

{% endtab %}