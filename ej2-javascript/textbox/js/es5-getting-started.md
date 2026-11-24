---
layout: post
title: Getting Started with ##Platform_Name## TextBox | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## TextBox control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## TextBox

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Textbox and demonstrate the basic usage of the Textbox control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Textbox component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Textbox control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Textbox CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Textbox component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/textbox/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```

## Adding TextBox to the application

Add an HTML input element with the `e-input` class to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 TextBox </title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/textbox/index.css" rel="stylesheet">
    <!--system js reference and configuration-->
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <div>
      <!--element which is going to render the TextBox-->
      <input class="e-input" type="text" placeholder="Enter Date" />
    </div>
</body>

</html>

```

## Adding icons to the TextBox

You can create a TextBox with icon as a group by creating the parent div element with the class `e-input-group` and add the icon element as span with the class `e-input-group-icon`. For detailed information, refer to the [Groups](./groups) section.

{% tabs %}
{% highlight html tabtitle="index.html" %}

      <!--element which is going to render the TextBox with date icon-->
      <div>
          <input id="textbox" />
      </div>

{% endhighlight %}
{% highlight html tabtitle="index.js" %}
```
    var iconTextBox = new ej.inputs.TextBox({
        placeholder: 'Enter Date',
        created: createHandler,
    });
    iconTextBox.appendTo('#textbox');

    function createHandler() {
       iconTextBox.addIcon('append', 'e-icons e-date-range');
    }

```
{% endhighlight %}
{% endtabs %}

* Now, run the application in the browser using the following command.

```
npm start
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/icon-samples-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/icon-samples-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/icon-samples-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs1" %}

## Floating label

The floating label TextBox floats the label above the TextBox after focusing, or filled with value in the TextBox.

You can create the floating label TextBox by using the [floatLabelType](https://ej2.syncfusion.com/javascript/documentation/api/textbox/index-default#floatLabelType) API.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textbox/textbox-component-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textbox/textbox-component-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textbox/textbox-component-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/textbox-component-cs1" %}

## See Also

* [How to render TextBox programmatically](./how-to/add-textbox-programmatically)
* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
