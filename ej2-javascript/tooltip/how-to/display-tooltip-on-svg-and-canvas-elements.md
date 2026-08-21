---
layout: post
title: How to display Tooltip on SVG in ##Platform_Name## Tooltip | Syncfusion
description: Display the ##Platform_Name## Tooltip on SVG and Canvas elements by attaching the target id to data-visualization components like squares and circles.
platform: ej2-javascript
control: Display Tooltip on svg and canvas elements
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to display Tooltip on SVG in ##Platform_Name## Tooltip

The Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show Tooltip on data visualization components.

## SVG

Create an SVG square element and use the following code snippet to render the Tooltip on the SVG square.

```ts
let square: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'SVG Square',
    target: '#square'
});
square.appendTo('#box');
```

## Canvas

Create the canvas circle element and refer to the following code snippet to render the Tooltip on Canvas circle.

```ts
let circle: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Canvas Circle',
    target: '#circle'
});
circle.appendTo('#box');
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs1" %}

{% endif %}