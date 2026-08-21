---
layout: post
title: How to create a block Button in ##Platform_Name## Button | Syncfusion
description: Learn how to create a full-width block ##Platform_Name## Button that spans its parent element by applying the e-block cssClass.
platform: ej2-javascript
control: Create a block button 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to create a block Button in ##Platform_Name## Button

You can customize a Button into a Block Button that will span the entire width of its parent element. To create a Block Button, set the [`cssClass`](../../api/button#cssclass) property to `e-block`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button/block-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/block-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="style.css" %}
{% include code-snippet/button/block-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/block-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button/block-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button/block-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="style.css" %}
{% include code-snippet/button/block-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button/block-cs1" %}
{% endif %}