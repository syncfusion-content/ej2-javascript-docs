---
layout: post
title: Date Range in ##Platform_Name## Calendar | Syncfusion
description: Restrict ##Platform_Name## Calendar selections within a defined range by setting the min and max properties to control the allowed date bounds.
platform: ej2-javascript
control: Date range 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date Range in ##Platform_Name## Calendar

Calendar provides an option to select a date value within a specified range by defining the [`min`](../api/calendar#min) and [`max`](../api/calendar#max) properties. The min date should always be lesser than the max date. If the value of the `min` or `max` properties is changed through code, then it is necessary to set the `value` property to be within the specified range. When the value is out of the specified date range, the value property will be updated with the min date if the value is lesser than the min date, or with the `max` date if the value is higher than the max date.

The following example allows selecting a date within the range of 7th to 27th days in a month.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/calendar/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/calendar/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/calendar/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/getting-started-cs5" %}
{% endif %}