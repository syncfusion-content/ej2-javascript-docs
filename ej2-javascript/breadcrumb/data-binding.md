---
layout: post
title: Data binding in ##Platform_Name## Breadcrumb control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Breadcrumb control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Breadcrumb control

The Breadcrumb supports to generate items based on the current URL by default. You can set the [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property or [`url`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#url) property to generate the items.

## Items based on current Url

The breadcrumb items can be generated based on the current URL of the page when the user does not specify the breadcrumb items using [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property. The following example shows the breadcrumb items generated from the provided URL in the component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/navigation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/navigation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs1" %}
{% endif %}

> This sample is hosted in different location, so the Breadcrumb component is rendered with different location instead of the actual location.

## Absolute Url

The breadcrumb items can be generated based on the [`url`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#url) property in the component when the user does not specify the breadcrumb items using [`items`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#items) property. The following example shows the breadcrumb items generated from the provided url in the component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/data-binding-cs1" %}
{% endif %}

## Customize text when generated items using Url

The breadcrumb items text can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event. In the following example, `bind-to-location` text was changed as `location`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/data-binding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/data-binding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/data-binding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/data-binding-cs2" %}
{% endif %}