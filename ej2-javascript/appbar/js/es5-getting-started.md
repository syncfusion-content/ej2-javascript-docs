---
layout: post
title: Es5 getting started with ##Platform_Name## Appbar | Syncfusion
description: Learn how to render the Syncfusion ##Platform_Name## AppBar in ES5 JavaScript using the global script and ej2-navigations package.
platform: ej2-javascript
control: AppBar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## AppBar

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the AppBar control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
```
## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® AppBar CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the `<head>` section of the `index.html` file. The `ej2-base`, `ej2-buttons` script is the required dependency package for the AppBar component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/appbar/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-buttons/dist/global/ej2-buttons.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Adding AppBar component to the application

Add the `AppBar` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript AppBar** control in the `index.html` by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/es5-getting-started-cs1" %}
