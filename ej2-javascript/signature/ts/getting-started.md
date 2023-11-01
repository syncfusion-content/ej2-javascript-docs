---
layout: post
title: Getting started with ##Platform_Name## Signature control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Signature control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Signature control

This section explains how to create a simple Signature, and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

## Dependencies

The following list of dependencies are required to use the Signature component in your application.

```js
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

To render Signature component, need to import inputs and its dependent components styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding Signature component to the application

Add the HTML Canvas tag with the `id` attribute as `signature` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - Signature</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 - Signature" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
</head>

<body>
    <div id="signature-control">
        <canvas id="signature"></canvas>
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Import the Signature component in your `app.ts` file and initialize it with the `#signature`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Signature } from '@syncfusion/ej2-inputs';

// Initializes the ColorPicker component
let signature: Signature = new Signature({}, '#signature');

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Signature component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/signature/getting-started/default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/signature/getting-started/default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/signature/getting-started/default-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/signature/getting-started/default-cs1" %}

> The Signature control will render default height and width of canvas (300 * 150), when the Signature height and width are not specified.
