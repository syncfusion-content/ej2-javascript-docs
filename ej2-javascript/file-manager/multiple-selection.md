---
layout: post
title: Multiple selection in ##Platform_Name## File Manager control | Syncfusion
description: Learn here all about Multiple selection in Syncfusion ##Platform_Name## File Manager control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple selection
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in ##Platform_Name## File Manager control

The File Manager control allows you to select multiple files by enabling the [`allowMultiSelection`](../api/file-manager/#allowmultiselection) property (enabled by default). Multiple selections can be done by pressing the `Ctrl` key or `Shift` key while selecting the files. Checkboxes can also be used for multiple selections. `Ctrl + A` can be used to select all files in the current directory. The [`fileSelect`](../api/file-manager/#fileselect) event will be triggered when items of the File Manager control are selected or unselected.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/multiselect-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/multiselect-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/multiselect-cs1/index.css %}
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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/multiselect-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}
{% endif %}

> Note: The File Manager control supports selecting files and folders initially or dynamically by specifying their names in the [`selectedItems`](../api/file-manager/#selecteditems) property.

## Range Selection

The File Manager control supports selecting files and folders in specific ranges through mouse drag, similar to File Explorer. This is especially useful in scenarios where users need to select a large group of files quickly without manually clicking each one. 

{% if page.publishingplatform == "typescript" %}

To enable range selection, you need to set the [`enableRangeSelection`](../api/file-manager/#enablerangeselection) property to `true` and ensure that multi-selection is allowed using the [`allowMultiSelection`](../api/file-manager/#allowmultiselection) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/rangeselection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

To enable range selection, you need to set the [`enableRangeSelection`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#allowmultiselection_enableRangeSelection) property to `true` and ensure that multi-selection is allowed using the [`allowMultiSelection`](https://ej2.syncfusion.com/javascript/documentation/api/file-manager/#allowmultiselection) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/rangeselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/rangeselection-cs1" %}
{% endif %}

## Disable Multi selection

Setting the [`allowMultiSelection`](../api/file-manager/#allowmultiselection) property to false will prevent you from selecting multiple files or folders with standard selection methods. However, you can still select multiple items if checkboxes are visible. To fully disable all multi-selection capabilities, you must also set the [`showItemCheckBoxes`](../api/file-manager/#showitemcheckboxes) property to false. This ensures that you cannot use checkboxes for multiple selections.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/file-manager/disablemultiselection-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}
{% endif %}