---
layout: post
title: Getting started with ##Platform_Name## Tab control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Tab 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Tab control

This section briefly explains about how to create a simple [JavaScript Tab](https://www.syncfusion.com/javascript-ui-controls/js-tabs) using TypeScript and configure the Tab header content using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Set up the development environment

Clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from GitHub in the command prompt:

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

Navigate to the project folder in the command prompt:

```
cd ej2-quickstart
```

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Tab package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-navigations` package:

```
npm install @syncfusion/ej2-navigations --save
```

Then, install the remaining dependent npm packages using the following command:

```
npm install
```

> For more information about individual package and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> Tab CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls provide built-in themes,  which are available from the [npm theme packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages). Additionally, themes can be loaded via CDN or customized using the [Theme Studio](https://ej2.syncfusion.com/documentation/appearance/theme-studio). For more information, refer to the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

The quickstart application is preconfigured to use the `Fluent2` theme. To install the [Fluent2](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-fluent2-theme --save

{% endhighlight %}
{% endtabs %}

The required styles are imported in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight bash tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/tab/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Tab control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI controls. 

In this article, the Tab control is used as an example. Add the following element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
     <div style="margin: 50px;">
        <div id="element"></div>
    </div>
</body>

</html>
 ```

To render the Tab control, add the following JavaScript code to the `~/src/app/app.ts` file

```ts
import { Tab } from '@syncfusion/ej2-navigations';

let tabObj: Tab = new Tab({
    items: [
        {
            header: { 'text': 'Twitter' },
            content: 'Twitter is an online social networking service that enables users to send and read short 140-character ' +
            'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
            'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
            'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
            'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
            'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
            'search queries per day.'
        },
        {
            header: { 'text': 'Facebook' },
            content: 'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
            'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
            'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s ' +
            'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
            'University. It gradually added support for students at various other universities and later to high-school students.'
        },
        {
            header: { 'text': 'WhatsApp' },
            content: 'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates ' +
            'under a subscription business model. It uses the Internet to send text messages, images, video, user location and ' +
            'audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user ' +
            'base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in ' +
            'Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.'
        }
    ]
});
tabObj.appendTo('#element');
```

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```
Output will be as follows:
          
{% previewsample "page.domainurl/code-snippet/tab/tab-cs4" %}

## See Also

* [How to load tab with DataSource](./how-to/load-tab-with-data-source)

N> You can also explore our [JavaScript Tabs example](https://ej2.syncfusion.com/demos/#/material/tab/default.html) that shows you how to configure the Tabs in JavaScript.