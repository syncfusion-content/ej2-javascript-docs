---
layout: post
title: Hyper link in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Hyper link in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hyper link 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hyper link in ##Platform_Name## Pivotview control

The pivot table supports to show hyperlink option to link data for individual cells that are displayed in the component. Also, the hyperlink can be enabled separately for row headers, column headers, value cells, and summary cells using the [`hyperlinkSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/). It can be configured through code behind, during initial rendering and the settings available to show hyperlink are:

* [`showHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showhyperlink): It allows to set the visibility of hyperlink in all cells.
* [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink): It allows to set the visibility of hyperlink in row headers.
* [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink): It allows to set the visibility of hyperlink in column headers.
* [`showValueCellHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink): It allows to set the visibility of hyperlink in value cells.
* [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink): It allows to set the visibility of hyperlink in summary cells.
* [`headerText`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#headertext): It allows to set the visibility of hyperlink based on header text.
* [`conditionalSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#conditionalsettings): It allows to set the visibility of hyperlink based on specific condition.

<!-- markdownlint-disable MD028 -->
> By default, the hyperlink options are disabled for all cells in the pivot table.

> User defined style can be applied to hyperlink using [`cssClass`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#cssclass) property in [`hyperlinkSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/).

## Hyperlink for all cells

The pivot table has an option to show hyperlink option to all the cells that are currently displaying. To do so, user need to set [`showHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showhyperlink) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs179/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs179/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs179" %}

## Hyperlink for row headers

The pivot table has an option to show hyperlink option for row header cells alone that are currently in display. To do so, user need to set [`showRowHeaderHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showrowheaderhyperlink) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs180/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs180/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs180" %}

## Hyperlink for column headers

The pivot table has an option to show hyperlink option for column header cells alone that are currently in display. To do so, user need to set [`showColumnHeaderHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showcolumnheaderhyperlink) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs181/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs181/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs181" %}

## Hyperlink for value cells

The pivot table has an option to show hyperlink option for value cells alone that are currently in display. To do so, user need to set [`showValueCellHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showvaluecellhyperlink) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs182/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs182/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs182" %}

## Hyperlink for summary cells

The pivot table has an option to show hyperlink option for summary cells alone that are currently in display. To do so, user need to set [`showSummaryCellHyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#showsummarycellhyperlink) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs183/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs183/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs183" %}

## Condition based hyperlink

The pivot table has an option to show hyperlink option to the cells based on specific conditions. It can be configured using the [`conditionalSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#conditionalsettings) option through code behind, during initial rendering. The required settings are:

* [`measure`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalSettings/#measure): Specifies the value field caption to get visibility of hyperlink option for specific measure.
* [`condition`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalSettings/#conditions): Specifies the operator type such as equals, greater than, less than, etc.
* [`value1`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalSettings/#value1): Specifies the start value.
* [`value2`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/conditionalSettings/#value2): Specifies the end value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs184/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs184/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs184" %}

## Header based hyperlink

The pivot table has an option to show hyperlink in the cells based on specific row or column header. It can be configured using the [`headerText`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/hyperlinkSettings/#headertext) option through code behind, during initial rendering.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs185/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs185/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs185" %}

## Event

The event [`hyperlinkCellClicked`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#hyperlinkcellclick) fires on every hyperlink cell click.

It has following parameters - `cancel` and `currentCell`. The parameter `currentCell` is used to customize the host cell element by any means. Meanwhile, when the parameter `cancel` is set to **true**, applied customization will not be updated to the host cell element.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs186/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs186/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs186" %}

## See Also

* [Apply condition based hyperlink for specific row or column](./how-to/apply-condition-based-hyper-link-for-specific-row-or-column)