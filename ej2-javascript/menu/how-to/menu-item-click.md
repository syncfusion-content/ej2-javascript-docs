---
layout: post
title: How to open menu and sub menu on item click in ##Platform_Name## Menu | Syncfusion
description: Learn how to open menu and sub-menu items on click with the Syncfusion ##Platform_Name## Menu control for interactive navigation.
platform: ej2-javascript
control: Menu item click
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to open menu and sub menu on item click in ##Platform_Name## Menu

You can open menu items and sub menu on menu item click by setting [`showItemOnClick`](../../api/menushowitemonclick) property of the Menu. To open sub menu items only on item click, should be set as `true`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/rounded-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/rounded-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/rounded-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/rounded-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/rounded-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/rounded-cs1" %}
{% endif %}