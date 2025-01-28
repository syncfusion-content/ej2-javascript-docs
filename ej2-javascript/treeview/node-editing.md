---
layout: post
title: Node editing in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Node editing in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Node editing
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Node editing in ##Platform_Name## TreeView control

The TreeView allows you to edit nodes by setting the [allowEditing](../api/treeview/#allowediting) property to **true**. To edit the nodes directly in place, **double-click** the TreeView node or **select** the node and press the **F2** key.

When editing is completed by losing focus or by pressing the **Enter** key, the modified node’s text is saved automatically. If you do not want to save the modified text in the TreeView node, press the **Escape** key. It does not save the edited text to the TreeView node.

* Node editing can also be performed programmatically by using the [`beginEdit`](../api/treeview/#beginedit) method. By passing the node ID or element through this method, an edit textbox will be created for the particular node, allowing you to edit it.

* If you need to validate or prevent editing, the [`nodeEditing`](../api/treeview/#nodeediting) event can be used, which is triggered before the TreeView node is renamed. When a node is successfully renamed, the [`nodeEdited`](../api/treeview/#nodeedited) event will be triggered.

In the following example, the text of the first level node cannot be changed, but the text of all other level nodes can be changed.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/node-editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/node-editing-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/node-editing-cs1/index.css %}
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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/node-editing-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/node-editing-cs1" %}
{% endif %}

## See Also

* [How to validate the text when renaming the tree node](./how-to/validate-the-text-when-renaming-the-tree-node)
* [How to process the tree node operations using context menu](./how-to/process-the-tree-node-operations-using-context-menu)