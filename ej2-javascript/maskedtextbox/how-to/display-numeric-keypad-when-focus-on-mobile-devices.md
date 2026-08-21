---
layout: post
title: Display numeric keypad in ##Platform_Name## Input Mask | Syncfusion
description: Show a numeric keypad on mobile devices in the Syncfusion ##Platform_Name## Input Mask by setting the type property to tel for number-only input.
platform: ej2-javascript
control: Display numeric keypad when focus on mobile devices 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to display numeric keypad in ##Platform_Name## Input Mask

By default, on focusing the MaskedTextBox, alphanumeric keypad will be displayed on mobile devices. Sometimes only numeric keypad for number values is needed, and this can be achieved by setting "type" property to `tel`.

Refer to the following example to enable numeric keypad in MaskedTextBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maskedtextbox/numeric-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/numeric-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/maskedtextbox/numeric-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maskedtextbox/numeric-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/maskedtextbox/numeric-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/numeric-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/maskedtextbox/numeric-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/maskedtextbox/numeric-cs1" %}
{% endif %}