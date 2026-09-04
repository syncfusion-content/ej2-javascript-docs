---
layout: post
title: Multi Selection in ##Platform_Name## Calendar | Syncfusion
description: Enable selection of single or multiple dates in ##Platform_Name## Calendar using the isMultiSelection and values properties for date ranges.
platform: ej2-javascript
control: Multi select 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Multi Selection in ##Platform_Name## Calendar

Calendar provides an option to select **single** or **multiple dates** by using the `isMultiSelection` and `values` properties. By default, the `isMultiSelection` property is in a disabled state.

| API | Type | Description |
|------|------|----------------------|
| `isMultiSelection`| **Boolean**| Enables the multi-selection option in the Calendar control |
|`values`| **Date[]** | Gets or sets the date range values in multi-selection option |

The following example demonstrates the functionality of the `isMultiSelection` and `values` properties in the Calendar control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs10" %}
{% endif %}

## See Also

* [Select a sequence of dates in Calendar](./how-to/select-a-sequence-of-dates-in-calendar)
