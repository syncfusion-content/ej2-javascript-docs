---
layout: post
title: Events in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about events with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Chat UI control

This section describes the events that the Chat UI control triggers when specific actions are performed. The following events are available:

## Created

The Chat UI control triggers the [created](../api/chat-ui#created) event after the control has been rendered. This event is useful for performing actions once the Chat UI is fully initialized and ready for interaction.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/created/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## Sending message

The [messageSend](../api/chat-ui#messagesend) event is triggered before a message is sent from the Chat UI control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/messageSend/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/messageSend/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/messageSend/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/messageSend/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## User typing

The [userTyping](../api/chat-ui#usertyping) event is triggered as a user types a message in the Chat UI input field. This is useful for implementing features like typing indicators ("User is typing...").

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/userTyping/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/userTyping/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/userTyping/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/userTyping/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/chat-ui#beforeattachmentupload) event is triggered before attached files begin uploading in the Chat UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/before-attachment/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/before-attachment/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/before-attachment/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/before-attachment/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/chat-ui#attachmentuploadsuccess) event is triggered when an attached file is successfully uploaded in the Chat UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/attachment-success/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-success/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/attachment-success/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-success/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/chat-ui#attachmentuploadfailure) event is triggered when an attached file upload fails in the Chat UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/attachment-failure/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-failure/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/attachment-failure/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-failure/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## attachmentRemoved

The [attachmentRemoved](../api/chat-ui#attachmentremoved) event is triggered when an attached file is removed from the Chat UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/attachment-removed/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-removed/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/attachment-removed/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-removed/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## attachmentClick

The [attachmentClick](../api/chat-ui#attachmentclick) event is triggered when an attached file is clicked in the Chat UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/events/attachment-click/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-click/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/events/attachment-click/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/events/attachment-click/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}