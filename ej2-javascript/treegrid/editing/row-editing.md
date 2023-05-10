---
layout: post
title: Row editing in ##Platform_Name## Treegrid control | Syncfusion
description: Learn here all about Row editing in Syncfusion ##Platform_Name## Treegrid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row editing 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row editing in ##Platform_Name## Treegrid control

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state.
You can change the cell values of the row and save edited data to the data source.
To enable Row edit, set the [`editSettings.mode`](../../api/treegrid/editSettingsModel/#mode) as `Row`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treegrid/edit-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treegrid/edit-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treegrid/edit-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/edit-cs14" %}
{% endif %}