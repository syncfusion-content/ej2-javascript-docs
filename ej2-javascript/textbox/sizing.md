---
layout: post
title: Sizing in ##Platform_Name## Textbox control | Syncfusion
description: Learn here all about Sizing in Syncfusion ##Platform_Name## Textbox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sizing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in ##Platform_Name## Textbox control

You can render the TextBox in two different sizes.

Property   | Description
------------ | -------------
  Normal     | By default, the TextBox is rendered with normal size.
  Small      | You need to add `e-small` class to the input element, or else add to the input container.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/icon-samples-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/icon-samples-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/icon-samples-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/icon-samples-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs2" %}
{% endif %}
