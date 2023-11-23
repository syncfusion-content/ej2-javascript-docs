---
layout: post
title: Getting started with ##Platform_Name## Accordion control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Accordion control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Accordion control

This section briefly explains about how to create a simple **Accordion** using TypeScript and
configure the Accordion items using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Accordion component in your application.

```js
|-- @syncfusion/ej2-navigations
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

The Accordion CSS files are available in the `ej2-navigations` package folder. This can be referenced in the `~/src/styles/styles.css` file your application using the following code.

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  
{% endhighlight %}
{% endtabs %}

## Initialize the Accordion using Items

Open the application in Visual Studio Code and add the Syncfusion JavaScript UI controls.

The Accordion can be rendered by defining an array of [`items`](../api/accordion#items).

* Add the HTML div tag with its `id` attribute as `element` in your `index.html` file to initialize the Accordion.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Accordion</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element"></div>
    </div>
</body>

</html>
{% endhighlight %}
{% endtabs %}

* Import the Accordion component to your `app.ts` file and initialize it to the `#element` as shown below.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Accordion } from '@syncfusion/ej2-navigations';

// Initialize Accordion component
let accordion: Accordion = new Accordion({
    items: [
      { header: 'ASP.NET', content: 'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' },
      { header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' },
      { header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' },
    ]
});

// Render initialized Accordion
accordion.appendTo('#element');

{% endhighlight %}
{% endtabs %}

* Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be as follows:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/accordion/accordion-cs7" %}

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the Accordion is initialized.

## Initialize the Accordion using HTML elements

The Accordion component can be rendered based on the given HTML element using `id` as `target` property.
You need to follow the below structure of HTML elements to render the Accordion.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<div id='accordion_html_markup'>   --> Root Accordion Element
    <div>      --> Accordion Item Container
        <div>   --> Accordion Header Container
            <div> </div> --> Accordion Header
        </div>
        <div>  --> Accordion Panel Container
            <div> </div> --> Accordion Content
        </div>
    </div>
</div>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/accordion/accordion-template-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/accordion/accordion-template-cs3" %}

> You can add the custom class into Accordion component using [`cssClass`](../api/accordion/accordionItem#cssclass) property which is used to customize the Accordion component.

## See Also

* [How to load accordion items dynamically](./how-to/load-accordion-items-dynamically/)

N> You can refer to our [JavaScript Accordion](https://www.syncfusion.com/javascript-ui-controls/js-accordion) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Accordion example](https://ej2.syncfusion.com/demos/#/fabric/accordion/default.html) that shows you how to render the Accordion in JavaScript.