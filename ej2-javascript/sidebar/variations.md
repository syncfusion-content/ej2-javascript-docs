---
layout: post
title: Types in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Types in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Types
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Types in ##Platform_Name## Sidebar control

The Sidebar control's expand behavior can be modified based on its intended use.

## Expanding types of Sidebar

The Sidebar can be initialized with one of four different types, each consistent with the main control, as explained below. When [`dataBind`](../api/sidebar/#databind) is invoked, it applies any pending property changes immediately to the control.

 | Item | Description |
|-----|-----|
| `Over` | Sidebar floats over the main content area. |
| `Push` | Sidebar pushes the main content area to appear side-by-side, and shrinks the main content within the screen width. |
| `Slide` | Sidebar translates the x and y positions of the main content area based on the Sidebar width. The main content area will not be adjusted within the screen width. |
| `Auto` | Sidebar has the `Over` type in mobile resolution, and `Push` type in other higher resolutions. |

> `Auto` is the default expand mode. The Sidebar with type `Auto` will always expand on initial rendering, irrespective of [`enableDock`](../api/sidebar/#enabledock) and [`isOpen`](../api/sidebar/#isopen) properties.

In the following sample, the types of Sidebar are demonstrated.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/types-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/types-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/types-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/types-cs1" %}

{% elsif page.publishingplatform == "javascript" %}
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/types-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/types-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/types-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/types-cs1" %}
{% endif %}

## See Also

* [How to add Sidebar with custom animation](./how-to/sidebar-with-variation-animation)
* [How to add multiple Sidebar](./how-to/multiple-sidebar)
