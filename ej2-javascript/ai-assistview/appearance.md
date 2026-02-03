---
layout: post
title: Appearance in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about templates with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## AI AssistView control

The Syncfusion AI AssistView allows for customization of its dimensions and overall look and feel. This can be achieved by setting the control's width and height or by applying custom CSS styles.

## Setting width

The [width](../api/ai-assistview#width) property allows you to define the width of the AI AssistView container. You can set this value as a string, using either pixels (e.g., `"500px"`) or a percentage (e.g., `"50%"`). By default, the width is set to `100%`, allowing it to fill its parent container.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/appearance/width/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/width/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/width" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/appearance/width/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/width/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/width" %}
{% endif %}

## Setting height

The [height](../api/ai-assistview#height) property allows you to define the height of the AI AssistView container. This value can be a string, specified in pixels (e.g., `"600px"`) or as a percentage (e.g., `"100%"`). The default value is `100%`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/appearance/height/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/height/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/height" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/appearance/height/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/height/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/height" %}
{% endif %}

## cssClass

For more advanced style customizations, you can use the [cssClass](../api/ai-assistview#cssclass) property to apply one or more custom CSS classes to the AI AssistView control's root element.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/appearance/cssclass/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/cssclass/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/cssclass" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/appearance/cssclass/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/appearance/cssclass/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/appearance/cssclass" %}
{% endif %}
