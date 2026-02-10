---
layout: post
title: Getting started | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Maskedtextbox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## MaskedTextBox control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Masked textbox and demonstrate the basic usage of the Masked textbox control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Masked textbox component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Masked textbox control.


## Add MaskedTextBox to the project

Add an HTML input element to be rendered as MaskedTextBox in your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 MaskedTextBox</title>
    <!-- Essential JS 2 Input's's dependent material theme -->
  <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

  <!-- Essential JS 2 all script -->
  <!-- <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

  <!-- Essential JS 2 Input's's dependent scripts -->
  <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <div style="margin: 50px;">
        <!--input element which needs to be rendered/converted as MaskedTextBox-->
        <input id="mask" type="text" />
    </div>

<script>
// initializes the MaskedTextBox component
var mask = new ej.inputs.MaskedTextBox();

mask.appendTo('#mask');
</script>
</body>

</html>

```

## Set the mask

You can set the mask to the MaskedTextBox to validate the user input by using the [`mask`](https://ej2.syncfusion.com/javascript/documentation/api/maskedtextbox/index-default#mask) property. To know more about the usage of mask and configuration, refer to this [link](https://ej2.syncfusion.com/javascript/documentation/maskedtextbox/mask-configuration).

The following example demonstrates the usage of mask element `0`, which allows any single digit from `0` to `9`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 MaskedTextBox</title>
   <!-- Essential JS 2 Input's's dependent material theme -->
  <link href="//cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
    <link href="//cdn.syncfusion.com/ej2/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css"/>

  <!-- Essential JS 2 all script -->
  <!-- <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

  <!-- Essential JS 2 Input's's dependent scripts -->
  <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
  <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
</head>

<body>
    <div style="margin: 50px;">
        <!--input element which needs to be rendered/converted as MaskedTextBox-->
        <input id="mask" type="text" />
    </div>

<script>
// initializes the MaskedTextBox component and sets mask format
var mask = new ej.inputs.MaskedTextBox({mask: '000-000-0000'});

mask.appendTo('#mask');
</script>
</body>

</html>

```

## Run the application

Use the following command to run the application in the browser.

```
npm run start
```

The following example demonstrates the MaskedTextBox with the mask element `0`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/maskedtextbox/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maskedtextbox/es5-getting-started-cs1" %}

## See Also

* [How to perform custom validation using FormValidator](https://ej2.syncfusion.com/javascript/documentation/maskedtextbox/how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](https://ej2.syncfusion.com/javascript/documentation/maskedtextbox/how-to/customize-the-ui-appearance-of-the-control)
* [How to set cursor position while focus on the input textbox](https://ej2.syncfusion.com/javascript/documentation/maskedtextbox/how-to/set-cursor-position-while-focus-on-the-input-textbox)
* [How to display numeric keypad when focus on mobile devices](https://ej2.syncfusion.com/javascript/documentation/maskedtextbox/how-to/display-numeric-keypad-when-focus-on-mobile-devices)
