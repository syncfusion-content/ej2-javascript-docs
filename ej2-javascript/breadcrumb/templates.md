---
layout: post
title: Templates in ##Platform_Name## Breadcrumb control | Syncfusion
description: Learn here all about Templates in Syncfusion ##Platform_Name## Breadcrumb control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Templates in ##Platform_Name## Breadcrumb control

The Breadcrumb component provides a way to customize the items using [`itemTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#itemtemplate) and the separators using [`separatorTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#separatortemplate) properties.

## Item Template

In the following example, Shopping Cart details are used as breadcrumb Items and the each items is rendered as chips component using [`itemTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#itemtemplate).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/templates-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/templates-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs1" %}
{% endif %}

## Separator Template

In the following example, the separators are customized with icons using [`separatorTemplate`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#separatortemplate). While rendering the separator template, you can get the previous and next item using `previousItem` and `nextItem` variables, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/templates-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/templates-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs2" %}
{% endif %}

## Customize Specific Item Template

The specific breadcrumb item can be customizable using itemTemplate with conditional rendering. In the following example, added the span element only for the `breadcrumb` text in breadcrumb item.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/templates-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/templates-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/templates-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/templates-cs3" %}
{% endif %}
