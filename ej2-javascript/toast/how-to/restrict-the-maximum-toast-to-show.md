---
layout: post
title: Restrict the maximum toast to show in ##Platform_Name## Toast control | Syncfusion
description: Learn here all about Restrict the maximum toast to show in Syncfusion ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Restrict the maximum toast to show 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the maximum toast to show in ##Platform_Name## Toast control

You can restrict the maximum toast count by using the event callback function and terminate the toast displaying process by setting the cancel event property in the [beforeOpen](../../api/toast/#beforeopen) event.

The following sample demonstrates restricting toast displaying up to 3. You can restrict by your own count with custom code blocks.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs7" %}
{% endif %}