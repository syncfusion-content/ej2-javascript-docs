---
title: "ProgressBar Getting Started"
component: "ProgressBar"
description: "This section explains how to create the Essential JS 2 ProgressBar component in Typescript application with its basic features."
---

# Getting Started

This section explains the steps required to create the ProgressBar control using TypeScript and configure its properties using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) &nbsp;seed repository.

## Dependencies

The following list of dependencies are required to use the ProgressBar control in your application:

```javascript
|-- @syncfusion/ej2-progressbar
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data: "*"
    |-- @syncfusion/ej2-svg-base
```

## Set up your development environment

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git), and install the necessary npm packages using the following command.

```shell
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. For better understanding, remove all the dependencies from `src/system.config.js` to get started with the ProgressBar component.

* Refer to the [ProgressBar component dependencies](#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-progressbar ": "syncfusion:ej2-progressbar /dist/ej2-progressbar .umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

## Add Progress Bar to the Application

* Add an HTML div tag with its id attribute as `element` in your `index.html` file to initialize the ProgressBar control.

`[src/index.html]`

```html

<!DOCTYPE html>
<html lang="en">

<head>
<title>Essential JS 2 ProgressBar</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
s<meta name="description" content="Essential JS 2" />
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
<!--element which is going to render-->
<div id="element"></div>
</body>

</html>
```

* Import the Progress Bar control to your `app.ts` file to instantiate a Progress Bar and append the  instance to the `#element` as shown.

`[src/app/app.ts]`

```typescript

import { ProgressBar } from '@syncfusion/ej2-progressbar ';

// Initialize ProgressBar component
let ProgressBar: ProgressBar = new ProgressBar({
      value: 40
});

// Render initialized ProgressBar
ProgressBar.appendTo('#percentage');

```

## Run the application

* Run the application in the browser using the following command.

```shell
npm start
```

Output will be as follows:

> In the example, the `#element` is the `id` of the HTML element in a page to which the Progress Bar is initialized.

{% tab template="progressbar/progressbar", es5Template="es5_progressbar", sourceFiles="index.ts,index.html"  %}

```typescript

import { ProgressBar } from '@syncfusion/ej2-progressbar';

    let percentageProgress: ProgressBar = new ProgressBar({
        type: 'Linear',
        height: '60',
        value: 40,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
    });
    percentageProgress.appendTo('#percentage');

```

{% endtab %}