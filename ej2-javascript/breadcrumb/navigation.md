---
layout: post
title: Navigation in ##Platform_Name## Breadcrumb control | Syncfusion
description: Learn here all about Navigation in Syncfusion ##Platform_Name## Breadcrumb control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Navigation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in ##Platform_Name## Breadcrumb control

Breadcrumb navigations support you to provide relative or absolute URL for breadcrumb items, enable navigation for the last item of the Breadcrumb component, and open URL in a new tab or new page.

## URL

In the Breadcrumb component, the item represents the URL. The breadcrumb items can be provided with either relative or absolute URL.

### Relative URL

The [`url`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/breadcrumbItem/#url) property of the items contains a portion of the full path which is based on its relation to the current path where it is linked. In the following example, the items represent only the relative URL path.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/navigation-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/navigation-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs2" %}
{% endif %}

### Absolute URL

The [`url`](https://ej2.syncfusion.com/javascript/documentation/api/breadcrumb/breadcrumbItem/#url) property of the items contains the full path or entire address of the page. In the following example, the items represent absolute URL.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/navigation-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/navigation-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs3" %}
{% endif %}

## Enable navigation for last Breadcrumb item

Breadcrumb enables the navigation for the last item by setting the [`enableActiveItemNavigation`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#enableactiveitemnavigation) property to true. In the following example, the last item of the `Breadcrumb` was enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/navigation-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/navigation-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs4" %}
{% endif %}

## Open URL in new page or tab

To open the url provided in the items in a new page or tab, set the target property of the anchor element for the required item to "_blank" in the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event of Breadcrumb component. In the following example, the target property of anchor element for the item was set to "_blank" by using the [`beforeItemRender`](https://ej2.syncfusion.com/documentation/api/breadcrumb/#beforeitemrender) event which locates to the path in the new tab.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/breadcrumb/navigation-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/breadcrumb/navigation-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/breadcrumb/navigation-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/breadcrumb/navigation-cs5" %}
{% endif %}