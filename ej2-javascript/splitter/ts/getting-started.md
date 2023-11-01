---
layout: post
title: Getting started with ##Platform_Name## Splitter control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Splitter control

This section explains how to create a simple **Splitter** component and configure its available functionalities, using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies required to use the splitter control in your application:

```js
|-- @syncfusion/ej2-layouts
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

The Splitter CSS files are available in the `ej2-layouts` package folder. This can be referenced in the `~/src/styles/styles.css` file of your application using the following code. 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';

{% endhighlight %}
{% endtabs %}

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls.
> This web tool is useful to combine the required control scripts and styles in a single file.

## Adding splitter to the project

The splitter can be initialized through div tag with child elements. Add the div element with the id attribute `#splitter` inside the body tag in your `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 splitter control</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id='container'>
        <!--element which is render as splitter-->
        <div id="splitter">
            <!--list of splitter panes-->
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Now, import the  splitter control to your `app.ts` and initialize it to the element `#splitter` as follows.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize Splitter control
let splitObject: Splitter = new Splitter({
    height: '250px',
    width: '600px'
});

// Render initialized splitter
splitObject.appendTo('#splitter');

{% endhighlight %}
{% endtabs %}

## Load content to the pane

You can load the pane contents in either HTML element or string types using [content](../api/splitter/panePropertiesModel/#content) property.

For detailed information, refer to the [pane content](./pane-content/) section.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Splitter } from '@syncfusion/ej2-layouts';

// Initialize splitter control
let splitObj: Splitter = new Splitter({
    paneSettings: [
        // Content for Pane 1
        { content:'Left Pane' },

        // Content for Pane 2
        { content:'Middle Pane' },

        // Content for Pane 3
        { content:'Right Pane' }
    ],
    height: '250px'
});

// Render initialized splitter
splitObj.appendTo('#splitter');

{% endhighlight %}
{% endtabs %}

## Run the application

After completing the configuration to render the splitter, run the following command to display
the output in your default browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example illustrates the output in your browser.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/splitter/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs2" %}

## See Also

* [Resizable split panes](./resizing/)
* [Collapsible panes](./expand-and-collapse/)
* [Construct different layouts using Splitter](./different-layouts/)