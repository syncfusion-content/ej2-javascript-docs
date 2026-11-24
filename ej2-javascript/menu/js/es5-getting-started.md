---
layout: post
title: Es5 getting started with ##Platform_Name## Menu | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Menu control in ES5-based apps with a simple setup and configuration flow.
platform: ej2-javascript
control: Menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Menu

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Dependencies

The following list of dependencies are required to use the Menu control in your application.

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

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Menu CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-data`, `ej2-lists`, `ej2-inputs`, `ej2-buttons`, and `ej2-popups` scripts are required dependency packages for the Menu component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/menu/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```
## Adding Menu component to the application

Add the HTML UL tag with the `id` attribute as `menu` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/es5-getting-started-cs1" %}

## Group menu items with Separator

The separators are both horizontal and vertical lines used to separate the menu items. You cannot select the separators, but you can enable separators to group the menu items using the [`separator`](../api/menu/menuItemModel#separator) property. The `Open` and `Save` sub menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/es5-getting-started-cs2" %}

> The [`separator`](../api/menu/menuItemModel#separator) property should not be given along with the other fields in the [`MenuItem`](../api/menu/menuItemModel). You can also enable the separator to group **horizontal** menu items.

* [Create menu using data source](./data-source-binding-and-custom-menu-items#data-binding)
* [Customize menu items using template support](./data-source-binding-and-custom-menu-items#custom-menu-items)
* [Integrating with Toolbar component](./use-case-scenarios#toolbar)