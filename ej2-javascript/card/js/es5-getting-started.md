---
layout: post
title: Getting Started with ##Platform_Name## Card | Syncfusion
description: Learn how to get started with the Syncfusion JavaScript Card control. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Card 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with ##Platform_Name## Card

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Setup for local environment

Refer to the following steps to set up your local environment.

**Step 1:** Create a root folder named **my-app** for your application.

**Step 2:** Create a **my-app/resources** folder to store local scripts and styles files.

**Step 3:** Open Visual Studio Code and create **my-app/index.js** and **my-app/index.html** files to initialize the Essential<sup style="font-size:70%">&reg;</sup> JS 2 card control.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Card CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/card/index.css
```

## Adding Card component to the application

Add the `span` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Card** component in the index.html by using the following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5.3 theme -->
            <link href="https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/card/index.css" rel="stylesheet" />
       </head>
       <body>
           <!-- Add the HTML <span> element  -->
            <span class='e-card'>This is simple Card</span>
       </body>
  </html>
```

## Adding a header and content

You can create Card with a header in a specific structure. For adding header you need to create a `div` element with `e-card-header` class added.

* You can include heading inside the Card header by adding a `div` element with `e-card-header-caption` class, and also content will be added by adding element with `e-card-content`. For detailed information, refer to the [Header and Content](./header-content).

```
    <div class = "e-card">                    --> Root Element
        <div class="e-card-header">           --> Root Header Element
            <div class="e-card-header-caption">    --> Root Heading Element
                <div class="e-card-header-title"></div>   --> Heading Title Element
            </div>
            <div class="e-card-content"></div>         --> Card content Element
        </div>
    </div>
```

* Now, open the html file in the web browser, it will render the `Card` component with header and content.

Output will be as follows:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/es5-getting-started-cs1" %}

## See Also

* [How to add a header and content](./header-content)