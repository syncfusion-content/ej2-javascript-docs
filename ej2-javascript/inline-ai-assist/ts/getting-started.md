---
layout: post
title: Getting started with ##Platform_Name## Inline AI Assist control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Inline AI Assist control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Inline AI Assist
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Inline AI Assist control

This section explains how to create a simple Inline AI Assist control and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher.

## Dependencies

The list of dependencies required to use the Inline AI Assist control in your application is given as follows:

```javascript
|-- @syncfusion/ej2-react-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-popups
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

To render Inline AI Assist control, need to import interactive-chat and its dependent controls styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-notifications/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding Inline AI Assist to the Application

Add the HTML div tag with ID attribute as the `defaultInlineAssist` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Inline AI Assist</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 Inline AI Assist" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div class="container" style="height: 350px; width: 650px;">
        <div id="defaultInlineAssist"></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the `InlineAIAssist` control in your `app.ts` (or `index.ts`) file and initialize it with `#defaultInlineAssist`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { InlineAIAssist } from "@syncfusion/ej2-interactive-chat";

// Initializes the Inline AI Assist control
let inlineAssist: InlineAIAssist = new InlineAIAssist({});

// Render initialized Inline AI Assist.
inlineAssist.appendTo('#defaultInlineAssist');
inlineAssist.showPopup();

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic AI AssistView control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/gettingstarted/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/gettingstarted" %}

## Configure relateTo property

You can use the `relateTo` property to position the Inline AI Assist relative to a specific DOM element. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/relateTo/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/relateTo/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/relateTo" %}

## Configure target property

The `target` property specifies the element or CSS selector where the Inline AI Assist will be appended. It accepts either a CSS selector string (e.g., '.container' or '#id') or an HTMLElement.

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/target/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/target/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/target" %}

## Response display modes

Responses can be shown in two modes: `Inline` (updates content in-place) and `Popup` (shows responses in a floating popup). Use the `responseMode` property to choose the desired behavior.

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/inline-ai-assist/response-mode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/inline-ai-assist/response-mode/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/inline-ai-assist/response-mode" %}
