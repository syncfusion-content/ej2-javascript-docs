---
layout: post
title: Column chooser in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Column chooser in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Column chooser 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in ##Platform_Name## Treegrid control

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](../../api/treegrid/#showcolumnchooser) as true.

To use the column chooser, inject the **Column Chooser** module in the treegrid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/columns-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/columns-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columns-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columns-cs2" %}
{% endif %}

> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](../../api/treegrid/column/#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](../../api/treegrid/#opencolumnchooser) method with **X** and **Y** axis positions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/columnchooser-method-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columnchooser-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columnchooser-method-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/columnchooser-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/columnchooser-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/columnchooser-method-cs1" %}
{% endif %}