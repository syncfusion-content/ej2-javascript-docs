---
layout: post
title: Getting started with JavaScript Sidebar | Syncfusion
description: Learn how to get started with the Syncfusion ##Platform_Name## Sidebar control in JavaScript apps with quick configuration steps.
platform: ej2-javascript
control: Sidebar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with JavaScript Sidebar

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Create a Folder and HTML File

- Create a folder named `quickstart` in your desired directory.

- Inside the `quickstart` folder, create a new file named `index.html`.

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using below css styles and scripts

## Add Syncfusion® Sidebar CSS Styles and Scripts

Include the following CSS and JavaScript files from CDN in the <head> section of the index.html file. The `ej2-base`, `ej2-data`, `ej2-lists`, `ej2-inputs`, `ej2-buttons`, and `ej2-popups` scripts are required dependency packages for the Sidebar component.

**Styles(CSS):**

```text
https://unpkg.com/@syncfusion/ej2-bootstrap5.3-theme/styles/sidebar/index.css
```

**Scripts (javascript):**

```html
https://cdn.syncfusion.com/ej2/35.1.37/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-popups/dist/global/ej2-popups.min.js
https://cdn.syncfusion.com/ej2/32.1.37/ej2-lists/dist/global/ej2-lists.min.js
https://cdn.syncfusion.com/ej2/35.1.37/ej2-navigations/dist/global/ej2-navigations.min.js
```

## Enable backdrop

Enabling the [`showBackdrop`](../api/sidebar/#showbackdrop) in the Sidebar control will prevent the main content from user interactions, when it is in expanded state. Here, the DOM elements will not get changed. It only closes the main content by covering with a black backdrop overlay and focuses the Sidebar in the screen. Sidebar can be rendered with specific width by setting [`width`](../api/sidebar/#width) property.

N> To achieve a proper **backdrop**, we suggest that you create a wrapper parent container for the div block in which you intend to enable the backdrop. Set the class name of this parent container as the [`target`](../api/sidebar/#target) for the Sidebar. Alternatively, you can place an empty div container after the target container.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-howTo-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-howTo-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-howTo-cs2" %}

## Position

Positioning the Sidebar to the right or left of the main content can be achieved by using the [`position`](../api/sidebar/#position) property. If the position is not set, the Sidebar will expand from the left to the body element. [`enablePersistence`](../api/sidebar/#enablepersistence) will persist the control's state between page reloads. [`change`](../api/sidebar/#change) event will be triggered when the state(expand/collapse) of the control is changed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/position-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/position-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/position-cs2" %}

## Animate

Animation transitions can be set while expanding or collapsing the Sidebar using the [`animate`](../api/sidebar/#animate) property. By default , [`animate`](../api/sidebar/#animate) property is set to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/animate-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/animate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/animate-cs1" %}

## Close on document click

Sidebar can be closed on document click by setting [`closeOnDocumentClick`](../api/sidebar/#closeondocumentclick) to **true**. If this property is not set, the Sidebar will not close on document click since its default value is **false**. Sidebar can be kept opened during rendering using [`isOpen`](../api/sidebar/#isopen) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/document-click-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/document-click-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/document-click-cs1" %}

## Enable gestures

Expand or collapse the Sidebar while swiping in touch devices using [`enableGestures`](../api/sidebar/#enablegestures) property. By default, [`enableGestures`](../api/sidebar/#enablegestures) is set to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/gestures-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/gestures-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/gestures-cs1" %}

## See Also

* [Sidebar with navigation menu](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5.3/sidebar/sidebar-menu.html)
* [Sidebar responsive panel](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5.3/sidebar/responsive-panel.html)
* [Sidebar with listView](./how-to/sidebar-with-list-view/)
* [Use case sample](https://ej2.syncfusion.com/showcase/javascript/webmail/#/home)
