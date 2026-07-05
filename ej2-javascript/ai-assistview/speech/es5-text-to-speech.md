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

# Text to Speech in AI AssistView

The Syncfusion JavaScript AI AssistView control provides built-in `Text-to-Speech` (TTS) support using the browser's Web Speech API, specifically the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface. This allows AI-generated responses into spoken audio, enhancing accessibility and user interaction.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView control is properly set up in your JavaScript application.
    - [JavaScript Getting Started Guide](https://ej2.syncfusion.com/javascript/documentation/ai-assistview/es5-getting-started)

2. The AI AssistView control is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).
    - [Integration of Azure OpenAI With JavaScript AI AssistView control](../ai-integrations/es5-openai-integration)

## Configure text to speech

To enable the built-in Text-to-Speech functionality, add the `e-assist-audio` response toolbar item to the `items` collection of the [responseToolbarSettings](https://ej2.syncfusion.com/documentation/api/ai-assistview#responsetoolbarsettings) property. When clicked, it fetches the text from the generated AI response and uses the browser's SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/speech/tts/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/tts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## Customizing speech settings

You can use the [textToSpeechSettings](https://ej2.syncfusion.com/documentation/api/ai-assistview#texttospeechsettings) property to customize the speech synthesis behavior using the following available properties such as [language](https://ej2.syncfusion.com/documentation/api/ai-assistview/textToSpeechSettingsModel#language), [speechPitch](https://ej2.syncfusion.com/documentation/api/ai-assistview/textToSpeechSettingsModel#speechpitch), [speechRate](https://ej2.syncfusion.com/documentation/api/ai-assistview/textToSpeechSettingsModel#speechrate), [volume](https://ej2.syncfusion.com/documentation/api/ai-assistview/textToSpeechSettingsModel#volume) and [voice](https://ej2.syncfusion.com/documentation/api/ai-assistview/textToSpeechSettingsModel#voice).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/speech/tts-settings/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/tts-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts-settings" %}

## See Also

* [Speech-to-Text](./es5-speech-to-text.md)
