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

To enable Speech-to-Text functionality in the TypeScript AI AssistView control, update the `index.ts` file to incorporate the Web Speech API.

The [SpeechToText](https://ej2.syncfusion.com/documentation/speech-to-text/getting-started) control listens to audio input from the device’s microphone, transcribes spoken words into text, and updates the AI AssistView’s editable footer using the [footerTemplate](https://ej2.syncfusion.com/documentation/api/ai-assistview/#footertemplate) property to display the transcribed text. The transcribed text is then sent as a prompt to the Azure OpenAI service via the AI AssistView control.

### Configuration Options

* **[`lang`](https://ej2.syncfusion.com/documentation/api/speech-to-text/#lang)**: Specifies the language for speech recognition. For example:

    * `en-US` for American English
    * `fr-FR` for French

* **[`allowInterimResults`](https://ej2.syncfusion.com/documentation/api/speech-to-text/#allowinterimresults)**: Set to `true` to receive real-time (interim) recognition results, or `false` to receive only final results.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/stt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/stt/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/stt" %}

## Error Handling

The `SpeechToText` control provides events to handle errors that may occur during speech recognition. For more information, refer to the [Error Handling](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#error-handling) section in the documentation.

## Browser Compatibility

The `SpeechToText` control relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

## See Also

* [Text-to-Speech](./text-to-speech.md)
