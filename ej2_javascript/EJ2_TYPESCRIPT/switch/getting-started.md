---
title: "Switch Getting Started"
component: "Switch"
description: "This section helps to learn how to create the switch in HML5 JavaScript application with its basic features in step-by-step procedure."
---

# Getting Started

This section explains how to create a simple Switch, and configure its available functionalities in TypeScript, using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the Switch component in your application.

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the Switch component, clone the
[Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) project and install the npm packages by
using the following commands.

```cmd
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`)
to start all the Essential JS 2 components.

* Refer to the [Switch component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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

## Add Switch to the project

Add the HTML input tag with id attribute as the `element` to your `index.html` file.

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
    <div>
        <!--element which is going to render-->
        <input id="element" type="checkbox"/>
    </div>

</body>

</html>
```

Import the Switch component in your `app.ts` file, and initialize it to `#element` as shown.

`[src/app/app.ts]`

```typescript
import { Switch } from '@syncfusion/ej2-buttons';

// Initialize Switch component with checked state.
let switchObj: Switch = new Switch({ checked: true });

// Render initialized Switch.
switchObj.appendTo('#element');
```

## Adding Style sheet to the Application

To render DropDownButton component, need to import Button and its dependent components styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Run the application

Run the application in the browser using the following command:

```cmd
npm start
```

The following example shows a basic Switch component.

{% tab template= "switch/getting-started", sourceFiles="app.ts,index.html",
es5Template="basic-template", isDefaultActive=true %}

```typescript
import { Switch } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Switch component with checked state.
let switchObj: Switch = new Switch({ checked: true });

// Render initialized Switch.
switchObj.appendTo('#element');
```

{% endtab %}

## Set text on Switch

This section explains how to set [`onLabel`](../api/switch#onlabel) and [`offLabel`](../api/switch#offlabel) texts on Switch. In the following example, `onLabel` is set as `ON` and `offLabel` is set as `OFF`.

{% tab template= "switch/text", sourceFiles="app.ts,index.html",
es5Template="text", isDefaultActive=true %}

```typescript
import { Switch } from '@syncfusion/ej2-buttons';

//Set text in switch toggle states.
let switchObj: Switch = new Switch({ onLabel: 'ON', offLabel: 'OFF', checked: true });
switchObj.appendTo('#switch1');
```

{% endtab %}

> Switch does not have text support for material themes, and does not support long custom text.

## See Also

* [How to customize the switch appearance](./how-to/customize-the-appearance-of-a-switch)