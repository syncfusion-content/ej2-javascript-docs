---
layout: post
title: Getting started with ##Platform_Name## Radio button control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Radio button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Radio button control

This section explains how to create a simple Radio button, and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the RadioButton component in your application.

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
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

To render RadioButton component, need to import Button and its dependent components styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Add RadioButton to the project

Add the HTML input tag with id attribute as the `element` to your `index.html` file.

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
        <!--element which is going to render-->
        <input id="element" type="radio"/>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the RadioButton component in your `app.ts` file and initialize it with the `#element` as shown in the following.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { RadioButton } from '@syncfusion/ej2-buttons';

// Initialize RadioButton component.
let radiobutton: RadioButton = new RadioButton({ label: 'Default'});

// Render initialized RadioButton component.
radiobutton.appendTo('#element');

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser by using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic RadioButton component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/getting-started-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/radio-button/getting-started-cs2" %}

## Change the RadioButton state

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 RadioButton contains 2 states visually, they are as follows:
* Checked
* Unchecked

The RadioButton [`checked`](../api/radio-button#checked) property is used to handle the checked and unchecked state. In the checked state an inner circle will be added to the visualization of RadioButton.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/radio-button/state-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/radio-button/state-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/radio-button/state-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/radio-button/state-cs1" %}

## See Also

* [How to programmatically select a JavaScript RadioButton](https://www.syncfusion.com/forums/168711)