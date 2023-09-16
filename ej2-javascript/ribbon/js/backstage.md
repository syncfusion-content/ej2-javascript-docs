---
layout: post
title: Ribbon Backstage in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Ribbon Backstage with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Backstage

The Ribbon supports backstage view which is an addition to the traditional file menu. It displays information like application settings, user details, etc. The backstage view can be enabled by setting the `backStageMenu` property.

The backstage view options are displayed on the left, while the content of each option is shown on the right.

## Adding backstage items

The menu items can be added to the backstage view by using the `items` property. You can show the backstage view by setting the `visible` property to `true`. By default, the backstage view is hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/backstage-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/backstage-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/backstage-cs1" %}

## Adding footer items

You can use the `isFooter` property in the `items` collection to add the backstage view footer items. By default, the value is false.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/footer-items-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/footer-items-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/footer-items-cs1" %}

## Adding separator

The separators are horizontal lines used to separate the backstage view items. You can use the `separator` property to split the menu items.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/separator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/separator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/separator-cs1" %}

## Back button

You can use the `backButton` property to customize the text and icon of the close button using the `text` and `iconCss` property. You can show the back button by setting the `visible` property to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/back-button-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/back-button-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/back-button-cs1" %}

## Backstage target

The `target` property specifies the element selector in which backstage will be displayed. The target element should have the position as relative, else the backstage will be positioned nearest to the relative element. By default, the backstage is positioned to ribbon element.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/target-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/target-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/target-cs1" %}

## Template

You can use the `template` property to modify the backstage view menu items and their contents.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/template-cs1" %}

## Setting width and height

You can customize the height and width of the backstage view using the `height` and `width` property. By default, dimensions are set based on the content added.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ribbon/customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/customization-cs1" %}

> [Adding Backstage events](./events#backStageItemClick)
