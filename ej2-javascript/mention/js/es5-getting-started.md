---
layout: post
title: Getting Started with ##Platform_Name## Mention | Syncfusion
description: Set up the Syncfusion ##Platform_Name## Mention in a plain JavaScript (ES5) app, including dependencies and a local environment.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Mention

This section explains the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Mention and demonstrate the basic usage of the Mention control in a JavaScript application.

## Dependencies

The list of dependencies required to use the Mention component in your application is given below:

```javascript
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Mention control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Mention CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`,`ej2-data`,`ej2-popups`,`ej2-lists`,`ej2-buttons`,`ej2-inputs` script is the required dependency package for the Mention component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/mention/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-dropdowns/dist/global/ej2-dropdowns.min.js
```

## Adding the Mention control to the application

Add the HTML div tag with the `id` attribute as `mentionElement` to your `index.html` file.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 Mention's dependent bootstrap5 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/mention/index.css" rel="stylesheet" />

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
          <!-- Add the HTML <div> element  -->
          <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
          <script>
               // initialize Mention control
               var mentionObj = new ej.dropdowns.Mention();
               // Render initialized Mention.
               mentionObj.appendTo('#mentionElement');
          </script>
       </body>
  </html>

```

## Binding data source

After initialization, populate the Mention with data using the [dataSource](https://ej2.syncfusion.com/javascript/documentation/api/mention/index-default#datasource) property. Here, an array of string values is passed to the Mention control.

```

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
             <!-- Essential JS 2 Mention's dependent bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/mention/index.css" rel="stylesheet" />

            <!-- Essential JS 2 all script -->
            <!-- <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script> -->

            <!-- Essential JS 2 Mention's dependent scripts -->
            <script src="//cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
            <script src="//cdn.syncfusion.com/ej2/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
       </head>
       <body>
          <!-- Add the HTML <div> element  -->
          <div id="mentionElement" style="min-height: 100px; border: 1px solid #D7D7D7; border-radius: 4px; padding: 8px; font-size: 14px; width: 600px;"></div>
          <script>
               var userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
               // initialize Mention control
               var mentionObj = new ej.dropdowns.Mention({
                    dataSource: userData
               });
               // Render initialized Mention.
               mentionObj.appendTo('#mentionElement');
          </script>
       </body>
  </html>

```

**Step 4:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Mention** control.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/es5-getting-started-cs1" %}

## Display mention character

By using the [showMentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/index-default#showmentionchar) property, the text content can be displayed along with the mention character. You can customize the mention character by using the [mentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/index-default#mentionchar) property in the Mention control.

> By default, the [mentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/index-default#mentionchar) is `@` and the [showMentionChar](https://ej2.syncfusion.com/javascript/documentation/api/mention/index-default#showmentionchar) property is disabled.

The following example, displays the text content along with the mention character configured as `#`.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/mention/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/es5-getting-started-cs2" %}