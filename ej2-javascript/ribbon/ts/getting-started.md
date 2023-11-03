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

# Getting started in ##Platform_Name## Ribbon control

This section explains how to create a simple Ribbon and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

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

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

To render Ribbon control, need to import navigations and its dependent controls styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-ribbon/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding Ribbon control to the application

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls. 

Add the HTML div tag with the `id` attribute as `ribbon` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

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
</head>

<body>
    <div class="control-container">
        <div id="ribbon"></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Import the Ribbon control in your `app.ts` file and initialize it with the `#ribbon`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Ribbon } from "@syncfusion/ej2-ribbon";

let ribbon: Ribbon = new Ribbon({});
ribbon.appendTo("#ribbon");

{% endhighlight %}
{% endtabs %}

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

## Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `tabs` property of ribbon to define the ribbon tab like below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Ribbon, RibbonTabModel } from "@syncfusion/ej2-ribbon";

let tabs: RibbonTabModel[] = [{ header: "Home" }];

let ribbon: Ribbon = new Ribbon({ tabs: tabs });
ribbon.appendTo("#ribbon");

{% endhighlight %}
{% endtabs %}

## Adding Ribbon Group

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

## Adding Ribbon Item

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

Run the application in the browser using the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example illustrates how tabs, groups, collections, and items are used in a ribbon control to form the ribbon layout.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/ribbon/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ribbon/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/ribbon/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/ribbon/getting-started-cs1" %}
