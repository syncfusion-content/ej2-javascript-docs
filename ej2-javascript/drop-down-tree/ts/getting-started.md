---
layout: post
title: Getting started with ##Platform_Name## DropDown Tree control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## DropDown Tree control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: DropDown Tree
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## DropDown Tree control

This section explains the steps to create a simple DropDown Tree and demonstrates the basic usage of the DropDown Tree component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript DropDown Tree packages

Use the following command to install the @syncfusion/ej2-dropdowns package:

```
npm install @syncfusion/ej2-dropdowns
```
Install the required npm packages:

```
npm install
```


> For more information about individual packages and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

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

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/drop-down-tree/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> DropDown Tree control to the application

Add the HTML input element that needs to be initialized as a Dropdown Tree in `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Dropdown Tree control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Dropdown Tree-->
        <input type="text" tabindex="1" id='ddTreeElement' />
    </div>
</body>

</html>
```

The Dropdown Tree control can load the data either from local data sources or remote data services. This can be done using the [`dataSource`](https://ej2.syncfusion.com/documentation/api/drop-down-tree/fieldsmodel#datasource) property that is a member of the [`fields`](https://ej2.syncfusion.com/documentation/api/drop-down-tree/dropdowntreemodel#fields) property. The dataSource property supports array of JavaScript objects and DataManager. Here, an array of JSON values is passed to the Dropdown Tree control.

Now, import the  Dropdown Tree control to your `app.ts` and initialize it to the element `#ddTreeElement` as shown below.

`[src/app/app.ts]`

```ts
import { DropDownTree } from '@syncfusion/ej2-dropdowns';

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

// initialize Dropdown Tree control
let DropDownTreeObject: DropDownTree = new DropDownTree({
    //binding data source through fields property
    fields: { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' }
});

// render initialized Dropdown Tree
DropDownTreeObject.appendTo('#ddTreeElement');
```

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```

{% previewsample "page.domainurl/code-snippet/dropdowntree/getting-started-cs1" %}
