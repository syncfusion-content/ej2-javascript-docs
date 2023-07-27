---
layout: post
title: Getting started with ##Platform_Name## Image editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Image editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Image editor control

This section explains how to create a simple Image Editor, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the Image Editor control in your application.

```js
|-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Setup your development environment

To get started with the Image Editor control, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [`Image Editor control dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-image-editor": "syncfusion:ej2-image-editor/dist/ej2-image-editor.umd.min.js"
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

## Adding Style sheet to the Application

To render Image Editor control, need to import image-editor and its dependent components styles as given below in `styles.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";
```

## Adding Image Editor control to the application

Add the HTML DIV tag with the `id` attribute as `imageeditor` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - Image Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 - Image Editor" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
      <div id="imageeditor">
    </div>
</body>
</html>
```

Import the Image Editor control in your `app.ts` file and initialize it with the `#imageeditor`.

`[src/app/app.ts]`

```ts
import { ImageEditor } from '@syncfusion/ej2-image-editor';

     new ImageEditor({
        width: '550px',
        height: '350px',
    }, '#imageeditor');
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Image Editor control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs3" %}
