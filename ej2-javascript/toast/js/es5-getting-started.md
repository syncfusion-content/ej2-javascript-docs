---
layout: post
title: Es5 getting started with ##Platform_Name## Toast control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Toast control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Toast control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-notifications/dist/global/ej2-notifications.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-notifications/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS2 Toast</title>

          <!-- Essential JS 2 Toast's material theme -->
          <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />

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
       </body>
  </html>
```

**Step 5:** Now, add the `Toast` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast** component in the `index.html` by using following code

## Initialize the Toast using JSON items collection

The Toast can be rendered by defining an array of `items`.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
               <title>Essential JS2 Toast</title>

               <!-- Essential JS 2 Toast's material theme -->
               <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
               <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
               <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
               <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />

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
        target: document.body,
    });

//Render initialized Toast component
    toast.appendTo('#element');
    toast.show();

            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript components.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js`](http://cdn.syncfusion.com/ej2/ej2-notifications/dist/global/ej2-notifications.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `Toast` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast** component in the index.html by using following code.

```html

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS2 Toast</title>

          <!-- Essential JS 2 Toast's material theme -->
          <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
          <link href="https://cdn.syncfusion.com/ej2/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />

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
          var toast = new ej.notifications.Toast({
          title: 'Matt sent you a friend request',
          content: 'You have a new friend request yet to accept',
               target: document.body,
          });

          //Render initialized Toast component
          toast.appendTo('#element');
          toast.show();
     </script>
</body>
</html>

```

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Toast** component.

Output will be as follows:

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