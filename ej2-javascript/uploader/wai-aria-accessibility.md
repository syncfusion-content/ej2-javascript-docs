---
layout: post
title: Wai aria accessibility in ##Platform_Name## Uploader control | Syncfusion
description: Learn here all about Wai aria accessibility in Syncfusion ##Platform_Name## Uploader control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Wai aria accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Wai aria accessibility in ##Platform_Name## Uploader control

The Uploader component followed the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Uploader component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## Keyboard interaction

The uploader component characterized with complete ARIA accessibility support that helps to be accessible by on-screen readers and other assistive technology devices.

The following are the standard keys that works on uploader component:

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Tab</kbd> | Move focus to next element. |
| <kbd>Shift + Tab</kbd> | Move focus to previous element. |
| <kbd>Enter</kbd> | Triggers corresponding action to button element. |
| <kbd>Esc</kbd> | Close the file browser dialog alone and cancels the upload on drop the file. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/uploader/keyboard-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/keyboard-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/keyboard-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/keyboard-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/uploader/keyboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/uploader/keyboard-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/uploader/keyboard-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/keyboard-cs1" %}
{% endif %}

> You can also explore [JavaScript File Upload](https://www.syncfusion.com/javascript-ui-controls/js-file-upload) feature tour page for its groundbreaking features. You can also explore our [JavaScript File Upload example](https://ej2.syncfusion.com/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## Ensuring accessibility

The Uploader component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Uploader component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/uploader.html) in a new window to evaluate the accessibility of the Uploader component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/uploader.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> components](../common/accessibility)