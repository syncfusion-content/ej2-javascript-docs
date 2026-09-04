---
layout: post
title: TimeOut in ##Platform_Name## Toast | Syncfusion
description: Set ##Platform_Name## Toast display duration with timeOut and extendedTimeOut, or set zero to keep it visible until closed.
platform: ej2-javascript
control: Timeout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# TimeOut in ##Platform_Name## Toast

The Toast expires based on the [timeOut](../api/toast/#timeout) property. The toast lives until the time out is reached without any interaction; the time out value is considered in milliseconds.

* The `timeOut` delay can be visually represented using the [Progress Bar](./config/#progress-bar).

* The [extendedTimeOut](../api/toast/#extendedtimeout) property determines how long the toast should be displayed after it is hovered over.

> The process can be terminated at any time by using the [showCloseButton](../api/toast/#showclosebutton) property to destroy the toast.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/timeout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/timeout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/timeout-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/timeout-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/timeout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/timeout-cs1" %}
{% endif %}

## Static toast

Auto hiding in a toast can be prevented, keeping it visible as static, by setting the timeOut property to zero (`0`).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs9" %}
{% endif %}

## See Also

* [Hide the toast on click](./how-to/close-the-toast-with-click-tap/)