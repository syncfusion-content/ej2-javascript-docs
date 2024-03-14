---
layout: post
title: Getting started with ##Platform_Name## Textarea control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Textarea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## TextArea control

This section explains how to create a simple TextArea component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).


## Dependencies

The following list of dependencies are required to use the TextArea component in your application.

```js

|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base

```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

To render TextArea component, need to import inputs and its dependent components styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Adding TextArea to the application

Add the HTML Textarea tag with the `id` attribute as `default` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 TextArea</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 TextArea Components" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/20.3.56/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/20.3.56/ej2-inputs/styles/material.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
    <div>
        <!--Element to render the TextArea control-->
        <textarea id="default"></textarea>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the TextArea component in your `app.ts` file and initialize it with the `#default`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TextArea } from "@syncfusion/ej2-inputs";

// Initializes the TextArea control
let textareaObj: TextArea = new TextArea();

// Render initialized TextArea.
textareaObj.appendTo("#default");

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic TextArea control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/textarea/default-textarea-cs1/index.ts %}
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

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TextArea } from '@syncfusion/ej2-inputs';

// initializes the TextArea component
let textareaObj: TextArea = new TextArea({
        // sets value to the TextArea
        value: 'Comments'
});
// Append the component to the target element
textareaObj.appendTo('#default');

{% endhighlight %}
{% endtabs %}

* You can also set the value by enclosing the desired text within the opening and closing tags of the textarea element.

{% tabs %}
{% highlight ts tabtitle="app.html" %}

// initializes the TextArea component
<textarea id="default">Comments</textarea>

{% endhighlight %}
{% endtabs %}

* Alternatively, you can set the value to the textarea element by assigning text to the `value` property using the textarea instance.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TextArea } from '@syncfusion/ej2-inputs';

// initializes the TextArea component
let textareaObj: TextArea = new TextArea();
textareaObj.appendTo('#default');
// Set value to the TextArea component
textareaObj.value = 'comments';

{% endhighlight %}
{% endtabs %}

* You can dynamically retrieve the value of the TextArea component using the `value` property from the TextArea component instance.

`[src/index.html]`

{% tabs %}
{% highlight ts tabtitle="app.html" %}

// initializes the TextArea component
<div>
    <textarea id="default"></textarea>
    <button id="valuebtn">Get Value</button>
</div>

{% endhighlight %}
{% endtabs %}

`[src/index.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TextArea } from '@syncfusion/ej2-inputs';

// initializes the TextArea component
let textareaObj: TextArea = new TextArea();
textareaObj.appendTo('#default');
// gets value from TextArea component instance
document.getElementById('valuebtn').onclick = function () {
    let textareaValue = textareaObj.value;
}

{% endhighlight %}
{% endtabs %}

* You can retrieve the value of the TextArea by accessing it as an argument from the [`change`](../api/textarea/#change) event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { TextArea, ChangedEventArgs } from '@syncfusion/ej2-inputs';

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

{% endhighlight %}
{% endtabs %}
