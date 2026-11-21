---
layout: post
title: Getting started with ##Platform_Name## Accordion | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Accordion. Explore setup, features, examples, and customization options.
platform: ej2-javascript
control: Accordion 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Accordion

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Accordion CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base` script is the required dependency package for the Accordion component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/accordion/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Initialize the Accordion using HTML elements

The Accordion component can be rendered based on the given HTML element using `id` as `target` property.
You need to follow the below structure of HTML elements to render the Accordion.

```
  <div id='accordion_html_markup'>   --> Root Accordion Element
       <div>      --> Accordion Item Container
            <div>   --> Accordion Header Container
                <div> </div> --> Accordion Header
            </div>
            <div>  --> Accordion Panel Container
                <div> </div> --> Accordion Content
             </div>
        </div>
  </div>
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/accordion/accordion-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-template-cs2" %}

> You can add the custom class into Accordion component using [`cssClass`](../api/accordion/accordionItem#cssclass) property which is used to customize the Accordion component.

## See Also

* [How to load accordion items dynamically](./how-to/load-accordion-items-dynamically)