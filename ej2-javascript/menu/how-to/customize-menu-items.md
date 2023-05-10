---
layout: post
title: Customize menu items in ##Platform_Name## Menu control | Syncfusion
description: Learn here all about Customize menu items in Syncfusion ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize menu items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize menu items in ##Platform_Name## Menu control

## Add or remove menu items

Menu items can be added or removed using the [`insertAfter`](../../api/menu#insertafter), [`insertBefore`](../../api/menu#insertbefore) and [`removeItems`](../../api/menu#removeitems) methods.

In the following example, the **Europe** menu items are added before the **Oceania** item, the **Africa** menu items are added after the **Asia**, and the **South America** and **Mexico** items are removed from menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs7" %}
{% endif %}

> To process items with `ID` values, set `isUnique` to `true`.

## Enable or disable menu items

You can enable and disable the menu items using the [`enableItems`](../../api/menu#enableitems) method in Menu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Directory** header item, **Conferences**, and **Music** sub menu items are disabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/enable-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/enable-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/enable-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/enable-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/enable-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/enable-items-cs1" %}
{% endif %}

> To disable sub menu items, use the [`beforeOpen`](../../api/menu#beforeopen) event.

## Hide or show menu items

You can show or hide the menu items using the [`showItems`](../../api/menu#showitems) and [`hideItems`](../../api/menu#hideitems) methods.

In the following example, the **Movies** header item, **Workshops**, and **Music** sub menu items are hidden in menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/hide-items-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/hide-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/hide-items-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/hide-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/hide-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/hide-items-cs1" %}
{% endif %}

> Using the [`beforeOpen`](../../api/menu#beforeopen) event, you can hide the sub menu items as in the above example since the menu supports to hide items only for headers initially.