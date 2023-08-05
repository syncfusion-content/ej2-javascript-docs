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

The Ribbon control provides a built-in file menu that allows you to add menu items for performing specific actions. The file menu can be enabled by setting the [fileMenu](https://ej2.syncfusion.com/javascript/documentation/api/ribbon#filemenu) property.

## Visibility 

You can show the file menu by setting the [visible](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

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

The menu items can be added to the file menu using the [menuItems](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property.

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

You can open the submenu on menu item click, by setting the [showItemOnClick](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`. By default, the submenu will open on mouse hover.

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

You can define the file menu header text content by using the [text](https://ej2.syncfusion.com/javascript/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/custom-header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/custom-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/custom-header-cs1" %}
