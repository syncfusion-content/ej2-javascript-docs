---
layout: post
title: Add font awesome in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Add font awesome in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add font awesome 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add font awesome in ##Platform_Name## Tab control

You can customize the Tab component items using Font Awesome icons and fonts. Here's how to do it:

1. First, add the Font Awesome CDN reference link to your HTML file:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
```

2. Then, use the ['iconCss'](../../api/tab/headerModel/#iconcss) property to add Font Awesome icons to the Tab component. 

The following example demonstrates how to use Font Awesome icons in the Tab component:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/add-font-awesome-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/add-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/add-font-awesome-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/add-font-awesome-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/add-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/add-font-awesome-cs1" %}
{% endif %}

## Customization

Use the following CSS to customize the header item icon of Tab control.

```css

.e-tab .e-tab-header .e-toolbar-item .e-tab-icon {
    color: #badfba !important;
}

```
