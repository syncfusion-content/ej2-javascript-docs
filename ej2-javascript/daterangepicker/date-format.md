---
layout: post
title: Date Format in ##Platform_Name## DateRangePicker | Syncfusion
description: Configure a custom date display format in ##Platform_Name## DateRangePicker using the format property and culture-based defaults.
platform: ej2-javascript
control: Date format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date Format in ##Platform_Name## DateRangePicker

Date format is a way of representing the date value in different string formats in the textbox.

By default, the DateRangePicker's format is based on the culture. A custom format can also be set by using the [`format`](../api/daterangepicker#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DateRangePicker with the custom format (`yyyy-MM-dd`).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs14" %}
{% endif %}

## Input formats 

The [`inputFormats`](../api/daterangepicker) property in the DateRangePicker control allows dates to be entered in various formats, providing flexibility in date entry. This property accepts an array of predefined formats that the control recognizes, enabling date input in different ways while ensuring values are parsed correctly.
 
When a date is typed in any of the specified input formats, it is automatically converted to the display format after pressing Enter, the Tab key, or when the input loses focus. This enhances the experience by allowing intuitive data entry through various custom input formats.
 
The following example demonstrates the DateRangePicker with multiple input formats.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/daterangepicker/getting-started-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/daterangepicker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/daterangepicker/getting-started-cs15" %}
{% endif %}
