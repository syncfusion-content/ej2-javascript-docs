---
layout: post
title: Getting Started with ##Platform_Name## Skeleton | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Skeleton control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Skeleton

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton and demonstrates the basic usage of the Skeleton control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Skeleton component in an application is given below:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up the local environment.

**Step 1:** Create a root folder named **my-app** for the application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Skeleton CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the Skeleton component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/skeleton/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-notifications/dist/global/ej2-notifications.min.js
```

## Initialize the Skeleton using HTML elements

Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the
`Skeleton` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Skeleton** control in the index.html using the following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Essential JS 2</title>

    <!-- Essential JS 2 Skeleton's control style -->
    <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/skeleton/index.css" rel="stylesheet" type="text/css" />

    <!-- Essential JS 2 Skeleton's dependency global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>

    <!-- Essential JS 2 Skeleton's control global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js"
        type="text/javascript"></script>
</head>

<body>
    <!-- element which is going to render -->
    <div id='skeleton'></div>
    <script>

        // initialize Skeleton control
        var skeleton = new ej.notifications.Skeleton({ height: '15px' });

        // Render initialized Skeleton.
        skeleton.appendTo('#skeleton');
    </script>
</body>

</html>
```

Now, run the `index.html` in a web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Skeleton** control.

The output will be as follows:

> In the previous example, the `#skeleton` is the `id` of the HTML element in a page to which the skeleton is initialized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/skeleton/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/skeleton/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/skeleton/getting-started-cs1" %}
