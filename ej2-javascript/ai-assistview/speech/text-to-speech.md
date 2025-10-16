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

# Text-to-Speech in TypeScript AI AssistView

The Syncfusion TypeScript AI AssistView control integrates `Text-to-Speech` (TTS) functionality using the browser's Web Speech API, specifically the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface. This allows AI-generated responses to be converted into spoken audio, enhancing accessibility and user interaction.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView control is properly set up in your TypeScript application.
    - [TypeScript Getting Started Guide](../ts/getting-started)

2. The AI AssistView control is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With TypeScript AI AssistView control](../ai-integrations/openai-integration)

## Configure Text-to-Speech

To enable Text-to-Speech functionality, modify the `index.ts` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/documentation/api/ai-assistview/#responsetoolbarsettings) property. When clicked, the [itemClicked](https://ej2.syncfusion.com/documentation/api/ai-assistview/responsetoolbarsettingsmodel/#itemclicked) event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/speech/tts/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/speech/tts/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## See Also

* [Speech-to-Text](./speech-to-text.md)
