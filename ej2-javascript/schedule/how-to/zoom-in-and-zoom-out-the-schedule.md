---
layout: post
title: Zoom in and zoom out in ##Platform_Name## Scheduler control | Syncfusion
description: Learn here all about Zoom in and zoom out in Syncfusion ##Platform_Name## Scheduler control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scheduler
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Zoom in and zoom out in ##Platform_Name## Scheduler control

By default, the Scheduler component does not provide built-in zoom in or zoom out support. However, this functionality can be achieved by customizing the [`timeScale`](https://ej2.syncfusion.com/documentation/api/schedule#timescale) and [`headerRows`](https://ej2.syncfusion.com/documentation/api/schedule#headerrows) properties.  

Refer to the following code example for implementation.

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