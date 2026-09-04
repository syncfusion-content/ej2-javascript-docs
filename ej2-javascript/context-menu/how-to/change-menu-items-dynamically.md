---
layout: post
title: How to change items in ##Platform_Name## Context menu | Syncfusion
description: Show or hide Syncfusion ##Platform_Name## Context menu items dynamically by target using hideItems and showItems in beforeOpen.
platform: ej2-javascript
control: Change menu items dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change menu items dynamically in ##Platform_Name## Context menu

The items visible in the ContextMenu can be changed dynamically based on the target in which you open the ContextMenu. To achieve this behavior, initialize the ContextMenu with all items using the [`items`](../../api/context-menu#items) property, and then based on the context in which you open the menu, hide or show the required items using the [`hideItems`](../../api/context-menu#hideitems) and [`showItems`](../../api/context-menu#showitems) methods in the [`beforeOpen`](../../api/context-menu#beforeopen) event.

In the following example, the data source for the Clipboard div (`Cut`, `Copy`, `Paste`) and the Editor div (`Add`, `Edit`, `Delete`) is changed on the [`beforeOpen`](../../api/context-menu#beforeopen) event using the [`hideItems`](../../api/context-menu#hideitems) and [`showItems`](../../api/context-menu#showitems) methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/dynamic-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/dynamic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/dynamic-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/dynamic-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/dynamic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/dynamic-cs1" %}
{% endif %}
