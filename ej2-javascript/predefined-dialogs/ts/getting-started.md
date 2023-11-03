---
layout: post
title: Getting started with ##Platform_Name## Predefined dialogs control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Predefined dialogs control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Predefined dialogs control

This section explains how to create a simple Predefined dialogs, and configure its available functionalities in TypeScript using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use Predefined dialogs in your application.

```javascript

|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons

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

To render Predefined Dialogs component, need to import Popups and its dependent components styles as given below in in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Render a dialog using utility functions

The dialog component provides built-in utility functions to render the alert and confirm dialogs with the minimal code. The following options are used as an argument on calling the utility functions:

| Options   | Description |
|-----------|-------------|
| title | Specifies the title of dialog like the [header](../api/dialog/#header) property.|
| content | Specifies the value that can be displayed in dialog's content area like the [content](../api/dialog/#content) property. |
| isModal | Specifies the Boolean value whether the dialog can be displayed as modal or non-modal. For more details, refer to the [isModal](../api/dialog/#ismodal) property.|
| position | Specifies the value where the alert or confirm dialog is positioned within the document. For more details, refer to the [position](../api/dialog/#position) property { X: 'center', Y: 'center'}|
| okButton | Configures the `OK button` that contains button properties with the click events. `okButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for OK button click', text: 'Yes' // <-- Default value is 'OK'}`|
| cancelButton | Configures the `Cancel button` that contains button properties with the click events. `cancelButton:{ icon:'prefix icon to the button', cssClass:'custom class to the button', click: 'action for ‘Cancel’ button click', text: 'No' // <-- Default value is 'Cancel'}`|
| isDraggable |Specifies the value whether the alert or confirm dialog can be dragged by the user.|
| showCloseIcon | When set to true, the close icon is shown in the dialog component. |
| closeOnEscape |When set to true, you can close the dialog by pressing ESC key. |
| animationSettings |Specifies the animation settings of the dialog component. |
| cssClass | Specifies the CSS class name that can be appended to the dialog. |
| zIndex | Specifies the order of the dialog, that is displayed in front or behind of another component. |
| open | Event which is triggered after the dialog is opened. |
| Close | Event which is triggered after the dialog is closed. |

## Alert dialog

An alert dialog box used to display an errors, warnings, and information alerts that needs user awareness. The alert dialog is displayed along with the OK button. When user clicks on ‘OK’ button, alert dialog will get closed. Use the following code to render a simple alert dialog in an application.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/alert-dialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/alert-dialog-cs2" %}

## Confirm dialog

A confirm dialog box used to displays a specified message along with the ‘OK’ and ‘Cancel’ button. It is used to get approval from the user, and it appears before any critical action. After get approval from the user the dialog will disappear automatically. Use the following code to render a simple confirm dialog in an application.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/confirm-dialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/confirm-dialog-cs2" %}

## Prompt dialog

A prompt dialog is used to get the input from the user. When the user clicks the ‘OK’ button the input value from the dialog is returned. If the user clicks the ‘Cancel’ button the null value is returned. After getting the input from the user the dialog will disappear automatically.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/predefined-dialogs/prompt-dialog-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/predefined-dialogs/prompt-dialog-cs2" %}