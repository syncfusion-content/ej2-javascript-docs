---
layout: post
title: Getting Started with ##Platform_Name## Badge | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Badge control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Badge

This section explains how to create a simple Badge control and configure its available functionalities in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Set up the development environment

Clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from GitHub in the command prompt:

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

Navigate to the project folder in the command prompt:

```
cd ej2-quickstart
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> badge CSS styles

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

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/badge/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> badge control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI controls. 

Add an HTML span element with `e-badge` class inside any wrapper element (h1) into your `~/src/index.html`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
     <h1>Badge Control <span class="e-badge">New</span></h1>
</body>

</html>
 ```

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```

{% previewsample "page.domainurl/code-snippet/badge/getting-started-cs1" %}

## See Also

[Types of Badge](./types)
