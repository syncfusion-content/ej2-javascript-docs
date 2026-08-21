---
layout: post
title: How to filter tree nodes in ##Platform_Name## TreeView | Syncfusion
description: Learn how to filter TreeView nodes in the Syncfusion ##Platform_Name## TreeView control for faster hierarchy exploration.
platform: ej2-javascript
control: Filtering tree nodes
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to filter tree nodes in ##Platform_Name## TreeView

You can filter the tree nodes based on their text using the [`DataManager`](../../api/data/dataManager/) plugin and the [`fields`](../../api/treeview/#fields) property of the TreeView.

The following code example demonstrates how to filter the tree nodes in a TreeView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/filtering-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/filtering-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/filtering-cs1" %}
{% endif %}
