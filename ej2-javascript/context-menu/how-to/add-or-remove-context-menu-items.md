---
layout: post
title: How to add or remove context menu items in ##Platform_Name## Context menu | Syncfusion
description: Add or remove Syncfusion ##Platform_Name## Context menu items dynamically with insertAfter, insertBefore, and removeItems methods.
platform: ej2-javascript
control: Add or remove context menu items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add or remove context menu items in ##Platform_Name## Context menu

ContextMenu items can be added or removed using the [`insertAfter`](../../api/menu#insertafter), [`insertBefore`](../../api/menu#insertbefore) and [`removeItems`](../../api/menu#removeitems) methods.

In the following example, the **Display Settings** menu items are added before the **Personalize** item, the **Sort By** menu items are added after the **Refresh**, and the **Paste** item is removed from context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs1" %}
{% endif %}
