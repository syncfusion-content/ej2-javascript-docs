---
layout: post
title: Getting started with ##Platform_Name## Card control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Card control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Card control

This section explains how to create a simple **Card** using styles by configuring the structure for the header, content, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The Card is pure CSS component so no other package dependencies are needed to render the Card.

```js
|-- @syncfusion/ej2-layouts
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

The Card CSS files are available in the `ej2-layouts` package folder. This can be referenced in the `~/src/styles/styles.css` file of your application using the following code.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Adding a simple Card

* Add the HTML `div` element with `e-card` class into your `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<div class = "e-card">
    Sample Card
</div>

{% endhighlight %}
{% endtabs %}

## Adding a header and content

You can create Card with a header in a specific structure. For adding header you need to create a `div` element with `e-card-header` class added.

* You can include heading inside the Card header by adding a `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content/).

{% tabs %}
{% highlight html tabtitle="index.html" %}

<div class = "e-card">                    --> Root Element
    <div class="e-card-header">           --> Root Header Element
        <div class="e-card-header-caption">    --> Root Heading Element
            <div class="e-card-header-title"></div>   --> Heading Title Element
        </div>
        <div class="e-card-content"></div>         --> Card content Element
    </div>
</div>

{% endhighlight %}
{% endtabs %}

* Now, run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be as follows:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card-header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/card/card-header-cs1" %}

## See Also

* [How to add a header and content](./header-content)