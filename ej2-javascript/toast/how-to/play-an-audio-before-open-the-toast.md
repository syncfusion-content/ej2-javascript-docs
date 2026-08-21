---
layout: post
title: How to play audio on toast open in ##Platform_Name## Toast | Syncfusion
description: Play background audio when ##Platform_Name## Toast opens by including audio play code in the beforeOpen event.
platform: ej2-javascript
control: Play an audio before open the toast
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to play audio on toast open in ##Platform_Name## Toast

The following sample demonstrates how to play an audio in background while opening the toast by including audio play codes into the beforeOpen event function.

> To stop the audio after displaying the toast, use the [open](../../api/toast/#open) event in toast. For further customization, check the Toast Events [APIs](../../api/toast/#events).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/audio-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/audio-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/audio-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/audio-cs1" %}
{% endif %}
