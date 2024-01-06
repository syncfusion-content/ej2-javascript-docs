---
layout: post
title: Template in  ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Template with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Template in ##Platform_Name## Stepper control

The Stepper control allows you to customize the default appearance and content of each step, creating a personalized experience for the user. You can use the [template](https://ej2.syncfusion.com/documentation/api/stepper#template) propety to set the template content for the steps.

The step model and current step index are passed as `step` and `currentStep` properties in the template context for customization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/template/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/template/index.html %}
{% endhighlight %}
{% highlight html tabtitle="styles.css" %}
{% include code-snippet/stepper/template/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/template" %}
