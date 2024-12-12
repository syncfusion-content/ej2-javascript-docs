---
layout: post
title: Events in ##Platform_Name## AI AssistView control | Syncfusion
description: Checkout and learn about events with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: AI AssistView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## AI AssistView control

This section describes the AI AssistView events that will be triggered when appropriate actions are performed. The following events are available in the AI AssistView control.

## created

The AI AssistView control triggers the [created](../api/ai-assistview#created) event when the control rendering is completed.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/events/created/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/events/created/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/created/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## promptRequest

The [promptRequest](../api/ai-assistview#promptrequest) event is triggered when the prompt request is made in the AI AssistView control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/events/prompt-request/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/prompt-request/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/events/prompt-request/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/prompt-request/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## promptChanged

The [promptChanged](../api/ai-assistview#promptchanged) event is triggered when the prompt text is changed in the AI AssistView control.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ai-assistview/events/prompt-changed/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/prompt-changed/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/events/prompt-changed/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/events/prompt-changed/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}