---
layout: post
title: Getting started with ##Platform_Name## Message control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Message control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Message control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message and demonstrate the basic usage of the Message control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Message component in your application is given below:

```javascript
|-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control.

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

## Adding CSS reference

The combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in the `[src/styles/styles.css]` file using the following code.

```bash
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';

```

> To add the individual control CSS, refer to the [individual control theme](../appearance/theme#referring-individual-control-theme) section. To use the combined control styles, make use of Syncfusion<sup style="font-size:70%">&reg;</sup> [`CRG`](https://crg.syncfusion.com) (Custom Resource Generator) in the application.

## Add Message control

Now, start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control to the application. To get started, add an HTML `<div>` element to the `index.html` file.

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Message control</title>
    <link rel="stylesheet" href="./styles/styles.css">
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js" type="text/javascript"></script>
</head>
<body>
    <!--Element which will render as Message-->
    <div id="msg"></div>
</body>
<script>
    var msgObj = new ej.notfications.Message({
        content: "Please read the comments carefully"
    });
    msgObj.appendTo("#msg");
</script>
</html>
```

## Run the application

Run the application in the browser using the following command.

```
npm start
```

The following example shows a basic Message control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/message/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/es5-getting-started-cs1" %}