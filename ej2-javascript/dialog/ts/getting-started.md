---
layout: post
title: Getting started with ##Platform_Name## Dialog control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Dialog control

This section explains the steps to create a simple Dialog and demonstrates the basic usage of the Dialog component using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository. This seed repository is pre-configured with the Essential<sup style="font-size:70%">&reg;</sup> JS 2 package.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> Dialog package

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

Use the following command to install the `@syncfusion/ej2-popups` package:

```
npm install @syncfusion/ej2-popups --save
```

Then, install the remaining dependent npm packages using the following command:

```
npm install
```

> For more information about individual package and alternative installation methods, see the [installation guide](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation).

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> Dialog CSS styles

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

@import "../../node_modules/@syncfusion/ej2-fluent2-theme/styles/dialog/index.css";

{% endhighlight %}
{% endtabs %}

> Learn more about [built-in themes and individual control CSS references](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Dialog control to the application

Open the application in Visual Studio Code and add the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript UI controls. 

In this article, the Dialog control is used as an example. Add the following Dialog element to the `~/src/index.html` file.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body style="margin-top: 100px;">
    <div id="container">
      <!--element which is going to render the Dialog -->
        <button class="e-control e-btn" id="targetButton" role="button" e-ripple="true">Open Dialog</button>
        <div id="dialog"></div>
    </div>
</body>

</html>
 ```

To render the Dialog control, add the following JavaScript code to the `~/src/app/app.ts` file

{% tabs %}
{% highlight ts tabtitle="~/src/app/app.ts" %}

import { Dialog } from '@syncfusion/ej2-popups';

// Initialize Dialog component
let dialog = new Dialog({

    // Dialog content
    content: 'This is a Dialog',
    // The Dialog shows within the target element
    target: document.getElementById("container") as HTMLElement,
    // Dialog width
    width: '250px',
    // Dialog position
    position: { X: 'center', Y: 'center' }
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action

document.getElementById('targetButton')!.onclick = (): void => {
    if (dialog.visible) {
        dialog.hide();
    } else {
        dialog.show();
    }
};

{% endhighlight %}
{% highlight css tabtitle="~/src/styles/styles.css" %}

html,
body,    
#container {
    height: 100%;
    overflow: hidden;
    width: 100%;
}

{% endhighlight %}
{% endtabs %}

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.

> If the dialog is rendered based on the body element, it gets the height based on the body's height. If the dialog height exceeds the body height, the dialog height will not be set. In this scenario, set the CSS height style for html and body elements:

```

html, body {
   height: 100%;
}

```

## Run the application

Now, run the application in the browser using the following command.

```
npm start
```
          
{% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs2" %}


## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./dialog-utility)
