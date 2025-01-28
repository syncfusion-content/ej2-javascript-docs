---
layout: post
title: Restrict the drag and drop for particular tree nodes in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Restrict the drag and drop for particular tree nodes in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Restrict the drag and drop for particular tree nodes
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Restrict drag and drop for particular tree nodes in ##Platform_Name## TreeView control

You can restrict dragging and dropping files to within folders only. This can be achieved by using the [`nodeDragStop`](../../api/treeview#nodedragstop) and [`nodeDragging`](../../api/treeview#nodedragging) events of the TreeView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}
{% endif %}