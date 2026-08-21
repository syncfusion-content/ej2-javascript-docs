---
layout: post
title: Severities in ##Platform_Name## Message | Syncfusion
description: Display ##Platform_Name## Message at different severity levels — Normal, Success, Info, Warning, and Error — using the severity property.
platform: ej2-javascript
control: Severities
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Severities in ##Platform_Name## Message

The severity denotes the importance and context of the message to the user. The message contains different severity types. Use the [severity](../api/message/index-default#severity) property to display the messages with different severity levels.

The available severity types are **Normal**, **Success**, **Info**, **Warning** and **Error**. The default severity type for messages is **Normal**.

The following example demonstrates the severity of the messages.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/message/severity-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/severity-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/severity-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/message/severity-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/severity-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/message/severity-cs2" %}
{% endif %}
