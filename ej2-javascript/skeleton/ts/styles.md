---
layout: post
title: Styles in ##Platform_Name## Skeleton | Syncfusion
description: Customize ##Platform_Name## Skeleton appearance using cssClass for wave color, background, width, and height, and toggle visibility.
platform: ej2-javascript
control: Styles
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Styles in ##Platform_Name## Skeleton

The Skeleton can be customized in the below ways.

## cssClass

The style of a Skeleton control can be customized by using the [`cssClass`](../api/skeleton/index-default#cssclass) property. The appearance of the Skeleton control can be customized by changing the wave color, background color, width, and height. For detailed information, refer to the `styles.css` file below.

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

The [`visible`](../api/skeleton/index-default#visible) property defines the visible state of the Skeleton control.

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