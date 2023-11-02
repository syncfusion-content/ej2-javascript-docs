---
layout: post
title: Getting started with ##Platform_Name## Stepper control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Stepper control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Stepper
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Stepper control

This section explains how to create a simple Stepper in TypeScript using Essential JS 2 QuickStart seed repository.

## Dependencies

The following list of dependencies are required to use the Stepper control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
```

## Setup your development environment

To get started with the Stepper control, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is pre-configured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 controls.

* Refer to the [`Stepper control dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
  paths: {
    "npm:": "./node_modules/",
    "syncfusion:": "npm:@syncfusion/",
  },
  map: {
    app: "app",

    //Syncfusion packages mapping
    "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
    "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
  },
  packages: {
    app: { main: "app", defaultExtension: "js" },
  },
});

System.import("app.ts");
```

## Adding Style sheet to the Application

To render Stepper control, need to import navigations and its dependent controls styles as given below in `styles.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Adding Stepper control to the application

Add the HTML nav tag with the `id` attribute as `stepper` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Essential JS 2 - Stepper</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from node_modules/@syncfusion/ej2/-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
  </head>

  <body>
    <div>
      <nav id="stepper"></nav>
    </div>
  </body>
</html>
```

Import the Stepper control in your `app.ts` file, define the steps using `steps` property and initialize it with the `#stepper`.

`[src/app/app.ts]`

```ts

import { Stepper } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}, {}],
});
stepper.appendTo("#stepper");

```

## Run the application

Run the application in the browser by using the following command:

```
npm start
```

The following example shows a basic Stepper control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stepper/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stepper/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/stepper/getting-started-cs1" %}
