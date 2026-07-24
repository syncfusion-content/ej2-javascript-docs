---
layout: post
title: Getting started with Context Menu control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Context Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Context Menu
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
 
# Getting started in ##Platform_Name## Context menu control
 
This section explains the steps to create a simple ContextMenu and demonstrates the basic usage of the ContextMenu component,    using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.
 
> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).
 
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
 
## Install Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript ContextMenu packages

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.
 
Use the following command to install the `@syncfusion/ej2-navigations` package:
 
```
npm install @syncfusion/ej2-navigations --save
```
 
Install the required npm packages:
 
```
npm install
```
 
> For more information about individual packages and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).
 
## Import Syncfusion<sup style="font-size:70%">&reg;</sup> ContextMenu CSS styles
 
Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript controls provide built-in themes,  which are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).
 
The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-fluent2-theme --save
 
{% endhighlight %}
{% endtabs %}
 
The required styles are imported in the `~/src/styles/styles.css` file, as shown below:
 
{% tabs %}
{% highlight bash tabtitle="styles.css" %}
 
@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/context-menu/index.css";
 
{% endhighlight %}
{% endtabs %}
 
> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> ContextMenu control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript UI controls.

In this article, the ContextMenu control is used as an example. Add the following ContextMenu element to the `~/src/index.html` file.

```html

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
    <style>
        #target {
            border: 1px dashed;
            height: 150px;
            padding: 10px;
            position: relative;
            text-align: justify;
            color: gray;
            user-select: none;
        }
    </style>
</head>

<body>
    <div>
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <ul id="contextmenu"></ul>
    </div>
</body>

</html>
```
Now, to render the ContextMenu control, add the following TypeScript code to the `~/src/app/app.ts` file.

```ts

import { ContextMenu, MenuItemModel, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
let menuOptions: ContextMenuModel = {
        target: '#target',
        items: menuItems
    };

// Initialize ContextMenu component.
let menuObj: ContextMenu = new ContextMenu(menuOptions, '#contextmenu')

````

## Run the application

Run the application in the browser using the following command:

```  
npm start
```

The following example shows a basic ContextMenu component.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs5" %}

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multi-level nesting](./template-and-multilevel-nesting#multilevel-nesting)