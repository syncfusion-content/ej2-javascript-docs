---
layout: post
title: Value sorting in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Value sorting in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Value sorting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Value sorting in ##Platform_Name## Pivotview control

Value sorting allows you to sort individual column based on it's values either in ascending or descending order. It can been enabled by setting the `enableValueSorting` property to **true**. You can sort the column values by clicking the column header.

Value sorting can be configured using the `valueSortSettings` option through code behind. The settings required to sort value fields at initial rendering are:
* `headerText`: It allows to set the column header names with delimiters, that is used for value sorting.
* `headerDelimiter`: It allows to set the delimiters string to separate the given header text.
* `sortOrder`: It allows to set the sort direction of the value field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs488/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs488/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs488" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs488/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs488/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs488" %}
{% endif %}

## See Also

* [Sorting](./sorting)