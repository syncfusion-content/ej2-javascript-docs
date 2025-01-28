---
layout: post
title: Multiple selection in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Multiple selection in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple selection
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in ##Platform_Name## TreeView control

Selection provides interactive support and highlights the node you select. Selection can be done through a simple mouse click or keyboard interaction.

The TreeView also supports the selection of multiple nodes by setting [allowMultiSelection](../api/treeview/#allowmultiselection) to **true**.

To multi-select, press and hold the **CTRL** key and click the desired nodes. To select a range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following example, the `allowMultiSelection` property is enabled.

> Multi-selection is not applicable through touch interactions.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/multi-selection/selection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selection-cs1" %}
{% endif %}

## Selected Nodes

You can get or set the selected nodes in TreeView at initial rendering and dynamically by using the [selectedNodes](../api/treeview/#selectednodes) property. It returns the selected node's ID as an array.

* The [`nodeSelecting`](../api/treeview/#nodeselecting) event is triggered before a node is selected/unselected, which can be used to prevent the selection.

* The [`nodeSelected`](../api/treeview/#nodeselected) event is triggered once a node is successfully selected/unselected.

In the following example, the **New South Wales** and **Western Australia** nodes are selected at initial rendering. When a node is selected, the selected node's ID is displayed in an alert.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selected-nodes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/multi-selection/selected-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/multi-selection/selected-nodes-cs1" %}
{% endif %}