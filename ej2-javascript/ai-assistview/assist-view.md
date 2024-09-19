---
layout: post
title: Assist view in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Assist view with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Assist view
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Assist view in ##Platform_Name## AI AssistView control

## Setting prompt text

You can use the `prompt` property to define the prompt text for the AI AssistView control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/prompt-text/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompt-text/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/prompt-text" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/prompt-text/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompt-text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/prompt-text" %}
{% endif %}

## Setting prompt placeholder

You can use the `promptPlaceholder` property to set the placeholder text for the prompt textarea. The default value is `Type prompt for assistance...`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/placeholder/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/placeholder" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/placeholder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/placeholder" %}
{% endif %}

## Prompt-response collection

By using the `prompts` property, you can specify the collection of prompts and responses, allowing you to load pre-defined pairs or individual entries ensuring the AI AssistView control is initialized with the configured data.

> The `prompts` collection stores all the prompts and responses generated.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/prompts/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/prompts" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/prompts/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/prompts" %}
{% endif %}

## Adding prompt suggestions

By using the `promptSuggestions` property, you can configure the list of suggested prompts in the AI AssistView. Users can choose from these suggestions to use as their prompts.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/suggestions/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/suggestions/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/suggestions" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/suggestions/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/suggestions/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/suggestions" %}
{% endif %}

### Adding suggestion headers

You can use the `promptSuggestionsHeader` property to set the header text for the prompt suggestions in the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/suggestions-header/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/suggestions-header/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/suggestions-header" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/suggestions-header/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/suggestions-header/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/suggestions-header" %}
{% endif %}

## Adding prompt iconCSS

You can customize the appearance of the prompter avatar by using the `promptIconCss` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/prompt-icon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompt-icon/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/prompt-icon" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/prompt-icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/prompt-icon/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/prompt-icon" %}
{% endif %}

## Adding response iconCSS

You can use the `responseIconCss` property to customize the appearance of the responder avatar. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/response-icon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/response-icon/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/response-icon" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/response-icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/response-icon/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/response-icon" %}
{% endif %}

## Show or hide clear button

You can use the `showClearButton` property to show or hide the clear button. By default, its value is `false`, when the clear button is clicked, the prompt text entered will be cleared.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/clearbutton/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/clearbutton/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/clearbutton" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/clearbutton/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/clearbutton/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/clearbutton" %}
{% endif %}
