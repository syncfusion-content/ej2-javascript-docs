---
layout: post
title: How to customize menu using events in ##Platform_Name## Menu | Syncfusion
description: Learn how to customize the Syncfusion ##Platform_Name## Menu control with events for advanced interaction handling.
platform: ej2-javascript
control: Customize menu using events
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize menu using events in ##Platform_Name## Menu

The Menu provides a set of [`events`](../../api/menu#events) to enable users to customize it.

The available events are [`beforeOpen`](../../api/menu/#beforeopen), [`beforeClose`](../..api/menu/#beforeclose), [`onClose`](../../api/menu/#onclose), [`onOpen`](../../api/menu/#onopen), and [`select`](../..api//menu/#select).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/handle-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/handle-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
         
{% previewsample "page.domainurl/code-snippet/menu/handle-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/handle-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/handle-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/handle-event-cs1" %}

{% endif %}
