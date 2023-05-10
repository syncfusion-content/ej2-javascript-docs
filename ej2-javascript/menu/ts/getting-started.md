---
layout: post
title: Getting started with ##Platform_Name## Menu control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Menu control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Menu control

This section explains how to create a simple Menu, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the Menu component in your application.

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

To get started with the Menu component, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [`Menu component dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
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

## Add Menu to the project

Add the HTML UL tag with the `id` attribute as `menu` to your `index.html` file.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - Menu</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 - Menu" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <ul id="menu"></ul>
</body>
</html>
```

Import the Menu component in your `app.ts` file and initialize it with the `#menu`.

`[src/app/app.ts]`

```ts
import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Menu items definition
let menuItems: MenuItemModel[] = [
    {
        text: 'File',
        items: [
            { text: 'Open' },
            { text: 'Save' },
            { text: 'Exit' }
        ]
    },
    {
        text: 'Edit',
        items: [
            { text: 'Cut' },
            { text: 'Copy' },
            { text: 'Paste' }
        ]
    },
    {
        text: 'View',
        items: [
            { text: 'Toolbar' },
            { text: 'Sidebar' }
        ]
    },
    {
        text: 'Tools',
        items: [
            { text: 'Spelling & Grammar' },
            { text: 'Customize' },
            { text: 'Options' }
        ]
    },
    { text: 'Go' },
    { text: 'Help' }
];

// Initialize Menu component.
let menuObj: Menu = new Menu({ items: menuItems }, '#menu');
```

## Adding Style sheet to the Application

To render Menu component, need to import navigations and its dependent components styles as given below in `styles.css`.

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

The following example shows a basic Menu component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs11" %}

> This example demonstrates the basic rendering of Menu with items support. For more information about data source support, refer to the [`Data Source Binding`](./data-source-binding-and-custom-menu-items#data-binding) section.

## Group menu items with separator

The separators are both horizontal and vertical lines used to separate the menu items. You cannot select the separators, but you can enable separators to group the menu items using the [`separator`](../api/menu/menuItemModel#separator) property. The `Open` and `Save` sub menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs12" %}

> The [`separator`](../api/menu/menuItemModel#separator) property should not be given along with the other fields in the [`MenuItem`](../api/menu/menuItemModel). You can also enable the separator to group **horizontal** menu items.

## See Also

* [Create menu using data source](./data-source-binding-and-custom-menu-items#data-binding)
* [Customize menu items using template support](./data-source-binding-and-custom-menu-items#custom-menu-items)
* [Integrating with Toolbar component](./use-case-scenarios#toolbar)