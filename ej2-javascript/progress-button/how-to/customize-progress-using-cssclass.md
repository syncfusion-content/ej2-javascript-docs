---
layout: post
title: How to customize progress using cssClass in ##Platform_Name## Progress Button | Syncfusion
description: Learn how to customize the ##Platform_Name## Progress Button progress UI with vertical, top, and reverse styles using the cssClass property.
platform: ej2-javascript
control: Customize progress using cssclass 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress using cssClass in ##Platform_Name## Progress Button

You can customize the background filler UI using the [`cssClass`](../../api/progress-button#cssClass) property.

* Adding `e-vertical` to `cssClass` shows vertical progress.
* Adding `e-progress-top` to `cssClass` shows progress at the top.

You can also show reverse progress by adding custom class to the [`cssClass`](../../api/progress-button#cssClass) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/progress-button/custom-progress-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/custom-progress-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/custom-progress-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/progress-button/custom-progress-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/progress-button/custom-progress-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/progress-button/custom-progress-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/progress-button/custom-progress-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/progress-button/custom-progress-cs1" %}
{% endif %}
