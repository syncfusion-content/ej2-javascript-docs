---
layout: post
title: Client side validation in ##Platform_Name## Datepicker control | Syncfusion
description: Learn here all about Client side validation in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Client side validation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Client side validation in ##Platform_Name## Datepicker control

To achieve the client side validation in a DatePicker component by using [Essential JavaScript 2 FormValidator](../../form-validator/). It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

In this below example, the required field validation is implemented by mapping the name attribute value to the rules property. It will validate the DatePicker component and display the validation message when the textbox value is empty during form post back or focus out.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/datepicker/form-validator-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/form-validator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/form-validator-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/datepicker/form-validator-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/datepicker/form-validator-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/datepicker/form-validator-cs1" %}
{% endif %}