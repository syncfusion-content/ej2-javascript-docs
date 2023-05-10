---
layout: post
title: Perform cell selection and get selected cells information in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Perform cell selection and get selected cells information in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Perform cell selection and get selected cells information 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Perform cell selection and get selected cells information in ##Platform_Name## Pivotview control

To select any cell or row using mouse or arrow keys, set the `gridSettings.allowSelection` property to true. The selected cells will be highlighted.

## Selection mode

The Pivot Table control supports the following four types of selection modes, which can be set by using the `gridSettings.selectionSettings.mode` property:

* **`Row`**: The `Row` value is set by default, and allows you to select only rows.
* **`Column`**: Allows you to select only columns.
* **`Cell`**: Allows you to select only cells.
* **`Both`**: Allows you to select rows and columns at the same time.

## Selection type

It supports two types of selection that can be set by the property `gridSettings.selectionSettings.type`. They are,

* **`Single`**: The `Single` value is set by default, and it only allows selection of a single row or a column or a cell.
* **`Multiple`**: Allows you to select multiple rows or cells.
To perform the multi-selection, press and hold CTRL key and click the desired rows or columns or cells. To select range of rows or cells, press and hold the SHIFT key and click the rows or columns or cells.

## Event

The event `cellSelected` fires on every cell/row/column on selected/deselected operations and it provides the selected cells information with its corresponding column and row headers.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs82/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs82/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs82" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs82/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs82/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs82" %}
{% endif %}
