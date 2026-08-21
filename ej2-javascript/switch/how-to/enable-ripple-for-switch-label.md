---
layout: post
title: How to enable ripple for Switch label in ##Platform_Name## Toggle Switch Button | Syncfusion
description: Learn how to enable the ripple effect on ##Platform_Name## Toggle Switch Button labels using the rippleMouseHandler method.
platform: ej2-javascript
control: Enable ripple for switch label 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to enable ripple for Switch label in ##Platform_Name## Toggle Switch Button

By default, label with ripple effect is not available in Switch. You can achieve this using `rippleMouseHandler`
method.

The following example illustrates how to enable ripple effect for labels in Switch component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/switch/ripple-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/ripple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/ripple-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/ripple-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/switch/ripple-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/ripple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/ripple-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/switch/ripple-cs1" %}
{% endif %}