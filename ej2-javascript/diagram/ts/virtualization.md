---
layout: post
title: Virtualization in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Virtualization in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Virtualization in ##Platform_Name## Diagram control

Virtualization is a technique to optimize the performance of diagrams, especially when working with larger diagrams

## Virtualization in Diagram

Virtualization optimizes the diagram performance by loading only the diagramming objects within the visible area, or ViewPort, of the Scroll Viewer. This means that only the nodes and connectors that are currently in view are loaded, while the remaining objects are loaded dynamically as they come into view.

This feature significantly enhances performance, especially when working with diagrams containing a large number of nodes and connectors. By reducing the number of objects that need to be processed at any given time, virtualization ensures smoother interactions, such as loading and dragging items within the diagram.

To enable virtualization in a diagram, you need to include the virtualization constraint in the diagram's constraints. For more information, refer to the  [`diagram constraints`](./constraints.md/#diagram-constraints).

The following code example demonstrates how to enable Virtualization mode in the diagram:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/virtualization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/virtualization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/virtualization-cs1" %}