---
layout: post
title: Change animation settings in ##Platform_Name## Context menu control | Syncfusion
description: Learn here all about Change animation settings in Syncfusion ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Change animation settings 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Change animation settings in ##Platform_Name## Context menu control

To change the animation of the ContextMenu, [`animationSettings`](../../api/context-menu/menuAnimationSettingsModel) property is used. The supported effects for ContextMenu are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open ContextMenu with `FadeIn` effect with the `duration` of `800ms`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs2" %}
{% endif %}
