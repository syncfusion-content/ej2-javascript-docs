---
layout: post
title: Display tooltip on svg and canvas elements in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Display tooltip on svg and canvas elements in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display tooltip on svg and canvas elements 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display tooltip on svg and canvas elements in ##Platform_Name## Tooltip control

Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show tooltips on data visualization elements.

## SVG

Create the SVG square element and refer to the following code snippet to render the tooltip on SVG square.

```ts
let square: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'SVG Square',
    target: '#square
});
square.appendTo('#box');
```

## Canvas

Create the canvas circle element and refer to the following code snippet to render the tooltip on Canvas circle.

```ts
let circle: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: 'Canvas Circle',
    target: '#circle'
});
circle.appendTo('#box');
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/svg-canvas-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs1" %}