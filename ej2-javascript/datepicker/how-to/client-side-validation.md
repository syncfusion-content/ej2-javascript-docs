---
layout: post
title: How to validate client-side in ##Platform_Name## DatePicker | Syncfusion
description: Validate ##Platform_Name## DatePicker input on the client using the FormValidator rules property for required-field and custom error messages.
platform: ej2-javascript
control: Client side validation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to validate client-side in ##Platform_Name## DatePicker

Client-side validation in the DatePicker component is achieved by using the [Essential<sup style="font-size:70%">&reg;</sup> JavaScript 2 FormValidator](../../form-validator). It provides an option to customize the feedback error messages for the corresponding fields to take action to resolve the issue.

In the example below, the required field validation is implemented by mapping the name attribute value to the rules property. It validates the DatePicker component and displays the validation message when the textbox value is empty during form post back or focus out.

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