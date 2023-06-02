---
layout: post
title: Getting started with ##Platform_Name## Message control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Message control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Message control

This section explains the steps required to create a simple JavaScript Message control and configure its available functionalities in the TypeScript using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) seed repository. This seed repository is pre-configured with all the Essential JS 2 packages.

## Dependencies

The following list of dependencies are required to use the Message control in the application.

```javascript
|-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
```

## Setup for local development

To get started with the Message control, clone the Essential JS 2 [`quickstart`](https://github.com/syncfusion/ej2-quickstart) project, and install the necessary npm packages by using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Configuring system JS

The [Syncfusion Message packages](#dependencies) should be mapped in the `system.config.js` configuration file.

```bash
System.config({
    paths: {
        'npm:': './node_modules/',
        'syncfusion:': 'npm:@syncfusion/'
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons":"syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups":"syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-notifications":"syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');

```

## Adding CSS reference

The combined CSS files are available in the Essential JS 2 package root folder. This can be referenced in the `[src/styles/styles.css]` file using the following code.

```bash
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';

```

> To add the individual control CSS, refer to the [individual control theme](../appearance/theme/#referring-individual-control-theme) section. To use the combined control styles, make use of Syncfusion [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in the application.

## Add Message control

Now, start adding the Essential JS 2 Message control to the application. To get started, add the HTML `<div>` element to the `index.html` file.

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Message control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 Message" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/styles/styles.css" rel="stylesheet" />
</head>
<body>
    <!--Element which will render as Message-->
    <div id="msg"></div>
</body>

</html>
```

 Add the following code in the `app.ts` file to convert the `div` element to message control.

 `[src/app/app.ts]`

```ts
import { Message } from '@syncfusion/ej2-notifications'
let msgObj: Message = new Message({
    content: 'Please read the comments carefully'
});
msgObj.appendTo('#msg');
```

## Run the application

Run the application in the browser using the following command.

```
npm start
```

The following example shows a basic Message control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs1" %}