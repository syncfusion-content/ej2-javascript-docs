---
layout: post
title: Animation in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Animation with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Stepper control

The Stepper progress state can be animated, smoothly transitioning from one step to another. You can customize the animation's `duration` and `delay` by using the [animation](https://ej2.syncfusion.com/javascript/documentation/api/stepper/#animation) property.

You can disable the animation by setting the [enable](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#enable) property to `false`. By default, the value is `true`.

| Fields | Type | Description |
|------|------|-------------|
| [duration](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#duration) | `number` | Specifies the duration of the animated transition for each step. The default value is `2000` milliseconds. |
| [delay](https://ej2.syncfusion.com/javascript/documentation/api/stepper/animationModel/#delay) | `number` | Specifies the delay to initiate the animated transition for each step in milliseconds. The default value is `0`. |

The example demonstrates the animation `duration` and `delay` settings for the Stepper.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/animation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/animation/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}