---
layout: post
title: Events in ##Platform_Name## SpeechToText control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## SpeechToText control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: SpeechToText 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## SpeechToText control

This section describes the SpeechToText events that will be triggered when appropriate actions are performed. The following events are available in the SpeechToText control.

|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText control's rendering is fully completed|
|onStart|StartListeningEventArgs|Triggers when the speech recognition begins.|
|onStop|StopListeningEventArgs|Triggers when the speech recognition stops.|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or while listening. For list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section.|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when an transcription change occurs during the speech recognition.|

The following example demonstrates how to configure the SpeechToText events.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speech-to-text/events/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/events/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/speech-to-text/events/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/events" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speech-to-text/events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/events/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/speech-to-text/events/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/events" %}
{% endif %}
