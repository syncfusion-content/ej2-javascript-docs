---
layout: post
title: ##Platform_Name## TreeGrid Cell Editing | Syncfusion
description: Learn how to use cell editing in the ##Platform_Name## TreeGrid, including enabling, editing, and handling cell edit events.
platform: ej2-javascript
control: Cell editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cell Editing in ##Platform_Name## TreeGrid

In Cell edit mode, when you double click on a cell, it is changed to edit state.
You can change the cell value and save to the data source.
To enable Cell edit, set the [`editSettings.mode`](../../api/treegrid/editSettingsModel#mode) as `Cell`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/edit-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/edit-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs2" %}
{% endif %}

> Cell edit mode is default mode of editing.