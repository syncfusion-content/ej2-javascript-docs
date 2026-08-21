---
layout: post
title: How to trace events of Progress Button in ##Platform_Name## Progress Button | Syncfusion
description: Learn the events available on the ##Platform_Name## Progress Button including fail, begin, progress, and end, with extension points.
platform: ej2-javascript
control: Trace events of progress button 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to trace events of Progress Button in ##Platform_Name## Progress Button

The ProgressButton component triggers events based on its actions. The events can be used as extension points to perform custom operations.

The events available in ProgressButton are [`fail`](../../api/progress-button#fail), [`begin`](../../api/progress-button#begin), [`progress`](../../api/progress-button#progress), and [`end`](../../api/progress-button#end).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/events-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/events-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/progress-button/events-cs1" %}
