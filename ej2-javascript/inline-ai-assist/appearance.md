---
layout: post
title: Appearance in ##Platform_Name## Inline AI Assist | Syncfusion®
description: Style the Syncfusion® ##Platform_Name## Inline AI Assist: set popup width, height, z-index, and a custom cssClass for the inline component.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## Inline AI Assist

## Component Dimensions

### Popup width

You can use the [popupWidth](../api/inline-ai-assist#width) property to set the width of the Inline AI Assist. The default value is `400px`.

### Popup height

You can use the [popupHeight](../api/inline-ai-assist#height) property to set the height of the Inline AI Assist. The default value is `auto`.

### Z-index

You can use the [zIndex](../api/inline-ai-assist#zindex) property to set z-index for the Inline AI Assist popup. The default value is `1000`.

## Custom styling using cssClass

You can customize the appearance of the Inline AI Assist component by using the [cssClass](../api/inline-ai-assist#cssclass) property.

Below sample demonstrates the usage of above root level properties in Inline Assist component

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-assist/root-config" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/inline-assist/root-config/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-assist/root-config" %}
{% endif %}