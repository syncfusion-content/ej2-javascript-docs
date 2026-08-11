---
layout: post
title: Getting started with ##Platform_Name## Form Renderer control | Syncfusion
description:  Check out and learn about getting started with the ##Platform_Name## Form Renderer control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with ##Platform_Name## Form Renderer control

The Form Renderer is a powerful, schema-driven component that enables you to build and render complex forms with ease using a structured JSON schema definition. It streamlines form creation, customization, and data capture by letting you define form layouts, fields, and validation declaratively and then render them through a simple component property binding.

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Form Renderer and demonstrate the basic usage of the Form Renderer control in a JavaScript application.

## Prerequisites

Ensure the following tools are installed on your machine:

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor) to create the HTML file.
* A modern web browser (Chrome, Edge, Firefox, or Safari) to view the result.

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Open Visual Studio Code and create two files inside the **my-app** folder:
- **index.html** — the main HTML file that loads the scripts and resources and provides the Form Renderer container element.
- **index.js** — the JavaScript file where the Form Renderer control is initialized.

**Step 3:** In **index.html**, add a `<script>` tag at the end of `<body>` to link **index.js**:

```html
<script src="index.js" type="text/javascript"></script>
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> resources

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 Form Renderer control can be initialized by using either of the following ways.

* Using local script and style.
* Using CDN link for script and style.

### Using local script and style references in an HTML page

Obtain the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\material3.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\material3.css`

**Example:**
> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.2.2\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.2.2\Web (Essential JS 2)\JavaScript\ej2-form-renderer\dist\global\ej2-form-renderer.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.2.2\Web (Essential JS 2)\JavaScript\ej2-base\styles\material3.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\34.2.2\Web (Essential JS 2)\JavaScript\ej2-form-renderer\styles\material3.css`

The following script and style files contain all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file:

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\material3.css`

Use the [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) online web tool to generate custom scripts and styles for specific controls. This tool is useful for combining required control scripts and styles in a single file.

Create a folder named `~/quickstart/resources` and copy or paste the global scripts and styles from the installed location above into the corresponding `~/quickstart/resources/package` location.

### Using CDN link for script and style reference

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls' global scripts and styles are already hosted at the CDN links shown in the following formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/material3.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material3.css`

## Adding Form Renderer control

Add an HTML `<div>` element to the **index.html** file to act as the root element of the Form Renderer control.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2's material theme -->
        <link href="https://cdn.syncfusion.com/ej2/34.2.2/material3.css" type="text/css"/>

        <!-- Essential JS 2's global script  -->
        <script src="https://cdn.syncfusion.com/ej2/34.2.2/dist/ej2.min.js"></script>
    </head>
    <body>
        <!-- Add the HTML div that will render as the Form Renderer -->
        <div id="formrenderer"></div>
        <script src="index.js" type="text/javascript"></script>
    </body>
</html>
```

Place the following code in the **index.js** file to render the Form Renderer control:

```js
            // initialize Form Renderer control
            var formRenderer = new ej.formrenderer.FormRenderer({
                schema: {
                    "version": "0.1.0",
                    "properties": {
                        "emailAddress": {
                            "id": "textbox_1785491685456_167",
                            "name": "emailAddress",
                            "type": "string",
                            "label": "Email Address",
                            "textboxType": "email",
                            "required": true,
                            "widget": "textbox"
                        },
                        "password": {
                            "id": "textbox_1785491685456_537",
                            "name": "password",
                            "type": "string",
                            "label": "Password",
                            "textboxType": "password",
                            "required": true,
                            "minLength": 6,
                            "widget": "textbox"
                        },
                        "rememberMe": {
                            "id": "checkbox_1785491685456_262",
                            "name": "rememberMe",
                            "type": "boolean",
                            "label": "Remember Me",
                            "widget": "checkbox"
                        },
                        "submit": {
                            "id": "submit_button_initial",
                            "name": "defaultFormsubmit",
                            "type": "button",
                            "label": "Submit",
                            "buttonType": "submit",
                            "widget": "button",
                            "style": "primary",
                            "disabled": false
                        }
                    },
                    "layout": [
                        { "type": "field", "propertyId": "emailAddress" },
                        { "type": "field", "propertyId": "password" },
                        { "type": "field", "propertyId": "rememberMe" },
                        { "type": "field", "propertyId": "submit" }
                    ],
                    "settings": {
                        "name": "Untitled Form"
                    }
                }
            });

            // Render initialized Form Renderer.
            formRenderer.appendTo('#formrenderer');
```

## Run the application

Run the **index.html** file in a web browser. It will render the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Form Renderer control.

The output will appear as follows:

![JavaScript Form Renderer](./images/form-renderer.png)

## Registering Syncfusion license

The Syncfusion® Form Renderer requires a valid license key to be registered in the application. To prevent license validation warnings, refer to the [Syncfusion licensing](https://ej2.syncfusion.com/javascript/documentation/licensing/overview) documentation.
