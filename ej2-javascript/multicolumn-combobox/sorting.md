---
layout: post
title: Sorting in ##Platform_Name## MultiColumn Combobox control | Syncfusion
description: Checkout and learn about Sorting in ##Platform_Name## MultiColumn Combobox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sorting
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in ##Platform_Name## MultiColumn ComboBox control

The MultiColumn ComboBox control provides built-in support for sorting data-bound columns in ascending or descending order by using the `allowSorting` property. By default, the value is `true`.

To sort a particular column in the MultiColumn ComboBox, click on the grid column header in the popup. Each click on the header toggles the sorting order of the column between `Ascending` and `Descending`.

## Setting the sort order

You can use the `sortOrder` property to set the order of the column. It supports three types of sorting `None`, `Ascending` and `Descending`.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

In the following examples, data sorting is done with `Descending` order.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/sorting-order/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/sorting-order/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting-order" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/sorting-order/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/sorting-order/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting-order" %}
{% endif %}


## Sort type

You can use the `sortType` property to set the type of sorting applied to the columns. It supports tow types `OneColumn` and `MultipleColumns`. By default the `sortType` is oneColumn.

To sort multiple columns press and hold the CTRL key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

In the following examples, data sorting type is set with `MultipleColumns`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/multicolumn-combobox/sorting-type/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/sorting-type/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting-type" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/multicolumn-combobox/sorting-type/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/multicolumn-combobox/sorting-type/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting-type" %}
{% endif %}