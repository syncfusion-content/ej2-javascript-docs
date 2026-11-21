---
layout: post
title: Getting Started with ##Platform_Name## Breadcrumb | Syncfusion
description: Learn how to render the Syncfusion ##Platform_Name## Breadcrumb in ES5 JavaScript using the global script and ej2-navigations package.
platform: ej2-javascript
control: Breadcrumb 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Breadcrumb

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Breadcrumb control in your application.

```js
|-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
```
## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® Breadcrumb CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-data`, `ej2-lists`, `ej2-inputs`, `ej2-buttons`, and `ej2-popups` scripts are required dependency packages for the Breadcrumb component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/breadcrumb/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Adding Breadcrumb component to the application

Add the HTML UL tag with the `id` attribute as `breadcrumb` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/es5-getting-started-cs1" %}

## Adding Breadcrumb items to the project

Use `items` property to bind items for Breadcrumb component. The below example demonstrates the basic rendering of Breadcrumb with items support.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/es5-getting-started-cs2" %}

## Enable or Disable Navigation

This feature enables or disables the item navigation. By default, the navigation will be enabled when setting `Url` property. To prevent breadcrumb item navigation, set `enableNavigation` property as false in Breadcrumb. The below example shows enabling and disabling the navigation of Breadcrumb items.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/es5-getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/es5-getting-started-cs3" %}