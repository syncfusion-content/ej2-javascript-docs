---
layout: post
title: Render Scrollable Context Menu in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Render Scrollable Context Menu in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render Scrollable Context Menu
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Render Scrollable Context Menu in ##Platform_Name## Context menu control

To enable scrolling for the Context Menu, use the [enableScrolling](../../api/context-menu/#enablescrolling) property to manage the overflow behavior of menu items by enabling or disabling scroll functionality. This is especially useful when dealing with a large number of menu items that exceed the viewport height, ensuring the context menu remains accessible without affecting the page layout.

To achieve this functionality, set the `enableScrolling` property to `true`. Additionally, use the [beforeOpen](../../api/context-menu/#beforeopen) event to adjust the height of the menu's parent element, ensuring the scrollable area is applied correctly.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/context-menu/scroller-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/scroller-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/context-menu/scroller-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/scroller-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs1" %}
{% endif %}
