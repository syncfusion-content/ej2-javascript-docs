---
title: "TypeScript Getting Started For Tooltip"
component: "Tooltip"
description: "Getting started with typescript Tooltip component."
---

# Getting Started

This section briefly explains how to create a simple **Tooltip** component and configure its available functionalities in TypeScript,
 using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) seed repository.

Tooltips can be initialized on,

* A single element (or)
* A container that has more than one sub-element within it and the sub-elements are considered as targets.

## Dependencies

The following list of dependencies are required to use the Tooltip component in your application.

```js
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from
[GitHub](https://github.com/syncfusion/ej2-quickstart), and
install the necessary npm packages using the following command line scripts.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the EJ2 dependencies. For better understanding, remove all the dependencies from
`src/system.config.js` to get started with the Tooltip component.

* Refer to the [Tooltip component dependencies](#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

* Tooltip CSS files are available in the `ej2-popups` package folder.
This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
```

> We can also use [CRG](https://crg.syncfusion.com/) to generate combined component styles.

## Initialize the Tooltip on a single element

* Add the HTML span tag with its id attribute set to `target` in your `index.html` file where the Tooltip is initialized.

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
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <span id='target'>Show Tooltip</span>
    </div>

</body>

</html>
```

* Import the Tooltip component to your `app.ts` file, and initialize it to the element `#target` as shown below.

`[src/app/app.ts]`

```typescript

import { Tooltip } from '@syncfusion/ej2-popups';

// initialize tooltip component
let tooltip: Tooltip = new Tooltip({
    content: 'Tooltip content'
});

// render initialized tooltip
tooltip.appendTo('#target');

```

* Now, run the application in the browser using the following command.

```shell
npm start
```

The output will be as follows:

{% tab template="tooltip/getting-started", isDefaultActive=true, sourceFiles="index.ts,index.html",es5Template="default-template" %}

```typescript
import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
let tooltip: Tooltip = new Tooltip({
    content: 'Tooltip content'
});
tooltip.appendTo('#target');

let button: Button = new Button({
    content: 'Show Tooltip'
});
button.appendTo('#target');

```

{% endtab %}

> In the above sample code, `#target` is the `id` of the HTML element in a page to which the Tooltip is initialized.

## Initialize Tooltip within a container

You can create Tooltips on multiple targets within a container. To do so, you have to define specific target elements to the `target`
 property so that the Tooltip is initialized only on matched targets within a container. In this case, the Tooltip content is assigned
  from the `title` attribute of the target element.

Refer to the following code example to create a Tooltip on multiple targets within a container.

{% tab template="tooltip/getting-started-2", isDefaultActive=true, sourceFiles="index.ts,index.html",es5Template="container-template" %}

```typescript
import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let tooltip: Tooltip = new Tooltip({
    target: '.e-info',
    position: 'RightCenter'
});
tooltip.appendTo('#details');

let button: Button = new Button();
button.appendTo('#sample');
button.appendTo('#clear');

```

{% endtab %}

> In the above sample, `#details` refers to the container's id, and the target `.e-info` refers to the target elements available
> within that container.

## See Also

[Positioning Tooltip](./position/)

[Tooltip Open Mode](./open-mode/)

[Customize the Tooltip](./customization/)
