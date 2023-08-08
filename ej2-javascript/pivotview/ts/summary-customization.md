---
layout: post
title: Summary customization in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Summary customization in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Summary customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Summary customization in ##Platform_Name## Pivotview control

## Show or hide grand totals

Allows to show or hide grand totals in rows and columns using the [`showGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showgrandtotals) property. To hide the grand totals in rows and columns, set the property [`showGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showgrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **false**. End user can also hide grand totals for row or columns separately by setting the property [`showRowGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) or [`showColumnGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showcolumngrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **false** respectively.

> By default, [`showGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) and [`showColumnGrandTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) are set as **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs472/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs472/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs472" %}

## Show grand totals at top or bottom

Allows to show grand totals either at top or bottom in rows and columns using the [`grandTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#grandtotalsposition) property. To show the grand totals at top in rows and columns, set the [`grandTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#grandtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **Top**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs473/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs473/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs473" %}

## Show or hide sub-totals

Allows to show or hide sub-totals in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property. To hide all the sub-totals in rows and columns, set the property [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **false**. End user can also hide sub-totals for rows or columns separately by setting the property [`showRowSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals) or [`showColumnSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals) and [`showColumnSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) are set as **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs474/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs474/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs474" %}

## Show or hide sub-totals for specific fields

Allows to show or hide sub-totals for specific fields in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property. To hide sub-totals for a specific field in row or column axis, set the property [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals) in [`rows`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/) or [`columns`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property in [`rows`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/) or [`columns`](https://ej2.syncfusion.com/documentation/api/pivotview/fieldOptionsModel/) is set as **true**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs475/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs475/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs475" %}

## Show sub-totals at top or bottom

Allows to show sub-totals either at top or bottom of the header group in rows and columns by using the [`subTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property. By default, [`subTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property is set to **Auto**, which means that column sub-totals are displayed at the bottom and row sub-totals are displayed at the top of the header group in the pivot table.

To show sub-totals at top of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **Top**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs476/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs476/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs476" %}

To show sub-totals at bottom of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#subTotalsPosition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/) to **Bottom**.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs477/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs477/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs477" %}

## Show or hide totals using toolbar

It can also be achieved using built-in toolbar options by setting the [`showToolbar`](https://ej2.syncfusion.com/documentation/api/pivotview#showtoolbar) property in pivot table to **true**. Also, include the items **GrandTotal** and **SubTotal** within the [`toolbar`](https://ej2.syncfusion.com/documentation/api/pivotview/#toolbar) property in pivot table. End user can now see "Show/Hide Grand totals" and "Show/Hide Sub totals" icons in toolbar UI automatically.

The grand totals and sub-totals can be dynamically displayed at the top or bottom of the pivot table's row and column axes by using the built-in options "Grand totals position" and "Subtotals position" available in the grand totals and sub-totals drop down menus, respectively.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs478/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs478/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs478" %}