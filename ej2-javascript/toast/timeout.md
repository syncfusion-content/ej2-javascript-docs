---
layout: post
title: Timeout in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Timeout in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Timeout 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Timeout in ##Platform_Name## Toast control

The toast can be expired based on the [timeOut](../api/toast/#timeout) property. The toast can live till the time out reaches without user interaction, a time out value is considered as a millisecond.

* The `timeOut` delay can be visually represented using [Progress Bar](./config/#progress-bar).

* The [extendedTimeOut](../api/toast/#extendedtimeout) property determines how long the toast should be displayed after a user hovers over it.

> You can terminate the process by using the [showCloseButton](../api/toast/#showclosebutton) property for destroying the toast at any time.

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

You can prevent auto hiding in a toast as visible like static by setting zero (`0`) value in the timeOut Property.

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