---
layout: post
title: Animation in ##Platform_Name## Drop down button control | Syncfusion
description: Learn here all about Animation in Syncfusion ##Platform_Name## Drop down button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Animation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Animation in ##Platform_Name## Drop down button control

The [`animationSettings`](../../api/drop-down-button/#animationsettings) property is used to customize the animation of the DropDownButton popup. The supported effects for DropDownButton are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the Dropdown popup transform with no animation effect. |
| SlideDown | Specifies the Dropdown popup transform with slide down effect. |
| ZoomIn | Specifies the Dropdown popup transform with zoom in effect. |
| FadeIn | Specifies the Dropdown popup transform with fade in effect. |

In this sample, three different DropDownButtons are rendered, each showcasing a unique animation effect for the dropdown menu:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/drop-down-button/animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/animation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/drop-down-button/animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/drop-down-button/animation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/drop-down-button/animation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/animation-cs1" %}
{% endif %}