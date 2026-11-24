---
layout: post
title: Getting Started with ##Platform_Name## Color Picker | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Color Picker control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Color Picker

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Color picker and demonstrate the basic usage of the Color picker control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Color picker component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Color picker control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® ColorPicker CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`,  `ej2-splitbuttons`, `ej2-buttons` and `ej2-popups` scripts are required dependency packages for the ColorPicker component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/color-picker/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```


## Inline type

By default, the ColorPicker will be rendered using SplitButton and open the pop-up to access the ColorPicker. To render the ColorPicker container alone and to access it directly, render it as inline. It can be achieved by setting the [`inline`](../api/color-picker#inline) property to `true`.

The following example demonstrates inline type rendering of the ColorPicker.

`[src/index.html]`

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 ColorPicker's dependency style -->
            <link href="resources/base/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/popups/material.css" rel="stylesheet" type="text/css"/>
            <link href="resources/splitbuttons/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 ColorPicker's control style -->
            <link href="resources/inputs/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 ColorPicker's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 ColorPicker's control global script -->
            <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
    </head>
    <body>
            <input type="file" id="fileupload" name="UploadFiles">
        <script>
            // initialize ColorPicker control
            var colorPicker = new ej.inputs.ColorPicker({
                //To render control as inline(flat).
                inline: true,
                showButtons: false
            }, "#element");
        </script>
    </body>
</html>
```

>> The `showButtons` property is disabled in this sample because the control buttons are not needed for inline type. To know about the control buttons functionality, refer to the [`showButtons`](./how-to#hide-control-buttons) sample.

## Adding ColorPicker component to the application

To render the ColorPicker container alone and access it directly, set the [`inline`](https://ej2.syncfusion.com/javascript/documentation/api/color-picker/index-default#inline) property to `true`.

The following example demonstrates inline type rendering of the ColorPicker.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/colorpicker/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/es5-getting-started-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/colorpicker/es5-getting-started-cs2" %}


## See Also

* [Set color value](./mode-and-value#color-value)
* [ColorPicker customization](./how-to/customize-colorpicker)