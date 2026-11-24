---
layout: post
title: Getting Started with ##Platform_Name## Toast | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Toast control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Es5 getting started
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Toast

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast control and demonstrates the basic usage of the Toast control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Toast component in an application is given below:

```js
|-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up the local environment.

**Step 1:** Create a root folder named **my-app** for the application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Toast CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`, `ej2-buttons`, `ej2-popups` script is the required dependency package for the Toast component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/toast/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-notifications/dist/global/ej2-notifications.min.js
```

## Initialize the Toast using the show method

The Toast control is rendered by appending it to the target element and calling the `show` method to display the toast.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
               <title>Essential JS2 Toast</title>

               <!-- Essential JS 2 Toast's bootstrap5.3 theme -->
               <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/toast/index.css" rel="stylesheet" type="text/css" />

               <!-- Essential JS 2 Toast's global script -->
               <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js"
                    type="text/javascript"></script>
               <script src="https://cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js"
                    type="text/javascript"></script>
               <script src="https://cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js"
                    type="text/javascript"></script>
               <script src="https://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js"
                    type="text/javascript"></script>
          </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="element"></div>
            <script>
               //Initialize Toast component
                var toast = new ej.notifications.Toast({
                    title: 'Matt sent you a friend request',
                    content: 'You have a new friend request yet to accept',
                    target: document.body
                });
               //Render initialized Toast component
                toast.appendTo('#element');
                toast.show();
            </script>
       </body>
  </html>
```

The output will be as follows:

> In the previous example, the `#element` is the `id` of the HTML element in a page to which the toast is initialized.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/toast/toast-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toast/toast-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/toast-cs8" %}

## See Also

* [How to close the toast with click/tap](./how-to/close-the-toast-with-click-tap)
* [How to prevent duplicate toast display](./how-to/prevent-duplicate-toast-display)
* [How to show different types of toast](./how-to/show-different-types-of-toast)