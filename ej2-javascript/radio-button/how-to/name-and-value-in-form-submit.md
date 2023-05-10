---
layout: post
title: Name and value in form submit in ##Platform_Name## Radio button control | Syncfusion
description: Learn here all about Name and value in form submit in Syncfusion ##Platform_Name## Radio button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Name and value in form submit 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Name and value in form submit in ##Platform_Name## Radio button control

The [`name`](../../api/radio-button#name) attribute of the RadioButton is used to group RadioButton. When the RadioButton are grouped in form, the checked items [`value`](../../api/radio-button#value) attribute will be post to server on form submit that can be retrieved through the name. The disabled RadioButton value will not be sent to the server on form submit.

In the following code snippet, Credit and Debit card is in checked state.
Now, the value that is in checked state will be sent on form submit.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/form-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/form-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/form-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/form-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/radio-button/form-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/form-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/form-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/radio-button/form-cs1" %}
{% endif %}