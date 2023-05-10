---
layout: post
title: Getting started with ##Platform_Name## Context menu control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Context menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Context menu control

This section explains how to create a simple ContextMenu, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the ContextMenu component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup your development environment

To get started with ContextMenu component, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) and install the npm packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [`ContextMenu component dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app.ts').catch(console.error.bind(console)).then(function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('container').style.visibility = "visible";
});
```

## Add ContextMenu to the project

Add the HTML UL tag with the `id` attribute as `#contextmenu` to your `index.html` file and also add target element on which the ContextMenu has to be opened.

`[src/index.html]`

```
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
        <!--target element-->
        <div id="target">Right click / Touch hold to open the ContextMenu</div>
        <!--element which is going to render-->
        <ul id="contextmenu"></ul>
</body>
</html>
```

Import the ContextMenu component in your `app.ts` file and initialize it with the `#contextmenu` and `target` option.

`[src/app/app.ts]`

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
```

## Adding Style sheet to the Application

To render ContextMenu component, need to import navigations and its dependent components styles as given below in `styles.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

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

## Rendering items with Separator

The Separators are the horizontal lines that are used to separate the menu items. You cannot select the separators. You can enable separators to group the menu items using the [`separator`](../api/context-menu/menuItemModel#separator) property. Cut, Copy, and Paste menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs6" %}

> The [`separator`](../api/context-menu/menuItemModel#separator) property `should not` be given along with the other fields in the [`MenuItem`](../api/context-menu/menuItemModel).

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multi-level nesting](./template-and-multilevel-nesting#multilevel-nesting)