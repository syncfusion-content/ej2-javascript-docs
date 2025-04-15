---
layout: post
title: Globalization in ##Platform_Name## SpeechToText control | Syncfusion
description: Checkout and learn about globalization with ##Platform_Name## SpeechToText control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: SpeechToText
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## SpeechToText control

## Localization

The SpeechToText can be localized to any culture by defining the text in the corresponding culture. The default locale of the SpeechToText is `en-US` (English). The following table represents the default text of the SpeechToText in `en-US` culture.

|KEY|Text|
|----|----|
|abortedError|Speech recognition was aborted.|
|audioCaptureError|No microphone detected. Ensure your microphone is connected.|
|defaultError|An unknown error occurred.|
|networkError|Network error occurred. Check your internet connection.|
|noSpeechError|No speech detected. Please speak into the microphone.|
|notAllowedError|Microphone access denied. Allow microphone permissions.|
|serviceNotAllowedError|Speech recognition service is not allowed in this context.|
|unsupportedBrowserError|The browser does not support the SpeechRecognition API.|
|startAriaLabel|Press to start speaking and transcribe your words|
|stopAriaLabel|Press to stop speaking and end transcription|
|startTooltipText|Start listening|
|stopTooltipText|Stop listening|

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speech-to-text/globalization/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/localization/index" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speech-to-text/globalization/localization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/localization/index" %}
{% endif %}

## RTL

RTL provides an option to switch the text direction and layout of the SpeechToText control from right to left by setting the [enableRtl](../api/speech-to-text#enableRtl) property to true.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speech-to-text/globalization/rtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/rtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/rtl/index" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speech-to-text/globalization/rtl/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/globalization/rtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/rtl/index" %}
{% endif %}
