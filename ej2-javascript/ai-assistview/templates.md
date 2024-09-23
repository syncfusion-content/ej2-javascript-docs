---
layout: post
title: Templates in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about templates with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Templates
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## AI AssistView control

The AI AssistView provides several template options to customize the banner, prompt, response, suggestions and footer items.

## Banner template

You can use the [bannerTemplate](../api/ai-assist-view#bannertemplate) property to display additional information, such as a welcome note, and more in the AI AssistView. This banner is positioned at the top of the prompt and response conversation area within the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/templates/banner/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/banner/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/banner" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/templates/banner/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/banner/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/banner" %}
{% endif %}

## Prompt item template

You can use the [promptItemTemplate](../api/ai-assist-view#promptitemtemplate) property to customize the prompt items in the AI AssistView. The template context includes `prompt`, `toolbarItems` and `index` items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/templates/prompt-item/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/prompt-item/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/prompt-item" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/templates/prompt-item/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/prompt-item/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/prompt-item" %}
{% endif %}

## Response item template

You can use the [responseItemTemplate](../api/ai-assist-view#responseitemtemplate) property to customize response items within the AI AssistView. The template context includes the `prompt`, `response`, `index`, `toolbarItems` and `output` items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/templates/response-item/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/response-item/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/response-item" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/templates/response-item/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/response-item/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/response-item" %}
{% endif %}

## Prompt suggestion item template

You can use the [promptSuggestionItemTemplate](../api/ai-assist-view#promptsuggestionitemtemplate) property to customize the prompt suggestion items in the AI AssistView. The template context includes the `index` and `promptSuggestion`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/templates/suggestions-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/suggestions-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/suggestions-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/templates/suggestions-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/suggestions-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/suggestions-template" %}
{% endif %}

## Footer template

You can use the [footerTemplate](../api/ai-assist-view#footertemplate) property to customize the default footer area and manage prompt request actions in the AI AssistView. This allows users to create unique footers that meet their specific needs.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/templates/footer-template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/footer-template/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/footer-template" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/templates/footer-template/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/templates/footer-template/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/templates/footer-template" %}
{% endif %}
