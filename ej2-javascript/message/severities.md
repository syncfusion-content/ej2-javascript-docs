---
layout: post
title: Severities in ##Platform_Name## Message control | Syncfusion
description: Learn here all about Severities in Syncfusion ##Platform_Name## Message control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Severities 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Severities in ##Platform_Name## Message control

The severity denotes the importance and context of the message to the user. The message contains different severity types. Use the [severity](../api/message/#severity) property to display the messages with different severity levels.

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
