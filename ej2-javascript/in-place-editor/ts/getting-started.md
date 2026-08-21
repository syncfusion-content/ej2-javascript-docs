---
layout: post
title: Getting Started with ##Platform_Name## In-place Editor | Syncfusion
description: Get started with the Syncfusion ##Platform_Name## In-place Editor in a TypeScript app using the ej2-quickstart-webpack seed, with npm package and theme setup.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## In-place Editor

This section explains how to create a simple in-place editor using TypeScript and configure its properties using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> In-place Editor package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-inplace-editor` package:

```
npm install @syncfusion/ej2-inplace-editor --save
```

Then, install the remaining dependent npm packages using the following command:

```
npm install
```

> For more information about individual package and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> In-place Editor CSS styles

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

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/inplace-editor/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> In-place Editor control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI controls. 

In this article, the In-place Editor control is used as an example. Add the following element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
     <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element">
    </div>
</body>

</html>
 ```

To render the In-place Editor control with Textbox, add the following JavaScript code to the `~/src/app/app.ts` file

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Text',
    value: 'Andrew',
    model: {
        placeholder: 'Enter employee name'
    }
});
editObj.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the In-place Editor is initialized.

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```
         
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs2" %}

## See Also

* [Types of rendering the editor](./integration)