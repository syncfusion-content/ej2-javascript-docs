---
layout: post
title: Add font awesome in ##Platform_Name## Accordion control | Syncfusion
description: Learn here all about Add font awesome in Syncfusion ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add font awesome 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add font awesome in ##Platform_Name## Accordion control

We can customize the Accordion component items by using font awesome icons.

* Need to add font awesome CDN reference link in your sample to use font awesome icons.

```

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
```

You can add the font awesome icons to the Accordion header using ['iconCss'](../../api/accordion/accordionItem#iconcss) property. The following sample illustrates how to use font awesome in Accordion component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-font-awesome-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-font-awesome-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-font-awesome-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-font-awesome-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-font-awesome-cs1" %}
{% endif %}

## Customization

Use following CSS to customize the accordion items header icons.

```css

.e-accordion .e-acrdn-item .e-acrdn-header .e-acrdn-header-icon {
         display: inline-block;
         padding: 0 10px 0 0 !important;
}

```

Use following CSS to customize the selected accordion item content icons.

```css

.e-accordion .e-acrdn-item.e-select .e-acrdn-panel .e-acrdn-content .e-content-icon {
    color: rgba(0, 0, 0, 0.54) !important;
}

```
