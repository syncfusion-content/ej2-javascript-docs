---
layout: post
title: Customize the icons for pivot grid in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Customize the icons for pivot grid in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize the icons for pivot grid 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons for pivot grid in ##Platform_Name## Pivotview control

You can customize the pivot button icons in the pivot grid by overriding the class **.pivot-button** with a custom property content as mentioned below.

```ts

#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}

```

In the below sample, pivot grid is rendered with a customized pivot button icons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-grid/icon-customize-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/icon-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/icon-customize-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-grid/icon-customize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/icon-customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-grid/icon-customize-cs1" %}
{% endif %}
