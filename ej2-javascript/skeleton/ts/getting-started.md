---
layout: post
title: Getting started with ##Platform_Name## Skeleton control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Skeleton control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Skeleton control

This section explains how to create a simple Skeleton and to configure it.

## Dependencies

The list of dependencies required to use the Skeleton component in your application is given as follows:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the Skeleton component, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart)
project using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart

cd quickstart

npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [Skeleton component dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
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

## Adding Skeleton to the Application

Add the HTML div tag with ID attribute as the `skeleton` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Skeleton</title>
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
    <div id="container">
        <!--Element which is going to render-->
        <div id="skeleton"></div>
    </div>
</body>

</html>
```

Then, import the Skeleton component in your `app.ts` file, and initialize it with the `#skeleton`.

`[src/app/app.ts]`

```ts
import { Skeleton } from '@syncfusion/ej2-notifications';

// Initialize the Skeleton component.
let skeleton: Skeleton = new Skeleton({height:'15px'});

// Render initialized Skeleton.
skeleton.appendTo('#skeleton');
```

## Adding Style sheet to the Application

To render Skeleton component, need to import notifications and its dependent components styles as given below in `style.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Skeleton component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/skeleton/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs2" %}
