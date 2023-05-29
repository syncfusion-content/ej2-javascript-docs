---
layout: post
title: Getting started with ##Platform_Name## Split button control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Split button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Split button control

This section explains how to create a simple SplitButton and to configure it.

## Dependencies

The list of dependencies required to use the SplitButton component in your application is given as follows:

```js
|-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup your development environment

To get started with the SplitButton component, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart)
project using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [SplitButton component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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

## Add SplitButton to the project

Add the HTML Button tag with ID attribute as the `element` to your `index.html` file.

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

    <!--Style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--System js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
        <!--Element which is going to render-->
        <button id="element">Paste</button>
    </div>

</body>

</html>
```

Then, import the SplitButton component in your `app.ts` file, and initialize it with the `#element`.

`[src/app/app.ts]`

```ts
import { SplitButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//Initialize action items.
let items: ItemModel[] = [
     { text: 'Cut'},
     { text: 'Copy'},
     { text: 'Paste'}
     ];

// Initialize the SplitButton component.
let splitBtn: SplitButton = new SplitButton({ items: items });

// Render initialized SplitButton.
splitBtn.appendTo('#element');
```

## Adding Style sheet to the Application

To render SplitButton component, need to import Button and its dependent components styles as given below in `style.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic SplitButton component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/split-button/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/split-button/getting-started-cs1" %}

## See Also

* [SplitButton with icons](./icons-and-separator#splitbutton-icons)
