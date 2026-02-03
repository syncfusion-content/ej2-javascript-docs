---
layout: post
title: Es5 getting started with ##Platform_Name## Chat UI control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Chat UI control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Chat UI
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Chat UI control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The list of dependencies required to use the Chat UI control in your application is given as follows:

```js
|-- @syncfusion/ej2-interactive-chat
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-popups
```

## Control Initialization

The JavaScript (ES5) Chat UI control can be initialized by using either of the following ways.

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
            <!-- JavaScript (ES5) Chat UI dependency style -->
            <link href="resources/base/tailwind3.css" rel="stylesheet" type="text/css"/>
            <link href="resources/buttons/tailwind3.css" rel="stylesheet" type="text/css" />
            <link href="resources/popups/tailwind3.css" rel="stylesheet" type="text/css" />
            <link href="resources/inputs/tailwind3.css" rel="stylesheet" type="text/css" />
            <link href="resources/navigations/tailwind3.css" rel="stylesheet" type="text/css" />
            <link href="resources/dropdowns/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Chat UI control style -->
            <link href="resources/interactive-chat/tailwind3.css" rel="stylesheet" type="text/css"/>

            <!-- JavaScript (ES5) Chat UI dependency global script -->
            <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
            <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
            <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
            <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
            <script src="resources/dropdowns/ej2-dropdowns.min.js" type="text/javascript"></script>
            <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>

            <!-- JavaScript (ES5) Chat UI control global script -->
            <script src="resources/interactive-chat/ej2-interactive-chat.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Chat UI` element and initiate the `JavaScript (ES5) Chat UI` control in the `index.html` by using following code

`[src/index.html]`

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>JavaScript (ES5)</title>
          <!-- JavaScript (ES5) Chat UI's dependency style -->
          <link href="resources/base/tailwind3.css" rel="stylesheet" type="text/css"/>
          <link href="resources/buttons/tailwind3.css" rel="stylesheet" type="text/css" />
          <link href="resources/popups/tailwind3.css" rel="stylesheet" type="text/css" />
          <link href="resources/inputs/tailwind3.css" rel="stylesheet" type="text/css" />
          <link href="resources/navigations/tailwind3.css" rel="stylesheet" type="text/css" />
          <link href="resources/dropdowns/tailwind3.css" rel="stylesheet" type="text/css"/>
          
          <!-- JavaScript (ES5) Chat UI control style -->
          <link href="resources/interactive-chat/tailwind3.css" rel="stylesheet" type="text/css"/>

          <!-- JavaScript (ES5) Chat UI's dependency global script -->
          <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
          <script src="resources/data/ej2-data.min.js" type="text/javascript"></script>
          <script src="resources/buttons/ej2-buttons.min.js" type="text/javascript"></script>
          <script src="resources/popups/ej2-popups.min.js" type="text/javascript"></script>
          <script src="resources/splitbuttons/ej2-splitbuttons.min.js" type="text/javascript"></script>
          <script src="resources/inputs/ej2-inputs.min.js" type="text/javascript"></script>
          <script src="resources/lists/ej2-lists.min.js" type="text/javascript"></script>
          <script src="resources/dropdowns/ej2-dropdowns.min.js" type="text/javascript"></script>
          <script src="resources/navigations/ej2-navigations.min.js" type="text/javascript"></script>
          <!-- JavaScript (ES5) Chat UI control global script -->
          <script src="resources/interactive-chat/ej2-interactive-chat.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> chatUI  -->
          <div class="chatui-container" style="height: 380px; width: 450px;">
            <div id="chatUI"></div>
          </div>
          <script>
                // Initializes the Chat UI control
                let chatUI = new ej.interactivechat.ChatUI({});

                    // Render initialized Chat UI.
                chatUI.appendTo('#chatUI');
          </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Chat UI** control.

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

**Step 3:** Create a HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Chat UI` element and initiate the `JavaScript (ES5) Chat UI` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/getting-started" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Chat UI** control.

## Configure messages and user

You can use the [messages](../api/chat-ui#messages) property to add messages and the [user](../api/chat-ui#user) property to configure the current user for the chat.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chat-ui/default-messages/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chat-ui/default-messages/index.html %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/default-messages" %}
