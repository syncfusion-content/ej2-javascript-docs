---
layout: post
title: Getting Started with ##Platform_Name## Speed Dial | Syncfusion
description: Learn how to get started with the ##Platform_Name## Speed Dial in JavaScript (ES5) from package setup to first render.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Speed Dial

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Speed dial and demonstrate the basic usage of the Speed dial control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Speed dial component in your application is given below:

```js
|-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Speed dial control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® SpeedDial CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the SpeedDial component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/speed-dial/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
```

## Adding SpeedDial component to the application

Add the `SpeedDial` element, define the action items using [`items`](../api/speed-dial#items) property and initiate the `JavaScript (ES5) SpeedDial` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/es5-getting-started-cs1" %}