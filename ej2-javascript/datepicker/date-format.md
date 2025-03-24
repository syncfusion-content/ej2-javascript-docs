---
layout: post
title: Date format in ##Platform_Name## Datepicker control | Syncfusion
description: Learn here all about Date format in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Date format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Date format in ##Platform_Name## Datepicker control

Date format is a way of representing the date value in different string format in the textbox.

By default, the DatePicker's format is based on the culture. You can also set the own custom format by using the [`format`](../api/datepicker/#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DatePicker with the custom format (`yyyy-MM-dd`).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs2" %}
{% endif %}

## Input formats 

Input format allows users to enter dates in various formats in the DatePicker control, providing flexibility in date entry.

The string format of the date value specifies how the date should be represented as a string when entered by the user. When the user types the date in the input format, it will be automatically converted to the display format after pressing enter, tab key, or when the input loses focus. This enhances the user experience by allowing intuitive data entry through various custom input formats. By default, the DatePicker's format is based on the culture. You can also set the own custom format by using the [`format`](../api/datepicker/#format) property.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DatePicker with multiple input formats.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/getting-started-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/getting-started-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs15" %}
{% endif %}
