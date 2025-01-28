---
layout: post
title: Check box in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Check box in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Check box
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Check box in ##Platform_Name## TreeView control

The TreeView control allows you to check more than one node without affecting the UI appearance by enabling the [showCheckBox](../api/treeview#showcheckbox) property. When this property is enabled, a checkbox appears before each TreeView node text.

* If any child node is unchecked, the parent node will be in an intermediate state.

* If all child nodes are checked, the parent node will also be checked.

* If a parent node is checked, all child nodes will be checked as well.

By default, the checkbox state of parent and child nodes are dependent on each other. If you need independent checked state, you can achieve it using the [`autoCheck`](../api/treeview#autocheck) property.

Using the [`checkedNodes`](../api/treeview#checkednodes) property, you can set the nodes that need to be checked or get the ID of nodes that are currently checked in the TreeView control.

If you need to prevent a node check action for a particular node, the [`nodeChecking`](../api/treeview#nodechecking) event can be used, and it will be triggered before the TreeView node is checked/unchecked. The [`nodeChecked`](../api/treeview#nodechecked) event will be triggered when the TreeView node is checked/unchecked successfully.

In the following example, the `showCheckBox` property is enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/checkboxes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/checkboxes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/checkboxes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/checkboxes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/checkboxes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/checkboxes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/checkboxes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/checkboxes-cs1" %}
{% endif %}

## Checked nodes

You can get or set the checked nodes in the TreeView at initial rendering and dynamically by using the [checkedNodes](../api/treeview#checkednodes) property. It returns the checked nodes' IDs as an array.

In the following example, the **New South Wales** and **Western Australia** nodes are checked at initial rendering. If any more nodes are checked, the checked nodes' IDs will be displayed in an alert.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/checkboxes/checked-nodes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/checkboxes/checked-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/checkboxes/checked-nodes-cs1" %}
{% endif %}

## See Also

* [How to check/uncheck the checkbox on clicking the tree node text](./how-to/check-uncheck-the-checkbox-on-clicking-the-tree-node-text)