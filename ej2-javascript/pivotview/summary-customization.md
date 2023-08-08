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

Allows to show or hide grand totals in rows and columns using the [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showgrandtotals) property. To hide the grand totals in rows and columns, set the property [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showgrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) to **false**.
End user can also hide grand totals for row or columns separately by setting the property [`showRowGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) or [`showColumnGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showcolumngrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) to **false** respectively.

> By default, [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) and [`showColumnGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showrowgrandtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) are set as **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs301/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs301/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs301" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs301/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs301/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs301" %}
{% endif %}

## Show or hide sub-totals

Allows to show or hide sub-totals in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property. To hide all the sub-totals in rows and columns, set the property [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) to **false**. End user can also hide sub-totals for rows or columns separately by setting the property [`showRowSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals) or [`showColumnSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showrowsubtotals) and [`showColumnSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showcolumnsubtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) are set as **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs302/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs302/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs302" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs302/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs302/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs302" %}
{% endif %}

## Show or hide sub-totals for specific fields

Allows to show or hide sub-totals for specific fields in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property. To hide sub-totals for a specific field in row or column axis, set the property [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals) in [`rows`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel/) or [`columns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel/) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#showsubtotals) property in [`rows`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel/) or [`columns`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptionsModel/) is set as **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs303/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs303/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs303" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs303/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs303/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs303" %}
{% endif %}

## Show or hide totals using toolbar

It can also be achieved using built-in toolbar options by setting the [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showtoolbar) property in pivot table to **true**. Also, include the items **GrandTotal** and **SubTotal** within the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#toolbar) property in pivot table. End user can now see "Show/Hide Grand totals" and "Show/Hide Sub totals" icons in toolbar UI automatically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs304/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs304/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs304" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs304/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs304/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs304" %}
{% endif %}