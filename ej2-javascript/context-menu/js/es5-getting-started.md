---
layout: post
title: Es5 getting started with ##Platform_Name## Context menu | Syncfusion
description: Learn how to render the Syncfusion ##Platform_Name## Context menu in ES5 JavaScript using the global script and ej2-navigations package.
platform: ej2-javascript
control: Context Menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Context menu

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and Scripts

## Add Syncfusion® ContextMenu CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The ej2-base, ej2-data, ej2-lists, ej2-inputs, ej2-buttons, and ej2-popups scripts are required dependency packages for the ContextMenu component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/context-menu/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-inputs/dist/global/ej2-inputs.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Adding ContextMenu component to the application

Add the HTML UL tag with the `id` attribute as `ContextMenu` to your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/es5-getting-started-cs1" %}

## Rendering items with Separator

The Separators are the horizontal lines that are used to separate the menu items. You cannot select the separators. You can enable separators to group the menu items using the [`separator`](../api/context-menu/menuItemModel#separator) property. Cut, Copy, and Paste menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/context-menu/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/es5-getting-started-cs2" %}

> The [`separator`](../api/context-menu/menuItemModel#separator) property `should not` be given along with the other fields in the [`MenuItem`](../api/context-menu/menuItemModel).

## See Also

* [ContextMenu with icons](./icons-and-navigation#icons)
* [Multilevel nesting](./template-and-multilevel-nesting#multilevel-nesting)