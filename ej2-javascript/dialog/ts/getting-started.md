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

This section explains how to create a simple Dialog component and configure its available functionalities in TypeScript, using Essential<sup style="font-size:70%">&reg;</sup> JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use Dialog component in your application.

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

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

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme), which are available in the installed packages. It's easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the **Material** theme in the **~/src/styles/styles.css** file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';

{% endhighlight %}
{% endtabs %}

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme) section to know more about built-in themes and CSS reference for individual controls.

## Adding Dialog to the project

Add the div element with id attribute `#dialog` inside the body tag in your `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 Dialog Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div>
      <!--element which is going to render the Dialog -->
        <button class="e-control e-btn" id="targetButton" role="button" e-ripple="true">Open Dialog</button>
        <div id="dialog"></div>
    </div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

> The [Custom Resource Generator (CRG)](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific components.
> This web tool is useful to combine the required component scripts and styles in a single file.

Now import the  Dialog component into your `app.ts` and append it to `#dialog`
`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Dialog } from '@syncfusion/ej2-popups';

// Initialization of Dialog component
let dialog: Dialog = new Dialog({
    // Dialog content
    content: 'This is a Dialog with content',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});

// Render initialized Dialog
dialog.appendTo('#dialog');

{% endhighlight %}
{% endtabs %}

> In the dialog control, max-height is calculated based on the dialog target element height. If the target property is not configured, the document.body is considered as a target. Therefore, to show a dialog in proper height, you need to add min-height to the target element.

## Run the application

The **Essential<sup style="font-size:70%">&reg;</sup> JS 2 quickstart** application project is configured to compile and run the application in the browser. Use the following command to run the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs2" %}

> If the dialog is rendered based on the body element, it gets the height based on the body's height. If the dialog height exceeds the body height, the dialog height will not be set. In this scenario, set the CSS height style for html and body elements:

```

html, body {
   height: 100%;
}

```

## Modal dialog

A [modal](https://ej2.syncfusion.com/documentation/api/dialog/index-default#ismodal) dialog displays an overlay behind the dialog, requiring the user to interact with it before accessing other content in the application.

When the user clicks the overlay, the action can be handled through the [`overlayClick`](https://ej2.syncfusion.com/documentation/api/dialog/index-default#overlayclick) event. In the sample below, the dialog closes when clicking the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/modal-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/modal-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/modal-cs2" %}

## Enable header

The Dialog header can be enabled by adding the header content as text or HTML content through the [`header`](https://ej2.syncfusion.com/documentation/api/dialog/index-default#header) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/header-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/header-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/header-cs2" %}

## Configure action buttons

The Dialog provides built-in support to render the action buttons on the footer (for ex: 'OK' or 'Cancel' buttons) by using [buttons](https://ej2.syncfusion.com/documentation/api/dialog/index-default#buttons) property. Each Dialog button allows the user to perform any action while clicking on it.

The primary button will be focused automatically on open the Dialog, and add the [click](https://ej2.syncfusion.com/documentation/api/dialog/buttonpropsmodel#click) event to handle the actions

> When the Dialog initialize with more than one primary buttons, the first primary button gets focus on open the Dialog.

The below sample render with buttons and its action.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/footer-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/footer-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/footer-cs2" %}

## Draggable

The Dialog supports to [drag](https://ej2.syncfusion.com/documentation/api/dialog/index-default#allowdragging) within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled. From `16.2.x` version, enabled draggable support for modal dialog also.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/draggable-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/draggable-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/draggable-cs2" %}

## Positioning

The Dialog can be positioned using the [position](https://ej2.syncfusion.com/documentation/api/dialog/index-default#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

for X is: left, center, right (or) any offset value
for Y is: top, center, bottom (or) any offset value

The below example demonstrates the different Dialog positions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/dialog/positioning-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/positioning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/dialog/positioning-cs2" %}

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./dialog-utility)
