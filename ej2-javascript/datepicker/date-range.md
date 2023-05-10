---
layout: post
title: Date range in ##Platform_Name## Datepicker control | Syncfusion
description: Learn here all about Date range in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Date range 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date range in ##Platform_Name## Datepicker control

DatePicker provides an option to select a date value within a specified range by using the [`min`](../api/datepicker#min) and [`max`](../api/datepicker#max) properties. Always the min value has to be lesser than the max value.

When the min and max properties are configured and the selected date value is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with highlighted `error` class to indicates the date is out of range or invalid.

The value property depends on the min/max with respect to [`strictMode`](./strict-mode/) property.

The below example allows selecting a date within the range from 7th to 27th day in a month.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs3" %}
{% endif %}

> If the value of `min` or `max` properties changed through code behind, then you have to update the `value` property to set within the range.