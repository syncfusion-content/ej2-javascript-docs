---
layout: post
title: Es5 getting started with ##Platform_Name## TextArea control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## TextArea control

This section explains how to create a simple TextArea component and configure its available functionalities, using Essential JS 2 quickstart seed repository.

## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```js
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base

```

## Installation and configuration

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) and install necessary npm packages using the following command.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. For better understanding, remove all the dependencies from
`src/system.config.js` to get started with the TextArea component.

* Refer to the [TextArea component dependencies](#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

* The TextArea CSS files are available in the `ej2-inputs` package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
```

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

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

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
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

To set the initial value of the TextArea component, you can utilize the [`value`](../api/textarea/#value) property. Here's how you can achieve it:

```js
// initializes the TextArea component
var textareaObj = new ej.inputs.TextArea({
    // set value to the TextArea
    value: 'Comments'
});
// Append the component to the target element
textareaObj.appendTo('#default');

```

* You can also set the value by enclosing the desired text within the opening and closing tags of the textarea element.

```html
<!--initializes the TextArea component-->
<textarea id="default">Comments</textarea>

```

* Alternatively, you can set the value to the textarea element by assigning text to the `value` property using the textarea instance.

```js
// initializes the TextArea component
var textareaObj = new ej.inputs.TextArea();
textareaObj.appendTo('#default');
// Set value to the TextArea component
textareaObj.value = 'comments';

```

* You can dynamically retrieve the value of the TextArea component using the `value` property from the TextArea component instance.

`[src/index.html]`

```html
<!--initializes the TextArea component-->
<div>
    <textarea id="default"></textarea>
    <button id="valuebtn">Get Value</button>
</div>

```

`[src/index.js]`

```js
// initializes the TextArea component
let textareaObj: TextArea = new TextArea();
textareaObj.appendTo('#default');
// gets value from TextArea component instance
document.getElementById('valuebtn').onclick = function () {
    let textareaValue = textareaObj.value;
}

```

* You can retrieve the value of the TextArea by accessing it as an argument from the [`change`](../api/textarea/#change) event.

```js
// initializes the TextArea component
let textareaObj: TextArea = new TextArea({
    change: (args: ChangedEventArgs )=> {
       // Get the value of the TextArea from the arguments
       console.log(args.value);
    }
});
textareaObj.appendTo('#default');
// Set value to the TextArea component
textareaObj.value = 'comments';

```
