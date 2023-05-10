---
layout: post
title: Node editing in ##Platform_Name## Treeview control | Syncfusion
description: Learn here all about Node editing in Syncfusion ##Platform_Name## Treeview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Node editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Node editing in ##Platform_Name## Treeview control

The TreeView allows you to edit nodes by setting the [allowEditing](../api/treeview#allowediting) property to **true**.
To directly edit the nodes in place, **double click** the TreeView node or **select** the node and press **F2** key.

When editing is completed by focus out or by pressing the **Enter** key, the modified node’s text saves automatically. If you do not want to save the modified node’s text in TreeView node, press **Escape** key. It does not save the edited text to the TreeView node.

* Node editing can also be performed programmatically by using the [`beginEdit`](../api/treeview#beginedit) method. On passing the node ID or element through this method, the edit textbox will be created for the particular node thus allowing us to edit it.

* If you need to validate or prevent editing, the [`nodeEditing`](../api/treeview#nodeediting) event can be used which is triggered before the TreeView node is renamed. On successfully renaming a node the [`nodeEdited`](../api/treeview#nodeedited) event will be triggered.

In the following example, the first level node’s text cannot be changed, but all other level nodes' text can be changed.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/node-editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/node-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/node-editing-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/node-editing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/node-editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/node-editing-cs1" %}
{% endif %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)