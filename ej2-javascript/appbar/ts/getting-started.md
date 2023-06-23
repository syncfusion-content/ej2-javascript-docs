---
layout: post
title: Getting started with ##Platform_Name## Appbar control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Appbar control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Appbar control

This section explains how to create a simple AppBar and configure its available functionalities in TypeScript using Essential JS 2 QuickStart seed repository.

## Dependencies

The following list of dependencies are required to use the AppBar component in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the AppBar component, clone [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart), and install the npm packages using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is pre-configured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [`AppBar component dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

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
    "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
    "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
    "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
    "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
    "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
    "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
  },
  packages: {
    app: { main: "app", defaultExtension: "js" },
  },
});

System.import("app.ts");
```

## Adding Style sheet to the Application

To render AppBar component, need to import navigations and its dependent components styles as given below in `styles.css`.

```
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Adding AppBar component to the application

Add the HTML header tag with the `id` attribute as `appbar` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Essential JS 2 - AppBar</title>
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
    <div class="control-container">
      <header id="appbar"></header>
    </div>
  </body>
</html>
```

Import the AppBar component in your `app.ts` file and initialize it with the `#appbar`.

`[src/app/app.ts]`

```ts
import { AppBar } from "@syncfusion/ej2-navigations";

const apparObj = new AppBar({
  colorMode: 'Primary'
});
appbarObj.appendTo("#appbar");
```

## Run the application

Run the application in the browser using the following command:

  ```
  npm start
  ```

The following example shows a basic AppBar component.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/appbar/getting-started-cs1" %}
