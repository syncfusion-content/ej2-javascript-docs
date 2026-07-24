---
layout: post
title: Getting started with ##Platform_Name## Maskedtextbox control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Maskedtextbox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## MaskedTextBox control

This section explains how to create a simple MaskedTextBox component and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).


## Dependencies

The following list of dependencies are required to use the MaskedTextBox component in your application.

```javascript
|-- @syncfusion/ej2-inputs
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

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls provide built-in themes,  which are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-fluent2-theme --save

{% endhighlight %}
{% endtabs %}

The required styles are imported in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight bash tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/fluent2.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add MaskedTextBox to the project

Add the HTML input element that needs to be rendered as MaskedTextBox in the `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 MaskedTextBox</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 MaskedTextBox" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div style="margin: 50px;">
        <!--input element which needs to be rendered/converted as MaskedTextBox-->
        <input id="mask" type="text" />
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the MaskedTextBox component into your `app.ts` file and append it to the `#mask` element as shown in the following.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox();

mask.appendTo('#mask');

{% endhighlight %}
{% endtabs %}

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the [`mask`](https://ej2.syncfusion.com/documentation/api/maskedtextbox/index-default#mask) property. To know more about the usage of mask and configuration, refer to this [link](https://ej2.syncfusion.com/documentation/maskedtextbox/mask-configuration).

The following example demonstrates the usage of mask element `0`, which allows any single digit from `0` to `9`.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// initializes the MaskedTextBox component
let mask: MaskedTextBox = new MaskedTextBox({
        // sets mask format to the MaskedTextBox
        mask: '000-000-0000'
});

mask.appendTo('#mask');

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example demonstrates the MaskedTextBox with the mask element `0`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/getting-started-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/maskedtextbox/getting-started-cs3/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/maskedtextbox/getting-started-cs3" %}

## See Also

* [How to perform custom validation using FormValidator](https://ej2.syncfusion.com/documentation/maskedtextbox/how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](https://ej2.syncfusion.com/documentation/maskedtextbox/how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](https://ej2.syncfusion.com/documentation/maskedtextbox/how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](https://ej2.syncfusion.com/documentation/maskedtextbox/how-to/display-numeric-keypad-when-focus-on-mobile-devices)
