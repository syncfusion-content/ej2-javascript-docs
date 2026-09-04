---
layout: post
title: Range Restriction in ##Platform_Name## DateRangePicker | Syncfusion
description: Restrict selectable start and end dates in ##Platform_Name## DateRangePicker by configuring the min, max, and other range-bound properties.
platform: ej2-javascript
control: Range restriction 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Range Restriction in ##Platform_Name## DateRangePicker

Range selection in the DateRangePicker can be customized with the desired restrictions based on the application needs.

## Restrict the range within a range

The minimum and maximum date that can be allowed as start and end date in a range selection can be restricted with the help of the [`min`](../api/daterangepicker/#min), [`max`](../api/daterangepicker/#max) properties.
* `min` – sets the minimum date that can be selected as startDate.
* `max` – sets the maximum date that can be selected as endDate.

In the following sample, a range can be selected from the 15th day of this month to the 15th day of next month.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs9" %}
{% endif %}

> If the value of the `min` or `max` properties is changed through code, then the `startDate`, `endDate` properties have to be updated to be set within the range. Or else, if the `start` and `end` date is out of the specified date range, a validation error class will be appended to the input element. If `strictMode` is enabled, and both the start, end date is lesser than the min date then start and end date will be updated with `min` date. If both the start and end date is higher than the max date then start and end date will be updated with `max` date. Or else, if startDate is less than `min` date, startDate will be updated with `min` date or if endDate is greater than `max` date, endDate will be updated with the `max` date.

## Range span

The days span between ranges can be limited in order to avoid excess or less days selection towards the required days in a range. In this, the minimum and maximum span allowed within the date range can be customized by the [`minDays`](../api/daterangepicker/#mindays) and [`maxDays`](../api/daterangepicker/#maxdays) properties.
* minDays- Sets the minimum number of days between start and end date.
* maxDays- Sets the maximum number of days between start and end date.
In the following sample, the range selection should be greater than 3 days and less than 8 days else it will not set.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs10" %}
{% endif %}

## Strict mode

The DateRangePicker provides an option to limit entering only the valid date.  With strict mode, only the valid date can be set. If any invalid range is specified, the date range value resets to previous value. This restriction can be availed by enabling the [`strictMode`](../api/daterangepicker/#strictmode) property as true.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs11" %}
{% endif %}
