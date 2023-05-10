---
layout: post
title: Docking sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Docking sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Docking sidebar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Docking sidebar in ##Platform_Name## Sidebar control

[`Dock`](../api/sidebar/#enabledock) state of the Sidebar reserves some space on the page that always remains in a visible state when the Sidebar is collapsed. It is used to show the short term of a content like icons alone instead of lengthy text. To achieve this , set `enableDock` as true along with required `dockSize`.

In the following sample, the list item has icon with text representation. On dock state, only icons in list will be visible to represent the hint of the hidden text content.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-dock-cs1/index.html %}
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
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-dock-cs1" %}
{% endif %}

## See Also

* [How to add sidebar navigation](./how-to/sidebar-with-treeview)