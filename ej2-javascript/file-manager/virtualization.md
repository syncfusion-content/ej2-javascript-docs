---
layout: post
title: Virtualization in ##Platform_Name## File Manager control | Syncfusion
description: Learn here all about Virtualization in Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## File Manager control

The File Manager control's UI virtualization allows for the dynamic loading of a large number of directories and files in both the details view and large icons view without degrading performance.

## Module Injection

To use UI virtualization, you must import the `Virtualization` module from the `ej2-filemanager` package and inject it using the `FileManager.Inject()` function.

```ts

import { FileManager, Virtualization } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Virtualization);

```

## Enable Virtualization

The virtualization of the File Manager control is based on the height and width of the viewport. The items will be loaded in both [large icons view](../api/file-manager/#view) and [details view](../api/file-manager/detailsViewSettings/) based on the viewport size.

To enable `virtualization`, you must set the [enableVirtualization](../api/file-manager/#enablevirtualization) property to true.

In the example below, a sizable collection of files can be found in the folders **Documents** and **Text Documents**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/virtualization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/virtualization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/virtualization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/virtualization-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/virtualization-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/virtualization-cs1" %}
{% endif %}

## Limitations for Virtualization

* Programmatic selection using the **selectAll** method is not supported with virtual scrolling.
* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.
* Selected file items are not maintained while scrolling, considering the performance of the control.