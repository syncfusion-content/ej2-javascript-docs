---
layout: post
title: Customize progress using cssclass in ##Platform_Name## Progress button control | Syncfusion
description: Learn here all about Customize progress using cssclass in Syncfusion ##Platform_Name## Progress button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize progress using cssclass 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize progress using cssclass in ##Platform_Name## Progress button control

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
