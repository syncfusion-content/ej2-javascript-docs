---
layout: post
title:  ##Platform_Name## TreeGrid Custom Column Tooltips | Syncfusion
description: Learn how to add custom tooltips for columns in ##Platform_Name## TreeGrid using the Tooltip component and queryCellInfo event.
platform: ej2-javascript
control: Custom tool tip for columns 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom Tooltips for Columns in ##Platform_Name## TreeGrid

You can show the tooltip content in Tree Grid using [`queryCellInfo`] event of Tree Grid.

In the below demo, hover over the cell shows the tooltip content .

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/tooltip-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/tooltip-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/tooltip-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.