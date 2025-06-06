---
layout: post
title: Data binding in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Scheduler control

The Scheduler uses `DataManager`, which supports both RESTful data service binding and JavaScript object array binding. The [`dataSource`](../api/schedule/eventSettings/#datasource) property of the Scheduler can be assigned either with an instance of `DataManager` or JavaScript object array collection. The Scheduler supports two types of data binding methods:

* Local data
* Remote data

## Binding local data

To bind local JSON data to the Scheduler, you can simply assign a JavaScript object array to the [`dataSource`](../api/Scheduler/eventSettings/#datasource) option of the scheduler within the `eventSettings` property. The JSON object dataSource can also be provided as an instance of `DataManager` and assigned to the Scheduler `dataSource` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs1" %}
{% endif %}

> By default, `DataManager` uses `JsonAdaptor` for binding local data.

You can also bind different field names to the default event fields as well as include additional custom fields to the event object collection which can be referred [here](./appointments/#event-fields).

## Binding remote data

You can bind any kind of remote data service to the Scheduler. To do this:

1. Create an instance of `DataManager`.
2. Provide the service URL to the `url` option of `DataManager`.
3. Assign the `DataManager` instance to the [`dataSource`](../api/schedule/eventSettings/#datasource) property within `eventSettings`.

### Using ODataV4Adaptor

[ODataV4](https://www.odata.org/documentation/) is a standardized protocol for creating and consuming data. To connect with ODataV4 service end points, it is necessary to make use of `ODataV4Adaptor` within `DataManager`. Refer to the following code example to retrieve the data from ODataV4 service using the DataManager. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs2" %}
{% endif %}

### Filter events using the in-built query

To enable server-side filtering based on predetermined conditions, set the [`includeFiltersInQuery`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings/#includefiltersinquery) API to true. This constructs a filter query using the start date, end date, and recurrence rule, allowing the request to be filtered accordingly.

This method greatly improves the component's performance by reducing the data transferred to the client side. As a result, the component's efficiency and responsiveness are significantly enhanced, resulting in a better user experience. However, it is important to consider the possibility of longer query strings, which may cause issues with the maximum URL length or server limitations on query string length.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs3" %}
{% endif %}

The following image represents how the parameters are passed using ODataV4 filter.

![ODataV4 filter](images/filterQueryBehaviour.jpg)

### Using custom adaptor

You can create your own custom adaptor by extending the built-in available adaptors. The following example demonstrates custom adaptor usage and how to add a custom field `EventID` for appointments by overriding the `processResponse` method of the `ODataV4Adaptor`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs4" %}
{% endif %}

## Loading data via AJAX post

You can bind the event data through external ajax request and assign it to the [`dataSource`](../api/schedule/eventSettings/#datasource) property of Scheduler. In the following code example, we have retrieved the data from server with the help of ajax request and assigned the resultant data to the [`dataSource`](../api/schedule/eventSettings/#datasource) property of Scheduler within the `onSuccess` event of Ajax.

`[src/app/app.ts]`

```ts
import { Ajax } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: object = [];
let ajax = new Ajax('Home/GetData', 'GET', false);
ajax.onSuccess = function (value) {
    dataManager = value;
};
ajax.send();
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    eventSettings: { dataSource: dataManager }
});
scheduleObj.appendTo('#Schedule');
```

> Definition for the controller method `GetData` can be referred [here](#scheduler-crud-actions).

## Passing additional parameters to the server

To send additional custom parameters to the server-side post:

1. Use the `addParams` method of `Query`.
2. Assign the `Query` object with additional parameters to the [`query`](../api/schedule/eventSettings/#query) property of the Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs5" %}
{% endif %}

> Parameters added using the [`query`](../api/schedule/eventSettings/#query) property will be sent with every data request to the server for all Scheduler actions.

## Handling failure actions

You can handle server-side exceptions and error messages on the client-side using the Scheduler's [`actionFailure`](../api/schedule/#actionfailure) event. The event argument contains the error details returned from the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs6" %}
{% endif %}

> The [`actionFailure`](../api/schedule/#actionfailure) event triggers not only when the server returns errors but also when there's an exception while processing any Scheduler CRUD action.

## Scheduler CRUD actions

The CRUD (Create, Read, Update and Delete) actions can be performed easily on Scheduler appointments using the various adaptors available within the `DataManager`. Most preferably, we will be using `UrlAdaptor` for performing CRUD actions on scheduler appointments.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
       url: 'Home/GetData', // 'controller/actions'
       crudUrl: 'Home/UpdateData',
       adaptor: new UrlAdaptor
   });

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 5),
    eventSettings: { dataSource: dataManager }
});
scheduleObj.appendTo('#Schedule');
```

The server-side controller code to handle the CRUD operations are as follows.

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ScheduleSample.Models;

namespace ScheduleSample.Controllers
{
    public class HomeController : Controller
    {
        ScheduleDataDataContext db = new ScheduleDataDataContext();
        public ActionResult Index()
        {
            return View();
        }  
        public JsonResult LoadData()  // Here we get the Start and End Date and based on that can filter the data and return to Scheduler
        {
            var data = db.ScheduleEventDatas.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateData(EditParams param)
        {
            if (param.action == "insert" || (param.action == "batch" && param.added != null)) // this block of code will execute while inserting the appointments
            {
                var value = (param.action == "insert") ? param.value : param.added[0];
                int intMax = db.ScheduleEventDatas.ToList().Count > 0 ? db.ScheduleEventDatas.ToList().Max(p => p.Id) : 1;
                DateTime startTime = Convert.ToDateTime(value.StartTime);
                DateTime endTime = Convert.ToDateTime(value.EndTime);
                ScheduleEventData appointment = new ScheduleEventData()
                {
                    Id = intMax + 1,
                    StartTime = startTime.ToLocalTime(),
                    EndTime = endTime.ToLocalTime(),
                    Subject = value.Subject,
                    IsAllDay = value.IsAllDay,
                    StartTimezone = value.StartTimezone,
                    EndTimezone = value.EndTimezone,
                    RecurrenceRule = value.RecurrenceRule,
                    RecurrenceID = value.RecurrenceID,
                    RecurrenceException = value.RecurrenceException
                };
                db.ScheduleEventDatas.InsertOnSubmit(appointment);
                db.SubmitChanges();
            }
            if (param.action == "update" || (param.action == "batch" && param.changed != null)) // this block of code will execute while updating the appointment
            {
                var value = (param.action == "update") ? param.value : param.changed[0];
                var filterData = db.ScheduleEventDatas.Where(c => c.Id == Convert.ToInt32(value.Id));
                if (filterData.Count() > 0)
                {
                    DateTime startTime = Convert.ToDateTime(value.StartTime);
                    DateTime endTime = Convert.ToDateTime(value.EndTime);
                    ScheduleEventData appointment = db.ScheduleEventDatas.Single(A => A.Id == Convert.ToInt32(value.Id));
                    appointment.StartTime = startTime.ToLocalTime();
                    appointment.EndTime = endTime.ToLocalTime();
                    appointment.StartTimezone = value.StartTimezone;
                    appointment.EndTimezone = value.EndTimezone;
                    appointment.Subject = value.Subject;
                    appointment.IsAllDay = value.IsAllDay;
                    appointment.RecurrenceRule = value.RecurrenceRule;
                    appointment.RecurrenceID = value.RecurrenceID;
                    appointment.RecurrenceException = value.RecurrenceException;
                }
                db.SubmitChanges();
            }
            if (param.action == "remove" || (param.action == "batch" && param.deleted != null)) // this block of code will execute while removing the appointment
            {
                if (param.action == "remove")
                {
                    int key = Convert.ToInt32(param.key);
                    ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == key).FirstOrDefault();
                    if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                }
                else
                {
                    foreach (var apps in param.deleted)
                    {
                        ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == apps.Id).FirstOrDefault();
                        if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                    }
                }
                db.SubmitChanges();
            }
            var data = db.ScheduleEventDatas.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public class EditParams
        {
            public string key { get; set; }
            public string action { get; set; }
            public List<ScheduleEventData> added { get; set; }
            public List<ScheduleEventData> changed { get; set; }
            public List<ScheduleEventData> deleted { get; set; }
            public ScheduleEventData value { get; set; }
        }
    }
}
```

## Configuring Scheduler with Google API service

We have assigned our custom created Google Calendar url to the DataManager and assigned the same to the Scheduler [`dataSource`](../api/schedule/eventSettings/#datasource). Since the events data retrieved from the Google Calendar will be in its own object format, therefore it needs to be resolved manually within the Scheduler’s [`dataBinding`](../api/schedule#databinding) event. Within this event, the event fields needs to be mapped properly and then assigned to the result.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs7" %}
{% endif %}

## See Also

[Salesforce Integration](./how-to/salesforce-integration.md)

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
