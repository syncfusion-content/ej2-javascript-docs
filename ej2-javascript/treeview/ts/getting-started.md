---
layout: post
title: Getting started with ##Platform_Name## TreeView control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: TreeView 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## TreeView control

This section explains the steps required to create a simple [JavaScript TreeView](https://www.syncfusion.com/javascript-ui-controls/js-treeview) and demonstrates the basic usage of the TreeView component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is preconfigured with all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-navigations` package:
 
```
npm install @syncfusion/ej2-navigations --save
```
 
Install the required npm packages:
 
```
npm install
```
> For more information about individual package and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView CSS styles

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

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/treeview/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> TreeView control to the application

Now, you can start adding Essential<sup style="font-size:70%">&reg;</sup> JS 2 TreeView control to the application. To get started, add the TreeView control to `app.ts` and `index.html` files using the following code. Then, add the HTML `<div>` element with its `id` attribute set to `tree` for TreeView control to your `index.html`.

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript UI controls. 

In this article, the TreeView control is used as an example. Add the following TreeView element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 for TreeView</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for TreeView UI Control" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='treeparent'>
            <div id="tree"></div>
        </div>
    </div>
</body>

</html>
```

Now, to render the TreeView control, add the following TypeScript code to the `~/src/app/app.ts` file.

```ts

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeView } from '@syncfusion/ej2-navigations';

//define the array of JSON
let data: { [key: string]: Object }[] = [
    {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
    },
    {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
    },
];
//Initialize TreeView control
let treeViewInstance: TreeView = new TreeView({
    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild' }
});

//Render initialized TreeView
treeViewInstance.appendTo("#tree");

````

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/treeview/getting-started-cs1" %}

> You can also explore our [JavaScript TreeView example](https://ej2.syncfusion.com/demos/#/bootstrap5/treeview/default.html) to knows how to present and manipulate data.
