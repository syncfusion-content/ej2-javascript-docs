---
layout: post
title:  ##Platform_Name## TreeGrid PDF Cell Style Customization | Syncfusion
description: Learn how to customize PDF cell styles in the ##Platform_Name## TreeGrid, including conditional formatting and theme options for PDF export.
platform: ej2-javascript
control: Pdf cell style customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# PDF Cell Style Customization in ##Platform_Name## TreeGrid

## Conditional cell formatting

TreeGrid cells in the exported PDF can be customized or formatted using [`pdfQueryCellInfo`](../../api/treegrid#pdfQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported document by `args.cell` and `backgroundColor` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/pdfexport-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/pdfexport-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/pdfexport-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/pdfexport-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs2" %}
{% endif %}

## Theme

PDF export provides an option to include theme for exported PDF document.

To apply theme in exported PDF, define the `theme` in `exportProperties` .

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/pdfexport-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/pdfexport-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/pdfexport-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/pdfexport-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/pdfexport-cs3" %}
{% endif %}

> By default, material theme is applied to exported PDF document.