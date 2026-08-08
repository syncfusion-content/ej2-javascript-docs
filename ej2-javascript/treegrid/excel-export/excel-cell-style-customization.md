---
layout: post
title: ##Platform_Name## TreeGrid Excel Cell Style Customization | Syncfusion
description:  Learn how to customize Excel cell styles in the ##Platform_Name## TreeGrid of Essential JS 2, including conditional formatting and theming options.
platform: ej2-javascript
control: Excel cell style customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Excel Cell Style Customization in ##Platform_Name## TreeGrid

## Conditional cell formatting

TreeGrid cells in the exported Excel can be customized or formatted using [`excelQueryCellInfo`](../../api/treegrid#excelQueryCellInfo) event. In this event, we can format the treegrid cells of exported PDF document based on the column cell value.

In the below sample, we have set the background color for `Duration` column in the exported excel by `args.cell` and `backgroundColor` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/excel-export-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/excel-export-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/excel-export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs2" %}
{% endif %}

## Theme

The excel export provides an option to include theme for exported excel document.

To apply theme in exported Excel, define the `theme` in `exportProperties` .

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/excel-export-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/excel-export-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/excel-export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/excel-export-cs3" %}
{% endif %}

>By default, material theme is applied to exported excel document.
