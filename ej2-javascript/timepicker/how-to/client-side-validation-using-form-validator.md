---
layout: post
title: Client side validation using form validator in ##Platform_Name## Timepicker control | Syncfusion
description: Learn here all about Client side validation using form validator in Syncfusion ##Platform_Name## Timepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Client side validation using form validator 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Client side validation using form validator in ##Platform_Name## Timepicker control

To achieve client side validation in a TimePicker component, use [Essential JavaScript 2 FormValidator](../../form-validator/). It provides an option to customize feedback error messages to the corresponding fields for taking action and resolving the issue.

In the following example, the required field validation is implemented by mapping the name attribute value to the rules property. It validates the TimePicker component and displays the validation message when the textbox value is empty during form post back or focus out.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/timepicker/validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timepicker/validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/timepicker/validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timepicker/validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timepicker/validation-cs1" %}
{% endif %}
