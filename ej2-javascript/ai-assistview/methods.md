---
layout: post
title: Methods in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about methods with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## AI AssistView control

## Adding prompt response

You can use the [addPromptResponse](../api/ai-assistview#addpromptresponse) public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding responses as string.

You can add a response as a string by passing it as an argument to the `addPromptResponse('Response')` method. This will append the response to the last prompt added to the conversation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/methods/response-string/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/response-string/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-string" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/methods/response-string/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/response-string/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-string" %}
{% endif %}

### Adding responses as object.

You can add an object response by passing the prompt and response as a collection to the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method. This will add a new prompt and its corresponding response to the AI AssistView.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/methods/response-object/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/response-object/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-object" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/methods/response-object/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/response-object/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/response-object" %}
{% endif %}

## Executing prompt

You can use the [executePrompt](../api/ai-assistview#executeprompt) method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the [promptRequest](../api/ai-assistview#promptrequest) event and performs the callback actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/execute-prompt" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/execute-prompt" %}
{% endif %}
