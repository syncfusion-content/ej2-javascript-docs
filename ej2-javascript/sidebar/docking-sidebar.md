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

The [`Dock`](../api/sidebar/#enabledock) state of the Sidebar reserves some space on the page that always remains visible when the Sidebar is collapsed. It is used to show a concise form of content, such as icons alone instead of lengthy text. To achieve this, set [`enableDock`](../api/sidebar/#enabledock) to true along with the required [`dockSize`](../api/sidebar/#docksize).

In the following example, each list item includes an icon along with accompanying text. The visibility of the text is dynamically controlled through CSS rules based on the Sidebar's state. When the [`enableDock`](../api/sidebar/#enabledock) property is enabled, the **e-dock** class is applied, adjusting the text visibility accordingly. 

To show the icons alone in a docked (closed) state, the following CSS is applied:

```css
.e-dock.e-close span.e-text {
  display: none;
}
```

To show the text along with icons when the Sidebar is open, this CSS is used:

```css
.e-dock.e-open span.e-text {
  display: inline-block;
}
```

In the docked state, only icons in the list are visible, hinting at the hidden text content.

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
