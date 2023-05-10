---
layout: post
title: Selection in ##Platform_Name## Heatmap chart control | Syncfusion
description: Learn here all about Selection in Syncfusion ##Platform_Name## Heatmap chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Selection in ##Platform_Name## Heatmap chart control

In the HeatMap, the cell selection is used to select the single or multiple heat map cells at runtime and get the selected cell details using the [cellSelected](../api/heatmap/#cellselected) event. You can enable the cell selection using the [allowSelection](../api/heatmap/#allowselection) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/selection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/selection-cs1" %}
{% endif %}

## Enable single cell selection

In the HeatMap, the [enableMultiSelect](../api/heatmap/#enablemultiselect) property is used to allow single cell selection. When you set the `enableMultiSelect` property to **false**, only one cell is selected. By default, `enableMultiSelect` property is set to **true**.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/selection-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/selection-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/selection-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/selection-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/selection-cs2" %}
{% endif %}