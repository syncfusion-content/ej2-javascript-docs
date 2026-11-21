---
layout: post
title: Es5 getting started with ##Platform_Name## Tab | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Tab control in ES5 apps using a simple setup flow.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Tab

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Tab CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-data`, `ej2-lists`, `ej2-inputs`, `ej2-buttons`, and `ej2-popups` scripts are required dependency packages for the Tab component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/tab/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Initialize the Tab using HTML elements

The Tab component can be rendered based on the given HTML element using `id` as `target`.
Header section must be enclosed with in a wrapper element using `e-tab-header` class and corresponding content must be mapped with `e-content` class.
You need to follow the below structure of HTML elements to render the Tab,

```

  <div id='tab_html_markup'>   --> Root Tab element
    <div class="e-tab-header">      --> Tab header
       <div>   --> Header Item
       </div>
    </div>
    <div class="e-content">      --> Tab content
       <div>   --> Content Item
       </div>
    </div>
  </div>

```

* Add the HTML template data with its id attribute and add it in your `index.html` file to initialize the Tab.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/es5-getting-started-cs2" %}