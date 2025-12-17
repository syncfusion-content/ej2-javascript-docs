---
layout: post
title: Getting started with ##Platform_Name## Markdown Converter | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Markdown Converter of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Markdown Converter

This section explains how to create and configure a simple `Markdown Converter` and demonstrates its basic usage in a application. 

## Dependencies

The following dependency is required to use the Markdown Converter.

```javascript
 @syncfusion/ej2-markdown-converter
```

## Add Syncfusion JavaScript Markdown Converter package

Syncfusion JavaScript (Essential JS 2) `Markdown Converter` package is available as a standalone package on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install it using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}
npm install @syncfusion/ej2-markdown-converter
{% endhighlight %}
{% endtabs %}


## Overview of Markdown Converter

The Markdown Converter is a lightweight and efficient utility designed to transform Markdown formatted text into clean, semantic HTML. This conversion enables users to render structured content seamlessly across web pages and applications, ensuring better readability and consistent formatting

The core functionality of the Markdown Converter is powered by the `toHtml` method. This method accepts Markdown content as input and returns the corresponding HTML string. 

To demonstrate the functionality of a Markdown Converter, we have provided a sample implementation using [Syncfusion Markdown Editor](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started). This example showcases how you can seamlessly edit Markdown content and preview the converted HTML output. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-converter/markdown-converter-default/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-converter/markdown-converter-default/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-converter/markdown-converter-default" %}
{% endif %}

## See also

* [How to convert markdown to html with configurable options](convert-markdown-to-html)