---
title: "Signature Getting Started"
component: "Signature"
description: "This section helps to learn how to create the signature in HTML5 JavaScript application with its basic features in step-by-step procedure."
---

# Getting Started

This section explains how to create a simple Signature, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the Signature component in your application.

```js
|-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the Signature component, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```cmd
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`)
to start all the Essential JS 2 components.

* Refer to the [`Signature component dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
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

To render Signature component, need to import inputs and its dependent components styles as given below in `styles.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
```

## Adding Signature component to the application

Add the HTML Canvas tag with the `id` attribute as `signature` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 - Signature</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 - Signature" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div id="signature-control">
        <canvas id="signature"></canvas>
    </div>
</body>
</html>
```

Import the Signature component in your `app.ts` file and initialize it with the `#signature`.

`[src/app/app.ts]`

```typescript
import { Signature } from '@syncfusion/ej2-inputs';

// Initializes the ColorPicker component
let signature: Signature = new Signature({}, '#signature');
```

## Run the application

Run the application in the browser using the following command:

```cmd
npm start
```

The following example shows a basic Signature component.

{% tab template= "signature/getting-started/default", sourceFiles="app.ts,index.html, index.css", isDefaultActive=true, es5Template="default-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';

// Initializes the ColorPicker component
let signature: Signature = new Signature({}, '#signature');
```

{% endtab %}

> The Signature control will render default height and width of canvas (300 * 150), when the Signature height and width are not specified.
