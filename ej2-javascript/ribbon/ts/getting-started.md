---
layout: post
title: Getting started with ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Ribbon control

This section explains how to create a simple Ribbon and configure its available functionalities in TypeScript using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires Node.js `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started).

## Prerequisites

Before getting started, ensure the following tools are installed on your machine:

| Tool | Version / Notes |
|------|----------------|
| Node.js | v14.15.0 or higher |
| npm | Bundled with Node.js |
| Git | Required to clone the quickstart repository |
| Visual Studio Code | Recommended code editor |

You can verify your Node.js and npm versions by running:

```bash
node -v
npm -v
```

## Registering the license key

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls require a valid license key from version **16.2.0.41** onwards. Using the controls without a license key will display a **license validation message** in the browser console.

**Steps to register the license key:**

1. Sign in to the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) and copy your license key.
2. Register the key in your `src/app/app.ts` file, before instantiating any Syncfusion control:

```ts
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('YOUR_LICENSE_KEY_HERE');
```

> For more details on obtaining and registering a license key, refer to the [License Key Generation](https://ej2.syncfusion.com/documentation/licensing/license-key-generation) and [License Key Registration](https://ej2.syncfusion.com/documentation/licensing/license-key-registration) documentation.

## Setup for local development

Clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart application project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) using the following command line scripts.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack
cd ej2-quickstart-webpack
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Ribbon package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-ribbon` package:

```bash
npm install @syncfusion/ej2-ribbon --save
```

Then, install the remaining dependent npm packages using the following command:

```bash
npm install
```

## Adding CSS reference

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> Ribbon controls can be applied using CSS files provided through the [npm theme package](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme). Install the Fluent 2 theme package using the following command:

```bash
npm install @syncfusion/ej2-fluent2-theme --save
```

Then add the following CSS reference to the `src/styles/styles.css` file:

```css
@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/ribbon/index.css";
```

## Adding Ribbon control to the application

Add the Ribbon control in **src/app/app.ts** file using the following code.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}

### Injecting required modules

Inject the Ribbon required modules in your `app.ts` file using the following code snippet.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Ribbon, RibbonFileMenu, RibbonColorPicker } from "@syncfusion/ej2-ribbon";

Ribbon.Inject(RibbonFileMenu, RibbonColorPicker);

let ribbon: Ribbon = new Ribbon({});
ribbon.appendTo("#ribbon");

{% endhighlight %}
{% endtabs %}

## Adding Ribbon tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `tabs` property of ribbon to define the ribbon tab like below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Ribbon, RibbonTabModel } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{ header: "Home" }];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");

{% endhighlight %}
{% endtabs %}

## Adding Ribbon group

To define a ribbon group under each tab, you can use the `groups` property of ribbon tab like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Ribbon, RibbonTabModel, ItemOrientation } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{
  header: "Home",
  groups: [{ header: "Clipboard", orientation: ItemOrientation.Row}]
}];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");

{% endhighlight %}
{% endtabs %}

## Adding Ribbon items

You can use the `collections` property of ribbon group to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `items` property of ribbon collection and the `type` property of ribbon item to specify the type of control to be rendered, like a button, a drop-down button, a combo box, and more.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

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

{% endhighlight %}
{% endtabs %}

## Run the application

The `npm start` command compiles the TypeScript source files and starts the webpack development server. Run the following command:

```bash
npm start
```

Open `http://localhost:8080` (or the port shown in the terminal) in a browser. You should see a Ribbon control rendered with the default layout.
