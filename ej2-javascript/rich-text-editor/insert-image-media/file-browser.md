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

Map the above packages style and script reference in sample as like below

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="systemjs.config.js" %}
{% include code-snippet/rich-text-editor/file-browser-config/systemjs.config.js %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/file-browser-config/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

The following example explains about how to configure the file browser within the Rich Text Editor component.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set [`enable`](../api/rich-text-editor/fileManagerSettings/#enable) property as `true` on [`fileManagerSettings`](../api/rich-text-editor/#fileManagerSettings) property to make the file browser in the Rich Text Editor to appear on the `FileManager` toolbar click action.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/file-browser-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/file-browser-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/file-browser-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/file-browser-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs2" %}

{% endif %}