---
layout: post
title: Data binding in ##Platform_Name## Gantt control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Gantt control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Gantt control

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

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/databinding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/databinding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs1" %}
{% endif %}

### Self-referential data binding (Flat data)

The Gantt control can be bound with self-referential data by mapping the data source field values to the [`id`](../api/gantt/taskFields/#id) and [`parentID`](../api/gantt/taskFields/#parentid) properties.

* ID field: This field contains unique values used to identify each individual task and it is mapped to the [`id`](../api/gantt/taskFields/#id) property.
* Parent ID field: This field contains values that indicate parent tasks and it is mapped to the [`parentID`](../api/gantt/taskFields/#parentid) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/databinding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/databinding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs2" %}
{% endif %}

## Remote data

To bind remote data to the Gantt component, assign service data as an instance of `DataManager` to the [`dataSource`](../api/gantt/#datasource) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/databinding-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/databinding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/databinding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/databinding-cs3" %}
{% endif %}

### URL Adaptor

In Gantt, we can fetch data from SQL database using `ADO.NET` Entity Data Model and update the changes on CRUD action to the server by using `DataManager` support. To communicate with the remote data we are using `UrlAdaptor` of DataManager property to call the server method and get back resultant data in JSON format. We can know more about `UrlAdaptor` from [`here`](https://ej2.syncfusion.com/javascript/documentation/data/adaptors/?no-cache=1).

> Please refer the [link](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/models-data/creating-model-classes-with-the-entity-framework-cs) to create the `ADO.NET` Entity Data Model in Visual studio,

We can define data source for Gantt as instance of DataManager using `url` property of DataManager. Please Check the below code snippet to assign data source to Gantt.

```ts

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

```ts
GanttDataSourceEntities db = new GanttDataSourceEntities();
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<GanttData>DataList = db.GanttDatas.ToList();
    var count = DataList.Count();
    return Json(new { result = DataList, count = count });
}

```

### Load child on demand

To render child records on demand, assign a remote service URL in the instance of DataManager to the Url property. To interact with the remote data source, provide the endpoint URL and also define the [`hasChildMapping`](https://ej2.syncfusion.com/documentation/api/gantt/taskFields/#hasChildMapping) property in taskFields of Gantt Chart.

The <code>hasChildMapping</code> property maps the field name in the data source, which denotes whether the current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

When [`loadChildOnDemand`](https://ej2.syncfusion.com/documentation/api/gantt/#loadChildOnDemand) is disabled, all the root nodes are rendered in a collapsed state at initial load. On expanding the root node, the child nodes will be loaded from the remote server.

When <code>enableVirtualization</code> is enabled and <code>loadChildOnDemand</code> is disabled, only the current viewport root nodes are rendered in a collapsed state.

When a root node is expanded, its child nodes are rendered and maintained in a collection locally, such that on consecutive expand/collapse actions on the root node, the child nodes are loaded locally instead of from the remote server.

When the <code>loadChildOnDemand</code> is enabled, parent records are rendered in an expanded state.

```ts

import { Gantt, VirtualScroll, Selection } from '@syncfusion/ej2-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import './App.css';

Gantt.Inject(Selection, VirtualScroll);

let dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/GanttLoadOnDemand',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

let gantt: Gantt = new Gantt({
    dataSource: dataSource,
    loadChildOnDemand: false,
    taskFields: {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        hasChildMapping: 'isParent',
        parentID: 'parentID'
    },
    columns: [
        { field: 'taskId', headerText: 'Task ID' },
        { field: 'taskName', headerText: 'Task Name', allowReordering: false },
        { field: 'startDate', headerText: 'Start Date', allowSorting: false },
        { field: 'duration', headerText: 'Duration', allowEditing: false },
        { field: 'progress', headerText: 'Progress', allowFiltering: false },
    ],
    allowSelection: true,
    enableVirtualization: true,
    splitterSettings: {
        columnIndex: 3,
    },
    tooltipSettings: {
        showTooltip: true
    },
    highlightWeekends: true,
    timelineSettings: {
        showTooltip: true,
        topTier: {
            unit: 'Week',
            format: 'dd/MM/yyyy'
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        }
    },
    treeColumnIndex: 1,
    taskbarHeight: 20,
    rowHeight: 40,
    height: '460px',
    projectStartDate: new Date('01/02/2000'),
    projectEndDate: new Date('12/01/2002'),
    });
gantt.appendTo('#Gantt');

```

The following code example describes handling of Load on demand at server end.

```ts

    public object Get()
        {
            DataOperations operation = new DataOperations();
            var queryString = Request.Query;
            if (tree.Count == 0)
                tree = TreeData.GetTree();
            if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
            {
                StringValues filter;
                queryString.TryGetValue("$filter", out filter);
                int? fltr;
                if (filter[0].ToString().Split("eq")[1] == " null")
                {
                    fltr = null;
                }
                else
                {
                    fltr = Int32.Parse(filter[0].ToString().Split("eq")[1]);
                }
                IQueryable<TreeData> data1 = tree.Where(f => f.parentID == fltr).AsQueryable();
                return new { result = data1.ToList(), count = data1.Count() };
            }
            StringValues expand;
            queryString.TryGetValue("$expand", out expand);
            if (queryString.Keys.Contains("$expand")) // setting the ExpandStateMapping property whether is true or false
            {
                if (expand[0].ToString().Split(",")[0] == "ExpandingAction")
                {
                    var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                    val.IsExpanded = true;
                }
                else if (expand[0].ToString().Split(",")[0] == "CollapsingAction")
                {
                    var val = TreeData.GetTree().Where(ds => ds.taskId == int.Parse(expand[0].ToString().Split(",")[1])).FirstOrDefault();
                    val.IsExpanded = false;
                }
            }
            List<TreeData> data = tree.ToList();
            if (queryString.Keys.Contains("$select"))
            {
                data = (from ord in tree
                        select new TreeData
                        {
                            parentID = ord.parentID
                        }
                        ).ToList();
                return data;
            }
            data = data.Where(p => p.parentID == null).ToList();
            int count = data.Count;

            if (queryString.Keys.Contains("$inlinecount"))
            {
                StringValues Skip;
                StringValues Take;
                StringValues loadchild;

                int skip = (queryString.TryGetValue("$skip", out Skip)) ? Convert.ToInt32(Skip[0]) : 0;
                int top = (queryString.TryGetValue("$top", out Take)) ? Convert.ToInt32(Take[0]) : data.Count();

                var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.parentID)
                           .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
                foreach (var Record in data.ToList())
                {
                    if (GroupData.ContainsKey(Record.taskId.ToString()))
                    {
                        var ChildGroup = GroupData[Record.taskId.ToString()];
                        if (ChildGroup?.Count > 0)
                            AppendChildren(ChildGroup, Record, GroupData, data);
                    }
                }
                if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "CollapsingAction")
                {
                    string IdMapping = "taskId";
                    List<WhereFilter> CollapseFilter = new List<WhereFilter>();
                    CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                    var CollapsedParentRecord = operation.PerformFiltering(data, CollapseFilter, "and");
                    var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
                    skip = index;
                }
                else if (expand.Count > 0 && expand[0].ToString().Split(",")[0] == "ExpandingAction")
                {
                    string IdMapping = "taskId";
                    List<WhereFilter> ExpandFilter = new List<WhereFilter>();
                    ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = expand[0].ToString().Split(",")[1], Operator = "equal" });
                    var ExpandedParentRecord = operation.PerformFiltering(data, ExpandFilter, "and");
                    var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
                    skip = index;
                }
                return new { result = data.Skip(skip).Take(top), count = data.Count };
            }
            else
            {
                return TreeData.GetTree();
            }
        }
        private void AppendChildren(List<TreeData> ChildRecords, TreeData ParentItem, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data)
        {

            var queryString = Request.Query;
            string TaskId = ParentItem.taskId.ToString();

            var index = data.IndexOf(ParentItem);
            foreach (var Child in ChildRecords)
            {
                string ParentId = Child.parentID.ToString();
                if (TaskId == ParentId && (bool)ParentItem.IsExpanded)
                {
                    if (data.IndexOf(Child) == -1)
                        ((IList)data).Insert(++index, Child);
                    if (GroupData.ContainsKey(Child.taskId.ToString()))
                    {
                        var DeepChildRecords = GroupData[Child.taskId.ToString()];
                        if (DeepChildRecords?.Count > 0)
                            AppendChildren(DeepChildRecords, Child, GroupData, data);
                    }
                }
            }
        }

        // GET: api/Orders/
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public object Post([FromBody] TreeData[] value)
        {
            //handle insert action
            for (var i = 0; i < value.Length; i++)
            {
                tree.Insert(0, value[i]);
            }
            return value;
        }

        //// PUT: api/Orders
        [HttpPut]

        public object Put([FromBody] TreeData[] value)
        {
            //handle edit action
            if (value.Length == 1 && value[0].isParent == true)
            {
                UpdateDependentRecords(value[0]);
            }
            for (var i = 0; i < value.Length; i++) {
                var ord = value[i];
                TreeData val = tree.Where(or => or.taskId == ord.taskId).FirstOrDefault();
                val.taskId = ord.taskId;
                val.taskName = ord.taskName;
                val.endDate = ord.endDate;
                val.startDate = ord.startDate;
                val.duration = ord.duration;
                val.predecessor = ord.predecessor;
            }
            
            return value;
        }

        private void UpdateDependentRecords(TreeData ParentItem)
        {
            var data = tree.Where(p => p.parentID == ParentItem.taskId).ToList();
            var previousData = tree.Where(p => p.taskId == ParentItem.taskId).ToList();
            var previousStartDate = previousData[0].startDate;
            var previousEndDate = previousData[0].endDate;
            double sdiff = (double)GetTimeDifference((DateTime)previousStartDate, (DateTime)ParentItem.startDate);
            double ediff = (double)GetTimeDifference((DateTime)previousEndDate, (DateTime)ParentItem.endDate);
            GetRootChildRecords(ParentItem);
            for(var i=0; i<ChildRecords.Count;i++)
            {
                ChildRecords[i].startDate = ((DateTime)ChildRecords[i].startDate).AddSeconds(sdiff);
                ChildRecords[i].endDate = ((DateTime)ChildRecords[i].endDate).AddSeconds(ediff);
            }
        }

        private void GetRootChildRecords(TreeData ParentItem)
        {
            var currentchildRecords = tree.Where(p => p.parentID == ParentItem.taskId).ToList();
            for (var i = 0; i < currentchildRecords.Count; i++) {
                var currentRecord = currentchildRecords[i];
                ChildRecords.Add(currentRecord);
                if (currentRecord.isParent == true)
                {
                    GetRootChildRecords(currentRecord);
                }
            }
        }

        public object GetTimeDifference(DateTime sdate, DateTime edate)
        {
            return new DateTime(edate.Year, edate.Month, edate.Day, edate.Hour, edate.Minute, edate.Second, DateTimeKind.Utc).Subtract(new DateTime(sdate.Year, sdate.Month, sdate.Day, sdate.Hour, sdate.Minute, sdate.Second, DateTimeKind.Utc)).TotalSeconds;
        }


        // DELETE: api/ApiWithActions
        [HttpDelete("{id:int}")]
        [Route("Orders/{id:int}")]
        public object Delete(int id)
        {
            //handle delete action
            tree.Remove(tree.Where(or => or.taskId == id).FirstOrDefault());
            return Json(id);
        }
        public class CRUDModel<T> where T : class
        {

            public TreeData Value;
            public int Key { get; set; }
            public int RelationalKey { get; set; }
            public List<TreeData> added { get; set; }
            public List<TreeData> changed { get; set; }
            public List<TreeData> deleted { get; set; }
        }
        public class TreeData
        {
            public static List<TreeData> tree = new List<TreeData>();
            [System.ComponentModel.DataAnnotations.Key]
            public int taskId { get; set; }
            public string taskName { get; set; }
            public DateTime startDate { get; set; }
            public DateTime endDate { get; set; }
            public string duration { get; set; }
            public int progress { get; set; }
            public int? parentID { get; set; }
            public string predecessor { get; set; }
            public bool? isParent { get; set; }
            public bool? IsExpanded { get; set; }
            public static List<TreeData> GetTree()
            {
                if (tree.Count == 0)
                {
                    Random rand = new Random();
                    var x = 0;
                    int duration = 0;
                    DateTime startDate = new DateTime(2000, 1, 3, 08, 00, 00);
                    for (var i = 1; i <= 50; i++)
                    {
                        startDate = startDate.AddDays(i == 1 ? 0 : 7);
                        DateTime childStartDate = startDate;
                        TreeData Parent = new TreeData()
                        {
                            taskId = ++x,
                            taskName = "Task " + x,
                            startDate = startDate,
                            endDate = childStartDate.AddDays(26),
                            duration = "20",
                            progress = rand.Next(100),
                            predecessor = null,
                            isParent = true,
                            parentID = null,
                            IsExpanded = false
                        };
                        tree.Add(Parent);
                        for (var j = 1; j <= 4; j++)
                        {
                            childStartDate = childStartDate.AddDays(j == 1 ? 0 : duration + 2);
                            duration = 5;
                            tree.Add(new TreeData()
                            {
                                taskId = ++x,
                                taskName = "Task " + x,
                                startDate = childStartDate,
                                endDate = childStartDate.AddDays(5),
                                duration = duration.ToString(),
                                progress = rand.Next(100),
                                parentID = Parent.taskId,
                                predecessor = (j > 1 ? (x - 1) + "FS" : ""),
                                isParent = false,
                                IsExpanded = false
                            });
                        }
                    }
                }
                return tree;
            }
        }

