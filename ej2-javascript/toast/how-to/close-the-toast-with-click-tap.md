---
layout: post
title: Close the toast with click/tap in ##Platform_Name## Toast | Syncfusion
description: Close ##Platform_Name## Toast on click or tap by using the clicked callback args with a static toast config.
platform: ej2-javascript
control: Close the toast with click tap
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to close the toast with click/tap in ##Platform_Name## Toast

By default, the toasts are expired based on the timeOut value. The Toast hiding process can be customized with click/tap action by setting the event args in the [clicked](../../api/toast/toastclickeventargs#clicktoclose) callback function with [static Toast](../timeout#static-toast).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs4" %}
{% endif %}