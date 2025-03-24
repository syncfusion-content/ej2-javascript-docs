---
layout: post
title: Date time format in ##Platform_Name## Datetimepicker control | Syncfusion
description: Learn here all about Date time format in Syncfusion ##Platform_Name## Datetimepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Date time format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date time format in ##Platform_Name## Datetimepicker control

DateTime format is a way of representing the date and time value in different string format in the textbox.

By default, the DateTimePicker's format is based on the culture. You can also set the own custom format by using the [`format`](../api/datetimepicker#format) property.

> Once the format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Time Format](http://ej2.syncfusion.com/documentation/base/internationalization/) section.

The following example demonstrates the DateTimePicker with the custom format (`yyyy-MM-dd hh:mm`).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs3" %}
{% endif %}

## Input formats

Input format allows users to enter dates in various formats in the DateTimePicker control, providing flexibility in date entry.

The string format of the date and time value specifies how the date and time should be represented as a string when entered by the user. When the user types the date and time in the input format, it will be automatically converted to the display format after pressing enter, tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats.  You can also set the own custom format by using the [`format`](../api/datetimepicker#format) property.

To know more about the date format standards, refer to the [Internationalization Date Time Format](http://ej2.syncfusion.com/documentation/base/internationalization/) section.

The following example demonstrates the DateTimePicker with multiple input formats.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datetimepicker/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datetimepicker/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datetimepicker/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datetimepicker/getting-started-cs13" %}
{% endif %}
