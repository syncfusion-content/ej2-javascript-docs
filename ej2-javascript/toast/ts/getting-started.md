---
layout: post
title: Getting started with ##Platform_Name## Toast control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Toast control

This section explains the steps required to create the toast control using TypeScript and configure its properties using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) &nbsp;seed repository.

## Dependencies

The following list of dependencies are required to use the toast control in your application:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Set up your development environment

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git), and install the necessary npm packages using the following command.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. For better understanding, remove all the dependencies from `src/system.config.js` to get started with the toast component.

* Refer to the [Toast component dependencies](#dependencies) in `system.config.js` configuration file.

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
        "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

* The toast CSS files are available in the `ej2-notifications` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
```

## Add toast to the Application

The toast message can be rendered by defining an `title` or `content`.

* Add an HTML div tag with its id attribute as `element` in your `index.html` file to initialize the toast control.

`[src/index.html]`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Toast</title>
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
        <div id="element"></div>
    </div>

</body>

</html>
```

* Import the toast control to your `app.ts` file, and initialize it to the `#element` as shown.

`[src/app/app.ts]`

```ts

import { Toast } from '@syncfusion/ej2-notifications';

// Initialize Toast component
let toast: Toast = new Toast({
    title: 'Matt sent you a friend request',
    content: 'You have a new friend request yet to accept'
});

// Render initialized Toast
toast.appendTo('#element');

```

## Running the application

* Run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

> In the example, the `#element` is the `id` of the HTML element in a page to which the toast is initialized.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/toast/toast-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/toast/toast-cs10" %}

## See Also

* [How to close the toast with click/tap](./how-to/close-the-toast-with-click-tap/)
* [How to prevent duplicate toast display](./how-to/prevent-duplicate-toast-display/)
* [How to show different types of toast](./how-to/show-different-types-of-toast/)
