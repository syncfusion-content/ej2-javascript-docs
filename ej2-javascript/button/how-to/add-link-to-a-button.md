---
layout: post
title: How to add link to a Button in ##Platform_Name## Button | Syncfusion
description: Learn how to make the ##Platform_Name## Button render as a link using the e-link class and handle navigation in its click event.
platform: ej2-javascript
control: Add link to a button 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to a Button in ##Platform_Name## Button

The appearance of the Button can be changed like a link by `e-link` class using [`cssClass`](../../api/button#cssclass) property and link navigation can be handled in Button click.

In the following example, link is added in Button click by using `window.open()` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button/link-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/link-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/link-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/link-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button/link-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/link-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button/link-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button/link-cs1" %}
{% endif %}