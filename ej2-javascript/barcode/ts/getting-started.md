---
layout: post
title: Getting started with ##Platform_Name## Barcode control | Syncfusion®
description:  Checkout and learn about Getting started with ##Platform_Name## Barcode control of Syncfusion Essential® JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Barcode control

This section explains how to create the `BarcodeGenerator` using TypeScript and configure it with the Essential® JS 2 quickstart (webpack) seed repository.

> This application uses `webpack.config.js` and requires Node.js v14.15.0 or later and the `webpack-cli`. For more information about webpack, see the [webpack documentation](https://webpack.js.org/guides/getting-started/).

<!-- markdownlint-disable MD033 -->

## Dependencies

The following list of dependencies are required to use the `BarcodeGenerator` component in your application.

```javascript
|-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

## Set up development environment

Open a command prompt in the directory where you want to clone the repository, then run the following command to clone the Syncfusion® JavaScript (Essential® JS 2) quickstart project from GitHub.

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

## Add Syncfusion® JavaScript packages

Syncfusion® JavaScript (Essential® JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion® JavaScript (Essential® JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the project's `package.json` file. Install dependencies with:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Add Barcode to the project

Add the HTML div element for the Barcode into your `index.html` (`src/index.html`).

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 Barcode</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
     <!--container which is going to render the Barcode-->
     <div id='element'>
     </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}


Now, import the Barcode component into your `app.ts` to instantiate a `BarcodeGenerator` and append the instance to `#element` (`src/app/app.ts`).

The following example shows a basic barcode.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/barcode/getting-started-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs7" %}

Run the application in the browser with:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/barcode/getting-started-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs8" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/barcode/getting-started-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/barcode/getting-started-cs9" %}