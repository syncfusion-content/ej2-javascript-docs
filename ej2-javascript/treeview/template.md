---
layout: post
title: Template in ##Platform_Name## TreeView | Syncfusion
description: Learn how to customize templates in the Syncfusion ##Platform_Name## TreeView control for flexible node presentation.
platform: ej2-javascript
control: Template
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## TreeView

The TreeView control allows you to customize the look of TreeView nodes by using the [`nodeTemplate`](../api/treeview#nodetemplate) property. This property accepts either a [template string](../common/template-engine) or an HTML element ID.

In the following sample, employee information such as employee photo, name, and designation has been included using the [`nodeTemplate`](../api/treeview#nodetemplate) property.

The template expression should be provided inside the `${...}` interpolation syntax.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/templates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/templates-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/templates-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/templates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/templates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/templates-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/templates-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/templates-cs1" %}
{% endif %}

## See Also

* [How to customize the expand and collapse icons](./how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](./how-to/customize-the-tree-nodes-based-on-levels)