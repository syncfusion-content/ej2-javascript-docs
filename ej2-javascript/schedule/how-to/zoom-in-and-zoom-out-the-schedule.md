---
layout: post
title: Zoom in and zoom out in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Zoom in and zoom out in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Zoom in and zoom out the scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Zoom in and zoom out in ##Platform_Name## Scheduler control

By default Scheduler component doesn’t have the Zoom in/out support. Using the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) properties of our scheduler, we can achieve this.

Refer to the following code example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/zoom-in-out-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/zoom-in-out-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/zoom-in-out-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/zoom-in-out-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/zoom-in-out-cs1" %}
{% endif %}