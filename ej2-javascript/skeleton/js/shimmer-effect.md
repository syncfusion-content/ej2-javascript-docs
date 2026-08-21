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

You can use the [`shimmerEffect`](../api/skeleton/index-default#shimmereffect) property to change animation effect in the skeleton control. Skeleton supports `Wave`, `Pulse` and `Fade` effects and by default, the `shimmerEffect` is set to `Wave` effect.

```js
// Initialize Skeleton control with pulse effect
var pulse = ej.notifications.Skeleton({
    shape: 'Circle',
    width: "60px",
    shimmerEffect: 'Pulse'
});

// Render initialized Skeleton.
pulse.appendTo('#pulseSkeleton');
```

Below example demonstrates a list with pulse effect skeleton.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/skeleton/effect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/effect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/effect-cs1" %}