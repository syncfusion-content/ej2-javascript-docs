---
layout: post
title: Getting started with ##Platform_Name## Floating action button control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Floating action button control

This section explains how to create a simple application with Floating Action Button control and to configure it.

## Dependencies

The list of dependencies required to use the Floating Action Button control in your application is given as follows:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup your development environment

To get started with the Floating Action Button control, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart) project using the following commands:

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js`) to start all the Essential JS 2 components.

* Refer to the [Floating Action Button control dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

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

## Adding Floating Action Button to the Application

Add the HTML Button tag with ID attribute as the `fab` to your `index.html` file.

`[src/index.html]`

```
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

    <!--Style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--System js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
        <!--Element to render the Floating Action Button control-->
        <button id="fab"></button>
    </div>

</body>

</html>
```

Then, import the Floating Action Button control in your `app.ts` file, and initialize it with the `#fab`.

`[src/app/app.ts]`

```ts
import { Fab } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Floating Action Button control.
let fab: Fab = new Fab({ content: 'Add' });

// Render initialized Floating Action Button.
fab.appendTo('#fab');
```

## Adding style sheet to the application

To render Floating Action Button control, need to import Button and its dependent components styles as given below in `style.css`.

```
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
```

## Run the application

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Floating Action Button control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/getting-started-cs1" %}

## Click event

The floating action button control triggers the `onclick` event when you click on the floating action button. You can use this event to perform the required action.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/events-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/events-cs4/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/events-cs4/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs4" %}
