---
title: "RadioButton Getting Started"
component: "RadioButton"
description: "This section helps to learn how to create the radiobutton in HML5 JavaScript application with its basic features in step-by-step procedure."
---

# Getting Started

This section explains how to create a simple RadioButton, and to configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the RadioButton component in your application.

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with RadioButton component, you can clone the
[Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) project and install the npm packages by
using the following commands.

```cmd
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`)
to start all the Essential JS 2 components.

* Refer to the [RadioButton component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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

## Add RadioButton to the project

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
        <input id="element" type="radio"/>
    </div>

</body>

</html>
```

Import the RadioButton component in your `app.ts` file and initialize it with the `#element` as shown in the following.

`[src/app/app.ts]`

```typescript
import { RadioButton } from '@syncfusion/ej2-buttons';

// Initialize RadioButton component.
let radiobutton: RadioButton = new RadioButton({ label: 'Default'});

// Render initialized RadioButton component.
radiobutton.appendTo('#element');
```

## Adding Style sheet to the Application

To render RadioButton component, need to import Button and its dependent components styles as given below in `style.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Run the application

Run the application in the browser by using the following command:

```cmd
npm start
```

The following example shows a basic RadioButton component.

{% tab template= "radio-button/getting-started", sourceFiles="app.ts,index.html,styles.css",
es5Template="basic-template", isDefaultActive=true %}

```typescript
import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize RadioButton component.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'default'});

// Render initialized RadioButton.
radiobutton.appendTo('#element1');

radiobutton = new RadioButton({ label: 'Option 2', name: 'default', checked: true});
radiobutton.appendTo('#element2');
```

{% endtab %}

## Change the RadioButton state

The Essential JS 2 RadioButton contains 2 states visually, they are as follows:
* Checked
* Unchecked

The RadioButton [`checked`](../api/radio-button#checked) property is used to handle the checked and unchecked state.
In the checked state an inner circle will be added to the visualization of RadioButton.

{% tab template= "radio-button/state", sourceFiles="app.ts,index.html,styles.css",
es5Template="state-template" %}

```typescript
import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//checked state.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'state', checked: true });
radiobutton.appendTo('#radiobutton1');

//unchecked state.
radiobutton = new RadioButton({ label: 'Option 2', name: 'state' });
radiobutton.appendTo('#radiobutton2');
```

{% endtab %}

## See Also

* [How to programmatically select a JavaScript RadioButton](https://www.syncfusion.com/forums/168711)