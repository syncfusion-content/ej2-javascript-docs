---
layout: post
title: Methods in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about methods with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## Chat UI control

## Adding message

You can use the [addMessage](../api/chat-ui#addmessage) public method to add the messages in the Chat UI. You can add it either as a `string` or `MessageModel` collection. It programmatically adds a new message to the chat.

The below sample demonstrates adding a new message as string and as a `MessageModel` object.

Here is an example of how to use the [addMessage](../api/chat-ui#addmessage) method:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/methods/addString/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/addString/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addString" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/methods/addString/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/addString/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addString" %}
{% endif %}

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/methods/addMessageModel/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/addMessageModel/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageModel" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/methods/addMessageModel/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/addMessageModel/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageModel" %}
{% endif %}

## Edit messages

You can use the [updateMessage](../api/chat-ui#updatemessage) public method to update the messages in the ChatUI to modify an existing message within the chat, useful for editing or correcting sent messages.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/methods/editMessage/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/editMessage/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/methods/editMessage/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/editMessage/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}
{% endif %}

## Scroll to Bottom

You can use the [scrollToBottom](../api/chat-ui#scrolltobottom) public method to scroll the chat view to the latest message, ensuring users see the new content updated.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/methods/scrollToBottom" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/scrollToBottom" %}
{% endif %}
