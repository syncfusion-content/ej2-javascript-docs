---
layout: post
title: Date range in ##Platform_Name## Calendar control | Syncfusion
description: Learn here all about Date range in Syncfusion ##Platform_Name## Calendar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Date range 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date range in ##Platform_Name## Calendar control

Calendar provides an option to select a date value within a specified range by defining the [`min`](../api/calendar#min) and [`max`](../api/calendar#max) properties. The min date should always be lesser than the max date. If the value of `min` or `max` properties are changed through code behind, then update the `value` property to be set within the specified range, or else, if the value is out of specified date range and less than `min` date, value property will be updated with min date or the value is higher than max date, value property will be updated with `max` date.

The following example allows you to select a date within the range of 7th to 27th days in a month.

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