---
layout: post
title: File Menu in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon File Menu with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# File Menu

The Syncfusion Javascript Ribbon control includes a built-in file menu that allows you to add menu items for performing specific actions like creating, opening, or saving documents. The file menu is highly configurable and can be enabled by defining the [fileMenu](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#filemenu) property.

## Visibility 

The visibility of the file menu can be controlled by setting the [visible](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/visibility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/visibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/visibility-cs1" %}

## Adding menu items

Menu items are added to the file menu through the [menuItems](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property, which accepts an array of [MenuItemModel](https://ej2.syncfusion.com/javascript/documentation/api/menu/menuItemModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/filemenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/filemenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/filemenu-cs1" %}

## Open submenu on click

By default, a submenu expands when the user hovers over its parent item. This behavior can be changed to expand on a click by setting the [showItemOnClick](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/file-submenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/file-submenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/file-submenu-cs1" %}

## Custom header text

The header text can be customized by defining new content in the[text](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/custom-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/custom-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/custom-header-cs1" %}
