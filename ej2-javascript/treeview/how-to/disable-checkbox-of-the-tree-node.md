---
layout: post
title: Disable checkbox of the tree node in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Disable checkbox of the tree node in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Disable checkbox of the tree node
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable checkbox of the tree node in ##Platform_Name## TreeView control

You can disable only the checkbox in the TreeView control without disabling the entire node. To achieve this, add the `e-checkbox-disabled` class to the checkbox element using the [`drawNode`](../../api/treeview#drawnode)  event. Please refer to the following example to disable the checkbox of the tree nodes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/disable-checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/disable-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/disable-checkbox-cs1" %}
{% endif %}