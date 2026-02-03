---
layout: post
title: Assist view in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about Assist view with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Assist view in ##Platform_Name## AI AssistView control

## Setting prompt text

The [prompt](../api/ai-assistview#prompt) property allows you to define initial or default text that appears in the prompt input area. This property is useful for pre-filling the input with context or guidance for users.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-text" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-text" %}
{% endif %}

## Setting prompt placeholder

The [promptPlaceholder](../api/ai-assistview#promptplaceholder) property defines the placeholder text displayed in the prompt textarea when it's empty. The default placeholder text is `Type prompt for assistance...`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/placeholder" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/placeholder" %}
{% endif %}

## Prompt-response collection

The [prompts](../api/ai-assistview#prompts) property enables you to initialize the control with pre-configured conversation data or retrieve the complete history of user interactions.

> The [prompts](../api/ai-assistview#prompts) collection automatically stores all user inputs and corresponding AI responses generated during the session, providing a complete conversation history that can be accessed programmatically.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompts/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/prompts/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}
{% endif %}

## Adding prompt suggestions

The [promptSuggestions](../api/ai-assistview#promptsuggestions) property provides users with helpful suggestions that can appear initially or on-demand. These suggestions help users formulate better prompts and discover available functionality, enhancing the overall user experience.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions" %}
{% endif %}

### Adding suggestion headers

The [promptSuggestionsHeader](../api/ai-assistview#promptsuggestionsheader) property allows you to set a descriptive header text that appears above the prompt suggestions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions-header" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/suggestions-header/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions-header" %}
{% endif %}

## Adding prompt iconCss

The [promptIconCss](../api/ai-assistview#prompticoncss) property enables customization of the user avatar icon that appears alongside user prompts.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-icon" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-icon" %}
{% endif %}

## Adding response iconCss

The [responseIconCss](../api/ai-assistview#responseiconcss) property allows customization of the AI assistant avatar that appears alongside AI responses. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/response-icon" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/response-icon" %}
{% endif %}

## Show or hide clear button

The [showClearButton](../api/ai-assistview#showclearbutton) property controls the visibility of the clear button in the prompt input area. By default, its value is `false`, When the clear button is clicked, only the current prompt text is cleared, while the conversation history remains intact.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/assist-view/clearbutton/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/clearbutton/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/clearbutton" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/assist-view/clearbutton/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/assist-view/clearbutton/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/clearbutton" %}
{% endif %}
