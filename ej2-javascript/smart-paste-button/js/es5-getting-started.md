---
layout: post
title: Es5 getting started with ##Platform_Name## Smart Paste button control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Smart Paste button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Smart Paste button control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

The `Smart Paste Button` is a user interface control designed to simplify and improve the experience of pasting text into form fields. It comes with smart features such as automatic text formatting, validation, and integration with various form controls. It is especially useful in applications where users frequently paste text from other sources and where data consistency is important.

## Prerequisites
 
To get started, ensure the following software to be installed in the machine.
 
* [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2)
 
* [Visual Studio Code](https://code.visualstudio.com/)
 
* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)
 
> Check out the [download and installation](https://ej2.syncfusion.com/javascript/documentation/installation-and-upgrade/download/) section of `Essential Studio JavaScript`. If you are using Syncfusion CDN resources to build your web application, you can skip the Essential Studio JavaScript prerequisite.

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

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material.css`

**Example:**

> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-buttons\dist\global\ej2-buttons.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-base\styles\material.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\20.3.0.47\Web (Essential JS 2)\JavaScript\ej2-buttons\styles\material.css`

The below located script and style file contains all Syncfusion JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the JavaScript (ES5) script and style references.

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

**Step 5:** Now, add the `Smart Paste Button` element and initiate the `JavaScript (ES5) Smart Paste Button` control in the `index.html` by using following code.

The control utilizes the [aiAssistHandler](https://ej2.syncfusion.com/javascript/documentation/api/smart-paste-button/smartPasteButtonModel/#aiassisthandler) property, a callback function that sends a request to the AI model and updates the form with the generated content based on the AI's response.

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

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion JavaScript (ES5) Smart Paste Button** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The JavaScript (ES5) control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js`](https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Smart Paste Button` element and initiate the `JavaScript (ES5) Smart Paste Button` control in the `index.html` by using following code.

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

**Step 4:** Now, run the `index.html` in web browser, it will render the `Syncfusion JavaScript Smart Paste Button` control.

> [Javascript Smart Paste Button Sample in github](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smartpaste)
