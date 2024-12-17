---
layout: post
title: Time stamp in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Time stamp with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Time stamp in ##Platform_Name## Chat UI control

## Show or hide timestamp

You can use the [showTimeStamp](../api/chat-ui#showtimestamp) property to enable or disable timestamps for all messages which displays the exact date and time when they were sent. By default, the value is `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/timebreak/showTimeStamp/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/showTimeStamp/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/showTimeStamp" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/timebreak/showTimeStamp/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/showTimeStamp/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/showTimeStamp" %}
{% endif %}

## Setting timestamp format

You can use the [timeStampFormat](../api/chat-ui#timestampformat) property to display time formats for all the messages which are displayed with the messages being sent. By default, the value is ` dd/MM/yyyy hh:mm a`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/timebreak/timeStampFormat/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/timeStampFormat/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/timeStampFormat" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/timebreak/timeStampFormat/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/timeStampFormat/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/timeStampFormat" %}
{% endif %}
