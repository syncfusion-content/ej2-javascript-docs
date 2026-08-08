---
layout: post
title: ##Platform_Name## TreeGrid Dialog Editing | Syncfusion
description: Learn how to use dialog editing in ##Platform_Name## TreeGrid to edit records through customizable forms and perform CRUD operations.
platform: ej2-javascript
control: Dialog editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dialog Editing in ##Platform_Name## TreeGrid

In Dialog edit mode, when you start editing the currently selected row, data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](../../api/treegrid/editSettingsModel#mode) as `Dialog`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/edit-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/edit-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs5" %}
{% endif %}