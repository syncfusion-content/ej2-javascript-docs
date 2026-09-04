---
layout: post
title: Icons and navigation in ##Platform_Name## Context menu | Syncfusion
description: Add icons to Syncfusion ##Platform_Name## Context menu items using the iconCss property and configure left-positioned visuals.
platform: ej2-javascript
control: Icons and navigation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons and navigation in ##Platform_Name## Context menu

## Icons

A ContextMenu item can include an icon or image to provide a visual representation of the action. To place the icon on a menu item, set the [`iconCss`](../api/context-menu/menuItemModel#iconcss) property to the desired e-icon class. By default, the icon is positioned to the left side of the menu item. In the following sample, the icons for the Cut, Copy, and Paste menu items are added using the `iconCss` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/icons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/icons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/icons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/icons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/icons-cs1" %}
{% endif %}

## Navigation

Navigation in the ContextMenu is used to navigate to another web page when a menu item is clicked. This can be achieved by providing a link to the menu item using the [`url`](../api/context-menu/menuItemModel#url) property. In the following sample, navigation URLs for the Flipkart, Amazon, and Snapdeal menu items are added using the `url` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/navigation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/navigation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/navigation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/navigation-cs1" %}
{% endif %}

> To open the links in a new tab, set the `target` attribute to `_blank` in the [`beforeItemRender`](../api/context-menu#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)
