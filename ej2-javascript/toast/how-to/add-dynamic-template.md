---
layout: post
title: How to add dynamic template in ##Platform_Name## Toast | Syncfusion
description: Change ##Platform_Name## Toast templates dynamically for each new toast by updating properties in the show method call.
platform: ej2-javascript
control: Add dynamic template
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic template in ##Platform_Name## Toast

Toast supports to change templates dynamically with displaying in multiple toasts. You can change the toast properties while calling in the [show](../../api/toast/index-default#show) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs3" %}
{% endif %}