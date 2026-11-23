---
layout: post
title: Getting Started with ##Platform_Name## Splitter | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Splitter control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Splitter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Splitter

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 Splitter control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Splitter CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the Splitter component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/splitter/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-layouts/dist/global/ej2-layouts.min.js
```

## Load content to the pane

You can load the pane contents in either HTML element or string types using [content](../api/splitter/paneProperties#content) property.

For detailed information, refer to the [Pane Content](./pane-content) section.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
           <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/splitter/index.css" rel="stylesheet" />
            <!-- Essential JS 2 Dashboardlayout's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js"
                type="text/javascript"></script>
        </head>
       <script>
        // Initialize splitter control
        var splitObj = new ej.layouts.Splitter({
            paneSettings: [
                // Content for Pane 1
                { content:'Left Pane' },

                // Content for Pane 2
                { content:'Middle Pane' },

                // Content for Pane 3
                { content:'Right Pane' }
            ],
            height: '250px'
        });
        // Render initialized splitter
        splitObj.appendTo('#splitter');
       </script>
       <body>
          <div id='container'>
              <!--element which is render as splitter-->
              <div id="splitter">
                  <!--list of splitter panes-->
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>
       </body>
  </html>

```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/splitter/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/splitter/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs1" %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-and-collapse)
* [Construct different layouts using Splitter](./es5-different-layouts)