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

We can customize the Tab component items by using font awesome icons and fonts.

* Need to add font awesome CDN reference link in your sample to use font awesome icons.

```

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

```

You can add the font awesome icons to the Tab component using ['iconCss'](../../api/tab/headerModel/#iconcss) property. The following sample illustrates how to use font awesome in tab component.

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
