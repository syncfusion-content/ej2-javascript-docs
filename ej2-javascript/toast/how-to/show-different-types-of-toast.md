---
layout: post
title: How to show different types of toast in ##Platform_Name## Toast | Syncfusion
description: Show ##Platform_Name## Toast as success, info, warning, or danger types using the cssClass predefined classes.
platform: ej2-javascript
control: Show different types of toast
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to show different types of toast in ##Platform_Name## Toast

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 toast has the following predefined styles that can be defined using the [cssClass](../../api/toast/#cssclass) property for achieving different types of toast:

| Class | Description |
| -------- | -------- |
| e-toast-success | Represents a positive toast |
| e-toast-info | Represents an informative toast |
| e-toast-warning | Represents a toast with caution |
| e-toast-danger | Represents a negative toast |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/types-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/types-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/types-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/types-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/types-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toast/types-cs1" %}
{% endif %}