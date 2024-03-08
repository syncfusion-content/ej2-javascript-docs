---
layout: post
title: Reverse in  ##Platform_Name## Timeline control | Syncfusion
description:  Checkout and learn about Reverse with ##Platform_Name## Timeline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeline
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Reverse in ##Platform_Name## Timeline control

This section explains how to display Timeline items in reverse order, starting with the most recent events. This is achieved using the [reverse](../api/timeline#reverse) property of the Timeline component.

By default, Timeline items are often ordered with the oldest events at the top (or left in horizontal orientation). Reversing the timeline allows users to view the most recent activity without needing to scroll through long lists.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timeline/reverse/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/reverse/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/reverse/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/reverse" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timeline/reverse/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/reverse/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/timeline/reverse/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/reverse" %}
{% endif %}