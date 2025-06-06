---
layout: post
title: Fancy Tooltip customization in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Fancy Tooltip customization in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Fancy Tooltip customization
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Fancy Tooltip customization in ##Platform_Name## Tooltip control

The arrow of the Tooltip can be customized as needed by altering the CSS in the sample-side. The EJ2 Tooltip control is implemented using CSS3 formatting, allowing the tip arrow to be positioned according to the Tooltip positions like `TopCenter`, `BottomLeft`, `RightTop`, and more.

Here, the tip arrow is customized as Curved Tooltip and Bubble Tooltip.

## Curved tip

To customize the curved tip arrow, override the following CSS class for the tip arrow:

```ts
    let tooltip: Tooltip = new Tooltip({
    cssClass: 'curvetips e-tooltip-css',
    content: 'Tooltip arrow customized',
});
tooltip.appendTo('#target');
```

```ts

      .e-arrow-tip-outer.e-tip-bottom,
      .e-arrow-tip-outer.e-tip-top {
           border-left: none !important;
           border-right: none !important;
           border-top: none !important;
      }
      .e-arrow-tip.e-tip-top {
           transform: rotate(170deg);
      }

```

## Bubble tip

The two `divs`(inner div and outer div) have been added to achieve the bubble tip arrow. To customize the bubble tip arrow, override the following CSS class of tip arrow.

```ts
    let bubble: Tooltip = new Tooltip({
    cssClass: 'bubbletip e-tooltip-css',
    position: 'TopRight',
    content: 'Tooltip arrow customized as balloon tip'
});
bubble.appendTo('#bubbletip');
```

```ts

    .e-arrow-tip-outer.e-tip-bottom, .e-arrow-tip-outer.e-tip-top
      {
         border-radius: 50px;
         height: 10px;
         width: 10px;
      }

      .e-arrow-tip-inner.e-tip-bottom, .e-arrow-tip-inner.e-tip-top
        {
         border-radius: 50px;
         height: 10px;
         width: 10px;
        }
```

These tip arrow customizations are achieved through CSS changes at the sample level. The Tooltip position can be changed using the radio button click event.

The arrow tip pointer can also be disabled by using the [`showTipPointer`](../../api/tooltip/#showtippointer) property in a Tooltip.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/tip-customization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/tip-customization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/tip-customization-cs1" %}
{% endif %}