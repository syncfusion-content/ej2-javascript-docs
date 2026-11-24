---
layout: post
title: Getting Started with ##Platform_Name## TextArea | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## TextArea control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## TextArea

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 TextArea and demonstrate the basic usage of the TextArea control in a JavaScript application.

## Dependencies

The list of dependencies required to use the TextArea component in your application is given below:

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 TextArea control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Textarea CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base` scripts are required dependency packages for the Textarea component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/textarea/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
```

## Adding TextArea to the application

Add the HTML Textarea tag with the `id` attribute as `default` to your `index.html` file.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 TextArea</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/textarea/index.css" rel="stylesheet">

    <!--system js reference and configuration-->
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>
<body>
    <div>
        <!--Element to render the TextArea control-->
        <textarea id="default"></textarea>
    </div>
    <script>
        // initialize TextArea control
        var textareaObj = new ej.inputs.TextArea();
        textareaObj.appendTo('#default');
    </script>
</body>

</html>

```

* Now, run the application in the browser using the following command.

```
npm start
```

The following example shows a basic TextArea control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/textarea/default-textarea-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/textarea/default-textarea-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/textarea/default-textarea-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textarea/default-textarea-cs1" %}

## Getting and setting values

To set the initial value of the TextArea control, use the [value](https://ej2.syncfusion.com/javascript/documentation/api/textarea/index-default#value) property as shown below:

```js
// initializes the TextArea Control
var textareaObj = new ej.inputs.TextArea({
    // set value to the TextArea
    value: 'Comments'
});
// Append the component to the target element
textareaObj.appendTo('#default');

```

* You can also set the value by enclosing the desired text within the opening and closing tags of the textarea element.

```html
<!--initializes the TextArea Control-->
<textarea id="default">Comments</textarea>

```

* Alternatively, you can set the value to the textarea element by assigning text to the `value` property using the textarea instance.

```js
// initializes the TextArea Control
var textareaObj = new ej.inputs.TextArea();
textareaObj.appendTo('#default');
// Set value to the TextArea Control
textareaObj.value = 'comments';

```

* You can dynamically retrieve the value of the TextArea Control using the `value` property from the TextArea component instance.

`[src/index.html]`

```html
<!--initializes the TextArea Control-->
<div>
    <textarea id="default"></textarea>
    <button id="valuebtn">Get Value</button>
</div>

```

`[src/index.js]`

```js
// initializes the TextArea Control
let textareaObj: TextArea = new TextArea();
textareaObj.appendTo('#default');
// gets value from TextArea Control instance
document.getElementById('valuebtn').onclick = function () {
    let textareaValue = textareaObj.value;
}

```

* You can retrieve the value of the TextArea by accessing it as an argument from the [change](https://ej2.syncfusion.com/javascript/documentation/api/textarea/index-default#change) event.

```js
// initializes the TextArea Control
let textareaObj: TextArea = new TextArea({
    change: (args: ChangedEventArgs )=> {
       // Get the value of the TextArea from the arguments
       console.log(args.value);
    }
});
textareaObj.appendTo('#default');
// Set value to the TextArea Control
textareaObj.value = 'comments';

```
