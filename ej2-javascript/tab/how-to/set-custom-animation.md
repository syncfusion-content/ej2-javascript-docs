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

Tab supports custom animations for both previous and next actions from the provided animation option of `Animation` library. The [`animation`](../../api/tab#animation) property also allows you to set [`easing`](../../api/tab/tabActionSettings#easing), [`duration`](../../api/tab/tabActionSettings#duration), and various other [`effect`](../../api/tab/tabActionSettings#effect).

Default animation is given as `SlideLeftIn` for [`previous`](../../api/tab/tabAnimationSettings#previous) tab animation and `SlideRightIn` for [`next`](../../api/tab/tabAnimationSettings#next) tab animation. You can also disable the animation by setting the animation effect as `None`. Also, please use the following CSS to disable indicator animation for animation effect as `None`.

```css

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suits Tab. You can check all the animation effects here.

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
