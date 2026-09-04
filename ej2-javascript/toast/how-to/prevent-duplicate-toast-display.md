---
layout: post
title: How to prevent duplicate toast display in ##Platform_Name## Toast | Syncfusion
description: Prevent identical ##Platform_Name## Toast from stacking on screen by canceling duplicate titles in the beforeOpen event.
platform: ej2-javascript
control: Prevent duplicate toast display
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent duplicate toast display in ##Platform_Name## Toast

Duplicate toasts displaying on a screen can be prevented by terminating the Toast display process through the cancel event property in the [beforeOpen](../../api/toast/#beforeopen) event.

The following sample demonstrates preventing duplicate title toasts from displaying with custom code blocks.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs5" %}
{% endif %}