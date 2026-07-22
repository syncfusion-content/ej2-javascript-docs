---
layout: post
title: ES5 getting started with ##Platform_Name## AI AssistView | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## AI AssistView control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: AI AssistView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with JavaScript AI AssistView control

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 AI AssistView and demonstrates the basic usage of the AI AssistView control in a JavaScript application.

## Prerequisites

Before getting started, ensure the following requirements are met:

| Requirement | Notes |
|-------------|-------|
| Modern web browser | Chrome, Firefox, Edge, or Safari — latest version recommended |
| Code editor | Visual Studio Code is recommended |
| Local HTTP server | Required to serve the application. Opening HTML files directly via `file://` may block script loading in some browsers. VS Code Live Server extension is recommended |
| Syncfusion<sup style="font-size:70%">&reg;</sup> license key | Required from version 16.2.0.17 onwards. Refer to the [Registering a license key](#registering-a-license-key) section |

## Dependencies

The list of dependencies required to use the AI AssistView control in your application is given as follows:

```js
|-- @syncfusion/ej2-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
```

> For npm-based projects, install the packages using: `npm install @syncfusion/ej2-interactive-chat --save`

## Control Initialization

The JavaScript (ES5) AI AssistView control can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\dist\global\{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Control Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{DEPENDENCY_PACKAGE_NAME}\styles\tailwind3.css`
>
> Control Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\tailwind3.css`

**Example:**

> Dependency Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\dist\global\ej2-base.min.js`
>
> Control Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-interactive-chat\dist\global\ej2-interactive-chat.min.js`
>
> Dependency Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-base\styles\tailwind3.css`
>
> Control Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\16.3.0.17\Web (Essential JS 2)\JavaScript\ej2-interactive-chat\styles\tailwind3.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\tailwind3.css`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script and styles for a set of specific controls. This web tool is useful to combine the required control scripts and styles in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts and styles from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>JavaScript (ES5)</title>
            <!-- JavaScript (ES5) AI AssistView's dependency style -->
            <link href="resources/base/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/notifications/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/inputs/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/navigations/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <!-- JavaScript (ES5) AI AssistView control style -->
            <link href="resources/interactive-chat/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) AI AssistView's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/dropdowns/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/markdown-converter/ej2-markdown-converter.min.js" type="text/javascript"></script>
            <!-- JavaScript (ES5) AI AssistView control global script -->
            <script src="resources/interactive-chat/ej2-interactive-chat.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `AI AssistView` element and initiate the `JavaScript (ES5) AI AssistView` control in the `index.html` by using following code

`[src/index.html]`

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>JavaScript (ES5)</title>
          <!-- JavaScript (ES5) AI AssistView's dependency style -->
            <link href="resources/base/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/notifications/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/inputs/bootstrap5.3.css" rel="stylesheet" type="text/css" />
            <link href="resources/navigations/bootstrap5.3.css" rel="stylesheet" type="text/css" />

          <!-- JavaScript (ES5) AI AssistView control style -->
          <link href="resources/interactive-chat/bootstrap5.3.css" rel="stylesheet" type="text/css"/>

          <!-- JavaScript (ES5) AI AssistView's dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/dropdowns/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
            <script src="resources/markdown-converter/ej2-markdown-converter.min.js" type="text/javascript"></script>

          <!-- JavaScript (ES5) AI AssistView control global script -->
          <script src="resources/interactive-chat/ej2-interactive-chat.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> defaultAssist  -->
          <div class="aiassist-container" style="height: 350px; width: 650px;">
            <div id="defaultAssist"></div>
        </div>
          <script>
                // Initializes the AI Assist control
                var aiAssistView = new ej.interactivechat.AIAssistView({});

                    // Render initialized AI Assist.
                aiAssistView.appendTo('#defaultAssist');
          </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) AI AssistView** control.

## Using CDN link for script and style reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The JavaScript (ES5) control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Dependency Styles: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/styles/tailwind3.css`
>
> Control Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/tailwind3.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-interactive-chat/dist/global/ej2-interactive-chat.min.js`](https://cdn.syncfusion.com/ej2/ej2-interactive-chat/dist/global/ej2-interactive-chat.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-interactive-chat/styles/tailwind3.css`](http://cdn.syncfusion.com/ej2/ej2-interactive-chat/styles/tailwind3.css)

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `AI AssistView` element and initiate the `JavaScript (ES5) AI AssistView` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/gettingstarted/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/gettingstarted" %}

## Registering a license key

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls require a valid license key from version 16.2.0.17 onwards. Without a license key, a license validation message will appear in the browser console.

**Step 1:** Obtain your license key from the [Syncfusion License Portal](https://www.syncfusion.com/account/downloads) or from the [licensing FAQ page](https://ej2.syncfusion.com/documentation/licensing/licensing-troubleshoot).

**Step 2:** Register the license key in your **index.js** file before initializing any Syncfusion<sup style="font-size:70%">&reg;</sup> control.

```javascript
// Register Syncfusion license key
ej.base.registerLicense('YOUR_LICENSE_KEY_HERE');
```

> Replace `'YOUR_LICENSE_KEY_HERE'` with the actual license key obtained from your Syncfusion account. For more information, refer to the [Syncfusion Licensing documentation](https://ej2.syncfusion.com/documentation/licensing/license-key-registration).

**Step 4:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript AI AssistView** control.

> **Note:** Starting from version 33.1x, when a user submits a prompt to the AI AssistView, the control automatically scrolls and focuses on the latest prompt and response. This behavior eliminates the need for users to manually scroll down to see the new response, ensuring they always view the most recent AI response without interruption. Prior to version 33.1x, the previous responses remained visible when new responses were added.

## Configure suggestions and responses

You can use the [promptSuggestions](../api/ai-assistview#promptsuggestions) property to add prompt suggestions and the [promptRequest](../api/ai-assistview#promptrequest) event to add responses when the prompt matches the specified prompts data otherwise, the default response will be displayed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/ai-assistview/defaultprompts/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/ai-assistview/defaultprompts/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/defaultprompts" %}

## Troubleshooting

**AI AssistView renders blank / does not load**
- Verify that the container element exists and has a valid ID.
- Open the browser developer console (F12) and check for JavaScript errors.
- Ensure all CDN script tags are loading successfully (check the Network tab for 4xx/5xx errors).

**License validation warning in the console**
- Register your license key before instantiating any Syncfusion<sup style="font-size:70%">&reg;</sup> control.

**Scripts blocked when opening via `file://`**
- Serve the application through a local HTTP server. Refer to the [Run the application](#run-the-application) section.

**CDN resources fail to load**
- Check your internet connection.
- Confirm the version number in the CDN URLs matches a valid published release. See the [Syncfusion CDN page](https://cdn.syncfusion.com/ej2/) for available versions.
