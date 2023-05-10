---
layout: post
title: Animation in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Animation in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Dialog control

The Dialog can be animated during the open and close actions. Also, user can customize animation's [`delay`](../api/dialog/animationSettings/#delay), [`duration`](../api/dialog/animationSettings/#duration) and [`effect`](../api/dialog/animationSettings/#effect) by using [animationSettings](../api/dialog/#animationsettings) property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
delay</td><td>
The Dialog animation will start with the mentioned delay</td></tr>
<tr>
<td>
duration</td><td>
Specifies the animation duration to complete with one animation cycle</td></tr>
<tr>
<td>
effect</td><td>
Specifies the animation effects of Dialog open and close actions effect.
<br /><br />
List of supported animation effects:
<br />
'Fade' | 'FadeZoom' | 'FlipLeftDown' | 'FlipLeftUp' | 'FlipRightDown' | 'FlipRightUp' | 'FlipXDown' |
'FlipXUp' | 'FlipYLeft' | 'FlipYRight' | 'SlideBottom' | 'SlideLeft' | 'SlideRight' | 'SlideTop' |
'Zoom'| 'None'
<br /><br />
If the user sets ‘Fade’ effect, then the Dialog will open with ‘FadeIn’ effect and close with ‘FadeOut’ effect
</td></tr>
</table>

In the below sample, `Zoom` effect is enabled. So, The Dialog will open with `ZoomIn`
and close with `ZoomOut` effects.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dialog/animation-cs1" %}
{% endif %}
