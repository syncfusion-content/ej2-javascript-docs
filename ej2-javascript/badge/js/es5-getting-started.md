---
layout: post
title: Getting Started with ##Platform_Name## Badge | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Badge control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Badge

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge and demonstrate the basic usage of the Badge control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Badge component in your application is given below:

```javascript
|-- @syncfusion/ej2-notifications
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Badge CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/badge/index.css
```

## Initialize the Badge using HTML elements

**Step 1:** Now, create a `span` element to apply the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control in the `index.html` by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/badge/index.css" rel="stylesheet" type="text/css"/>

       </head>
       <body>
            <!-- Add the HTML <span> element  -->
            <h1>Badge control <span class="e-badge e-badge-primary">New</span></h1>
       </body>
  </html>
```

**Step 2:** Create an HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `span` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/es5-getting-started-cs1" %}

**Step 3:** Now, run the `index.html` in the web browser to display the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Badge** control.

## See Also

[Types of Badge](./types)
