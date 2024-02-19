---
layout: post
title: Enable or disable context menu items in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Enable or disable context menu items in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable or disable context menu items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable or disable context menu items in ##Platform_Name## Context menu control

You can enable and disable the menu items using the [`enableItems`](../../api/menu#enableitems) method in ContextMenu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Display Settings** in parent items and **Medium icons** in sub menu items are disabled.

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