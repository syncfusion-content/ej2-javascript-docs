---
layout: post
title: Typing Indicator in ##Platform_Name## Chat UI | Syncfusion®
description: Show a typing indicator in the Syncfusion® ##Platform_Name## Chat UI for one or more active participants using the typingUsers collection.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Typing Indicator in ##Platform_Name## Chat UI

## Show or hide typing indicator

You can use the [typingUsers](../api/chat-ui#typingusers) property to display the current user’s who are typing to indicate the active participants typing response within the chat conversations. If the property is empty the typing indicators will be removed.  

The typing users are the `UserModel[]` collection, where you can update the user’s dynamically to display the current typing user.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/typingIndicator/typingUsers/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/typingIndicator/typingUsers/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/typingIndicator/typingUsers" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/typingIndicator/typingUsers/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/typingIndicator/typingUsers/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/typingIndicator/typingUsers" %}
{% endif %}

## Typing indicator template

> Refer to the [Templates](./templates#typing-indicator-template) section for more details about the typing indicator template.