```
### Limitations

* Filtering, sorting  and searching are not supported in load on demand.
* Only Self-Referential type data is supported with remote data binding in Gantt Chart.
* Load-on-demand supports only the validated data source

### Sending additional parameters to the server

We can pass additional parameters using [`addParams`](../api/data/query/#addparams) method of [`Query`](../api/data/query/) class.
In server side we have inherited and shown the additional parameter value in Syncfusion<sup style="font-size:70%">&reg;</sup> DataManager class itself. We pass an additional parameter in load time using [`load`](../api/gantt#load) event. We can also pass additional parameter to the CRUD model. Please Check the below code snippet to send additional parameter to Gantt.

```ts

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

```ts

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

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/actionfailure-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/actionfailure-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/actionfailure-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/actionfailure-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/actionfailure-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/actionfailure-cs1" %}
{% endif %}

#### Binding with Ajax

You can use Gantt [`dataSource`](../api/gantt#datasource) property to bind the data source to Gantt from external Ajax request. In the below code we have fetched the data source from the server with the help of Ajax request and provided that to `dataSource` property by using [`onSuccess`](../api/base/ajax/#onsuccess) event of the Ajax.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/bindajax-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/bindajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/bindajax-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/bindajax-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/bindajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/bindajax-cs1" %}
{% endif %}

>Note: If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## Split task

The `Split-task` feature allows you to split a task or interrupt the work during planned or unforeseen circumstances. We can split the task either in load time or dynamically, by defining the segments either in hierarchical or self-referential way.

### Hierarchical

To split a task at load time in hierarchical way, we need to define the segment details in datasource and this field should be mapped by using the [`taskFields.segments`](../api/gantt/taskFields/#segments) property.

```ts

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

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/split-task-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/split-task-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs1" %}
{% endif %}

### Self-referential

We can also define segment details as a flat data and this collection can be mapped by using [`segmentData`](../api/gantt/#segmentData) property. The segment id field of this collection is mapped by using the [`taskFields.segmentId`](../api/gantt/taskFields/#segmentId) property.

```ts

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

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/split-task-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/split-task-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/split-task-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/split-task-cs2" %}
{% endif %}

>Note: Segment id field contains id of a task which should be splitted at load time.

## Limitations

Gantt has the support for both Hierarchical and Self-Referential data binding. When rendering the Gantt control with SQL database, we suggest you to use the Self-Referential data binding to maintain the parent-child relation. Because the complex json structure is very difficult to manage it in SQL tables, we need to write a complex queries and we have to write a complex algorithm to find out the proper record details while updating/deleting the inner level task in Gantt data source. We cannot implement both data binding for Gantt control and this is not a recommended way. If  both child and parentID are mapped, the records will not render properly because, when task id of a record defined in the hierarchy structure is assigned to parent id of another record, in such case the records will not properly render. As the self-referential will search the record with particular id in flat data only, not in the inner level of records. If we map the parentID field,  it will be prioritized and Gantt will be rendered based on the parentID values.
