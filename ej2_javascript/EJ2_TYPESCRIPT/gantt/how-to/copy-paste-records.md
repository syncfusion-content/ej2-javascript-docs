---
title: "How To"
component: "Gantt"
description: "Learn how to copy and paste records in Gantt control."
---

# Copy and Paste records in Gantt

You can copy and paste a record in the Gantt chart by using the `addRecord` method and `custom context menu`. It is also possible to copy and paste the parent record with multiple hierarchical child records on the required position.

{% tab template="gantt/copypasterecords", es5Template="copypasterecords"%}

```typescript

import { Gantt, Edit, Selection, ContextMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection, ContextMenu);

var copiedRecord: any;
var enableFlag: any;

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency:'Predecessor',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    allowSelection: true,
    enableContextMenu: true,
    contextMenuItems: [
        { text: 'Copy', target: '.e-content', id: 'copy' },
        { text: 'Paste', target: '.e-content', id: 'paste' },
    ],
    contextMenuClick: function (args) {
        if (args.item.id === 'copy') {
            copiedRecord = args.rowData;
            copiedRecord.taskData.TaskID = gantt.currentViewData.length + 1;
        }
        if (args.item.id === 'paste') {
            gantt.addRecord(copiedRecord.taskData,'Below',args.rowData.index);
            if(copiedRecord.hasChildRecords) {
                addChildRecords(copiedRecord, args.rowData.index + 1);
            }
            copiedRecord = undefined;
        }
    },
    contextMenuOpen: function (args) {
        if (args.type !== 'Header') {
            if (copiedRecord) {
                args.hideItems.push('Copy');
            } else {
                args.hideItems.push('Paste');
             }
        }
    },
});

gantt.appendTo('#Gantt');

function addChildRecords(record: any, index: any) {
    for(var i=0; i<record.childRecords.length; i++) {
          var childRecord = record.childRecords[i];
          childRecord.taskData.TaskID = gantt.currentViewData.length + 1;
          gantt.addRecord(childRecord.taskData,'Child',index);
          if(childRecord.hasChildRecords) {
              addChildRecords(childRecord, index + (i+1));
          }
    }
  }

```

{% endtab %}