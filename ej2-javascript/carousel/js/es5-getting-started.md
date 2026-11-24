---
layout: post
title: Es5 getting started with ##Platform_Name## Carousel | Syncfusion
description: Learn how to render the Syncfusion ##Platform_Name## Carousel in ES5 JavaScript using the global script and ej2-navigations package.
platform: ej2-javascript
control: Carousel 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Carousel

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Carousel control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
```

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Carousel CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`, `ej2-buttons` script is the required dependency package for the Carousel component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/carousel/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Adding Carousel component to the application

Add the HTML div tag with the `id` attribute as `carousel` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/carousel/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/es5-getting-started-cs1" %}
