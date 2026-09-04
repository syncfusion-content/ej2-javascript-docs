---
layout: post
title: Strict Mode in ##Platform_Name## DateTime Picker | Syncfusion
description: Use strictMode in ##Platform_Name## DateTime Picker to allow only valid date and time values within the configured min and max range in the textbox.
platform: ej2-javascript
control: Strict mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Strict Mode in ##Platform_Name## DateTime Picker

The [`strictMode`](../api/datetimepicker#strictmode) is an act, that allows entering only the valid date and time within the specified min/max range in textbox. If the input entered is invalid, then the component will stay with the previous value. Else, if the date and time is
out of range, then the component will set the date to the min/max value.

The following example demonstrates the DateTime Picker in `strictMode` with min/max range of `5/5/2019 2:00 AM` to `5/25/2019 2:00 AM`. Here, it allows entering only the valid date and time within the specified range. When trying to enter the out-of-range value as
like `5/28/2019`, then the value will be set to the `max` value as `5/25/2019 2:00 AM`, since the value 28 is greater than the `max` value
of 25. Or else if trying to enter the invalid date, then the value will stay with the previous value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs8" %}
{% endif %}

By default, the DateTime Picker acts in strictMode `false` state, that allows entering the invalid or out-of-range datetime in textbox.

If the datetime is out-of-range or invalid, then the model value will be set to `out of range` datetime value or `null` respectively with the highlighted `error` class to indicate that the datetime is out of range or invalid.

The following example demonstrates the `strictMode` as `false`. Here, it allows entering the valid or invalid value in textbox. When entering an out-of-range or invalid datetime value, then the model value will be set to `out of range` datetime value or `null` respectively with the highlighted `error` class to indicate that the datetime is out of range or invalid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs9" %}
{% endif %}

> If the value of the `min` or `max` properties is changed through code, then the `value` property has to be updated to be set within the range.
