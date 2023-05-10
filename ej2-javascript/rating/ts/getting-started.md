---
layout: post
title: Getting started with ##Platform_Name## Rating control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rating control

This section explains how to create a simple application with Rating control and to configure it.

## Dependencies

The list of dependencies required to use the Rating control in your application is given as follows:

```javascript
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
```

## Setup your development environment

To get started with the Rating control, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) project using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [`Rating control dependencies`](./getting-started#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js"
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

## Adding Rating to the Application

Add the HTML input tag with ID attribute as the `rating` to your `index.html` file.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Rating</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 Rating" />
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
        <!--Element to render the rating control-->
        <input id="rating"/>
    </div>

</body>

</html>

```

Then, import the Rating control in your `app.ts` file, and initialize it with the `#rating`.

`[src/app/app.ts]`

```ts

import { Rating } from '@syncfusion/ej2-inputs';

// Initializes the Rating control
let rating: Rating = new Rating();

// Render initialized Rating.
rating.appendTo('#rating');
```

## Adding Style sheet to the Application

To render Rating control, need to import inputs and its dependent controls styles as given below in `styles.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
```

## Run the application

Run the application in the browser using the following command.

```
npm start
```

The following example shows a basic Rating control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](../api/rating#value) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/value-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/value-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/value-cs2" %}
