---
layout: post
title: Footer in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Footer with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Footer in ##Platform_Name## Chat UI control

The footer of the Syncfusion Chat UI control is the area at the bottom that typically contains the message input field and the send button. It is enabled by default to provide a standard chat interface where users can type and send messages.

## Show or hide footer

You can control the visibility of the footer using the [showFooter](../api/chat-ui#showfooter) property. By default, this property is set to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/footer/showFooter/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/footer/showFooter/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/footer/showFooter" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/footer/showFooter/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/footer/showFooter/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/footer/showFooter" %}
{% endif %}

## Footer template

For advanced customization beyond simply showing or hiding the footer, refer to the [Footer Template](./templates#footer-template) documentation to learn how to define your own custom footer content and layout.
