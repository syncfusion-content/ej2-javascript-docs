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

The typing indicator provides real-time visual feedback to show when other users are composing a message. This feature enhances the user experience by making conversations feel more interactive and responsive, indicating that a reply is in progress.

## Show or Hide Typing Indicator

The visibility of the typing indicator is controlled by the [typingUsers](../api/chat-ui#typingusers) property. This property accepts an array of `UserModel` objects, with each object representing a user who is currently typing. The indicator is automatically displayed when this collection is populated and hidden when it is empty.

The `UserModel` is a collection that requires a defined structure to display user information correctly. The following example illustrates how to dynamically update the `typingUsers` property to show and hide the indicator.

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

The appearance of the typing indicator can be customized to fit the application's design. To learn more about modifying its look and feel, refer to the [Templates](./templates#typing-indicator-template) section.