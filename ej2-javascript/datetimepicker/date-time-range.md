---
layout: post
title: Date Time Range in ##Platform_Name## DateTime Picker | Syncfusion
description: Restrict ##Platform_Name## DateTime Picker values within a defined range using min and max properties to set valid start and end date and time bounds.
platform: ej2-javascript
control: Date time range 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# DateTime Range in ##Platform_Name## DateTime Picker

## DateTime Restriction

The DateTime Picker provides an option to select a date and time value within a specified range by using the [`min`](../api/datetimepicker#min) and [`max`](../api/datetimepicker#max) properties. The min value has to always be lesser than the max value.

When the min and max properties are configured and the selected datetime value is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with the highlighted `error` class to indicate that the datetime is out of range or invalid.

The value property depends on the min/max with respect to the [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs4" %}
{% endif %}

> If the value of the `min` or `max` properties is changed through code, then the `value` property has to be updated to be set within the range.

## Time Restriction

The DateTime Picker provides an option to select a time value within a specified range by using the [`minTime`](../api/datetimepicker#minTime)
and [`maxTime`](../api/datetimepicker#maxTime) properties. The minTime value has to always be lesser than the maxTime value.

When minTime and maxTime are set, the component will prioritize min if minTime is less than the current min time, and max if maxTime is greater than the current max time. Conversely, it will prioritize minTime if it is greater than the current min time, and maxTime if it is less than the current max time. These behaviors apply only when min and max Dates are selected or pre-bounded, with minTime and maxTime values set for all other dates apart from min and max dates.

The value property depends on the minTime/maxTime with respect to the [`strictMode`](./strict-mode) property.

The below example allows selecting a date within the range from 10:00 AM to 8:30 PM of each day.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs12" %}
{% endif %}