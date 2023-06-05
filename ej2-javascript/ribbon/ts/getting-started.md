---
layout: post
title: Getting started with ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Ribbon control

This section explains how to create a simple Ribbon and configure its available functionalities in TypeScript using Essential JS 2 QuickStart seed repository.

## Dependencies

The following list of dependencies are required to use the Ribbon control in your application.

```js
|-- @syncfusion/ej2-ribbon
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-navigations
```

## Setup your development environment

To get started with the Ribbon control, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is pre-configured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 controls.

* Refer to the [`Ribbon control dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
  paths: {
    "npm:": "./node_modules/",
    "syncfusion:": "npm:@syncfusion/",
  },
  map: {
    app: "app",

    //Syncfusion packages mapping
    "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
    "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
    "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
    "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
    "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
    "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
    "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
    "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
    "@syncfusion/ej2-ribbon": "syncfusion:ej2-ribbon/dist/ej2-ribbon.umd.min.js"
  },
  packages: {
    app: { main: "app", defaultExtension: "js" },
  },
});

System.import("app.ts");
```

## Adding Style sheet to the Application

To render Ribbon control, need to import navigations and its dependent controls styles as given below in `styles.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-ribbon/styles/material.css";
```

## Adding Ribbon control to the application

Add the HTML div tag with the `id` attribute as `ribbon` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Essential JS 2 - Ribbon</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from node_modules/@syncfusion/ej2/-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
  </head>

  <body>
    <div class="control-container">
      <div id="ribbon"></div>
    </div>
  </body>
</html>
```

Import the Ribbon control in your `app.ts` file and initialize it with the `#ribbon`.

`[src/app/app.ts]`

```ts
import { Ribbon } from "@syncfusion/ej2-ribbon";

let ribbon: Ribbon = new Ribbon({});
ribbon.appendTo("#ribbon");
```

### Injecting required modules

Inject the Ribbon required modules in your `app.ts` file using the following code snippet.

```ts
import { Ribbon, RibbonFileMenu, RibbonColorPicker } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu, RibbonColorPicker);

let ribbon: Ribbon = new Ribbon({});
ribbon.appendTo("#ribbon");
```

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `tabs` property of ribbon to define the ribbon tab like below.

```ts
import { Ribbon, RibbonTabModel } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{ header: "Home" }];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Adding Ribbon Group

To define a ribbon group under each tab, you can use the `groups` property of ribbon tab like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```ts
import { Ribbon, RibbonTabModel, ItemOrientation } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
  header: "Home",
  groups: [{ header: "Clipboard", orientation: ItemOrientation.Row}]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Adding Ribbon Item

You can use the `collections` property of ribbon group to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `items` property of ribbon collection and the `type` property of ribbon item to specify the type of control to be rendered, like a button, a drop-down button, a combo box, and more.

```ts
import { Ribbon, RibbonTabModel, ItemOrientation, RibbonItemType, RibbonItemSize } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
    header: "Home",
    groups: [{
        header: "Clipboard",
        orientation: ItemOrientation.Row,
        collections: [
        {
            id : "paste-collection",
            items: [{
                type: RibbonItemType.SplitButton,
                allowedSizes: RibbonItemSize.Large,
                disabled: true,
                id: "pastebtn",
                splitButtonSettings: {
                    iconCss: "e-icons e-paste",
                    items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }],
                    content: "Paste"
                }
            }]
        },
        {
            id: "cutcopy-collection",
            items: [{
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut"
                }
            }, {
                type: RibbonItemType.Button,
                buttonSettings: {
                    content: "Copy",
                    iconCss: "e-icons e-copy"
                }
            }]
        }]
    }]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example illustrates how tabs, groups, collections, and items are used in a ribbon control to form the ribbon layout.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}
