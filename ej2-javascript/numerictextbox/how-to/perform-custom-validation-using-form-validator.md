---
layout: post
title: Perform custom validation using form validator in ##Platform_Name## Numerictextbox control | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion ##Platform_Name## Numerictextbox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Perform custom validation using form validator 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom validation using form validator in ##Platform_Name## Numerictextbox control

This section explains how to perform custom validation on the NumericTextBox using FormValidator. The NumericTextBox will be validated when the value changes or the user clicks the submit button. Validation can be performed by adding custom validation in the rules collection of the FormValidator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/numeric-textbox/custom-validation-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-validation-cs1" %}
{% endif %}