---
layout: post
title: Getting Started with ##Platform_Name## Smart Paste Button | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Smart Paste Button control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Smart Paste Button

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

The `Smart Paste Button` is a user interface control designed to simplify and improve the experience of pasting text into form fields. It comes with smart features such as automatic text formatting, validation, and integration with various form controls. It is especially useful in applications where users frequently paste text from other sources and where data consistency is important.

## Prerequisites
 
To get started, ensure the following software is installed on the machine.
 
* [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2)
 
* [Visual Studio Code](https://code.visualstudio.com/)
 
* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)
 
> Check out the [download and installation](https://ej2.syncfusion.com/javascript/documentation/installation-and-upgrade/download) section of **Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript**. If you are using Syncfusion<sup style="font-size:70%">&reg;</sup> CDN resources to build your web application, you can skip the Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript prerequisite.

## Dependencies

The list of dependencies required to use the Smart Paste Button control in your application is given as follows:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Control Initialization

The JavaScript (ES5) Smart Paste Button control can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\tailwind3.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\tailwind3.css`

**Example:**

> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-buttons\dist\global\ej2-buttons.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-base\styles\tailwind3.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-buttons\styles\tailwind3.css`

The script and style files below contain all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\tailwind3.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy the global scripts and styles from the installed location above to the corresponding package location in `~/quickstart/resources/package`.

**Step 4:** Create an HTML page, `index.html`, in `~/quickstart/index.html` and add the JavaScript (ES5) script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Smart Paste Button's dependency style -->
            <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Smart Paste Button's control style -->
            <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Smart Paste Button's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

            <!-- JavaScript (ES5) Smart Paste Button's control global script -->
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Smart Paste Button` element and initialize the `JavaScript (ES5) Smart Paste Button` control in `index.html` by using the following code.

The control utilizes the [aiAssistHandler](https://ej2.syncfusion.com/javascript/documentation/api/smart-paste-button/smartPasteButtonModel#aiassisthandler) property, a callback function that sends a request to the AI model and updates the form with the generated content based on the AI's response.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) Smart Paste Button's dependency style -->
            <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Smart Paste Button's control style -->
            <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Smart Paste Button's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

            <!-- JavaScript (ES5) Smart Paste Button's control global script -->
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!--Element to render the Smart Paste Button control-->
            <button id='smart-paste-button'></button>
            <script>
                // Initialize Smart Paste Button control
                var SmartPasteButton = new ej.buttons.SmartPasteButton({
                      content: 'Smart Paste',
                    iconCss: "e-icons e-paste",
                    aiAssistHandler: serverAIRequest
               });

                // Render initialized Smart Paste Button.
                SmartPasteButton.appendTo('#smart-paste-button');

                const serverAIRequest = async (options) => {
                    let output = '';
                    try {
                         // console.log("input:", options);
                         output = await (window).AzureAIRequest(options);
                         output = output.replace('END_RESPONSE', '')
                         // console.log("Success:", output);
                    } catch (error) {
                         console.error("Error:", error);
                    }
                    return output;
               };
            </script>
       </body>
  </html>
```

**Step 6:** Now, run `index.html` in a web browser, and it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Smart Paste Button** control.

### Using CDN links for script and style references

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The JavaScript (ES5) control's global scripts and styles are already hosted at the CDN links shown below.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/styles/tailwind3.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/dist/global/ej2-buttons.min.js`](https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/dist/global/ej2-buttons.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/tailwind3.css`](https://cdn.syncfusion.com/ej2/34.1.29/ej2-buttons/styles/tailwind3.css)

**Step 3:** Create an HTML page, `index.html`, in `~/quickstart/index.html` and add the CDN link references. Then, add the `Smart Paste Button` element and initialize the `JavaScript (ES5) Smart Paste Button` control in `index.html` by using the following code.

> In our demonstration, Azure AI is used, but you can integrate any text-generative AI of your choice.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/azure_openai.js %}
{% endhighlight %}
{% endtabs %}

![smart-paste-button](./images/smart-paste-button.gif)

**Step 4:** Now, run `index.html` in a web browser, and it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart Paste Button** control.

> [Javascript Smart Paste Button Sample in github](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smartpaste)
