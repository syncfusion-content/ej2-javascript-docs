---
layout: post
title: Getting started with ##Platform_Name## Dialog | Syncfusion
description: Get started with the ##Platform_Name## Dialog using ES5 script and style references, including modal, header, buttons, draggable, and positioning examples.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Dialog

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button and demonstrate the basic usage of the Button control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Button component in your application is given below:

```javascript
|-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Button control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Dialog CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` and `ej2-buttons` script is the required dependency package for the Dialog component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/dialog/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
```

## Adding Dialog component to the application

Add the `Dialog` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dialog** control in the index.html by using following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs1" %}

## Modal dialog

A [modal](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#ismodal) dialog displays an overlay behind the dialog, requiring the user to interact with it before accessing other content in the application.

When the user clicks the overlay, the action can be handled through the [`overlayClick`](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#overlayclick) event. In the sample below, the dialog closes when clicking the overlay.

> When the modal dialog is opened, the Dialog's target scrolling will be disabled. The scrolling will be enabled again once close the Dialog.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/modal-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/modal-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/modal-cs1" %}

## Enable header

The Dialog header can be enabled by adding the header content as text or HTML content through the [`header`](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#header) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/header-cs1" %}

## Configure action buttons

The dialog provides built-in support to render action buttons on the footer (for example: 'OK' or 'Cancel' buttons) using the [buttons](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#buttons) property. Each dialog button allows users to perform actions when clicked.

The primary button receives focus automatically when the dialog opens. Add the [click](https://ej2.syncfusion.com/javascript/documentation/api/dialog/buttonpropsmodel#click) event to handle button actions.

> When the dialog is initialized with multiple primary buttons, the first primary button receives focus when the dialog opens.

The sample below demonstrates buttons and their actions:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/footer-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/footer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/footer-cs1" %}

## Draggable

The Dialog supports to [drag](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#allowdragging) within its target container by grabbing the Dialog header, which allows the user to reposition the Dialog dynamically.

> The Dialog can be draggable only when the Dialog header is enabled. From `16.2.x` version, enabled draggable support for modal dialog also.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/draggable-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/draggable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/draggable-cs1" %}

## Positioning

The Dialog can be positioned using the [position](https://ej2.syncfusion.com/javascript/documentation/api/dialog/index-default#position) property by providing the X and Y co-ordinates. It can be positioned inside the target of the container or `<body>` of the element based on the given X and Y values.

for X is: left, center, right (or) any offset value
for Y is: top, center, bottom (or) any offset value

The below example demonstrates the different Dialog positions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/dialog/positioning-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/dialog/positioning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/positioning-cs1" %}

## See Also

* [Load dialog content using AJAX](./how-to/load-dialog-content-using-ajax)
* [How to position the dialog on center of the page on scrolling](./how-to/position-the-dialog-on-center-of-the-page-on-scrolling)
* [Prevent closing of modal dialog](./how-to/prevent-closing-of-modal-dialog)
* [Close dialog while click on outside of dialog](./how-to/close-dialog-while-click-on-outside-of-dialog)
* [How to make a reusable alert and confirm dialog](./dialog-utility)
