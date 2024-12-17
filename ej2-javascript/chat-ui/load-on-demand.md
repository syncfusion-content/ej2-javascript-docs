---
layout: post
title: Load on-demand in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Load on-demand with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Load on-demand in ##Platform_Name## Chat UI control

You can use the [loadOnDemand](../api/chat-ui#loadondemand) property to load messages dynamically when the scroll reaches the top of the message list improving performance and reducing load times, particularly in long conversations. This ensures a smooth user experience by only fetching messages as needed rather than loading the entire conversation at once.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/load-on-demand/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/load-on-demand/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/load-on-demand" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/load-on-demand/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/load-on-demand/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/load-on-demand" %}
{% endif %}
