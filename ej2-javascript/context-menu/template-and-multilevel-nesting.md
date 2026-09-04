---
layout: post
title: Template and nesting in ##Platform_Name## Context menu | Syncfusion
description: Use itemTemplate in the Syncfusion ##Platform_Name## Context menu to render custom layouts and support multi-level menu nesting.
platform: ej2-javascript
control: Template and multilevel nesting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template and multilevel nesting in ##Platform_Name## Context menu

## Item template

The [`itemTemplate`](../api/context-menu#itemtemplate) property in the ContextMenu component allows you to define custom templates for displaying menu items within the context menu. This feature is especially useful when you want to customize the appearance or layout of the menu items beyond the default text-based list.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/template-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs2" %}
{% endif %}

## Customize the specific menu items

ContextMenu items can be customized using the [`beforeItemRender`](../api/context-menu#beforeitemrender) event. The item render event triggers while each menu item is being rendered, and its event arguments are used to identify the menu item and customize it based on your requirement. In the following sample, each menu item is rendered with the associated keyboard shortcut for the specified action. Here, the keycode is specified for **Save as**, **View page source**, and **Inspect** in the right-side corner of the menu items by adding a `span` element in the [`beforeItemRender`](../../api/context-menu#beforeitemrender) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs1" %}
{% endif %}

> To create the `span` element, use the `createElement` utility function from `ej2-base`.

## Multilevel nesting

The ContextMenu supports multi-level nesting. It can be achieved by mapping the [`items`](../api/context-menu/menuItemModel#items) property inside the parent's [`items`](../api/context-menu#items) array. In the sample below, three-level nesting of the ContextMenu is provided.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs4" %}
{% endif %}

> To open sub menu items only on click, set the [`showItemOnClick`](../api/context-menu#showitemonclick) property to `true`.

## See Also

* [Populate menu items with data source](./how-to/populate-menu-items-with-data-source)
