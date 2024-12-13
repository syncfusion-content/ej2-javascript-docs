---
layout: post
title: Typing indicator in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Typing indicator with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Typing indicator in ##Platform_Name## Chat UI control

## Show or hide typing indicator

You can use the `typingUsers` property to display the current user’s who are typing to indicate the active participants typing response within the chat conversations. If the property is empty the typing indicators will be removed.  

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
