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

The Smart Paste Button can be configured to validate whether all required form fields have been populated during the paste operation. If any required fields remain empty after the content is pasted, validation is triggered to help ensure that all necessary information is provided before proceeding.

## Key Benefits of using Smart Paste button

* Automatically checks required form fields after the paste operation is completed.
* Helps prevent incomplete form submissions by identifying missing information.
* Provides a more reliable and consistent data-entry experience.
* Ensures that users are prompted to supply any required information that was not detected in the pasted content.
* Improves data accuracy and completeness by validating form inputs before submission.
* Reduces manual verification efforts and helps maintain form data integrity.


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