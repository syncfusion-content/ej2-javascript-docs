---
layout: post
title: Timescale in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Timescale in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timescale 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Timescale in ##Platform_Name## Scheduler control

The time slots are usually the time cells that are displayed on the Day, Week and Work Week views of both the calendar (to the left most position) and timeline views (at the top position). The [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property allows you to control and set the required time slot duration for the work cells displayed on Scheduler. It includes the following sub-options such as,

* [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#enable) - When set to `true`, allows the Scheduler to display appointments accurately against the exact time duration. If set to `false`, all appointments of a day will be displayed one below the other with no grid lines. Its default value is `true`.
* [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#interval) – Defines the time duration for which the time axis to be displayed either in 1 hour or 30 minutes intervals, and so on. It accepts the values in minutes and defaults to 60.
* [`slotCount`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#slotcount) – Determines the number of slot count to be split for the specified time interval duration. It defaults to 2, thus displaying two slots to represent an hour(each slot depicting 30 minutes duration).

>Note: The upper limit for rendering slots within a single day, utilizing the **interval** and **slotCount** properties of the **timeScale**, stands at 1000. This constraint aligns with the maximum **colspan** value permissible for the **table** element, also capped at 1000. This particular restriction is relevant exclusively to the `TimelineDay`, `TimelineWeek` and `TimelineWorkWeek` views.

## Setting different time slot duration

The [`interval`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#interval) and [`slotCount`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#slotcount) properties can be used together on the Scheduler to set different time slot duration which is depicted in the following code example. Here, six time slots together represents an hour.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/timescale-cs2/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/timescale-cs2/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs2" %}
{% endif %}

## Customizing time cells using template

The [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property also provides template option to allow customization of time slots which are as follows,

* [`majorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#majorslottemplate) - The template option to be applied for major time slots. Here, the template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the time cells. The time details can be accessed within this template.
* [`minorSlotTemplate`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#minorslottemplate) - The template option to be applied for minor time slots. Here, the template accepts either the string or HTMLElement as template design and then the parsed design is displayed onto the time cells. The time details can be accessed within this template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/timescale-cs3/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/timescale-cs3/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs3" %}
{% endif %}

## Hide the timescale

The grid lines which indicates the exact time duration can be enabled or disabled on the Scheduler, by setting `true` or `false` to the [`enable`](https://ej2.syncfusion.com/documentation/api/schedule/timeScale/#enable) option within the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) property. It's default value is `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/timescale-cs4/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/timescale-cs4/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs4" %}
{% endif %}

## Highlighting current date and time

By default, Scheduler indicates current date with a highlighted date header on all views, as well as marks accurately the system's current time on specific views such as Day, Week, Work Week, Timeline Day, Timeline Week and Timeline Work Week views. To stop highlighting the current time indicator on Scheduler views, set `false` to the [`showTimeIndicator`](https://ej2.syncfusion.com/documentation/api/schedule#showtimeindicator) property which defaults to `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs5" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
