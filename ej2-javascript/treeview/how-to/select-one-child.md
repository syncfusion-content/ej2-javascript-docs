---
layout: post
title: How to select one child in ##Platform_Name## TreeView | Syncfusion
description: Learn how to select one child node in the Syncfusion ##Platform_Name## TreeView control for structured hierarchy interactions.
platform: ej2-javascript
control: Select one child
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to select one child in ##Platform_Name## TreeView

The TreeView control allows both single and multiple selections. If your application requires selecting one child at a time under a specific parent, refer to the following example. You can achieve this by using the [`nodeSelecting`](../../api/treeview#nodeselecting)  event in the TreeView control. However, you can reset the selected child and make another selection by pressing Ctrl + selected nodes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/select-one-child-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/select-one-child-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/select-one-child-cs1" %}
{% endif %}