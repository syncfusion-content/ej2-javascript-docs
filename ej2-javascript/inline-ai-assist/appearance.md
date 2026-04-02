---
layout: post
title: Appearance and styling in React Inline AI Assist | Syncfusion ##Platform_Name## Inline AI Assist control | Syncfusion
description: Checkout and learn about Appearance with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance and styling in React Inline AI Assist control

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