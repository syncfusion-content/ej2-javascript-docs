---
layout: post
title: How to submit name and value in form in ##Platform_Name## Toggle Switch Button | Syncfusion
description: Learn how the ##Platform_Name## Toggle Switch Button name and value attributes post the checked items to the server on form submit.
platform: ej2-javascript
control: Submit name and value in form 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to submit name and value in form in ##Platform_Name## Toggle Switch Button

The [`name`](../../api/switch#name) attribute of the Switch is used to group Switches. When the Switches are grouped in form, the checked items [`value`](../../api/switch#value) attribute will post to the server on form submit. The disabled and unchecked Switch values will not be sent to the server on form submit.

In the following code snippet, USB and Wi-Fi in the [`checked`](../../api/switch#checked) state, and Bluetooth is in disabled state. Values that are in checked state only be sent on form submit.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/switch/form-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/form-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/form-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/form-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/switch/form-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/switch/form-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/switch/form-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/switch/form-cs1" %}
{% endif %}
