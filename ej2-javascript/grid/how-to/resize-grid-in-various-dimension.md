---
layout: post
title: Resize grid in various dimension in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Resize grid in various dimension in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Resize grid in various dimension 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Resize the grid in various dimension in ##Platform_Name## Grid control

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Grid control offers a friendly way to resize the grid, allowing you to adjust its width and height for improved data visualization.

To resize the grid externally, you can use an external button to modify the width of the parent element that contains the grid. This will effectively resize the grid along with its parent container.

The following example demonstrates how to resize the grid on external button click based on input.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/resize-grid-dimension-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/resize-grid-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/resize-grid-dimension-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/resize-grid-dimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/resize-grid-dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/resize-grid-dimension-cs1" %}
{% endif %}