---
layout: post
title: Content render modes in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Content render modes tabs in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Content render modes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Content render modes in ##Platform_Name## Tab control

Tabs support rendering content based on different scenarios. The content of the tabs can be rendered in three different ways, as outlined below.

* [On Demand rendering or lazy loading](#on-demand-rendering-or-lazy-loading)
* [Dynamic rendering](#dynamic-rendering)
* [On initial rendering](#on-initial-rendering)

## On Demand rendering or lazy loading

This mode is the default, where only the content of the currently selected tab is initially loaded and available in the DOM, with subsequent tab content rendered upon selection. Once a tab's content is loaded, it remains in the DOM. This ensures that the state of the tabs, such as scroller positions, form values, etc., is preserved.

In the following code example, the Calendar and Scheduler are rendered in the first and second tabs, respectively. Initially, the Scheduler is not available, but it will be rendered once the second tab is selected. Both the Calendar and Scheduler are maintained in the DOM.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/load-on-demand-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-demand-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/load-on-demand-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/load-on-demand-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-demand-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/load-on-demand-cs1" %}
{% endif %}

## Dynamic rendering

This mode can be applied to Tabs by setting the [`loadOn`](../api/tab/#loadon) property to `Dynamic` using `loadOn`. In this mode, only the content of the currently selected tab is loaded and available in the DOM initially. When a different tab is selected, its content replaces the current content. Since this mode ensures the DOM maintains only the content of the active tab, page loading performance is improved. However, the Tabs do not retain their state, as each time a tab is selected, it loads its content again.

In the following code example, there are two tabs. The first tab contains a login page, and the second tab contains a Grid component. The Grid component in the second tab will only be rendered in the DOM after the login is completed. Upon successful login, the second tab will replace the first tab in the DOM.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/load-on-dynamic-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-dynamic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/load-on-dynamic-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/load-on-dynamic-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-dynamic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/load-on-dynamic-cs1" %}
{% endif %}

## On initial rendering

This mode can be applied to Tabs by setting the [`loadOn`](../api/tab/#loadon) property to `Init` using `loadOn`. In this mode, the content of all the tabs is rendered on initial load and maintained in the DOM. This mode is ideal when you have a small number of tabs and need to preserve the state of each tab. It also allows you to access the references of components rendered in other tabs.

In the following example, all three tabs are rendered on the initial load, and the data entered in the first tab will be maintained even when the second or third tab is active.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/load-on-init-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-init-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/load-on-init-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/load-on-init-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/load-on-init-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/load-on-init-cs1" %}
{% endif %}
