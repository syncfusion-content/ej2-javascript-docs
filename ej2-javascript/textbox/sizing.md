---
layout: post
title: Sizing in ##Platform_Name## TextBox | Syncfusion
description: Render the ##Platform_Name## TextBox in two different sizes using the built-in small and normal CSS size variants for compact or standard layouts.
platform: ej2-javascript
control: Sizing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sizing in ##Platform_Name## TextBox

You can render the TextBox in two different sizes.

Property   | Description
------------ | -------------
  Normal     | By default, the TextBox is rendered with normal size.
  Small      | You need to add `e-small` class to the [cssClass](../api/textbox/#cssClass) property to render the TextBox in smaller size.
  Bigger     | You need to add e-bigger class to the [cssClass](../api/textbox/#cssClass) property to render the TextBox in bigger size

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/icon-samples-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/icon-samples-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/icon-samples-cs2/index.css %}
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/icon-samples-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs2" %}
{% endif %}
