---
layout: post
title: Prevent State Change in ##Platform_Name## Switch control | Syncfusion
description: Learn here all about Prevent State Change in Syncfusion ##Platform_Name## Switch control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Prevent State Change
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Prevent State Change in ##Platform_Name## Switch control

The [beforeChange](../../api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/switch/before-change-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/before-change-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/before-change-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/switch/before-change-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/before-change-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/before-change-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}
{% endif %}