---
layout: post
title: File browser in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about File browser in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: File browser 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# File browser in ##Platform_Name## Rich text editor control

Rich Text Editor allows to browse and insert an image in the edit panel using the file browser. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required additional package styles and scripts reference

The following additional dependencies are required to use the file browser feature in Rich Text Editor.

```javascript
|-- @syncfusion/ej2-richtexteditor
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager
```

### Configuring system JS

Map the Syncfusion Rich Text Editor packages in the system.config.js configuration file

```javascript
System.config({
    paths: {
          "syncfusion:": "./node_modules/@syncfusion/"
          },
    map: {
        main: "index.ts",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        'plugin-json':'https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js',
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-filemanager": "syncfusion:ej2-filemanager/dist/ej2-filemanager.umd.min.js",
        "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js"
      },
  packages: {
  'app': { main: 'app', defaultExtension: 'js' }
  }
});
System.import('app');
```

The following example explains about how to configure the file browser within the Rich Text Editor component.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set [`enable`](../api/rich-text-editor/fileManagerSettings/#enable) property as `true` on [`fileManagerSettings`](../api/rich-text-editor/#fileManagerSettings) property to make the file browser in the Rich Text Editor to appear on the `FileManager` toolbar click action.

> Rich Text Editor features are segregated into individual feature-wise modules. To use file browser tool, inject FileManager module using the `RichTextEditor.Inject(FileManager)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs1" %}
{% endif %}