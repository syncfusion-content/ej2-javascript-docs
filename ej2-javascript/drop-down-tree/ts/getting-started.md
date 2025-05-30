---
layout: post
title: Getting started with ##Platform_Name## Dropdown Tree control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Dropdown Tree control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Dropdown Tree control

This section explains you about how to create a simple **Dropdown Tree** control and configure its available functionalities in TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart).

## Dependencies

The following list of dependencies are required to use the Dropdown Tree control in your application.

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
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

Combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in the `~/src/styles/styles.css` file of your application using the following code.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';

{% endhighlight %}
{% endtabs %}

> To refer individual control CSS, please refer to the [Individual control theme files](../appearance/theme/#referring-individual-control-theme) section. If you want to refer the combined control styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Initialize the Dropdown Tree

Add the HTML input element that needs to be initialized as a Dropdown Tree in `index.html`.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Dropdown Tree control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='container' style="margin:0 auto; width:300px;">
        <!--element which is going to render the Dropdown Tree-->
        <input type="text" tabindex="1" id='ddTreeElement' />
    </div>
</body>

</html>
```

Now, import the  Dropdown Tree control to your `app.ts` and initialize it to the element `#ddTreeElement` as shown below.

`[src/app/app.ts]`

```ts

import { DropDownTree } from '@syncfusion/ej2-dropdowns';

// initialize Dropdown Tree control
let DropDownTreeObject: DropDownTree = new DropDownTree();

// render initialized Dropdown Tree
DropDownTreeObject.appendTo('#ddTreeElement');

```

## Binding data source

The Dropdown Tree control can load the data either from local data sources or remote data services. This can be done using the [`dataSource`](../api/drop-down-tree/fieldsModel/#datasource) property that is a member of the [`fields`](../api/drop-down-tree/#fields) property. The dataSource property supports array of JavaScript objects and DataManager. Here, an array of JSON values is passed to the Dropdown Tree control.

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

After completing the configuration required to render a basic Dropdown Tree, run the following command to display the output in your default browser.

```
npm run start
```

The following example explains the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dropdowntree/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dropdowntree/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/dropdowntree/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dropdowntree/getting-started-cs1" %}
