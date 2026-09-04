---
layout: post
title: Animation in ##Platform_Name## Toast | Syncfusion
description: Animate ##Platform_Name## Toast show and hide with custom effects from the Animation library; defaults are FadeIn and FadeOut.
platform: ej2-javascript
control: Animation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Toast

The Toast supports custom animations for both show and hide actions from the provided animation option of the `Animation` library.

The default animation is `FadeIn` for showing the Toast and `FadeOut` for hiding the Toast.

The following sample demonstrates some types of animations that suit the Toast. All the animation effects can be checked here.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/animation-cs1" %}
{% endif %}