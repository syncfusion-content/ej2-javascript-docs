---
title: "Data Binding"
component: "Gantt"
description: "Learn how to bind local and remote data in the Essential JS 2 Gantt control."
---

# Data Binding

The Gantt control uses `DataManager` for binding the data source, which supports both RESTful JSON data services and local JavaScript object array. The [`dataSource`](../api/gantt/#datasource) property can be assigned either with the instance of DataManager or JavaScript object array collection. The Gantt control supports binding two types of data:
* Local data
* Remote data

## Local data

To bind local data to Gantt, you can assign a JavaScript object array to the [`dataSource`](../api/gantt/#datasource) property. The local data source can also be provided as an instance of the `DataManager`.

In local data binding, the data source for rendering the Gantt control is retrieved from the same application locally.

The following are the two types of data binding possible with the Gantt control:

* Hierarchical data binding.
* Self-referential data binding (Flat data).

### Hierarchical data binding

The [`child`](../api/gantt/taskFields/#child) property is used to map the child records in hierarchical data.

The following code example shows how to bind the hierarchical local data into the Gantt control.

{% tab template="gantt/databinding", es5Template="hierarchyData" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let HierarchyData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: HierarchyData,
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

```

{% endtab %}

### Self-referential data binding (Flat data)

The Gantt control can be bound with self-referential data by mapping the data source field values to the [`id`](../api/gantt/taskFields/#id) and [`parentID`](../api/gantt/taskFields/#parentid) properties.

* ID field: This field contains unique values used to identify each individual task and it is mapped to the [`id`](../api/gantt/taskFields/#id) property.
* Parent ID field: This field contains values that indicate parent tasks and it is mapped to the [`parentID`](../api/gantt/taskFields/#parentid) property.

{% tab template="gantt/databinding", es5Template="selfReference" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';

let SelfReferenceData: Object[]  = [
            { TaskID: 1,TaskName: 'Project Initiation',StartDate: new Date('04/02/2019'),EndDate: new Date('04/21/2019')},
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,ParentId:1 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, ParentId:1   },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,ParentId:1 },
            { TaskID: 5, TaskName: 'Project Estimation',StartDate: new Date('04/02/2019'),EndDate: new Date('04/21/2019')},
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentId:5  },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50,ParentId:5  },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, ParentId:5  }
        ];

let gantt: Gantt = new Gantt({
    dataSource: SelfReferenceData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Remote data

To bind remote data to the Gantt component, assign service data as an instance of `DataManager` to the [`dataSource`](../api/gantt/#datasource) property.

{% tab template="gantt/databinding", es5Template="remoteData" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let dataSource: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        progress: 'Progress',
        duration: 'Duration',
        dependency: 'Predecessor',
        child: 'SubTasks'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

### URL Adaptor

In Gantt, we can fetch data from SQL database using `ADO.NET` Entity Data Model and update the changes on CRUD action to the server by using `DataManager` support. To communicate with the remote data we are using `UrlAdaptor` of DataManager property to call the server method and get back resultant data in JSON format. We can know more about `UrlAdaptor` from [`here`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/?no-cache=1).

> Please refer the [link](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/creating-model-classes-with-the-entity-framework-cs) to create the `ADO.NET` Entity Data Model in Visual studio,

We can define data source for Gantt as instance of DataManager using `url` property of DataManager. Please Check the below code snippet to assign data source to Gantt.

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

let dataSource: DataManager = new DataManager({
    url: '/Home/UrlDatasource',
    adaptor: new UrlAdaptor
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        progress: 'Progress',
        duration: 'Duration',
        dependency: 'Predecessor',
        child: 'SubTasks'
    }
});
gantt.appendTo('#Gantt');

```

```typescript
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<GanttData>DataList = db.GanttDatas.ToList();
    var count = DataList.Count();
    return Json(new { result = DataList, count = count });
}

```

### Sending additional parameters to the server

We can pass additional parameters using [`addParams`](../api/data/query/#addparams) method of [`Query`](../api/data/query/) class.
In server side we have inherited and shown the additional parameter value in Syncfusion DataManager class itself. We pass an additional parameter in load time using [`load`](../api/gantt#load) event. We can also pass additional parameter to the CRUD model. Please Check the below code snippet to send additional parameter to Gantt.

```typescript

import { Gantt, Edit, Toolbar } from '@syncfusion/ej2-gantt';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

Gantt.Inject(Edit, Toolbar);

let dataSource: DataManager = new DataManager({
    url: 'http://localhost:50039/Home/UrlDatasource',
    adaptor: new UrlAdaptor,
    batchUrl: 'http://localhost:50039/Home/BatchSave',
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
      id: 'taskID',
      name: 'taskName',
      startDate: 'startDate',
      endDate: 'endDate',
      duration: 'duration',
      progress: 'progress',
      parentID: 'parentID',
    },
    editSettings: {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    load: function (args) {
      this.query = new Query().addParams('ej2Gantt', "test");
    }
});
gantt.appendTo('#Gantt');

```

```typescript

namespace URLAdaptor.Controllers
{
    public class HomeController : Controller
    {
        ...///
        //inherit the class to show age as property of DataManager
        public class Test : DataManagerRequest
        {
            public string ej2Gantt { get; set; }
        }

        public ActionResult UrlDatasource([FromBody]Test dm)
        {
            if (DataList == null)
            {
                ProjectData datasource = new ProjectData();
                DataList = datasource.GetUrlDataSource();
            }
            var count = DataList.Count();
            return Json(new { result = DataList, count = count }, JsonRequestBehavior.AllowGet);
        }

        ...///

        public class ICRUDModel<T> where T : class
        {

            public object key { get; set; }

            public T value { get; set; }

            public List<T> added { get; set; }

            public List<T> changed { get; set; }

            public List<T> deleted { get; set; }

            public IDictionary<string, object> @params { get; set; }

        }
        ...///
    }
}

```

You can find the full sample from here.

#### Handling HTTP error

During server interaction from the Gantt, some server-side exceptions may occur, and you can acquire those error messages or exception details in client-side using the [`actionFailure`](../api/gantt#actionfailure) event.

The argument passed to the `actionFailure` event contains the error details returned from the server.

{% tab template="gantt/actionfailure",es5Template="actionfailure" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { DataManager } from '@syncfusion/ej2-data';

let dataSource: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl',
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
      id: 'taskID',
      name: 'taskName',
      startDate: 'startDate',
      endDate: 'endDate',
      duration: 'duration',
      progress: 'progress',
      parentID: 'parentID',
    },
    actionFailure: (e) => {
       let span: HTMLElement = document.createElement('span');
       gantt.element.parentNode.insertBefore(span, gantt.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    },
});
gantt.appendTo('#Gantt');

```

{% endtab %}

#### Binding with Ajax

You can use Gantt [`dataSource`](../api/gantt#datasource) property to bind the data source to Gantt from external Ajax request. In the below code we have fetched the data source from the server with the help of Ajax request and provided that to `dataSource` property by using [`onSuccess`](../api/base/ajax/#onsuccess) event of the Ajax.

{% tab template="gantt/bindajax",es5Template="bindajax" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { Ajax } from '@syncfusion/ej2-base';

let gantt: Gantt = new Gantt({
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
      id: 'TaskId',
      name: 'TaskName',
      startDate: 'StartDate',
      progress: 'Progress',
      duration: 'Duration',
      dependency: 'Predecessor',
      child: 'SubTasks'
    },
    projectStartDate: new Date('02/24/2019'),
    projectEndDate: new Date('07/20/2019')
});
gantt.appendTo('#Gantt');

let button: HTMLElement = document.createElement('button');
button.textContent = 'Bind Data';
gantt.element.parentNode.insertBefore(button, gantt.element);
button.addEventListener("click", function(e){
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
    gantt.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data: string) {
        gantt.hideSpinner();
        gantt.dataSource = (JSON.parse(data)).Items;
        gantt.refresh();
    };
});

```

{% endtab %}

>Note: If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Split task

The `Split-task` feature allows you to split a task or interrupt the work during planned or unforeseen circumstances.
We can split the task either in load time or dynamically, by defining the segments either in hierarchical or self-referential way.

### Hierarchical

To split a task at load time in hierarchical way, we need to define the segment details in datasource and this field should be mapped by using the [`taskFields.segments`](../api/gantt/taskFields/#segments) property.

```typescript

[
    {
        TaskID: 1, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50,
        Segments: [
            { StartDate: new Date("04/02/2019"), Duration: 2 },
            { StartDate: new Date("04/04/2019"), Duration: 2 }
        ]
    }
]

```

{% tab template="gantt/split-task", es5Template="splitTask-hierarchy"%}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: "450px",
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        segments: "Segments"
    },
});

gantt.appendTo('#Gantt');

```

{% endtab %}

### Self-referential

We can also define segment details as a flat data and this collection can be mapped by using [`segmentData`](../api/gantt/#segmentData) property. The segment id field of this collection is mapped by using the [`taskFields.segmentId`](../api/gantt/taskFields/#segmentId) property.

```typescript

  taskFields: {
    segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 1, StartDate: new Date("02/04/2019"), Duration: 2 },
    { segmentId: 1, StartDate: new Date("02/05/2019"), Duration: 5 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],

```

{% tab template="gantt/split-task", es5Template="splitTask-flat"%}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { SplitTaskData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: SplitTaskData,
    height: "450px",
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
         segmentId: "segmentId"
  },
  segmentData: [
    { segmentId: 2, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 2, StartDate: new Date("04/04/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/02/2019"), Duration: 2 },
    { segmentId: 4, StartDate: new Date("04/04/2019"), Duration: 2 }
  ],
});

gantt.appendTo('#Gantt');

```

{% endtab %}

>Note: Segment id field contains id of a task which should be splitted at load time.

## Limitations

Gantt has the support for both Hierarchical and Self-Referential data binding. When rendering the Gantt control with SQL database, we suggest you to use the Self-Referential data binding to maintain the parent-child relation. Because the complex json structure is very difficult to manage it in SQL tables, we need to write a complex queries and we have to write a complex algorithm to find out the proper record details while updating/deleting the inner level task in Gantt data source. We cannot implement both data binding for Gantt control and this is not a recommended way. If  both child and parentID are mapped, the records will not render properly because, when task id of a record defined in the hierarchy structure is assigned to parent id of another record, in such case the records will not properly render. As the self-referential will search the record with particular id in flat data only, not in the inner level of records. If we map the parentID field,  it will be prioritized and Gantt will be rendered based on the parentID values.