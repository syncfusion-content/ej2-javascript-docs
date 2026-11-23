---
layout: post
title: Getting Started with ##Platform_Name## Message | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Message control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Message

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message and demonstrates the basic usage of the Message component in a JavaScript application.

## Dependencies

The list of dependencies required to use the Message component in an application is given below:

```javascript
|-- @syncfusion/ej2-notifications
  |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-buttons
  |-- @syncfusion/ej2-popups
```

## Setup for local environment

Refer to the following steps to set up the local environment.

**Step 1:** Create a root folder named **my-app** for the application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Message CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the message component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/message/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-notifications/dist/global/ej2-notifications.min.js
```

## Add Message control

Now, start adding the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Message control to the application. To get started, add an HTML `<div>` element to the `index.html` file.

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Message control</title>
    <link rel="stylesheet" href="./styles/styles.css">
    <script src="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/message/index.css" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js" type="text/javascript"></script>
</head>
<body>
    <!--Element which will render as Message-->
    <div id="msg"></div>
</body>
<script>
    var msgObj = new ej.notifications.Message({
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