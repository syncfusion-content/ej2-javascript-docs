---
layout: post
title: Remove parent checkbox in ##Platform_Name## Treeview control | Syncfusion
description: Learn here all about Remove parent checkbox in Syncfusion ##Platform_Name## Treeview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Remove parent checkbox 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Remove parent checkbox in ##Platform_Name## Treeview control

By enabling the `showCheckBox` property, you can render check box before each node of TreeView. However, some application needs to render check box in child nodes alone. In such case, you can remove the check box of the parent node by customizing the CSS.

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
