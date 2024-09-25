---
layout: post
title: Annotations in ##Platform_Name## Smart Paste Button control | Syncfusion
description: Learn here all about Annotations in Syncfusion ##Platform_Name## Smart Paste Button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Annotations (data-smartpaste-description)

The `data-smartpaste-description` attribute provides a way to customize the behavior of the Smart Paste Button. By using this attribute, pasted content is handled based on specific requirements. This customization can include setting content validation rules, formatting instructions, and defining acceptable content types.

## Purpose of data-smartpaste-description:

* This is a custom data attribute that can be added to HTML elements. It provides metadata about the expected content for those elements when used in conjunction with the Smart Paste Button.

* The main purpose is to control and enhance the paste operation by providing contextual information about what kind of data is expected. This can include formats like plain text, email, phone numbers, or even more complex validation patterns.

* It helps maintain data consistency, integrity, and formatting in forms, ensuring that users paste content that adheres to predefined standards.

## How to Use Annotations for Customizing the Paste Behavior

Add the **data-smartpaste-description** attribute to the form fields where the smart paste feature should be applied. Specify the expected content type as the value of the attribute.

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
