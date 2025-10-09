---
layout: post
title: Text-to-Speech With ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about configuration of Text-to-Speech with Azure OpenAI in ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Text-to-Speech in JavaScript AI AssistView

The Syncfusion JavaScript AI AssistView component supports `Text-to-Speech` (TTS) functionality using the browser's Web Speech API specifically using the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface to convert AI-generated response into spoken audio.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView control is properly set up in your JavaScript application.
    - [JavaScript Getting Started Guide](../js/es5-getting-started)

2. The AI AssistView control is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With JavaScript AI AssistView control](../ai-integrations/es5-openai-integration)

## Configure Text-to-Speech

To enable Text-to-Speech functionality, modify the `index.js` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/javascript/documentation/api/ai-assistview/#responsetoolbarsettings) property. When clicked, the [itemClicked](https://ej2.syncfusion.com/javascript/documentation/api/ai-assistview/responsetoolbarsettingsmodel/#itemclicked) event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/speech/tts/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/tts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## See Also

* [Speech-to-Text](./es5-speech-to-text.md)
