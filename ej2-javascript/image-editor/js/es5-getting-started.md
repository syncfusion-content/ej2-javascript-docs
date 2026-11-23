---
layout: post
title: Getting started with ##Platform_Name## Image Editor | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Image Editor control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Image Editor

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Image Editor and demonstrate the basic usage of the Image Editor control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Image Editor component in your application is given below:

```js
|-- @syncfusion/ej2-image-editor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Image Editor control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Image Editor CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`, `ej2-buttons`,`ej2-inputs`, `ej2-navigations`, `ej2-popups`, `ej2-splitbuttons` script is the required dependency package for the Image Editor component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/image-editor/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-image-editor/dist/global/ej2-image-editor.min.js
```

## Add the Image Editor control to the application

Add an HTML DIV element with the `id` attribute set to `image editor` in your `index.html` file:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/es5-getting-started-cs1" %}
