---
layout: post
title: Select one child in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Select one child in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Select one child
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Select one child in ##Platform_Name## TreeView control

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