---
layout: post
title: How to change menu items dynamically in ##Platform_Name## Context menu | Syncfusion
description: Show or hide Syncfusion ##Platform_Name## Context menu items dynamically by target using hideItems and showItems in beforeOpen.
platform: ej2-javascript
control: Change menu items dynamically 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change menu items dynamically in ##Platform_Name## Context menu

The items visible in the ContextMenu can be changed dynamically based on the target in which you open the ContextMenu. To achieve this behavior, initialize ContextMenu with all items using [`items`](../../api/context-menu#items) property and then based on the context you open hide/show required items using [`hideItems`](../../api/context-menu#hideitems)/[`showItems`](../../api/context-menu#showitems) method in [`beforeOpen`](../../api/context-menu#beforeopen) event.

In the following example, the datasource for Clipboard div is `Cut`, `Copy`, `Paste` and for the Editor div is `Add`, `Edit`, `Delete` is changed on [`beforeOpen`](../../api/context-menu#beforeopen) event using [`hideItems`](../../api/context-menu#hideitems) and [`showItems`](../../api/context-menu#showitems) method.

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
