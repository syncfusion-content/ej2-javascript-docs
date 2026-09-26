---
layout: post
title: Annotation in ##Platform_Name## Smart Paste Button | Syncfusion
description: Customize Smart Paste behavior in ##Platform_Name## by defining formatting, validation, and content-type rules for each field.
platform: ej2-javascript
control: Annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotations in ##Platform_Name## Smart Paste Button

The `data-smartpaste-description` attribute allows you to customize the behavior of the Smart Paste Button by providing contextual instructions for individual form fields. These instructions help the Smart Paste Button understand how pasted content should be interpreted, organized, and populated within the form. By defining field-specific expectations, you can improve the accuracy and consistency of AI-assisted form filling.

## Purpose of data-smartpaste-description

* This custom data attribute can be added to form elements to provide contextual information about the expected content.

* It helps the Smart Paste Button identify how pasted information should be processed and mapped to the corresponding form fields.

* You can use it to describe formatting requirements, content structure, naming conventions, and other field-specific instructions.

* It improves the accuracy of Smart Paste operations by providing additional context for interpreting pasted content.

* It helps maintain consistency and data quality across forms by ensuring that information is organized according to the specified guidelines.

## Use Annotations to Customize Paste Behavior

Add the **data-smartpaste-description** attribute to the form fields where Smart Paste should apply custom interpretation or formatting rules. Specify the instruction, expected format, or content requirement as the attribute value. During the paste operation, the Smart Paste Button uses this information to better understand the expected input and populate fields more accurately.

```html

<input type="text" id="reporter-name" name="reporter-name" class="form-input" data-smartpaste-description="Name must follow the format: Initial Firstname Lastname" />

```

## Example Cases Demonstrating the Use of Annotations to Enhance User Experience

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smart-paste-button/annotation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/annotation-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/annotation-cs1/azure_openai.js %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/smart-paste-button/annotation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/annotation-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/annotation-cs1/azure_openai.js %}
{% endhighlight %}
{% endtabs %}

{% endif %}

These examples illustrate how using **data-smartpaste-description** attributes can provide fine-grained control over pasting behaviors, ensuring that the Smart Paste Button meets specific requirements and enhances the user experience.
