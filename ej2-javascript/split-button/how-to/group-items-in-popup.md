---
layout: post
title: Group items in popup in ##Platform_Name## Split button control | Syncfusion
description: Learn here all about Group items in popup in Syncfusion ##Platform_Name## Split button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Group items in popup 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Group items in popup in ##Platform_Name## Split button control

Items in popup can be grouped in SplitButton by templating entire popup with ListView. To achieve grouping in ListView, check [`ListView Grouping`](../../listview/grouping#grouping) documentation. To template ListView in popup, create ListView with id `listview` and provide it as [`target`](../../api/split-button#target) for SplitButton.

The following example illustrates how to group items in popup using ListView component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/split-button/listview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/listview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/listview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/split-button/listview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/split-button/listview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/split-button/listview-cs1" %}
{% endif %}