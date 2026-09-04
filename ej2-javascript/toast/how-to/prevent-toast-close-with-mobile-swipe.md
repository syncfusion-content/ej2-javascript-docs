---
layout: post
title: How to prevent swipe to close Toast in ##Platform_Name## Toast | Syncfusion
description: Prevent ##Platform_Name## Toast from closing on mobile swipe by setting the beforeClose argument cancel to true for swipe type.
platform: ej2-javascript
control: Prevent Toast close with mobile swipe
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent swipe to close Toast in ##Platform_Name## Toast

The Toast close with mobile swipe action can be prevented by setting the [beforeClose](../../api/toast/#beforeClose) argument cancel value to true while the argument type is a swipe.

The following sample demonstrates preventing Toast close with mobile swipe using custom code blocks.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/toast-cs6" %}
{% endif %}