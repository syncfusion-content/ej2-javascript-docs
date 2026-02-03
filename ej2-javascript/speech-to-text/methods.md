---
layout: post
title: Methods in ##Platform_Name## SpeechToText control | Syncfusion
description: Checkout and learn about methods with ##Platform_Name## SpeechToText control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: SpeechToText
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## SpeechToText control

## Start listening

The [startListening()](../api/speech-to-text#startListening) method initiates speech recognition and begins converting speech to text. This is used to programmatically start the recognition process without user interaction on the microphone button.

## Stop listening

The [stopListening()](../api/speech-to-text#stopListening) method terminates the speech recognition process. This can be used to programmatically stop the recognition when an action is completed.

The following example demonstrates how to use the `startListening` and `stopListening` methods in the SpeechToText component.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speech-to-text/methods/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/methods/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/methods/index" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/speech-to-text/methods/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speech-to-text/methods/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/speech-to-text/methods/index" %}
{% endif %}
