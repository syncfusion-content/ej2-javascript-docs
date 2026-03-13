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

## Enable built-in speech-to-text

You can enable speech-to-text support using the [speechToTextSettings](../api/ai-assistview#speechtotextsettings) property. Set the `enable` property to `true` within the speechToTextSettings configuration to activate this feature.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/stt/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/stt/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/stt" %}

## Configure speech recognition language

The [lang](../api/ai-assistview#speechtotextsettings) property allows you to set the language code for speech recognition. By default, it uses the browser's language settings, but you can specify a custom language code (e.g., 'en-US', 'es-ES', 'fr-FR', etc.). This ensures that the speech recognition engine recognizes and transcribes speech in the specified language accurately.

## Configure speech button settings

The [buttonSettings](../api/ai-assistview#speechtotextsettings) property lets you customize the microphone button's appearance and text content by configuring the `content` (text displayed when idle), `stopContent` (text displayed when recording), `iconCss` (icon when idle), and `stopIconCss` (icon when recording). This allows you to tailor the UI to match your application's design and provide clear visual feedback to users.

## Enable interim results

The [allowInterimResults](../api/ai-assistview#speechtotextsettings) property enables real-time transcription results while the user is still speaking. When set to `true`, the speech recognition engine returns interim transcripts (partial results) as it processes the audio. This provides immediate feedback to users, allowing them to see their speech being recognized in real-time before the final transcript is generated.

This example demonstrates how to set up the AI AssistView with all these speech recognition features enabled:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/speech-configuration/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/speech-configuration/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/speech-configuration" %}

## Configure tooltip settings

You can customize the tooltips to the microphone button using the [tooltipSettings](../api/ai-assistview#speechtotextsettings) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/tooltip-settings/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/tooltip-settings/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tooltip-settings" %}

## Speech to text events

The speech-to-text functionality provides events like `onStart` (when recognition starts), `onStop` (when it stops), `transcriptChanged` (when transcript updates), and `onError` (when errors occur).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/speech-events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/speech-events/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/speech-events" %}

## Browser compatibility

The `SpeechToText` control relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

## See Also

* [Text-to-Speech](./text-to-speech.md)
