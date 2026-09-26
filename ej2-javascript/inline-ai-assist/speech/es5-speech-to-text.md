---
layout: post
title: Speech to Text in ##Platform_Name## Inline AI Assist | Syncfusion®
description: Enable Speech-to-Text in the Syncfusion® ##Platform_Name## Inline AI Assist using the browser Web Speech API with custom language, interim results, and tooltips.
platform: ej2-javascript
control: Inline AI Assist
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Speech to Text in ##Platform_Name## Inline AI Assist

The Syncfusion JavaScript Inline AI Assist control integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to provide voice input directly in the Inline AI Assist prompt area.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion Inline AI Assist control is properly set up in your JavaScript application.
    - [JavaScript Getting Started Guide](https://ej2.syncfusion.com/javascript/documentation/inline-ai-assist/es5-getting-started)

2. The Inline AI Assist control is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).
    - [Integration of Azure OpenAI With JavaScript Inline AI Assist control](https://ej2.syncfusion.com/javascript/documentation/inline-ai-assist/ai-integrations/es5-openai-integration)

## Enable built-in speech-to-text

You can enable speech-to-text support using the [speechToTextSettings](../api/inline-ai-assist#speechtotextsettings) property. Set the `enable` property to `true` within the speechToTextSettings configuration to activate this feature.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/speech/stt/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/speech/stt/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/stt" %}

## Configure speech recognition language

The [lang](../api/inline-ai-assist#speechtotextsettings) property allows you to set the language code for speech recognition. By default, it uses the browser's language settings, but you can specify a custom language code, such as `en-US`, `es-ES`, or `fr-FR`. This ensures that the speech recognition engine recognizes and transcribes speech in the specified language accurately.

## Configure speech button settings

The [buttonSettings](../api/inline-ai-assist#speechtotextsettings) property lets you customize the microphone button's appearance and text content by configuring the `content` (text displayed when idle), `stopContent` (text displayed when recording), `iconCss` (icon when idle), and `stopIconCss` (icon when recording). This allows you to tailor the UI to match your application's design and provide clear visual feedback to users.

## Enable interim results

The [allowInterimResults](../api/inline-ai-assist#speechtotextsettings) property enables real-time transcription while the user is speaking. When set to `true`, the speech recognition engine returns interim transcripts as it processes the audio. This provides immediate feedback by displaying partially recognized speech before the final transcript is generated.

This example demonstrates how to configure Inline AI Assist with the speech recognition language, microphone button settings, and interim results:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/speech-configuration" %}

## Configure tooltip settings

You can customize the tooltips displayed for the microphone button using the [tooltipSettings](../api/inline-ai-assist#speechtotextsettings) property. The tooltip can provide different information based on whether speech recognition is idle or active.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/tooltip-settings" %}

## Speech-to-text events

The speech-to-text functionality provides events like `onStart` (when recognition starts), `onStop` (when it stops), `transcriptChanged` (when transcript updates), and `onError` (when errors occur).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/speech-events" %}

## Browser compatibility

The `SpeechToText` control relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/javascript/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.