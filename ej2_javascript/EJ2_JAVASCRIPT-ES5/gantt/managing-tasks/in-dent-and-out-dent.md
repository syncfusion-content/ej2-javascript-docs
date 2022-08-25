# Indent and Outdent

Indent and Outdent of a task are used to update the level of task in the hierarchical order of the task. It can be performed by enabling the [`editSettings.allowEditing`](../api/gantt/editSettings/#allowediting) property.

`Indent` - Selected task can be indented to the level of task to the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `indent` method dynamically on any action like external button click. The following code example shows how to enable indent option in the Gantt chart.

`Outdent` - Selected task can be outdented to the level of task from the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `outdent` method dynamically on any action like external button click. The following code example shows how to enable outdent option in the Gantt chart.

{% tab template="gantt/indent", es5Template="indent" %}

```typescript

import { Gantt, Toolbar, Edit, Selection, Toolbar } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection, Toolbar);

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
    toolbar: ['Indent', 'Outdent'],
    editSettings: {
        allowEditing: true
    }
});
gantt.appendTo('#Gantt');

let ind: Button = new Button();
ind.appendTo('#indent');
let out: Button = new Button();
out.appendTo('#outdent');
document.getElementById('indent').addEventListener('click', () => {
   gantt.indent();
});
document.getElementById('outdent').addEventListener('click', () => {
   gantt.outdent();
});

```

{% endtab %}