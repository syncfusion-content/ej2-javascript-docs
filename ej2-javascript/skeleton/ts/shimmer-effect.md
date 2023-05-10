---
layout: post
title: Shimmer effect in ##Platform_Name## Skeleton control | Syncfusion
description: Learn here all about Shimmer effect in Syncfusion ##Platform_Name## Skeleton control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Shimmer effect 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer effect in ##Platform_Name## Skeleton control

You can use the [`shimmerEffect`](../api/skeleton#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control with wave effect
let pulse: Skeleton = new Skeleton({
    shape: 'Circle',
    width: "60px",
    shimmerEffect: 'Pulse'
});

// Render initialized Skeleton.
pulse.appendTo('#pulseSkeleton');
```

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/skeleton/effect-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/effect-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/skeleton/effect-cs2" %}