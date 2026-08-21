---
layout: post
title: Set popup animation in ##Platform_Name## In-place Editor | Syncfusion
description: Animate the ##Platform_Name## In-place Editor popup by configuring popupSettings model animation effects and changing them dynamically from a DropDownList.
platform: ej2-javascript
control: Custom animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set popup animation in ##Platform_Name## In-place Editor

In popup mode, the In-place Editor rendered with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `Tooltip` control. You can use tooltip properties and events to customize the popup by configure properties into the [model](../../api/inplace-editor/popupSettings#model) property inside the [popupSettings](../../api/inplace-editor/popupSettings) API.

In the following sample, popup animation can be customized by passing animation effect using the `model` property and the dynamic animation effect changes configured from the Essential<sup style="font-size:70%">&reg;</sup> JS 2 `DropDownList` control `change` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs1" %}
{% endif %}