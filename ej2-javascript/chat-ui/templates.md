---
layout: post
title: Templates in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about templates with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Chat UI control

Elevate the user experience by fully customizing the Syncfusion Angular Chat UI control. With templating support for key areas like the conversation window, messages, and typing indicators, you can create a unique and personalized chat interface that aligns perfectly with your application's design.

## Empty chat template

The [emptyChatTemplate](../api/chat-ui#emptychattemplate) property allows you to define custom content for the chat interface when it is empty. Use this template to display welcome messages, branding, or helpful instructions, creating an engaging starting point for users.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/emptyChatTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/emptyChatTemplate" %}
{% endif %}

## Message template

Customize the appearance of every chat message with the [messageTemplate](../api/chat-ui#messagetemplate) property. This template gives you full control over the layout, styling, and design of messages. The template context provides the `message` object and its `index`, allowing you to apply conditional styling or logic based on message content or position.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/messageTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/messageTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/messageTemplate" %}
{% endif %}

## Time break template

Improve conversation organization with the [timeBreakTemplate](../api/chat-ui#timebreaktemplate) property. This template lets you customize the time-based separators that appear between messages, such as "Today," "Yesterday," or specific dates, enhancing readability. The context includes the `messageDate` for precise formatting..

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/timeBreakTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/timeBreakTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/timeBreakTemplate" %}
{% endif %}

## Typing indicator template

Enhance user experience by customizing the typing indicator with the [typingUsersTemplate](../api/chat-ui#typinguserstemplate) property. You can modify its appearance and positioning to provide clear, real-time feedback. The template's context includes a list of `users`, so you can display who is currently typing.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/typingUsersTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/typingUsersTemplate" %}
{% endif %}

## Suggestion template

Create visually engaging and functional quick replies using the [suggestionTemplate](../api/chat-ui#suggestiontemplate) property. This template allows you to customize the layout and styling of suggestion items. The context includes the `suggestion` data and its `index`, enabling you to create dynamic and interactive suggestion buttons.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/suggestionTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/suggestionTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/suggestionTemplate" %}
{% endif %}

## Footer template 

Take control of the chat input area by defining a custom [footerTemplate](../api/chat-ui#footertemplate). This allows you to replace the default footer, giving you the flexibility to add custom buttons, integrate additional functionality, and manage message sending actions with a personalized design

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/templates/footerTemplate" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/chat-ui/templates/footerTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/footerTemplate" %}
{% endif %}
