---
layout: post
title: Getting started with ##Platform_Name## Toolbar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Toolbar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Toolbar control

This section explains how to create a simple **Toolbar** using TypeScript, and how to configure ToolBar items like button, separator, and input components using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

## Dependencies

The following list of dependencies are required to use the Toolbar component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git), and install necessary npm packages using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the EJ2 dependencies. For better understanding, remove all the dependencies from
`src/system.config.js` to get started with the Toolbar component.

* Refer to the [Toolbar component dependencies](#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

* The Toolbar CSS files are available in the `ej2-navigations` package folder.
This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
```

## Initialize the Toolbar with commands

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/documentation/api/toolbar/#items). An item is rendered with text by defining the default item type as a `Button`. For more information about item configuration, refer to the [Item Configuration](./item-configuration) section.

* Add the HTML div tag with its ID attribute set to `element` in your `index.html` file where you will initialize the Toolbar.

`[src/index.html]`

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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element"></div>
    </div>

</body>

</html>
```

* Import the Toolbar component to your `app.ts` file, and initialize it to the element `#element` as shown below.

`[src/app/app.ts]`

```ts

import { Toolbar } from '@syncfusion/ej2-navigations';

// Initialize Toolbar component
let toolbarObj: Toolbar = new Toolbar( {
    items: [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' },
    { type: 'Separator'},
    { text: 'Bold' },
    { text: 'Italic' },
    { text: 'Underline' },
    ]
});

// Render initialized Toolbar
toolbarObj.appendTo('#element');

```

* Now, run the application in the browser using the following command.

```
npm start
```

Output will look like this:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toolbar/toolbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs3" %}

> In the above sample code, `#element` is the `id` of the HTML element in a page where the Toolbar is initialized.

## See Also

* [Initialize the toolbar using HTML elements](../toolbar/template-configuration)

N> You can refer to our [JavaScript Toolbar](https://www.syncfusion.com/javascript-ui-controls/js-toolbar) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Toolbar example](https://ej2.syncfusion.com/demos/#/fabric/toolbar/default.html) that shows you how to render the Toolbar in JavaScript.