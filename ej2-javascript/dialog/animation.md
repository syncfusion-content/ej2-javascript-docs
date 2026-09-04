---
layout: post
title: Animation in ##Platform_Name## Dialog | Syncfusion
description: Animate the ##Platform_Name## Dialog open and close actions with delay, duration, and effects like Fade, Slide, Zoom, and Flip via animationSettings.
platform: ej2-javascript
control: Animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Dialog

The Dialog can be animated during the open and close actions. The user can also customize the [`delay`](https://ej2.syncfusion.com/documentation/api/dialog/animationsettings#delay) (number, default `0`), [`duration`](https://ej2.syncfusion.com/documentation/api/dialog/animationsettings#duration) (number, default `400`), and [`effect`](https://ej2.syncfusion.com/documentation/api/dialog/animationsettings#effect) of the animation by using the [animationSettings](https://ej2.syncfusion.com/documentation/api/dialog/animationsettings) property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
delay</td><td>
The Dialog animation will start after the specified delay (in milliseconds).</td></tr>
<tr>
<td>
duration</td><td>
Specifies the time (in milliseconds) for one animation cycle to complete.</td></tr>
<tr>
<td>
effect</td><td>
Specifies the animation effect for the Dialog open and close actions.
<br /><br />
List of supported animation effects:
<br />
`Fade` | `FadeZoom` | `FlipLeftDown` | `FlipLeftUp` | `FlipRightDown` | `FlipRightUp` | `FlipXDown` |
`FlipXUp` | `FlipYLeft` | `FlipYRight` | `SlideBottom` | `SlideLeft` | `SlideRight` | `SlideTop` |
`Zoom` | `None`
<br /><br />
If the user sets the `Fade` effect, the Dialog internally applies `FadeIn` on open and `FadeOut` on close. Likewise, the `Zoom` effect maps to `ZoomIn` on open and `ZoomOut` on close.
</td></tr>
</table>

In the following sample, the `Zoom` effect is enabled. So, the Dialog will open with `ZoomIn`
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
