---
layout: post
title: Time breaks in ##Platform_Name## Chat UI control | Syncfusion
description: Checkout and learn about Time breaks with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Time breaks in ##Platform_Name## Chat UI control

## Show or hide time breaks

The Syncfusion Angular Chat UI control allows you to display date-wise separators between messages using the [showTimeBreak](../api/chat-ui#showtimebreak) property. This feature enhances readability and improves message organization. By default, this property is `false`.

When enabled, the control automatically inserts a separator indicating a new date whenever the conversation crosses midnight.

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

> For advanced customization, you can define a custom appearance for the separator using a time break template. Refer to the [Templates](./templates#time-break-template) documentation for implementation details.
