---
layout: post
title: Getting Started with ##Platform_Name## Smart TextArea | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Smart TextArea control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Smart TextArea 

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in the latest web browsers.

The **Smart TextArea** is an advanced control designed to elevate the text input experience by providing intelligent autocomplete suggestions for entire sentences through text-generative AI functionality. This control enhances user productivity by predicting and offering relevant completions based on the context of what is being typed.

## Prerequisites

To get started, ensure that the following software is installed on the machine.

* [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2)

* [Visual Studio Code](https://code.visualstudio.com/)

* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource) 

> Check out the [download and installation](https://ej2.syncfusion.com/javascript/documentation/installation-and-upgrade/download) section of **Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript**. If you are using Syncfusion<sup style="font-size:70%">&reg;</sup> CDN resources to build your web application, you can skip the Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript prerequisite.

## Dependencies

The following list of dependencies are required to use the Smart TextArea control in your application.

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized in either of the following ways.

* Using local script and style references in an HTML page.
* Using a CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the installed build location of [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2).

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
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-inputs\dist\global\ej2-inputs.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-base\styles\tailwind3.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.1.29\Web (Essential JS 2)\JavaScript\ej2-inputs\styles\tailwind3.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\tailwind3.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 - Smart TextArea</title>
          <!-- Essential JS 2 Inputs's dependent tailwind3 theme -->
          <link href="resources/base/tailwind3.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Smart TextArea's control tailwind3 theme -->
          <link href="resources/inputs/tailwind3.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 Inputs's dependent global script -->
          <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

          <!-- Essential JS 2 Inputs's control global script -->
          <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Smart TextArea` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea** control in the `index.html` by using the following code. In **Smart TextArea**, the [aiSuggestionHandler](https://ej2.syncfusion.com/javascript/documentation/api/smart-textarea#aisuggestionhandler) property sends prompts to the `AI` model and receives context-aware suggestions. These suggestions appear inline for non-touch devices and as an overlay popup for touch devices by default, helping users type faster and more accurately.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Smart TextArea</title>
    <!-- Essential JS 2 Inputs's dependent tailwind3 theme -->
    <link href="resources/base/tailwind3.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Smart TextArea control tailwind3 theme -->
    <link href="resources/inputs/tailwind3.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Smart TextArea dependent global script -->
    <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Smart TextArea control global script -->
    <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <!--element which is going to render-->
    <div>
        <textarea id="smart-textarea"></textarea>
    </div>

    <script>
        // initialize Smart TextArea control
        const serverAIRequest = async (settings) => {
            let output = '';
            try {
                console.log(settings);
                const response = await (window).AzureAIRequest(settings);
                console.log("Success:", response);
                output = response;
            } catch (error) {
                console.error("Error:", error);
            }
            return output;
        };

        let textareaObj = new ej.inputs.SmartTextArea({
            placeholder: 'Enter your queries here',
            floatLabelType: 'Auto',
            resizeMode: 'Both',
            rows: 3,
            cols: 35,
            userRole: 'Employee communicating with internal team',
            UserPhrases: [
                "Please find the attached report.",
                "Let's schedule a meeting to discuss this further.",
                "Can you provide an update on this task?",
                "I appreciate your prompt response.",
                "Let's collaborate on this project to ensure timely delivery."
            ],
            aiSuggestionHandler: serverAIRequest
        });
        textareaObj.appendTo('#smart-textarea');

    </script>
</body>

</html>
```

**Step 6:** Now, run the `index.html` in a web browser; it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{DEPENDENCY_PACKAGE_NAME}/styles/tailwind3.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{RELEASE_VERSION}/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js`](https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/tailwind3.css`](https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/tailwind3.css)

**Step 3:** Create an HTML page (index.html) in the `~/quickstart/index.html` location and add the CDN link references by using the following code.

**Step 4:** Now, add the `Smart TextArea` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea** control in the `index.html` by using the following code. In **Smart TextArea**, the [aiSuggestionHandler](https://ej2.syncfusion.com/javascript/documentation/api/smart-textarea#aisuggestionhandler) property sends prompts to the `AI` model and receives context-aware suggestions. These suggestions appear inline for non-touch devices and as an overlay popup for touch devices by default, helping users type faster and more accurately.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2 - Smart TextArea</title>
    <!-- Essential JS 2 Inputs's dependent tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Smart TextArea control tailwind3 theme -->
    <link href="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/styles/tailwind3.css" rel="stylesheet" type="text/css"/>

    <!-- Essential JS 2 Smart TextArea dependent global script -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Smart TextArea control global script -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <!--element which is going to render-->
    <div>
        <textarea id="smart-textarea"></textarea>
    </div>

    <script>
        // initialize Smart TextArea control
        const serverAIRequest = async (settings) => {
            let output = '';
            try {
                const response = await (window).AzureAIRequest(settings);
                output = response;
            } catch (error) {
                console.error("Error:", error);
            }
            return output;
        };

        let textareaObj = new ej.inputs.SmartTextArea({
            placeholder: 'Enter your queries here',
            floatLabelType: 'Auto',
            resizeMode: 'Both',
            rows: 3,
            cols: 35,
            userRole: 'Employee communicating with internal team',
            UserPhrases: [
                "Please find the attached report.",
                "Let's schedule a meeting to discuss this further.",
                "Can you provide an update on this task?",
                "I appreciate your prompt response.",
                "Let's collaborate on this project to ensure timely delivery."
            ],
            aiSuggestionHandler: serverAIRequest
        });
        textareaObj.appendTo('#smart-textarea');

    </script>
</body>

</html>
```

## Adding Smart TextArea control to the application

* Add the HTML textarea tag with the `id` attribute as `Smart TextArea` to your `index.html` file. The following example shows the Smart TextArea control's output.

> In our demonstration, Azure AI is used, but you can integrate any text-generative AI of your choice.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/smart-textarea/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-textarea/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-textarea/getting-started-cs1/azure_openai.js %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/smart-textarea/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

* Type 'To investigate' to experience instant sentence autocompletion.

![Syncfusion Smart TextArea - Output](./images/smart-textarea-userphrases.gif)

> [View Sample in GitHub](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smarttextarea).
