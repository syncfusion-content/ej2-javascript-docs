---
layout: post
title: Set custom animation in ##Platform_Name## Accordion control | Syncfusion
description: Learn here all about Set custom animation in Syncfusion ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set custom animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in ##Platform_Name## Accordion control

Accordion supports custom animations for both expand and collapse actions from the provided animation option of `Animation` library.  The [`animation`](../../api/accordion#animation) property also allows you to set [`easing`](../../api/accordion/accordionActionSettings#easing), [`duration`](../../api/accordion/accordionActionSettings#duration), and various other effects of your choice.

Default animation is given as `SlideDown` for expanding the panel using [`expand`](../../api/accordion/accordionAnimationSettings#expand) animation property and `SlideUp` for collapsing the panel using [`collapse`](../../api/accordion/accordionAnimationSettings#collapse) animation property. You can also disable the animation by setting animation [`effect`](../../api/accordion/accordionActionSettings#effect) as `none`.

The sample demonstrates some types of animation that suits for Accordion. You can check all the animation effects here.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-custom-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-custom-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-custom-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/accordion/accordion-custom-animation-cs1" %}
{% endif %}
