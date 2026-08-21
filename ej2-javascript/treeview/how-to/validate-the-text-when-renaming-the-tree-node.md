---
layout: post
title: How to validate the text when renaming the tree node in ##Platform_Name## TreeView | Syncfusion
description: Learn how to validate renamed TreeView node text in the Syncfusion ##Platform_Name## TreeView control for clean editing.
platform: ej2-javascript
control: Validate the text when renaming the tree node
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to validate the text when renaming the tree node in ##Platform_Name## TreeView

You can validate the text of a tree node while editing by using the [`nodeEdited`](../../api/treeview#nodeedited) event of the TreeView control. The following example demonstrates how to validate and prevent empty values in a tree node.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/validation-cs1" %}
{% endif %}