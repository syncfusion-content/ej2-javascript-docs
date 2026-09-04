---
layout: post
title: Strict Mode in ##Platform_Name## DatePicker | Syncfusion
description: Use strictMode in ##Platform_Name## DatePicker to allow only valid date values within the configured min and max range in the textbox.
platform: ej2-javascript
control: Strict mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Strict Mode in ##Platform_Name## DatePicker

The [`strictMode`](https://ej2.syncfusion.com/javascript/documentation/api/datepicker/index-default#strictmode) is an act, that allows entering only the valid date within the specified min/max
range in textbox. If the date is invalid, then the component will stay with the previous value. Else, if the date is out of range, then the component will set the date to the min/max date.

The following example demonstrates the DatePicker in `strictMode` with min/max range of 5th to 25th in a month of May. Here, it allows entering only the valid date within the specified range. When trying to enter the out-of-range value as like 28th of May, then the value will be set to the max date of 25th May, since the value 28th is greater than the `max` value of 25th. Or else if trying to enter the invalid date, then the value will stay with the previous value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs11" %}
{% endif %}

By default, the DatePicker acts in strictMode `false` state, that allows entering the invalid or out-of-range date in textbox.

If the date is out-of-range or invalid, then the model value will be set to `out of range` date value or `null` respectively with the highlighted `error` class to indicate that the date is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows entering the valid or invalid value in textbox. When entering an out-of-range or invalid date value, then the model value will be set to `out of range` date value or `null` respectively with the highlighted `error` class to indicate that the date is out of range or invalid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs12" %}
{% endif %}

> If the value of the `min` or `max` properties is changed through code, then the `value` property has to be updated to be set within the range.
