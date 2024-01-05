---
layout: post
title: Validation in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Validation with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Steps validation in ##Platform_Name## Stepper control

The Stepper control allows you to set the validation state for each step, displaying either a success or error icon. You can define the success state of a step by setting the `isValid` property to `true`. If set to `false`, the step will display an error state. By default, the `isValid` property is `null`.

> Based on the `stepType`, the validation state icon will be displayed either as an indicator or as part of the step label/text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stepper/steps/validation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/steps/validation/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/steps/validation/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/steps/validation" %}