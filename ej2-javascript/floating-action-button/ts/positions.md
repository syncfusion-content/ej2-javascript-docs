---
layout: post
title: Positions in ##Platform_Name## Floating action button control | Syncfusion
description: Learn here all about Positions in Syncfusion ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Positions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Positions in ##Platform_Name## Floating action button control

The floating action button can be positioned anywhere on the [`target`](../api/floating-action-button/fab/#target) using the [`position`](../api/floating-action-button/fab/#position) property. If the `target` is not defined, then FAB is positioned based on the browser viewport.

The position values of Floating Action Button are as follows:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control in BottonLeft position
let fab: Fab = new Fab({
    content: 'Add',
    position: 'BottomLeft',
    target: '#targetElement'
});

// Render initialized Floating Action Button.
fab.appendTo('#fab');
```

Below example demonstrates different supported positions of FAB.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/all-positions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/all-positions-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/all-positions-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/all-positions-cs2" %}

## Custom position

You can define the custom position of the Floating Action Button by override the `top`, `left`, `right`, and `bottom` CSS properties using [`cssClass`](../api/floating-action-button/fab/#cssclass). For detailed information, refer `styles.css` file below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/position-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/position-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/position-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/position-cs2" %}