---
layout: post
title: Getting started with ##Platform_Name## Smart Paste button control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Smart Paste button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Smart Paste button control

The `Smart Paste Button` is a user interface control designed to simplify and improve the experience of pasting text into form fields. It comes with smart features such as automatic text formatting, validation, and integration with various form controls. It is especially useful in applications where users frequently paste text from other sources and where data consistency is important.

This section explains how to create a simple Smart Paste button, and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

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

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

To render Smart Paste Button control, need to import Button and its dependent components styles as given below in the `~/src/styles/index.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding Smart Paste Button to the Application

Add the HTML Button tag with ID attribute as the `smart-paste-button` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--Element to render the Smart Paste Button control-->
        <button id="smart-paste-button"></button>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the Smart Paste Button control in your `app.ts` file, and initialize it with the `#smart-paste-button`.

The control utilizes the [aiAssistHandler](https://ej2.syncfusion.com/documentation/api/smart-paste-button/smartPasteButtonModel/#aiassisthandler) property, a callback function that sends a request to the AI model and updates the form with the generated content based on the AI's response.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { SmartPasteButton } from '@syncfusion/ej2-buttons';

const serverAIRequest = async (options: ChatOptions) => {
  let output: string | null = '';
  try {
    // console.log("input:", options);
    output = await (window as any).AzureAIRequest(options) as string;
    output = output.replace('END_RESPONSE', '')
    // console.log("Success:", output);
  } catch (error) {
    console.error("Error:", error);
  }
  return output;
};

// Initialize Smart Paste Button control.
let button: SmartPasteButton = new SmartPasteButton({
  content: 'Smart Paste',
  iconCss: "e-icons e-paste",
  aiAssistHandler: serverAIRequest
});
// Render initialized Smart Paste Button.
button.appendTo('#smart-paste');

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Smart Paste Button control. 

> In our demonstration, Azure AI is used, but you can integrate any text-generative AI of your choice.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight js tabtitle="azure_openai.js" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/azure_openai.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/smart-paste-button/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

![smart-paste-button](./images/smart-paste-button.gif)

> [Javascript Smart Paste Button Sample in github](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smartpaste)
