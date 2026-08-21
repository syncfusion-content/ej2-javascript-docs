---
layout: post
title: How to change animation settings in ##Platform_Name## Menu | Syncfusion
description: Learn how to use the Syncfusion ##Platform_Name## Menu control to change animation settings and improve interaction feedback.
platform: ej2-javascript
control: Change animation settings
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change animation settings in ##Platform_Name## Menu

To change the animation of the Menu, [`animationSettings`](../../api/menu/menuAnimationSettingsModel/) property is used. The supported effects for Menu are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open Menu with `FadeIn` [`effect`](../../api/menu/menuAnimationSettingsModel/#effect) with the [`duration`](../../api/menu/menuAnimationSettingsModel/#duration) of `800ms`. Also we can set [`easing`](../../api/menu/menuAnimationSettingsModel/#easing) for menu items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs5" %}
{% endif %}
