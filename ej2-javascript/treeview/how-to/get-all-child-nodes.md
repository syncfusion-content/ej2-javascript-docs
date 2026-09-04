---
layout: post
title: How to get all child nodes in ##Platform_Name## TreeView | Syncfusion
description: Learn how to get all child nodes in the Syncfusion ##Platform_Name## TreeView control for advanced hierarchical data access.
platform: ej2-javascript
control: Get all child nodes
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to get all child nodes in ##Platform_Name## TreeView

This section demonstrates how to retrieve child nodes from a corresponding parent ID within the TreeView control. By using the [`getNode`](../../api/treeview#getnode) method, you can obtain the details of the parent node, and then access its `child` collection to retrieve all of its child nodes. Please refer to the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/get-child-nodes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/get-child-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/get-child-nodes-cs1" %}
{% endif %}