---
layout: post
title: Quick Access in ##Platform_Name## Image Editor | Syncfusion
description: Customize the annotation quick access toolbar in the ##Platform_Name## Image Editor by adding or removing tools for Rectangle, Ellipse, Line, and Arrow.
platform: ej2-javascript
control: Quick Access
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Quick Access in ##Platform_Name## Image Editor

The quick access toolbars in the Image Editor provide annotation-specific tools for shapes such as Rectangle, Ellipse, Line, Arrow, and Path. These toolbars are displayed only when an annotation is selected, providing a focused and contextual set of actions. The available items differ per annotation type, so add or remove items based on the active annotation.

The [`showQuickAccessToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#showquickaccesstoolbar) property controls the visibility of the quick access toolbar. It defaults to `true`. Users can enable or disable this toolbar, add or remove items, and create a personalized set of tools.

## Add a custom toolbar item

The quick access toolbar that appears when inserting annotations in the Image Editor is customizable using the [`quickAccessToolbarOpen`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#quickaccesstoolbaropen) event. This event is triggered when the quick access toolbar is opened, allowing you to modify its contents.

### Steps to add a custom toolbar item

1. Subscribe to the [`quickAccessToolbarOpen`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/index-default#quickaccesstoolbaropen) event.
2. In the event handler, access the `toolbarItems` property of the [`QuickAccessToolbarEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/quickaccesstoolbareventargs).
3. Add or remove items in the `toolbarItems` collection, matching by the `item` property, to customize the quick access toolbar.

Here is an example of adding a custom toolbar item to the quick access toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/image-editor/quick-access-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/quick-access-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/quick-access-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/image-editor/quick-access-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/quick-access-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/quick-access-cs1" %}
{% endif %}