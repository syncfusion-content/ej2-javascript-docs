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

This section explains how to create a simple redefined dialogs, and configure its available functionalities in TypeScript using Essential JS 2 quickstart seed repository

## Dependencies

The following list of dependencies are required to use Predefined dialogs in your application.

```javascript

|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons

```

## Set up your development environment

To get you started with Predefined dialogs, you can clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart.git) project and install the packages by using the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> The project is preconfigured with common settings (`src/styles/styles.css`, `system.config.js` ) to start with all Essential JS 2 components.

* Refer the [`Predefined dialogs dependencies`](#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'npm:' : './node_modules/'
        'syncfusion:': './npm/@syncfusion/'
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app.ts').catch(console.error.bind(console)).then(function(){
    document.getElementById('loader').style.display = "none";
    document.getElementById('container').style.visibility = "visible";
});

```

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