---
layout: post
title: Methods in ##Platform_Name## Inline AI Assist control | Syncfusion
description: Checkout and learn about methods with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Inline AI Assist 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## Inline AI Assist control

## Adding response

You can use the [addResponse](../api/inline-ai-assist#addresponse) public method to add the response to the Inline AI Assist.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/methods/add-response/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/add-response/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/add-response" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/methods/add-response/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/add-response/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/add-response" %}
{% endif %}

## Executing prompt

You can use the [executePrompt](../api/inline-ai-assist#executeprompt) method to execute the prompts dynamically in the Inline AI Assist. It accepts prompts as string values, which triggers the [promptRequest](../api/inline-ai-assist#promptrequest) event and performs the callback actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/execute-prompt" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/execute-prompt" %}
{% endif %}

## Showing popup

You can use [showPopup](../api/inline-ai-assist#showPopup) method to open the Inline AI Assist popup and optionally position it at specified coordinates.

## Hiding popup

You can use [hidePopup](../api/inline-ai-assist#hidePopup) method to close the Inline AI Assist popup.

Below sample demonstrates the usage of show and hide popup in Inline Assist component

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-componentpopup" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-componentpopup" %}
{% endif %}

## Showing command popup

Use [showCommandPopup](../api/inline-ai-assist#showCommandPopup) to open the command action popup; it only opens when the Inline AI Assist popup is already opened.

## Hiding command popup

You can use [hideCommandPopup](../api/inline-ai-assist#hideCommandPopup) to close the command action popup in the Inline AI Assist control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-commandpopup" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-commandpopup" %}
{% endif %}
