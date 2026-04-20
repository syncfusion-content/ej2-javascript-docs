---
layout: post
title: Maintain Record Index Position in ##Platform_Name## Gantt Chart Control | Syncfusion
description: Learn how to maintain record index positions in the Syncfusion ##Platform_Name## Gantt Chart control using row drag-and-drop for efficient task reordering.
platform: ej2-javascript
control: Copy paste records 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Maintain Record Index Position in ##Platform_Name## Gantt Chart Control

The ##Platform_Name## Gantt Chart control enables seamless task reordering by maintaining record index positions through the [rowDrop](../../api/gantt#rowdrop) event, which updates the task order in the data source when a row is dragged and dropped. For example, dragging a task from row 5 to row 2 updates the data source to reflect the new position, preserving project structure. Inject `RowDD` and enable `allowRowDragAndDrop` to activate this feature. Use the `rowDrop` event to capture `fromIndex` (source row), `dropIndex` (target row), and `dropPosition` and send them to the server via an Ajax request using `DataManager` with `UrlAdaptor`. On the server side, update the data source (e.g., database) with custom methods like `Insert` or `InsertAtTop`, ensuring hierarchical records with parent-child relationships are correctly handled by updating `parentID` in the task data. Configure valid [taskFields](../../api/gantt#taskfields) mappings (e.g., id, child) to support hierarchical tasks. This feature integrates with task dependencies, critical path, and virtual scrolling, ensuring reordered tasks align with the project timeline for efficient schedule management.

```ts
import { Gantt, Selection, Edit, RowDD, IGanttData } from '../src/index';
import { Ajax } from '@syncfusion/ej2-base';
Gantt.Inject(Selection, Edit, RowDD );

let gantt: Gantt = new Gantt({
    dataSource: new DataManager({
        url: 'https://localhost:44379/Home/UrlDatasource',
        adaptor: new UrlAdaptor,
        crossDomain: true,
        batchUrl: 'https://localhost:44379/Home/BatchUpdate'
    }),
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency:'Predecessor',
        child: 'subtasks'
    },
    allowRowDragAndDrop: true,
    rowDrop: function (args) {
        let record = this.flatData[args.fromIndex][this.taskFields.id];
        let record2 = this.flatData[args.dropIndex][this.taskFields.id];
        let data: IGanttData = args.data[0];
        let uri = 'https://localhost:44379/Home/RowDropMethod';
        let dragdropdata = {
             record: data[0].taskData,
             position: args.dropIndex,
             dragidMapping: record,
             dropidMapping: record2
        };
        let ajax = new Ajax(
        {
            url: uri,
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(dragdropdata),
        });
        ajax.send();
     }
});

gantt.appendTo('#ganttContainer');
```

```ts
public IActionResult RowDropMethod([FromBody]DragDropData value)
        {
            var data = new CRUDModel();
            copyRecord = true;
            if (value.position == "bottomSegment" || value.position == "topSegment")
            {
                {
                    var childCount = 0;
                    int parent1 = (int)value.record.parentID;
                    childCount += FindChildRecords(parent1);
                    if (childCount == 1)
                    {
                        var i = 0;
                        for (; i < DataList.Count; i++)
                        {
                            if (DataList[i].taskID == parent1)
                            {
                                DataList[i].isParent = false;
                                break;
                            }
                            if (DataList[i].taskID == value.record.taskID)
                            {
                                DataList[i].parentID = null;
                                break;
                            }


                        }
                    }
                }
                DataList.Remove(DataList.Where(ds => ds.taskID == value.dragidMapping).FirstOrDefault());
                var j = 0;
                for (; j < DataList.Count; j++)
                {
                    if (DataList[j].taskID == value.dropidMapping)
                    {
                        value.record.parentID = DataList[j].parentID;
                        break;
                    }
                }

                data.Value = value.record;
                if (value.position == "bottomSegment")
                {
                    this.Insert(data, value.dropidMapping);
                }
                else if (value.position == "topSegment")
                {
                    this.InsertAtTop(data, value.dropidMapping);
                }
            }
            else if (value.position == "middleSegment")
            {
                DataList.Remove(DataList.Where(ds => ds.taskID == value.dragidMapping).FirstOrDefault());
                value.record.parentID = value.dropidMapping;
                FindDropdata(value.dropidMapping);
                data.Value = value.record;
                this.Insert(data, value.dropidMapping);
            }
            copyRecord = false;
            return Json(new { updatedRecords = value.record });
        }
```

## See also
- [How to configure row drag and drop?](../../gantt/rows/drag-and-drop)
- [How to manage task dependencies?](../../gantt/taskdependency)
- [How to configure critical path?](../../gantt/critical-path)