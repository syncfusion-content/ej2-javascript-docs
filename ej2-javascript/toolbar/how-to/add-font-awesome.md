---
layout: post
title: How to add font awesome icons in ##Platform_Name## Toolbar | Syncfusion
description: Learn how to add Font Awesome icons to the Syncfusion ##Platform_Name## Toolbar control for richer command visuals.
platform: ej2-javascript
control: Add font awesome 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add font awesome icons in ##Platform_Name## Toolbar

You can customize the Toolbar component items by using third-party icons other than the icons available in the Syncfusion<sup style="font-size:70%">&reg;</sup> library. In the following example, font awesome icons are used as toolbar items.

* Refer to the third-party reference link. Here, the CDN link for Font Awesome is used.

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
```

* Add the icons to the toolbar component using the ['prefixIcon'](../../api/toolbar/itemDirective#prefixicon) property

The following sample explains how to use Font Awesome in the Toolbar component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/add-font-awesome-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/add-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/add-font-awesome-cs1" %}
{% endif %}

> We can also use templates for rendering icons based on the requirements.

## Customization

The class `e-icons` is used for standardizing the appearance of the icons to fit into toolbar items. If you wish to override the appearance of the icons used, you can do so by using the following set of classes.

Use the following CSS to set the color of icons.

```css

    .e-toolbar .e-icons {
        color: #e3165b !important;
    }

```

Use the following CSS to set the font size of icons.

```css

    .e-toolbar .e-btn .e-icons.e-btn-icon {
        font-size: 14px !important;
    }

```
