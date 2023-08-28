---
layout: post
title: Styles in ##Platform_Name## Skeleton control | Syncfusion
description: Learn here all about Styles in Syncfusion ##Platform_Name## Skeleton control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Styles 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Styles in ##Platform_Name## Skeleton control

You can customize skeleton control in the below ways.

## cssClass

You can customize the style of a Skeleton control by using [`cssClass`](../api/skeleton/#cssclass). The appearance of JavaScript Skeleton can be customized by changing the wave color, background color, width, and height. For detailed information, refer `styles.css` file below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/skeleton/styles-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/styles-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/skeleton/styles-cs2" %}

## Visible

You can use the [`visible`](../api/skeleton/#visible) property which defines the visible state of Skeleton.

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control in hidden state
let circle: Skeleton = new Skeleton({
    shape: 'Circle',
    width: "60px",
    visible: false
});

// Render initialized Skeleton
circle.appendTo('#circleSkeleton');
```