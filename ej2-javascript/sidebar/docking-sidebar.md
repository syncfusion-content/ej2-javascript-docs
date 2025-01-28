---
layout: post
title: Docking Sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Docking Sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Docking Sidebar
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Docking Sidebar in ##Platform_Name## Sidebar control

The [`Dock`](../api/sidebar/#enabledock) state of the Sidebar reserves some space on the page that always remains visible when the Sidebar is collapsed. It is used to show a concise form of content, such as icons alone instead of lengthy text. To achieve this, set `enableDock` to true along with the required `dockSize`.

In the following sample, the list item has an icon with text representation. In the dock state, only icons in the list will be visible to represent a hint of the hidden text content.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-dock-cs1" %}

{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-dock-cs1" %}
{% endif %}

## See Also

* [How to add Sidebar navigation](./how-to/sidebar-with-treeview)