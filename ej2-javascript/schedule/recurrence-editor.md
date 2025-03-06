---
layout: post
title: Recurrence editor in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Recurrence editor in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Recurrence editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Recurrence editor in ##Platform_Name## Scheduler control

The Recurrence editor is integrated into Scheduler editor window by default, to process the recurrence rule generation for events. Apart from this, it can also be used as an individual component referring from the Scheduler repository to work with the recurrence related processes.

> All the valid recurrence rule string mentioned in the [iCalendar](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications are applicable to use with the recurrence editor.

## Customizing the repeat type option in editor

By default, there are 5 types of repeat options available in recurrence editor such as,

* Never
* Daily
* Weekly
* Monthly
* Yearly

It is possible to customize the recurrence editor to display only the specific repeat options such as `Daily` and `Weekly` options alone by setting the appropriate [`frequencies`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#frequencies) option.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recurrence-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recurrence-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/schedule/recurrence-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recurrence-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recurrence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recurrence-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="es5-datasource.js" %}
{% include code-snippet/schedule/recurrence-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recurrence-cs1" %}
{% endif %}

The other properties available in recurrence editor are tabulated below,

| Properties | Type | Description |
|------------|------|-------------|
| firstDayOfWeek | number | Sets the first day of the week on recurrence editor.|
| startDate | Date | Sets the start date from which date the recurrence event starts. |
| dateFormat | string | Sets the specific date format on recurrence editor.|
| locale | string | Sets the locale to be applied on recurrence editor.|
| cssClass | string | Allows styling to be applied on recurrence editor with custom class names.|
| enableRtl | boolean | Allows recurrence editor to render in RTL mode.|
| minDate | Date | Sets the minimum date on recurrence editor.|
| maxDate | Date | Sets the maximum date on recurrence editor.|
| value | string | Sets the recurrence rule value on recurrence editor. |
| selectedType | number | Sets the specific repeat type on the recurrence editor.|

## Customizing the End Type Option in Editor

By default, there are 3 types of end options available in the recurrence editor such as:

* Never
* Until
* Count

It is possible to customize the recurrence editor to display only the specific end options, such as the `Until` and `Count` options alone, by setting the appropriate [`endTypes`](https://ej2.syncfusion.com/documentation/api/recurrence-editor/#endtypes) option.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recurrence-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recurrence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recurrence-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recurrence-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recurrence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recurrence-cs2" %}
{% endif %}

## Accessing the recurrence rule string

The recurrence rule is usually generated based on the options selected from the recurrence editor and also it follows the [`iCalendar`](https://tools.ietf.org/html/rfc5545#section-3.3.10) specifications. The generated recurrence rule string is a valid one to be used with the Scheduler event’s recurrence rule field.

The recurrence editor has a [`change`](https://ej2.syncfusion.com/documentation/api/recurrence-editor#change) event that triggers every time the fields are modified. You can access the generated recurrence value through the [`value`](https://ej2.syncfusion.com/documentation/api/recurrence-editor/#value) option in the event argument.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recur-editor-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recur-editor-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs1" %}
{% endif %}

## Set specific value on recurrence editor

You can display the recurrence editor with specific options loaded initially based on a provided rule string. The fields of the recurrence editor will change their values accordingly when you provide a particular rule through the `setRecurrenceRule` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recur-editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recur-editor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs2" %}
{% endif %}

## Recurrence date generation

You can parse the `recurrenceRule` of an event to generate the date instances on which that particular event is going to occur, using the `getRecurrenceDates` method. It generates the dates based on the `recurrenceRule` that we provide. The parameters to be provided for `getRecurrenceDates` method are as follows.

| Field name | Type | Description |
|------------|------|-------------|
| `startDate` | Date| Appointment start date. |
| `rule` | String| Recurrence rule present in an event object. |
| `excludeDate` | String | Date collection (in ISO format) to be excluded. It is **optional**. |
| `maximumCount` | Number | Number of date count to be generated. It is **optional**. |
| `viewDate` | Date | Current view range's first date. It is **optional**. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recur-editor-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recur-editor-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs3" %}
{% endif %}

## Recurrence date generation in server-side

It is also possible to generate recurrence date instances from server-side by manually referring the `RecurrenceHelper` class, which is specifically written and referred from application end to handle this date generation process.

> Refer [here](https://www.syncfusion.com/kb/10009/how-to-parse-the-recurrencerule-at-server-side) for the step by step procedure to achieve date generation in server-side.

## Restrict date generation with specific count

In case, if the rule is given in "NEVER ENDS" category, then you can mention the maximum count when you actually want to stop the date generation starting from the provided start date. To do so, provide the appropriate `maximumCount` value within the `getRecurrenceDates` method as shown in the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/recur-editor-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/recur-editor-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/recur-editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/recur-editor-cs4" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
