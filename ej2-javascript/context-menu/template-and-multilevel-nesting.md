---
layout: post
title: Template and multilevel nesting in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Template and multilevel nesting in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Template and multilevel nesting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template and multilevel nesting in ##Platform_Name## Context menu control

## Template

The ContextMenu items can be customized by using the [`beforeItemRender`](../api/context-menu#beforeitemrender) event. The item render event
triggers while rendering each menu item. The event argument will be used to identify the menu item and customize it based on the requirement. In the following sample, the menu item is rendered with keycode for specified action in ContextMenu using the template. Here, the keycode is specified for Save as, View page source, and Inspect in the right side corner of the menu items by adding span element in the [`beforeItemRender`](../api/context-menu#beforeitemrender) event.

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

> To create span element, `createElement` utility function used from `ej2-base`.

## Multilevel nesting

The Multiple level nesting supports in ContextMenu. It can be achieved by mapping the [`items`](../api/context-menu/menuItemModel#items) property inside the parent [`menuItems`](../api/context-menu#items). In the below sample, three level nesting of ContextMenu is provided.

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

> To open sub menu items only on click, [`showItemOnClick`](../api/context-menu#showitemonclick) property should be set as `true`.

## See Also

* [Populate menu items with data source](./how-to/populate-menu-items-with-data-source)
