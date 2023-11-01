---
layout: post
title: Getting started with ##Platform_Name## Rating control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Rating control

This section explains how to create a simple Rating component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).


## Dependencies

The list of dependencies required to use the Rating control in your application is given as follows:

```javascript
|-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
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

To render Rating control, need to import inputs and its dependent controls styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding Rating to the Application

Add the HTML input tag with ID attribute as the `rating` to your `index.html` file.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Rating</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2 Rating" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div>
        <!--Element to render the rating control-->
        <input id="rating"/>
    </div>

</body>

</html>

{% endhighlight %}
{% endtabs %}

Then, import the Rating control in your `app.ts` file, and initialize it with the `#rating`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Rating } from '@syncfusion/ej2-inputs';

// Initializes the Rating control
let rating: Rating = new Rating();

// Render initialized Rating.
rating.appendTo('#rating');

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

The following example shows a basic Rating control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/getting-started-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/getting-started-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/getting-started-cs1" %}

## Value

You can set the rating value by using the [`value`](../api/rating/#value) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rating/value-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rating/value-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rating/value-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rating/value-cs2" %}
