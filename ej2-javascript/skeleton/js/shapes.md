---
layout: post
title: Shapes in ##Platform_Name## Skeleton control | Syncfusion
description: Learn here all about Shapes in Syncfusion ##Platform_Name## Skeleton control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Shapes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in ##Platform_Name## Skeleton control

The Skeleton control support various built-in shape variants to design layout of the page. You can use the [`shape`](../api/skeleton#shape) property to create a preview of any layout.

The Skeleton component supports the following shapes,

## Circle skeleton shape

```js
// Initialize Skeleton control for circle shape
var circle = new ej.notifications.Skeleton({
    shape: 'Circle',
    width: "48px"
});

// Render initialized Skeleton.
circle.appendTo('#circleSkeleton');
```

## Square skeleton shape

```js
// Initialize Skeleton control for square shape
var square = new ej.notifications.Skeleton({
    shape: 'Square',
    width: "48px"
});

// Render initialized Skeleton.
square.appendTo('#squareSkeleton');
```

## Rectangle skeleton shape

```js
// Initialize Skeleton control for rectangle shape
var rect = new ej.notifications.Skeleton({
    shape: "Rectangle",
    height: '50px'
});

// Render initialized Skeleton.
rect.appendTo('#rectSkeleton');
```

## Text skeleton shape

```js
// Initialize Skeleton control for text shape
var text = new ej.notifications.Skeleton({
    shape: "Text",
    height: "15px"
})

// Render initialized Skeleton.
text.appendTo('#textSkeleton');
```

Below example demonstrates the above functionalities of a Skeleton control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/skeleton/shapes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/shapes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/shapes-cs1" %}