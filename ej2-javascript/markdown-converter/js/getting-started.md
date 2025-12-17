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

This section explains how to create and configure a simple Markdown Converter.

## Dependencies

The following dependency is required to use the `Markdown Converter` in the application.

```javascript
 @syncfusion/ej2-markdown-converter
```

## Setup for local development

Refer to the following steps to set up your local environment.

**Step 1**: Create an app folder `my-app` for your project.

**Step 2:** Create a `my-app/resources` folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create `my-app/index.js` and `my-app/index.html` files for using the Essential JS 2 Markdown Converter.

## Adding Syncfusion resources

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script
* Using CDN link for script

### Using local script

**1. Download Essential Studio JavaScript (Essential JS 2):** Obtain the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**2. Locate Script File:** After installing the Essential JS 2 product build, identify the location of the Markdown Converter’s script file. The syntax for the file paths is as follows:

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Script: [C:/Program Files (x86)/Syncfusion/Essential Studio/32.1.19/Essential JS 2/ej2-markdown-converter/dist/global/ej2-markdown-converter.min.js]()
>

**3. Copy Files to Resources Folder:** Copy/paste the global scripts from the above installed location to `my-app/resources` location.

**4. Referencing in HTML File** Reference the Markdown Converter’s scripts into the **index.html** file.

Here’s an example of referencing the Markdown Converter’s script in an HTML file:

**a.Essential Dependency**

This setup includes the scrip that required to include the Syncfusion Markdown Converter. Use this setup for a application that requires a lightweight Markdown Converter functionality

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Markdown Converter</title>
            <!-- Essential JS 2 Markdown Converter's global script -->
            <script src="resources/ej2-markdown-converter.min.js"           type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

### Using CDN link for script

Using CDN link, you can directly refer the Markdown Converter’s script into the `index.html`.

Refer the Markdown Converter’s CDN link as below.

**Syntax:**
> Script:`http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**
> Script: [http://cdn.syncfusion.com/ej2/ej2-markdown-converter/dist/global/ej2-markdown-converter.min.js](http://cdn.syncfusion.com/ej2/ej2-markdown-converter/dist/global/ej2-markdown-converter.min.js)

**a.Essential Dependency**

This setup includes the scrip that required to include the Syncfusion Markdown Converter. Use this setup for a application that requires a lightweight Markdown Converter functionality

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Markdown Converter</title>
            <!-- Essential JS 2 Markdown Converter's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-markdown-converter/dist/global/ej2-markdown-converter.min.js" type="text/javascript"></script>

       </head>
       <body>
       </body>
  </html>
```

## Overview of Markdown Converter

The Markdown Converter is a lightweight and efficient utility designed to transform Markdown formatted text into clean, semantic HTML. This conversion enables users to render structured content seamlessly across web pages and applications, ensuring better readability and consistent formatting

The core functionality of the Markdown Converter is powered by the `toHtml` method. This method accepts Markdown content as input and returns the corresponding HTML string.

To demonstrate the functionality of a Markdown Converter, we have provided a sample implementation using [Syncfusion Markdown Editor](https://ej2.syncfusion.com/documentation/markdown-editor/getting-started). This example showcases how you can seamlessly edit Markdown content and preview the converted HTML output.

{% if page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/markdown-converter/markdown-converter-default/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-converter/markdown-converter-default/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-converter/markdown-converter-default" %}
{% endif %}

## See also

* [How to convert markdown to html with configurable options](convert-markdown-to-html)