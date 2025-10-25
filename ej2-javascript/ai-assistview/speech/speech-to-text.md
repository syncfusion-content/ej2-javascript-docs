---
layout: post
title: Speech-to-Text With ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about configuration of Speech-to-Text with Azure OpenAI in ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in TypeScript AI AssistView

The Syncfusion TypeScript AI AssistView control integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to interact with the AI AssistView through voice input.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion AI AssistView control is properly set up in your TypeScript application.
    - [TypeScript Getting Started Guide](../ts/getting-started)

2. The AI AssistView control is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With TypeScript AI AssistView control](../ai-integrations/openai-integration)

## Configure Speech-to-Text

To enable Speech-to-Text functionality, modify the `index.ts` file to incorporate the Web Speech API. The [SpeechToText](https://ej2.syncfusion.com/documentation/speech-to-text/getting-started) control listens for microphone input, transcribes spoken words, and updates the AI AssistView's editable footer with the transcribed text. The transcribed text is then sent as a prompt to the Azure OpenAI service via the AI AssistView control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/stt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/stt/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/stt" %}

## See Also

* [Text-to-Speech](./text-to-speech.md)
