---
layout: post
title: Set custom animation in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Set custom animation in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set custom animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in ##Platform_Name## Tab control

The Tab control supports custom animations for both previous and next actions using the `Animation` library. You can customize the animation using the [`animation`](../../api/tab#animation) property, which allows you to set [`easing`](../../api/tab/tabActionSettings#easing), [`duration`](../../api/tab/tabActionSettings#duration), and various other [`effects`](../../api/tab/tabActionSettings#effect).

By default, the Tab uses the `SlideLeftIn` animation for the [`previous`](../../api/tab/tabAnimationSettings#previous) tab and `SlideRightIn` for the [`next`](../../api/tab/tabAnimationSettings#next) tab. You can disable the animation by setting the animation effect to `None`.

To disable the indicator animation when the effect is set to `None`, use the following CSS:

```css
.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}
```

The following example demonstrates some animation types suitable for the Tab control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-animation-cs1" %}
{% endif %}
