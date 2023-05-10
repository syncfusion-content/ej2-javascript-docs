---
layout: post
title: Customizing loading indicator in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Customizing loading indicator in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing loading indicator 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing loading indicator in ##Platform_Name## Pivotview control

You can customize the appearance of the loading indicator in the pivot table by using the [`spinnerTemplate`](https://ej2.syncfusion.com/documentation/api/pivotview/#spinnertemplate) property. This property accepts an HTML string which can be used for appearance customization.

> You can also disable the loading indicator by setting [`spinnerTemplate`](https://ej2.syncfusion.com/documentation/api/pivotview/#spinnertemplate) to empty string.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs78" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs78/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs78" %}
{% endif %}
