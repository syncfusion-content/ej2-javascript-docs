---
layout: post
title: Use case scenarios in ##Platform_Name## Menu control | Syncfusion
description: Learn here all about Use case scenarios in Syncfusion ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Use case scenarios 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Use case scenarios in ##Platform_Name## Menu control

## Scrollable menu

The menu component supports horizontal and vertical scrolling to render large menus and submenus in an adaptive way. This can be achieved by enabling the [`enableScrolling`](../api/menu/#enablescrolling) property and by restricting the corresponding menu/submenu size.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/scroll-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/scroll-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/scroll-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/scroll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/scroll-cs1" %}
{% endif %}

## Menu in toolbar

The following example demonstrates how to integrate Menu with Toolbar component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/toolbar-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/toolbar-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/toolbar-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/toolbar-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/toolbar-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/toolbar-menu-cs1" %}
{% endif %}

## Hamburger menu

The following example demonstrates the use case of menu with Accordion component integrated in SideBar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/sidebar-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/sidebar-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/sidebar-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/sidebar-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/sidebar-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/sidebar-menu-cs1" %}
{% endif %}

## Mobile view

The following example demonstrates the use case of Menu in Mobile mode by using ListView component with hamburger.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/accordion-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/accordion-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/accordion-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/accordion-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/accordion-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/accordion-menu-cs1" %}
{% endif %}