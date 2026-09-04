---
layout: post
title: Date Time Format in ##Platform_Name## DateTime Picker | Syncfusion
description: Configure a custom date and time display format in ##Platform_Name## DateTime Picker using the format property and culture-based defaults.
platform: ej2-javascript
control: Date time format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date Time Format in ##Platform_Name## DateTime Picker

DateTime format is a way of representing the date and time value in different string formats in the textbox.

By default, the DateTime Picker's format is based on the culture. A custom format can also be set by using the [`format`](../api/datetimepicker#format) property.

> Once the format property has been defined, it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Time Format](http://ej2.syncfusion.com/documentation/base/internationalization/) section.

The following example demonstrates the DateTime Picker with the custom format (`yyyy-MM-dd hh:mm`).

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

The [`inputFormats`](../api/datetimepicker) property in the DateTime Picker control allows dates and times to be entered in various formats, providing flexibility in date and time entry. This property accepts an array of predefined formats that the control recognizes, enabling date input in different ways while ensuring values are parsed correctly.
 
When the date and time is typed in any of the specified input formats, it is automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the experience by allowing intuitive data entry through various custom input formats.

The following example demonstrates the DateTime Picker with multiple input formats.

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
