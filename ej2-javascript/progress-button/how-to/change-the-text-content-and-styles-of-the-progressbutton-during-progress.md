---
layout: post
title: How to change the text content and styles of the Progress Button during progress in ##Platform_Name## Progress Button | Syncfusion
description: Learn how to change the text content and styles of the ##Platform_Name## Progress Button during progress in the begin and end events.
platform: ej2-javascript
control: Change the text content and styles of the progressbutton during progress 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change the text content and styles of the Progress Button during progress in ##Platform_Name## Progress Button

You can change the text content and styles of the ProgressButton during progress by changing the text content and the [`cssClass`](../../api/progress-button#cssClass) property at the [`begin`](../../api/progress-button#begin) and [`end`](../../api/progress-button#end) events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/getting-started-cs2" %}
{% endif %}