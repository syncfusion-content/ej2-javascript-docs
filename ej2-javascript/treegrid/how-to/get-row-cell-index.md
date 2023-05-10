---
layout: post
title: Get row cell index in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Get row cell index in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Get row cell index 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in ##Platform_Name## Treegrid control

You can get the specific row and cell index of the Tree Grid by using [`rowSelected`](../api/treegrid/#rowselected) event of the treegrid. Here, we can get the row and cell index by using *aria-rowindex* (get row Index from *tr* element) and *aria-colindex* (column index from *td* element) attribute.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/row-cell-index-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cell-index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/row-cell-index-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/row-cell-index-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/row-cell-index-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/row-cell-index-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.