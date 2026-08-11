---
layout: post
title: Time Breaks in ##Platform_Name## Chat UI | Syncfusion®
description: Show or hide date-wise time break separators in the Syncfusion® ##Platform_Name## Chat UI to group messages by day and improve readability.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Time Breaks in ##Platform_Name## Chat UI

## Show or hide time breaks

You can use the [showTimeBreak](../api/chat-ui#showtimebreak) property to display date-wise separations between all the messages which enhances the readability and message organizing. The default value is `false`, indicating time breaks are disabled unless it is enabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chat-ui/timebreak/showTimeBreak/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/showTimeBreak/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/showTimeBreak" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/timebreak/showTimeBreak/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/timebreak/showTimeBreak/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak/showTimeBreak" %}
{% endif %}

## Time break template

> Refer to the [Templates](./templates#time-break-template) section for more details about the time break template.
