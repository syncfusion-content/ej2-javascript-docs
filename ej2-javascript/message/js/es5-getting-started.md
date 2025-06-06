---
layout: post
title: Es5 getting started with ##Platform_Name## Message control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Message control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Message control

This section explains the steps required to create a simple JavaScript (ES5) Message control and configure its available functionalities in the TypeScript using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart) seed repository. This seed repository is pre-configured with all the Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages.

## Dependencies

The following list of dependencies are required to use the Message control in the application.

```javascript
|-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
```

## Setup for local development

To get started with the Message control, clone the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [`quickstart`](https://github.com/syncfusion/ej2-quickstart) project, and install the necessary npm packages by using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

## Adding CSS reference

The combined CSS files are available in the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package root folder. This can be referenced in the `[src/styles/styles.css]` file using the following code.

```bash
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';

```

> To add the individual control CSS, refer to the [individual control theme](../appearance/theme/#referring-individual-control-theme) section. To use the combined control styles, make use of Syncfusion<sup style="font-size:70%">&reg;</sup> [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in the application.

## Add Message control

Now, start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control to the application. To get started, add the HTML `<div>` element to the `index.html` file.

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