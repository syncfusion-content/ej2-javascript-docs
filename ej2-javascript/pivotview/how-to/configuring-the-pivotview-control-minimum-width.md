---
layout: post  
title: Configuring the minimum width in the ##Platform_Name## Pivot Table Control | Syncfusion  
description: Learn all about configuring the minimum width in the Syncfusion ##Platform_Name## Pivot Table control of Syncfusion Essential JS 2, and more.  
platform: ej2-javascript  
control: Configuring the minimum width in the Pivot Table control  
publishingplatform: ##Platform_Name##  
documentation: ug  
domainurl: ##DomainURL##  
---

# Configuring the minimum width in the ##Platform_Name## Pivot Table control

The pivot table control allows you to configure its minimum width using the `minWidth` property. This property is useful for ensuring the component maintains a consistent layout and responsiveness across different screen sizes.

> When the pivot table has the [Grouping Bar](https://ej2.syncfusion.com/documentation/pivotview/grouping-bar) enabled, the `minWidth` property is set to **400** pixels by default to accommodate the grouping bar UI elements. Without the [Grouping Bar](https://ej2.syncfusion.com/documentation/pivotview/grouping-bar), the `minWidth` property defaults to **310** pixels.

To customize the minimum width, set the `minWidth` property to your desired value (in pixels) as shown below:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs503/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs503/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs503" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs503/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs503/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs503" %}
{% endif %}