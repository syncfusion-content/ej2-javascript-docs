---
layout: post
title: Row cell customization in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Row cell customization in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row cell customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row cell customization in ##Platform_Name## Treegrid control

In Tree Grid we can customize the row and cell using [`queryCellInfo`](../api/treegrid/#querycellinfo) and [`rowDataBound`](../api/treegrid/#rowdatabound) events of Tree Grid.

In the below demo, we customize and show the command buttons only for the parent rows using [`queryCellInfo`](../api/treegrid/#querycellinfo) and [`rowDataBound`](../api/treegrid/#rowdatabound) events of Tree Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/custom-row-cell-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/custom-row-cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/custom-row-cell-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/custom-row-cell-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/custom-row-cell-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/custom-row-cell-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.