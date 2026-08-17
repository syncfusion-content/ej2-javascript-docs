---
layout: post
title: Handling Validation in ##Platform_Name## Smart Paste Button | Syncfusion
description: Learn how to validate required form fields after pasting data in the ##Platform_Name## Smart Paste Button with Syncfusion FormValidator.
platform: ej2-javascript
control: Handling validation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Handling Validation in ##Platform_Name## Smart Paste Button

The `Smart Paste Button` can be configured to validate that all required input form fields have been pasted with content. If any form fields are empty, validation will be triggered to ensure that all necessary information is provided before proceeding.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smart-paste-button/validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/validation-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/validation-cs1/azure_openai.js %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/smart-paste-button/validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/validation-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/validation-cs1/azure_openai.js %}
{% endhighlight %}
{% endtabs %}

{% endif %}