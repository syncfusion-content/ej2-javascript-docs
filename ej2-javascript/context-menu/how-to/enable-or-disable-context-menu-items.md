---
layout: post
title: How to enable/disable items in Context menu | Syncfusion
description: Enable or disable Syncfusion ##Platform_Name## Context menu items with the enableItems method and set the enable flag.
platform: ej2-javascript
control: Enable or disable context menu items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable/disable items in ##Platform_Name## Context menu

You can enable and disable the menu items using the [`enableItems`](../../api/menu#enableitems) method in ContextMenu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Display Settings** parent item and the **Medium icons** sub menu item are disabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs3" %}
{% endif %}

> To disable sub menu items, use the [`beforeOpen`](../../api/menu#beforeopen) event.