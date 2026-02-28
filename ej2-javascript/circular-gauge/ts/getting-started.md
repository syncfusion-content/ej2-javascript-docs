---
layout: post
title: Getting started with ##Platform_Name## Circular Gauge Component | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Circular Gauge Component of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Getting started in ##Platform_Name## Circular Gauge Component

This guide demonstrates how to create and configure a **Circular gauge** component in TypeScript using Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2. The Circular gauge is a data visualization control that displays values on a circular scale, useful for dashboards, monitoring systems, and data presentation applications.

By the end of this guide, you will:
- Set up a TypeScript development environment for Syncfusion components
- Create your first Circular gauge instance
- Configure basic properties like pointer values and axes
- Run the application in your browser

> This guide uses the Syncfusion quickstart repository, preconfigured with webpack for TypeScript compilation. The application requires Node.js `v14.15.0` or higher and leverages the [webpack-cli](https://webpack.js.org/api/cli/#commands) for bundling. Learn more about [webpack configuration and features](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Before getting started, ensure your development environment meets these requirements:

- **Node.js**: Version 14.15.0 or higher (verify with `node --version` in your terminal)
- **npm**: Version 6.0 or higher (included with Node.js)
- **TypeScript**: Basic familiarity with TypeScript syntax
- **Code Editor**: Visual Studio Code or any preferred IDE with TypeScript support

## Dependencies

The Circular gauge requires the following minimum Syncfusion packages:

```javascript
|-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

These dependencies are automatically installed when you use the quickstart repository.

## Set up the development environment

### Step 1: Clone the quickstart project

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

### Step 2: Navigate to the project folder

Change to the newly created project directory:

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

This command downloads and installs all packages specified in `package.json`, including the Circular gauge and its dependencies.

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Material** theme in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-circulargauge/styles/material.css';

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Adding Circular Gauge component

You can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 Circular Gauge component to the application. To get started, add the Circular Gauge component in **app.ts** and **index.html** files using the following code.

Place the following Circular Gauge code in the **app.ts**.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { CircularGauge } from '@syncfusion/ej2-circulargauge';

// Initialize CircularGauge component
let gauge: CircularGauge = new CircularGauge();

// Render initialized CircularGauge
gauge.appendTo('#container');

{% endhighlight %}
{% endtabs %}

Now, add an HTML div element with its `ID` attribute set to `container` in your **index.html** using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript UI Controls" />
    <meta name="author" content="Syncfusion" />
</head>

<body>
    <div>
        <!--HTML circular gauge element, which is going to render as Essential JS 2 Circular Gauge-->
        <div id='container'></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs1" %}

## Set pointer value

You can change the pointer value in the above sample using [`value`](../api/circular-gauge/pointer#value-number) property in [`pointers`](../api/circular-gauge/pointer).

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs2" %}

## See also

* [How to customize the appearance of circular gauge](../circular-gauge/gauge-appearance)
* [How to work with pointers in circular gauge](../circular-gauge/gauge-pointers)
* [How to work with ranges in circular gauge](../circular-gauge/gauge-ranges)
