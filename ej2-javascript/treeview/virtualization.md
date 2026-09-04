---
layout: post
title: Virtualization in ##Platform_Name## Tree View | Syncfusion
description: Learn how to use Tree View virtualization in ##Platform_Name## to improve performance with large datasets through efficient rendering and smooth scrolling.
platform: ej2-javascript
control: Virtualization
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## Tree View

The TreeView control supports UI virtualization to enhance performance when handling a large amount of data. This feature optimizes rendering by initially gathering all data but only rendering a subset of it during the initial load. The remaining items are then loaded dynamically as the user scrolls within the TreeView container.

To enable virtualization, set the `enableVirtualization` property to **true** and define a fixed `height` for the TreeView container.

The following sample demonstrates virtualization with a large dataset.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/virtualization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/virtualization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/virtualization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/virtualization-cs1" %}

{% endif %}

## Performance benefits

Virtualization provides the following performance benefits:

* **Reduced DOM elements**: Only visible nodes are rendered in the DOM, reducing memory consumption.

* **Faster initial load**: Large datasets load quickly as only a subset of nodes are rendered initially.

* **Smooth scrolling**: Dynamic rendering of nodes as the user scrolls ensures a smooth scrolling experience without lag.

* **Lower CPU usage**: Rendering fewer elements reduces CPU consumption.

## Important notes

* The `height` property is required when virtualization is enabled.
