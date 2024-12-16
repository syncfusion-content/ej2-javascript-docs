---
layout: post
title: Hierarchical tree layout in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Hierarchical tree 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical tree layout in ##Platform_Name## Diagram control

The hierarchical tree layout arranges nodes in a tree-like structure, where the nodes in the hierarchical layout may have multiple parents. There is no need to specify the layout root.

## Hierarchical tree layout with nodes and connectors

To arrange the nodes in a hierarchical structure, specify the layout [`type`](../api/diagram/layoutModel/#type) as **HierarchicalTree**. The following example shows how to arrange the nodes in a hierarchical structure.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-hierTree/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-hierTree/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-hierTree" %}

N> If you want to use hierarchical tree layout in diagram, you need to inject HierarchicalTree in the diagram.

## Hierarchical layout with DataSource

You can create a hierarchical layout with data Source. The following code demonstrates how to render a Hierarchical layout using DataSource.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs1" %}

N> If you want to convert the data source into layout, you need to inject DataBinding along with HierarchicalTree module in the diagram.

![Hierarchical tree](images/hierarchicalTree.png)