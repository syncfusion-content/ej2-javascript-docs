---
layout: post
title: Spell & Grammar Check in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Spell & Grammar Check in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Spell & Grammar Check
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate WProofreader into the ##Platform_Name## Rich Text Editor control

WProofreader is a powerful tool that enhances content quality by detecting and correcting spelling and grammar errors in real-time as users type. This functionality significantly improves the professionalism of your content and ensures error-free text.

**Key Features of WProofreader:**

* Real-time Spell Checking: Instantly detects spelling mistakes as users type, providing immediate corrections and suggestions.

* Multilingual Support: Supports multiple languages, allowing users to check and correct text in different language contexts.

* Customization Options: Users can customize dictionary settings, add specific terms, and adjust spell-checking rules to match their writing style and requirements.

* Integration Capabilities: Seamlessly integrates with various content management systems (CMS) and applications, enhancing editing workflows without requiring users to leave their editing environment.

## Set up the WProofreader

For integrating the `WProofreader` refer the following link : https://webspellchecker.com, you need to install the[@webspellchecker/wproofreader-sdk-js](https://www.npmjs.com/package/@webspellchecker/wproofreader-sdk-js) package using NPM or Yarn:

```bash
npm install @webspellchecker/wproofreader-sdk-js

Or

yarn add @webspellchecker/wproofreader-sdk-js

```

## Configure WProofreader for Rich Text Editor

After installing the package, you can integrate WProofreader with the Rich Text Editor by following these steps:

1. Import the WProofreader module into your JavaScript file.
2. Configure the `container` property of WProofreader as the editable element of the Rich Text Editor's inputElement.
3. Access the Rich Text Editor instance.
4. Set the `lang` property to specify the language of the text to be checked.
5. Configure the activation key in the `serviceId` property.


Below is an example code snippet to integrate WProofreader with the Syncfusion Rich Text Editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/spell-check-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/spell-check-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/spell-check-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/spell-check-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

Below is a GIF demonstrating how to integrate WProofreader with the Syncfusion Rich Text Editor.

![WebSpellChecker](images/spell-grammar-check.gif)