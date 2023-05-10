---
layout: post
title: Getting started with ##Platform_Name## Speed dial control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Speed dial control

This section explains how to create a simple application with SpeedDial control and to configure it.

## Dependencies

The list of dependencies required to use the SpeedDial control in your application is given as follows:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the SpeedDial control, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart)
project using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [SpeedDial component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
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

## Adding SpeedDial to the Application

Add the HTML Button tag with ID attribute as the `speeddial` to your `index.html` file.

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
        <!--Element to render the SpeedDial control-->
        <button id="speeddial"></button>
    </div>

</body>

</html>
```

Then, import the SpeedDial control in your `app.ts` file, define the action items using [`items`](../api/speed-dial/#items) property and initialize it with the `#speeddial`.

`[src/app/app.ts]`

```ts
import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({ items: items, content: 'Edit' });

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## Adding Style sheet to the Application

To render SpeedDial control, need to import Button and its dependent controls styles as given below in `style.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic SpeedDial control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/getting-started-cs1" %}
