---
layout: post
title: Remote data in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Remote data in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Remote data 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Remote data in ##Platform_Name## Treegrid control

To bind remote data to TreeGrid component, assign service data as an instance of `DataManager` to the [`dataSource`](../../api/treegrid#datasource) property. To interact with remote data source,  provide the endpoint `url` and define the [`hasChildMapping`](../../api/treegrid#hasChildMapping) property of treegrid.

The [`hasChildMapping`](../../api/treegrid/#haschildmapping) property maps the field name in data source, that denotes whether current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

The TreeGrid provides `Load on Demand` support for rendering remote data. The Load on demand is considered in TreeGrid for the following actions.

* Expanding root nodes.
* Navigating pages, with paging enabled in TreeGrid.

When load on demand is enabled, all the root nodes are rendered in collapsed state at initial load.

When load on demand support is enabled in TreeGrid with paging, the current or active page’s root node alone will be rendered in collapsed state. On expanding the root node, the child nodes will be loaded from the remote server.

When a root node is expanded, its child nodes are rendered and are cached locally, such that on consecutive expand/collapse actions on root node, the child nodes are loaded from the cache instead from the remote server.

Similarly, if the user navigates to a new page, the root nodes of that specific page, will be rendered with request to the remote server.

>Remote Data Binding supports only Self-Referential Data and by default the `pageSizeMode` for Remote Data is `Root` mode. i.e only root node’s count will be shown in pager while using Remote Data

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/data-binding-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/data-binding-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs4" %}
{% endif %}

**Service code snippet:**

```ts

namespace Controllers
{
    [Produces("application/json")]
    [Route("api/SelfReferenceData")]
    public class SelfReferenceDataController : Controller
    {
        public static List<SelfReferenceData> tree = new List<SelfReferenceData>();
        // GET: api/SelfReferenceData
        [HttpGet]

        public object Get()
        {
            var queryString = Request.Query;
            if (tree.Count == 0)
                tree = SelfReferenceData.GetTree();
            //Filtering
            if (queryString.Keys.Contains("$filter") && !queryString.Keys.Contains("$top"))
            {
                StringValues filter;
                queryString.TryGetValue("$filter", out filter);
                int fltr = Int32.Parse(filter[0].ToString().Split("eq")[1]);
                IQueryable<SelfReferenceData> data1 = tree.Where(f => f.ParentItem == fltr).AsQueryable();
                return new { result = data1.ToList(), count = data1.Count() };
            }
            List<SelfReferenceData> data = tree.ToList();
            if (queryString.Keys.Contains("$select"))
            {
                data = (from ord in tree
                        select new SelfReferenceData
                        {
                            ParentItem = ord.ParentItem
                        }
                        ).ToList();
                return data;
            }
            data = data.Where(p => p.ParentItem == null).ToList();
            int count = data.Count;
             //Paging
            if (queryString.Keys.Contains("$inlinecount"))
            {
                StringValues Skip;
                StringValues Take;
                
                int skip = (queryString.TryGetValue("$skip", out Skip)) ? Convert.ToInt32(Skip[0]) : 0;
                int top = (queryString.TryGetValue("$top", out Take)) ? Convert.ToInt32(Take[0]) : data.Count();
       
                return new { result = tree.Skip(skip).Take(top), count = tree.Count };
            }
            else
            {
                return SelfReferenceData.GetTree();
            }

    public class SelfReferenceData
        {

            [Key]
            public int TaskID { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public String Progress { get; set; }
            public String Priority { get; set; }
            public int Duration { get; set; }
            public int? ParentItem { get; set; }
            public bool? isParent { get; set; }
            public SelfReferenceData() { }
            public static List<SelfReferenceData> GetTree()
            {
                if (tree.Count == 0)
                {
                    int root = -1;
                    for (var t = 1; t <= 60; t++)
                    {
                        Random ran = new Random();
                        string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                        string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                        root++;
                        int rootItem = tree.Count + root + 1;
                        tree.Add(new SelfReferenceData() { TaskID = rootItem, TaskName = "Parent Task " + rootItem.ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = true, ParentItem = null, Progress = progr, Priority = math, Duration = ran.Next(1, 50) });
                        int parent = tree.Count;
                        for (var c = 0; c < 10; c++)
                        {
                            root++;
                            string val = ((parent + c + 1) % 3 == 0) ? "Low" : "Critical";
                            int parn = parent + c + 1;
                            progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                            int iD = tree.Count + root + 1;
                            tree.Add(new SelfReferenceData() { TaskID = iD, TaskName = "Child Task " + iD.ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = (((parent + c + 1) % 3) == 0), ParentItem = rootItem, Progress = progr, Priority = val, Duration = ran.Next(1, 50) });
                            if ((((parent + c + 1) % 3) == 0))
                            {
                                int immParent = tree.Count;
                                for (var s = 0; s < 3; s++)
                                {
                                    root++;
                                    string Prior = (immParent % 2 == 0) ? "Validated" : "Normal";
                                    tree.Add(new SelfReferenceData() { TaskID = tree.Count + root + 1, TaskName = "Sub Task " + (tree.Count + root + 1).ToString(), StartDate = new DateTime(1992, 06, 07), EndDate = new DateTime(1994, 08, 25), isParent = false, ParentItem = iD, Progress = (immParent % 2 == 0) ? "On Progress" : "Closed", Priority = Prior, Duration = ran.Next(1, 50) });
                                }
                            }
                        }
                    }
                }
                return tree;
            }
        }
    }

```

> By default, `DataManager` uses `ODataAdaptor` for remote data-binding.
> Based on the RESTful web services, set the corresponding adaptor to DataManager. Refer [`here`](https://ej2.syncfusion.com/documentation/data/adaptors/?no-cache=1) for more details.
> Filtering and searching server-side data operations are not supported in load on demand

## LoadChildOnDemand

While binding remote data to Tree Grid component, by default Tree Grid renders parent rows in collapsed state. Tree Grid provides option to load the child records also during the initial rendering itself for remote data binding by setting [`loadChildOnDemand`](https://ej2.syncfusion.com/documentation/api/treegrid/#loadchildondemand) as false.

When [`loadChildOnDemand`](https://ej2.syncfusion.com/documentation/api/treegrid/#loadchildondemand) is enabled parent records are rendered in collapsed state.

The following code example describes the behavior of the loadChildOnDemand feature of Tree Grid.

{% if page.publishingplatform == "typescript" %}

```ts
import { TreeGrid, Page }from '@syncfusion/ej2-treegrid';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

TreeGrid.Inject(Page);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    batchUrl: "Home/Remove",
    adaptor: new UrlAdaptor
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    height: 260,
    allowPaging: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treegrid.appendTo('#TreeGrid');
```

{% elsif page.publishingplatform == "javascript" %}

```js
ej.treegrid.TreeGrid.Inject(ej.treegrid.Page);

var data = new ej.data.DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    batchUrl: "Home/Remove",
    adaptor: new ej.data.UrlAdaptor
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentItem',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    height: 260,
    allowPaging: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'StartDate', headerText: 'Start Date', textAlign: 'Right', width: 90, format: { skeleton: 'yMd', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');
```

{% endif %}

> Also while using **loadChildOnDemand** we need to handle the child records on server end and it is applicable to CRUD operations also.

The following code example describes handling of child records at server end.

```ts

public ActionResult UrlDatasource(DataManagerRequest dm)
{
    if (TreeData.tree.Count == 0)
          TreeData.GetTree();
    IEnumerable DataSource = TreeData.tree;

    DataOperations operation = new DataOperations();
    if (dm.Where != null && dm.Where.Count > 0)
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");   //perform filtering  
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0)
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);  //perform sorting
    }
    var count = DataSource.ToList<TreeData>().Count();
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    if (dm.Where != null)
    {
        DataSource = CollectChildRecords(DataSource, dm);  // method to collect child records
    }

    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}

 public IEnumerable CollectChildRecords(IEnumerable datasource, DataManagerRequest dm)
 {
     DataOperations operation = new DataOperations();
     IEnumerable DataSource = TreeData.tree;  // use the total DataSource here
     string IdMapping = "TaskID";  // define your IdMapping field name here
     int[] TaskIds = new int[0];
     foreach (var rec in datasource)
     {
        int taskid = (int)rec.GetType().GetProperty(IdMapping).GetValue(rec);
        TaskIds = TaskIds.Concat(new int[] { taskid }).ToArray();     //get the Parentrecord Ids based on IdMapping Field  
     }
    IEnumerable ChildRecords = null;
     foreach (int id in TaskIds)
     {
        dm.Where[0].value = id;
        IEnumerable records = operation.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);     //perform filtering to collect the childrecords based on Ids
        ChildRecords = ChildRecords == null || (ChildRecords.AsQueryable().Count() == 0) ? records : ((IEnumerable<object>)ChildRecords).Concat((IEnumerable<object>)records);  //concate the childrecords with dataSource
     }
     if (ChildRecords != null)
     {
        ChildRecords = CollectChildRecords(ChildRecords, dm);  // repeat the operation for inner level child
        if (dm.Sorted != null && dm.Sorted.Count > 0) // perform Sorting
        {
            ChildRecords = operation.PerformSorting(ChildRecords, dm.Sorted);
        }
        datasource = ((IEnumerable<object>)datasource).Concat((IEnumerable<object>)ChildRecords);    //concate the childrecords with dataSource  
     }
    return datasource;
 }

```

## Offline mode

On remote data binding, all treegrid actions such as paging, loading child on-demand, will be processed on server-side. To avoid postback, set the treegrid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the `offline` property of `DataManager`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/data-binding-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/data-binding-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs5" %}
{% endif %}

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates custom adaptor approach and how to add a serial number for the records by overriding the built-in response processing using the `processResponse` method of the `WebApiAdaptor`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/data-binding-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/data-binding-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs6" %}
{% endif %}

## Sending additional parameters to the server

To add a custom parameter to the data request, use the `addParams` method of `Query` class. Assign the `Query` object with additional parameters to the treegrid [`query`](../../api/treegrid#query) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/data-binding-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/data-binding-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs7" %}
{% endif %}

## Handling HTTP error

During server interaction from the treegrid, some server-side exceptions may occur, and you can acquire those error messages or exception details
in client-side using the [`actionFailure`](../../api/treegrid#actionfailure) event.

The argument passed to the [`actionFailure`](../../api/treegrid#actionfailure) event contains the error details returned from the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/data-binding-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/data-binding-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/data-binding-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/data-binding-cs8" %}
{% endif %}

> The [`actionFailure`](../../api/treegrid#actionfailure) event will be triggered not only for the server errors, but
also when there is an exception while processing the treegrid actions.

## Load on demand with virtualization

While binding remote data to Tree Grid component, by default Tree Grid renders parent rows in collapsed state. When expanding the root node, the child nodes will be loaded from the remote server.

When using virtualization with remote data binding, it helps you to improve the tree grid performance while loading a large set of data by setting [`enableVirtualization`](https://ej2.syncfusion.com/documentation/api/treegrid/#enablevirtualization) as true. The Tree Grid UI virtualization allows it to render only rows and columns visible within the view-port without buffering the entire datasource.

[`hasChildMapping`](https://ej2.syncfusion.com/documentation/api/treegrid/#haschildmapping) property maps the field name in data source, that denotes whether current record holds any child records. This is useful internally to show expand icon while binding child data on demand.

{% if page.publishingplatform == "typescript" %}

```ts
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent, VirtualScroll, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import './App.css';

TreeGrid.Inject(Edit, VirtualScroll, Sort, Filter, Toolbar);

let dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: dataManager,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentValue',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    expandStateMapping: 'IsExpanded',
    enableVirtualization: true,
    height: 400,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {pageSize: 30},
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treegrid.appendTo('#TreeGrid');
```

{% elsif page.publishingplatform == "javascript" %}

```js
ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.VirtualScroll, ej.treegrid.Sort, ej.treegrid.Filter, ej.treegrid.Toolbar);

var data = new ej.data.DataManager({
    adaptor: new ej.data.UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentValue',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    expandStateMapping: 'IsExpanded',
    enableVirtualization: true,
    height: 400,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {pageSize: 30},
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treeGridObj.appendTo('#TreeGrid');
```

{% endif %}

The following code example describes handling of Load on demand at server end.

```ts

public ActionResult lazyLoading()
{
    TreeData.tree = new List<TreeData>();
    return View();
}
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    List<TreeData> ExpandedParentRecords = new List<TreeData>();
    if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the ExpandStateMapping property whether is true or false
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = true;
    }
    else if (dm.Expand != null && dm.Expand[0] == "CollapsingAction")
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = false;
    }
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    data = new List<TreeData>();
    foreach (var rec in DataSource)
    {
        if (rec.IsExpanded)
        {
            ExpandedParentRecords.Add(rec as TreeData); // saving the expanded parent records
        }
        data.Add(rec as TreeData);
    }
    var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.ParentValue)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
    if (ExpandedParentRecords.Count > 0)
    {
        foreach (var Record in ExpandedParentRecords.ToList())
        {
            var ChildGroup = GroupData[Record.TaskID.ToString()];
            if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
            {
                IEnumerable ChildSort = ChildGroup;
                ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSort)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (dm.Search != null && dm.Search.Count > 0) // searching the child records
            {
                IEnumerable ChildSearch = ChildGroup;
                ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSearch)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            AppendChildren(dm, ChildGroup, Record, GroupData, data);
        }
    }
    DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the skip index based on collapsed parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> CollapseFilter = new List<WhereFilter>();
        CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var CollapsedParentRecord = operation.PerformFiltering(DataSource, CollapseFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the skip index based on expanded parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> ExpandFilter = new List<WhereFilter>();
        ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var ExpandedParentRecord = operation.PerformFiltering(DataSource, ExpandFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

private void AppendChildren(DataManagerRequest dm, List<TreeData> ChildRecords, TreeData ParentValue, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data) // Getting child records for the respective parent
{
    string TaskId = ParentValue.TaskID.ToString();
    var index = data.IndexOf(ParentValue);
    DataOperations operation = new DataOperations();
    foreach (var Child in ChildRecords)
    {
        if (ParentValue.IsExpanded)
        {
            string ParentId = Child.ParentValue.ToString();
            if (TaskId == ParentId)
            {
                ((IList)data).Insert(++index, Child);
                if (GroupData.ContainsKey(Child.TaskID.ToString()))
                {
                    var DeepChildRecords = GroupData[Child.TaskID.ToString()];
                    if (DeepChildRecords?.Count > 0)
                    {
                        if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
                        {
                            IEnumerable ChildSort = DeepChildRecords;
                            ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSort)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        if (dm.Search != null && dm.Search.Count > 0) // searching the child records
                        {
                            IEnumerable ChildSearch = DeepChildRecords;
                            ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSearch)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        AppendChildren(dm, DeepChildRecords, Child, GroupData, data);
                        if (Child.IsExpanded)
                        {
                            index += DeepChildRecords.Count;
                        }
                    }
                }
                else
                {
                    Child.isParent = false;
                }
            }
        }
    }

}

public ActionResult Update(CRUDModel<TreeData> value)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
    val.TaskName = value.Value.TaskName;
    val.Duration = value.Value.Duration;
    return Json(val);
}

public ActionResult Insert(CRUDModel<TreeData> value)
{
    var c = 0;
    for (; c < TreeData.GetTree().Count; c++)
    {
        if (TreeData.GetTree()[c].TaskID == value.RelationalKey)
        {
            if (TreeData.GetTree()[c].isParent == null)
            {
                TreeData.GetTree()[c].isParent = true;
            }
            break;
        }
    }
    c += FindChildRecords(value.RelationalKey);
    TreeData.GetTree().Insert(c + 1, value.Value);

    return Json(value.Value);
}

public int FindChildRecords(int? id)
{
    var count = 0;
    for (var i = 0; i < TreeData.GetTree().Count; i++)
    {
        if (TreeData.GetTree()[i].ParentValue == id)
        {
            count++;
            count += FindChildRecords(TreeData.GetTree()[i].TaskID);
        }
    }
    return count;
}

public object Delete(CRUDModel<TreeData> value)
{
    if (value.deleted != null)
    {
        for (var i = 0; i < value.deleted.Count; i++)
        {
            TreeData.GetTree().Remove(TreeData.GetTree().Where(ds => ds.TaskID == value.deleted[i].TaskID).FirstOrDefault());
        }
    }
    else
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
    }
    return Json(value);
}

public class CRUDModel<T> where T : class
{

    public TreeData Value;
    public int Key { get; set; }
    public int RelationalKey { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
}

public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }
    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = false, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = false, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 500; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), isParent = false, IsExpanded = false, ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```

### Load parent rows in expanded state with virtualization

Tree Grid provides an option to load the child records in the initial rendering itself for remote data binding by setting the [`loadChildOnDemand`](https://ej2.syncfusion.com/documentation/api/treegrid/#loadchildondemand) as true. When the `loadChildOnDemand` is enabled, parent records are rendered in expanded state.

When using virtualization with `loadChildOnDemand` , it helps you to improve the tree grid performance while loading the child records during the initial rendering for remote data binding by setting [`enableVirtualization`](https://ej2.syncfusion.com/documentation/api/treegrid/#enablevirtualization) as true and `loadChildOnDemand` as true.

{% if page.publishingplatform == "typescript" %}

```ts
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent, VirtualScroll, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-treegrid';
import './App.css';

TreeGrid.Inject(Edit, VirtualScroll, Sort, Filter, Toolbar);

let dataManager: DataManager = new DataManager({
    adaptor: new UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
});

let treegrid: TreeGrid = new TreeGrid({
    dataSource: dataManager,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentValue',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    expandStateMapping: 'IsExpanded',
    enableVirtualization: true,
    height: 400,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {pageSize: 30},
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treegrid.appendTo('#TreeGrid');
```

{% elsif page.publishingplatform == "javascript" %}

```js
ej.treegrid.TreeGrid.Inject(ej.treegrid.Edit, ej.treegrid.VirtualScroll, ej.treegrid.Sort, ej.treegrid.Filter, ej.treegrid.Toolbar);

var data = new ej.data.DataManager({
    adaptor: new ej.data.UrlAdaptor,
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    updateUrl: "Home/Update",
    url: "Home/DataSource",
    });

var treeGridObj = new ej.treegrid.TreeGrid({
    dataSource: data,
    idMapping: 'TaskID',
    parentIdMapping: 'ParentValue',
    hasChildMapping: 'isParent',
    loadChildOnDemand: true,
    expandStateMapping: 'IsExpanded',
    enableVirtualization: true,
    height: 400,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Below' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    pageSettings: {pageSize: 30},
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    treeColumnIndex: 1,
        columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
        { field: 'TaskName', headerText: 'Task Name', width: 180 },
        { field: 'Duration', headerText: 'Duration', width: 80, textAlign: 'Right' }
    ]
});

treegrid.appendTo('#TreeGrid');
```

{% endif %}

The following code example describes handling of child records at server end.

```ts

public ActionResult loadChildOndemand()
{
    TreeData.tree = new List<TreeData>();
    return View();
}
public ActionResult UrlDatasource(DataManagerRequest dm)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    DataOperations operation = new DataOperations();
    IEnumerable<TreeData> DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the ExpandStateMapping property whether is true or false
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = false;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction")
    {
        var val = TreeData.GetTree().Where(ds => ds.TaskID == int.Parse(dm.Expand[1])).FirstOrDefault();
        val.IsExpanded = true;
    }
    if (!(dm.Where != null && dm.Where.Count > 1))
    {
        data = data.Where(p => p.ParentValue == null).ToList();
    }
    DataSource = data;
    if (dm.Search != null && dm.Search.Count > 0) // Searching
    {
        DataSource = operation.PerformSearching(DataSource, dm.Search);
    }
    if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting
    {
        DataSource = operation.PerformSorting(DataSource, dm.Sorted);
    }
    if (dm.Where != null && dm.Where.Count > 1) //filtering
    {
        DataSource = operation.PerformFiltering(DataSource, dm.Where, "and");
    }
    data = new List<TreeData>();
    foreach (var rec in DataSource)
    {
        data.Add(rec as TreeData);
    }
    var GroupData = TreeData.GetTree().ToList().GroupBy(rec => rec.ParentValue)
                        .Where(g => g.Key != null).ToDictionary(g => g.Key?.ToString(), g => g.ToList());
    foreach (var Record in data.ToList())
    {
        if (GroupData.ContainsKey(Record.TaskID.ToString()))
        {
            var ChildGroup = GroupData[Record.TaskID.ToString()];
            if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // Sorting the child records
            {
                IEnumerable ChildSort = ChildGroup;
                ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSort)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (dm.Search != null && dm.Search.Count > 0) // Searching the child records
            {
                IEnumerable ChildSearch = ChildGroup;
                ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                ChildGroup = new List<TreeData>();
                foreach (var rec in ChildSearch)
                {
                    ChildGroup.Add(rec as TreeData);
                }
            }
            if (ChildGroup?.Count > 0)
                AppendChildren(dm, ChildGroup, Record, GroupData, data);
        }
    }
    DataSource = data;
    if (dm.Expand != null && dm.Expand[0] == "CollapsingAction") // setting the skip index based on collapsed parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> CollapseFilter = new List<WhereFilter>();
        CollapseFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var CollapsedParentRecord = operation.PerformFiltering(DataSource, CollapseFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(CollapsedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    else if (dm.Expand != null && dm.Expand[0] == "ExpandingAction") // setting the skip index based on expanded parent
    {
        string IdMapping = "TaskID";
        List<WhereFilter> ExpandFilter = new List<WhereFilter>();
        ExpandFilter.Add(new WhereFilter() { Field = IdMapping, value = dm.Where[0].value, Operator = dm.Where[0].Operator });
        var ExpandedParentRecord = operation.PerformFiltering(DataSource, ExpandFilter, "and");
        var index = data.Cast<object>().ToList().IndexOf(ExpandedParentRecord.Cast<object>().ToList()[0]);
        dm.Skip = index;
    }
    int count = data.Count;
    DataSource = data;
    if (dm.Skip != 0)
    {
        DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
    }
    if (dm.Take != 0)
    {
        DataSource = operation.PerformTake(DataSource, dm.Take);
    }
    return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);

}

private void AppendChildren(DataManagerRequest dm, List<TreeData> ChildRecords, TreeData ParentValue, Dictionary<string, List<TreeData>> GroupData, List<TreeData> data) // Getting child records for the respective parent
{
    string TaskId = ParentValue.TaskID.ToString();
    var index = data.IndexOf(ParentValue);
    DataOperations operation = new DataOperations();
    foreach (var Child in ChildRecords)
    {
        if (ParentValue.IsExpanded)
        {
            string ParentId = Child.ParentValue.ToString();
            if (TaskId == ParentId)
            {
                ((IList)data).Insert(++index, Child);
                if (GroupData.ContainsKey(Child.TaskID.ToString()))
                {
                    var DeepChildRecords = GroupData[Child.TaskID.ToString()];
                    if (DeepChildRecords?.Count > 0)
                    {
                        if (dm.Sorted != null && dm.Sorted.Count > 0 && dm.Sorted[0].Name != null) // sorting the child records
                        {
                            IEnumerable ChildSort = DeepChildRecords;
                            ChildSort = operation.PerformSorting(ChildSort, dm.Sorted);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSort)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        if (dm.Search != null && dm.Search.Count > 0) // searching the child records
                        {
                            IEnumerable ChildSearch = DeepChildRecords;
                            ChildSearch = operation.PerformSearching(ChildSearch, dm.Search);
                            DeepChildRecords = new List<TreeData>();
                            foreach (var rec in ChildSearch)
                            {
                                DeepChildRecords.Add(rec as TreeData);
                            }
                        }
                        AppendChildren(dm, DeepChildRecords, Child, GroupData, data);
                        if (Child.IsExpanded)
                        {
                            index += DeepChildRecords.Count;
                        }
                    }
                }
            }
        }
    }

}

public ActionResult Update(CRUDModel<TreeData> value)
{
    List<TreeData> data = new List<TreeData>();
    data = TreeData.GetTree();
    var val = data.Where(ds => ds.TaskID == value.Value.TaskID).FirstOrDefault();
    val.TaskName = value.Value.TaskName;
    val.Duration = value.Value.Duration;
    return Json(val);
}

public ActionResult Insert(CRUDModel<TreeData> value)
{
    var c = 0;
    for (; c < TreeData.GetTree().Count; c++)
    {
        if (TreeData.GetTree()[c].TaskID == value.RelationalKey)
        {
            if (TreeData.GetTree()[c].isParent == null)
            {
                TreeData.GetTree()[c].isParent = true;
            }
            break;
        }
    }
    c += FindChildRecords(value.RelationalKey);
    TreeData.GetTree().Insert(c + 1, value.Value);

    return Json(value.Value);
}

public int FindChildRecords(int? id)
{
    var count = 0;
    for (var i = 0; i < TreeData.GetTree().Count; i++)
    {
        if (TreeData.GetTree()[i].ParentValue == id)
        {
            count++;
            count += FindChildRecords(TreeData.GetTree()[i].TaskID);
        }
    }
    return count;
}

public object Delete(CRUDModel<TreeData> value)
{
    if (value.deleted != null)
    {
        for (var i = 0; i < value.deleted.Count; i++)
        {
            TreeData.GetTree().Remove(TreeData.GetTree().Where(ds => ds.TaskID == value.deleted[i].TaskID).FirstOrDefault());
        }
    }
    else
    {
        TreeData.GetTree().Remove(TreeData.GetTree().Where(or => or.TaskID == int.Parse(value.Key.ToString())).FirstOrDefault());
    }
    return Json(value);
}

public class CRUDModel<T> where T : class
{

    public TreeData Value;
    public int Key { get; set; }
    public int RelationalKey { get; set; }
    public List<T> added { get; set; }
    public List<T> changed { get; set; }
    public List<T> deleted { get; set; }
}

public class TreeData
{
    public static List<TreeData> tree = new List<TreeData>();
    [System.ComponentModel.DataAnnotations.Key]
    public int TaskID { get; set; }
    public string TaskName { get; set; }
    public int Duration { get; set; }
    public int? ParentValue { get; set; }
    public bool? isParent { get; set; }
    public bool IsExpanded { get; set; }
    public TreeData() { }
    public static List<TreeData> GetTree()
    {
        if (tree.Count == 0)
        {
            int root = 0;
            for (var t = 1; t <= 1500; t++)
            {
                Random ran = new Random();
                string math = (ran.Next() % 3) == 0 ? "High" : (ran.Next() % 2) == 0 ? "Release Breaker" : "Critical";
                string progr = (ran.Next() % 3) == 0 ? "Started" : (ran.Next() % 2) == 0 ? "Open" : "In Progress";
                root++;
                int rootItem = root;
                tree.Add(new TreeData() { TaskID = rootItem, TaskName = "Parent task " + rootItem.ToString(), isParent = true, IsExpanded = true, ParentValue = null, Duration = ran.Next(1, 50) });
                int parent = root;
                for (var d = 0; d < 1; d++)
                {
                    root++;
                    string value = ((parent + 1) % 3 == 0) ? "Low" : "Critical";
                    int par = parent + 1;
                    progr = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                    int iD = root;
                    tree.Add(new TreeData() { TaskID = iD, TaskName = "Child task " + iD.ToString(), isParent = true, IsExpanded = true, ParentValue = rootItem, Duration = ran.Next(1, 50) });
                    int subparent = root;
                    for (var c = 0; c < 6; c++)
                    {
                        root++;
                        string val = ((subparent + c + 1) % 3 == 0) ? "Low" : "Critical";
                        int subchild = subparent + c + 1;
                        string progress = (ran.Next() % 3) == 0 ? "In Progress" : (ran.Next() % 2) == 0 ? "Open" : "Validated";
                        int childID = root ;
                        tree.Add(new TreeData() { TaskID = childID, TaskName = "sub Child task " + childID.ToString(), ParentValue = subparent, Duration = ran.Next(1, 50) });
                    }
                }
            }
        }
        return tree;
    }
}

```
