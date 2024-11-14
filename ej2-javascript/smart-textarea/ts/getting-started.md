---
layout: post
title: Getting started with ##Platform_Name## Smart Textarea control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Smart Textarea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started in ##Platform_Name## Smart TextArea Control

The **Smart TextArea** is an advanced control designed to elevate the text input experience by providing intelligent autocomplete suggestions for entire sentences through text-generative AI functionality. This control enhances user productivity by predicting and offering relevant completions based on the context of what is being typed.

This section explains how to create a simple **Smart TextArea** Control and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v18.20.x` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

To get started with application, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/typescript/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource) 

## Dependencies

The following list of dependencies are required to use the Smart TextArea Control in your application.

```js
|-- @syncfusion/ej2-inputs
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

To render Smart TextArea Control, need to import inputs and its dependent controls styles as given below in the `~/src/styles/index.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Adding TextArea to the application

Add the HTML Smart TextArea tag with the `id` attribute as `default` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Smart TextArea</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 TextArea Controls" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/20.3.56/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/20.3.56/ej2-inputs/styles/material.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
    <div>
        <!--Element to render the Smart TextArea control-->
        <textarea id="default"></textarea>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the Smart TextArea Control in your `src/app/app.ts` file and initialize it with the `#default`. In **Smart TextArea**, the [aiSuggestionHandler](https://ej2.syncfusion.com/documentation/api/smart-textarea#aisuggestionhandler) property, which sends prompts to the `AI` model and receives context-aware suggestions. These suggestions appear inline for non-touch devices and as an overlay popup for touch devices by default, helping users type faster and more accurately.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { SmartTextArea, ChatParameters } from '@syncfusion/ej2-inputs';

let textareaObj: SmartTextArea = new SmartTextArea({
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

const serverAIRequest = async (settings: ChatParameters) => {
    let output = '';
    try {
        const response = await (window as any).AzureAIRequest(settings) as string;
        output = response;
    } catch (error) {
        console.error("Error:", error);
    }
    return output;
};

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows the Smart TextArea control.

> In our demonstration, Azure AI is used, but you can integrate any text-generative AI of your choice.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/smart-textarea/getting-started-cs1/index.ts %}
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

![Syncfusion Smart TextArea - Output](../images/smart-textarea-userphrases.gif)

> [View Sample in GitHub](https://github.com/syncfusion/smart-ai-samples/tree/master/typescript/src/app/smarttextarea).