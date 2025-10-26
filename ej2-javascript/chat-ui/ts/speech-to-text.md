---
layout: post
title: Speech-to-Text With ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about configuration of Speech-to-Text in ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in TypeScript Chat UI

The Syncfusion TypeScript Chat UI control integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to interact with the Chat UI through voice input.

## Configure Speech-to-Text

To enable Speech-to-Text functionality in the TypeScript Chat UI control, update the `index.ts` file to incorporate the Web Speech API.

The [SpeechToText](https://ej2.syncfusion.com/documentation/speech-to-text/getting-started) control listens to audio input from the device’s microphone, transcribes spoken words into text, and updates the Chat UI’s editable footer using the [footerTemplate](https://ej2.syncfusion.com/documentation/api/chat-ui/#footertemplate) property to display the transcribed text. Once the transcription appears in the footer, users can send it as a message to others.

### Configuration Options

* **[`lang`](https://ej2.syncfusion.com/documentation/api/speech-to-text/#lang)**: Specifies the language for speech recognition. For example:

    * `en-US` for American English
    * `fr-FR` for French

* **[`allowInterimResults`](https://ej2.syncfusion.com/documentation/api/speech-to-text/#allowinterimresults)**: Set to `true` to receive real-time (interim) recognition results, or `false` to receive only final results.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/stt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/stt/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/stt" %}

## Error Handling

The `SpeechToText` control provides events to handle errors that may occur during speech recognition. For more information, refer to the [Error Handling](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#error-handling) section in the documentation.

## Browser Compatibility

The `SpeechToText` control relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

## See Also

* [Messages](../messages)
