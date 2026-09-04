---
layout: post
title: Shapes in ##Platform_Name## Skeleton | Syncfusion
description: Use ##Platform_Name## Skeleton shapes — Circle, Square, Rectangle, or Text — to preview any page layout with the shape property.
platform: ej2-javascript
control: Shapes
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Shapes in ##Platform_Name## Skeleton

The Skeleton control supports various built-in shape variants to design the layout of the page. The [`shape`](../api/skeleton/index-default#shape) property is used to create a preview of any layout.

The Skeleton control supports the following shapes:

## Circle skeleton shape

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control for circle shape
let circle: Skeleton = new Skeleton({
    shape: 'Circle',
    width: "48px"
});

// Render initialized Skeleton.
circle.appendTo('#circleSkeleton');
```

## Square skeleton shape

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control for square shape
let square: Skeleton = new Skeleton({
    shape: 'Square',
    width: "48px"
});

// Render initialized Skeleton.
square.appendTo('#squareSkeleton');
```

## Rectangle skeleton shape

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control for rectangle shape
let rect: Skeleton = new Skeleton({
    shape: "Rectangle",
    height: '50px'
});

// Render initialized Skeleton.
rect.appendTo('#rectSkeleton');
```

## Text skeleton shape

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control for text shape
let text: Skeleton = new Skeleton({
    shape: "Text",
    height: "15px"
});

// Render initialized Skeleton.
text.appendTo('#textSkeleton');
```

Below example demonstrates the above functionalities of a Skeleton control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/skeleton/shapes-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/shapes-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/skeleton/shapes-cs2" %}