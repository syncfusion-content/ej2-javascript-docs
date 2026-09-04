---
layout: post
title: Shimmer Effect in ##Platform_Name## Skeleton | Syncfusion
description: Animate ##Platform_Name## Skeleton with Wave, Pulse, or Fade shimmer effects to indicate loading content on the page.
platform: ej2-javascript
control: Shimmer effect
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Shimmer Effect in ##Platform_Name## Skeleton

The [`shimmerEffect`](../api/skeleton/index-default#shimmereffect) property is used to change the animation effect in the Skeleton control. Skeleton supports `Wave`, `Pulse`, and `Fade` effects, and by default, the `shimmerEffect` is set to the `Wave` effect.

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize Skeleton control with pulse effect
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