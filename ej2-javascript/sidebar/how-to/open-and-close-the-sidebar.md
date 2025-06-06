---
layout: post
title: Open and close the Sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Open and close the Sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Open and close the Sidebar
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open and close the Sidebar in ##Platform_Name## Sidebar control

Opening and closing the Sidebar can be achieved using built-in public methods.

* [`show()`](../../api/sidebar/#show): Method to open the Sidebar.
* [`hide()`](../../api/sidebar/#hide): Method to close the Sidebar.
* [`toggle()`](../../api/sidebar/#toggle): Method to toggle between open and close states of the Sidebar.

In the following sample, the toggle method is used to show or hide the Sidebar on a button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-default-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-default-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-default-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-default-cs1" %}
{% endif %}