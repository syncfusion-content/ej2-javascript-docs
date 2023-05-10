---
layout: post
title: Accessibility in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Rich text editor control

The Rich Text Editor component has been designed, keeping in mind the WAI-ARIA specifications, and applies the WAI-ARIA roles, states, and properties. This component is characterized by complete ARIA accessibility support that makes it easy for people who use assistive technologies (AT) or those who completely rely on keyboard navigation

## ARIA attributes

* The toolbar of Rich Text Editor, assigned the role of `Toolbar` and has the following list of ARIA attribute.

| **Property** | **Functionalities** |
| --- | --- |
| role="toolbar" | This attribute added to the ToolBar element describes the actual role of the element. |
| aria-orientation     | Indicates the ToolBar orientation. Default value is `horizontal`. |
| aria-haspopup       | Indicates the popup mode of the Toolbar. Default value is false. When popup mode is enabled,  attribute value has to be changed to `true`. | |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

For further details of Toolbar ARIA attributes, refer the  [`accessibility of Toolbar`](../../toolbar/accessibility) documentation.

The Rich Text Editor element is assigned the role of `application`.

| **Property** | **Functionalities** |
| --- | --- |
| role="application" | This attribute added to the Rich Text Editor element describes the actual role of the element. |
| aria-disabled       | Indicates the disabled state of the ToolBar. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs1" %}
{% endif %}

## See Also

* [Globalization](/rich-text-editor/globalization.html)
* [Keyboard Support](./keyboard-support/#html-formation-key-config-list)