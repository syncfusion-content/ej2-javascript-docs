---
layout: post
title: Remove parent checkbox in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about removing parent checkboxes in the Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Remove parent checkbox
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Remove parent checkbox in ##Platform_Name## TreeView control

By enabling the [`showCheckBox`](../../api/treeview/#showcheckbox) property, you can render a checkbox before each node of the TreeView. However, some applications require checkboxes to be displayed only in child nodes. In such cases, you can remove the checkbox of the parent node by customizing the CSS.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/remove-parent-checkbox-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/remove-parent-checkbox-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/remove-parent-checkbox-cs1" %}
{% endif %}
