---
layout: post
title: How to set the rounded corner in ##Platform_Name## TextBox | Syncfusion
description: Render the ##Platform_Name## TextBox with rounded corners by adding the e-corner class to the cssClass property of the TextBox component.
platform: ej2-javascript
control: Set the rounded corner 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to set the rounded corner in ##Platform_Name## TextBox

Render the TextBox with `rounded corner` by adding the `e-corner` to the [cssClass](../api/textbox/#cssClass) property of the TextBoxComponent.

>This rounded corner visible only in box model input component

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textbox/round-corner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/round-corner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/round-corner-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/round-corner-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/round-corner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/round-corner-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/round-corner-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/round-corner-cs1" %}
{% endif %}