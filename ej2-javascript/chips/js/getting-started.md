---
layout: post
title: Getting started with ##Platform_Name## Chips control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Chips control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Chips control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Chips and demonstrate the basic usage of the Chips control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Chips component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Chips control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Chips CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Chips component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/chips/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```
## Adding Chips component to the application

Add the `<div>` element and initialize the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Chips** control in `index.html` using the following code:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chips/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chips/es5-getting-started-cs1" %}

**Step 4:** Run the `index.html` in a web browser to render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Chips** control.
