---
layout: post
title: How to change Switch state using toggle method in ##Platform_Name## Toggle Switch Button | Syncfusion
description: Learn how to programmatically change the ##Platform_Name## Toggle Switch Button state using the toggle method.
platform: ej2-javascript
control: Change switch state using toggle method 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to change Switch state using toggle method in ##Platform_Name## Toggle Switch Button

This section explains about how to toggle between the switch states using [`toggle`](../../api/switch/#toggle) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/switch/text-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/text-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/text-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/text-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/switch/text-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/text-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/text-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/switch/text-cs1" %}
{% endif %}

> Switch triggers [`change`](../../api/switch/#change) event on every state stage to perform custom operations.