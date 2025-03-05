---
layout: post
title: Animation in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Animation in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Tooltip control

To animate the Tooltip, a set of specific animation effects are available, which can be controlled using the [`animation`](../api/tooltip#animation) property. The animation property also allows you to set delay, duration, and various other effects of your choice.

[`AnimationModel`](../api/tooltip/tooltipAnimationSettings) is derived from the base to apply the chosen animation effect, duration, etc., on Tooltips.

By default, Tooltip entrance occurs over 150 ms using the `ease-out` timing function. It exits also at 150 ms, but uses the `ease-in` timing function.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/animation/default-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/animation/default-animation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/animation/default-animation-cs1" %}
{% endif %}

The default animation effect for the Tooltip is set to `FadeIn` for its open action, and `FadeOut` for its close action. The default `duration` is set to 150 ms, and `delay` is set to 0.

## Animation effects

The animation effects that are applicable to Tooltips are:

* FadeIn
* FadeOut
* FadeZoomIn
* FadeZoomOut
* FlipXDownIn
* FlipXDownOut
* FlipXUpIn
* FlipXUpOut
* FlipYLeftIn
* FlipYLeftOut
* FlipYRightIn
* FlipYRightOut
* ZoomIn
* ZoomOut
* None

When the `effect` is specified as `none`, no effect will be applied to the Tooltip, and animation is considered to be set to `off`.

> Some of the above animation effects suit the Tooltip better when its tip pointer is hidden. This can be achieved by setting the [`showTipPointer`](../api/tooltip/#showtippointer) to false.

## Animating via open/close methods

Animations can also be applied on Tooltips dynamically through [`open`](../api/tooltip#open) and [`close`](../api/tooltip#close) methods. These methods accept the animation model as an optional parameter. If you pass [`TooltipAnimationSettings`](../api/tooltip/tooltipAnimationSettings), animation takes this model; otherwise, it takes the values from the [`animation`](../api/tooltip#animation) property. It is also possible to pass different animations for Tooltips on each target.

Refer to the code snippet below to apply animations using public methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/animation/animation-effects-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/animation/animation-effects-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/animation/animation-effects-cs1" %}
{% endif %}

## Apply transition

The transition effect can be applied to Tooltips by using the [`beforeRender`](../api/tooltip#beforerender) event as given in the following workaround code example.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/transition-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/transition-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/transition-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/transition-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/transition-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/transition-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/transition-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/transition-cs1" %}
{% endif %}
