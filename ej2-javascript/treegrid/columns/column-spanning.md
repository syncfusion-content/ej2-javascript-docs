---
layout: post
title: Column spanning in ##Platform_Name## TreeGrid control | Syncfusion
description: Learn here all about Column spanning in Syncfusion ##Platform_Name## TreeGrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column spanning 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in ##Platform_Name## TreeGrid control

Column spanning in the TreeGrid allows merging adjacent cells horizontally, creating a visually appealing and informative layout. By defining the `colSpan` attribute in the [queryCellInfo](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#querycellinfo) event, cells can be easily spanned and the appearance of the TreeGrid can be customized.

In the following example, Employee "Davolio" is scheduled for analysis from "9.00 AM" to "10.00 AM", so those cells have been spanned.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/column-spanning-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/column-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/column-spanning-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/column-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs1" %}
{% endif %}


## Column spanning via API
 
Column spanning in the TreeGrid automatically merges cells that contain identical values within the same row across consecutive columns. This improves readability and creates a cleaner layout by removing repeated information. Column spanning can be enabled by setting the `enableColumnSpan` property to "true" in the TreeGrid configuration.

In the example below, column spanning is enabled for the "Status", "Permit Status", "Inspection Status", and "Punch List Status" columns. It is disabled for the "Planned Budget" and "Actual Spend" columns by setting the `enableColumnSpan` property to "false" at the column level.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/column-spanning-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/column-spanning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/column-spanning-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/column-spanning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/column-spanning-cs2" %}
{% endif %}

### Limitations
 
The following list outlines the features that are not compatible with column spanning:
 
* Virtualization
* Infinite Scrolling
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export

## See Also
* [Row Spanning in Syncfusion<sup style="font-size:70%">&reg;</sup> TreeGrid](https://ej2.syncfusion.com/documentation/treegrid/row/row-spanning)