---
layout: post
title: Es5 getting started with ##Platform_Name## Toolbar | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Toolbar control in ES5 apps using a simple setup flow.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Toolbar

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Toolbar CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-data`, `ej2-lists`, `ej2-inputs`, `ej2-buttons`, and `ej2-popups` scripts are required dependency packages for the Toolbar component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/toolbar/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Initialize the Toolbar with commands

The Toolbar can be rendered by defining an array of [`items`](../api/toolbar#items). An item is rendered with text by defining the default item type as a `Button`.
For more information about item configuration, refer to the [Item Configuration](./item-configuration) section.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/toolbar/index.css" rel="stylesheet" type="text/css" />
            <!-- Essential JS 2 toolbar's dependent scripts -->
             <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
             <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
             <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
             <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
             <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
             <!-- Essential JS 2 toolbar's global script -->
              <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="element"></div>
            <script>
//Initialize Toolbar component

//Initialize Toolbar component

    var toolbar = new ej.navigations.Toolbar({
    items: [
      { text: 'Cut' },
      { text: 'Copy' },
      { text: 'Paste' },
      { type: 'Separator'},
      { text: 'Bold' },
      { text: 'Italic' },
      { text: 'Underline' },
    ]
    });

//Render initialized Toolbar component
    toolbar.appendTo('#element');

            </script>
       </body>
  </html>
```

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/es5-getting-started-cs1" %}

## See Also

* [Initialize the toolbar using HTML elements](../toolbar/template-configuration)