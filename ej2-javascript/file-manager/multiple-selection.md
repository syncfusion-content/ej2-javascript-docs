---
layout: post
title: Multiple selection in ##Platform_Name## File manager control | Syncfusion
description: Learn here all about Multiple selection in Syncfusion ##Platform_Name## File manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple selection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in ##Platform_Name## File manager control

The file manager allows you to select multiple files by enabling the [allowMultiSelection](../api/file-manager/#allowmultiselection) property (enabled by default). The multiple selection can be done by pressing the `Ctrl` key or `Shift` key and selecting the files. The check box can also be used to do multiple selection. `Ctrl + A` can be used to select all files in the current directory. The [fileSelect](../api/file-manager/#fileselect) event will be triggered when the items of file manager control is selected or unselected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/multiselect-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/multiselect-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}
{% endif %}

>Note: The File Manager has support to select files and folders initially or dynamically by specifying their names in [selectedItems](../api/file-manager/#selecteditems) property.

## Range Selection

The File Manager supports for selecting files and folders in specific ranges through mouse drag as like File Explorer. This is particularly useful in scenarios where users need to select a large group of files quickly without manually clicking each one. 

### Enabling Range Selection

{% if page.publishingplatform == "typescript" %}

To enable range selection, you need to set the [enableRangeSelection](https://ej2.syncfusion.com/documentation/api/file-manager/#enableRangeSelection) property to `true` and ensure that multi-selection is allowed using the [allowMultiSelection](https://ej2.syncfusion.com/documentation/api/file-manager/#allowmultiselection) property.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/file-manager/rangeselection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

To enable range selection, you need to set the [enableRangeSelection](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#allowmultiselection_enableRangeSelection) property to `true` and ensure that multi-selection is allowed using the [allowMultiSelection](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#allowmultiselection) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/rangeselection-cs1" %}
{% endif %}
