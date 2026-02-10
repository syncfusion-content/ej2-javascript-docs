---
layout: post
title: Getting started | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Numerictextbox control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## NumericTextBox control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Numeric textbox and demonstrate the basic usage of the Numeric textbox control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Numeric textbox component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Numeric textbox control.

## Add NumericTextBox to the project

Add an HTML input element for the NumericTextBox in your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 NumericTextBox component</title>
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
    <div>
      <!--element which is going to render the NumericTextBox -->
          <input id="numeric" type="text" />
    </div>

<script>
// initializes NumericTextBox component
var numeric = new ej.inputs.NumericTextBox({
    // sets value to the NumericTextBox
    value: 10
});

// renders initialized NumericTextBox
numeric.appendTo('#numeric');
</script>
</body>

</html>

```

## Run the application

Now use the `npm run start` command to run the application in the browser.

```
npm run start
```

The following example demonstrates the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/es5-getting-started-cs1" %}

## Range validation

You can set the minimum and maximum range of values in the NumericTextBox using the [`min`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#min) and [`max`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#max) properties. The numeric value must fall within the specified range.

The validation behavior depends on the [`strictMode`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#strictmode) property.

The following example demonstrates range validation.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/es5-getting-started-cs2" %}

## Formatting the value

User can set the format of the NumericTextBox component using [`format`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#format) property. The value will be displayed in the specified format, when the component is in focused out state. For more information about formatting the value, refer to this [link](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/formats).

The following example demonstrates formatting the value using currency format `c2`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/es5-getting-started-cs3" %}

## Precision of numbers

You can restrict the number of decimals to be entered in the NumericTextBox using the [`decimals`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#decimals) and [`validateDecimalOnType`](https://ej2.syncfusion.com/javascript/documentation/api/numerictextbox/index-default#validatedecimalontype) properties. You cannot enter numbers with precision greater than the specified decimal places.

* If `validateDecimalOnType` is false, number of decimals will not be restricted. Else, number of decimals will be restricted while typing in the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/numeric-textbox/es5-getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/es5-getting-started-cs4" %}

## See Also

* [How to perform custom validation using FormValidator](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/perform-custom-validation-using-form-validator)
* [How to customize the UI appearance of the control](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/customize-the-ui-appearance-of-the-control)
* [How to customize the spin button’s up and down arrow](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/customize-the-spin-buttons-up-and-down-arrow)
* [How to customize the step value and hide spin buttons](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/customize-the-step-value-and-hide-spin-buttons)
* [How to prevent nullable input in NumericTextBox](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/prevent-nullable-input-in-numerictextbox)
* [How to maintain trailing zeros in NumericTextBox](https://ej2.syncfusion.com/javascript/documentation/numerictextbox/how-to/maintain-trailing-zeros-in-numerictextbox)
