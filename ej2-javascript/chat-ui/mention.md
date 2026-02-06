---
layout: post
title: Mention Integration in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Mention Integration with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mention Integration in ##Platform_Name## Chat UI control

The Syncfusion ChatUI allows users to mention others in messages using the `@` character, with an dropdown for selecting users. The following sections explain how to configure mentions

## Configure mention users
You can use the [mentionUsers](../api/chat-ui/#mentionUsers/) property to define an array of users for the mention suggestion popup.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/mention/mention-user/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-user/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-user" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/mention/mention-user/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-user/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-user" %}
{% endif %}

## Customize the mention trigger character

You can use the [mentionTriggerChar](../api/chat-ui/#mentionTriggerChar/) property to customize the character which triggers the mention popup. The default value is `@`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/mention/mention-trigger/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-trigger/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-trigger" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/mention/mention-trigger/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-trigger/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-trigger" %}
{% endif %}

## Predefine mentions with messages

You can use the [text](../api/chat-ui/messageModel/#text) property in the [MessageModel](../api/chat-ui/messageModel/) to include predefined mentions in chat messages. The mentions field stores the selected users for each message.

> The `mentionUsers` property in a message contains a list of users, mapped by their order where the placeholder {0} is replaced by the first user, {1} by the second, and so on, automatically generating mentions in the user interface. If a placeholder's index is negative or exceeds the bounds of the mentionUsers array (e.g., using {5} with only two users), the mapping for that placeholder fails, and the placeholder text itself (e.g., {5}) is displayed in the final message.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/mention/mention-message/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-message/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-message" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/mention/mention-message/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-message/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/mention/mention-message" %}
{% endif %}

## Configure mentionSelect

You can use the [mentionSelect](../api/chat-ui/#mentionSelect/) event which triggers when a user selects an item from the mention dropdown, providing access to the selected user’s details for custom handling.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/mention/mention-select/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-select/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/mention/mention-select/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/mention/mention-select/index.html %}
{% endhighlight %}
{% endtabs %}
{% endif %}