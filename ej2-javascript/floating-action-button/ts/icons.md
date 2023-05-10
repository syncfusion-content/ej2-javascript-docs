---
layout: post
title: Icons in ##Platform_Name## Floating action button control | Syncfusion
description: Learn here all about Icons in Syncfusion ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Icons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Icons in ##Platform_Name## Floating action button control

You can customize the icon and text of JavaScript Floating Action Button(FAB) using [`iconCss`](../api/floating-action-button/fab/#iconcss) and [`content`](../api/floating-action-button/fab/#content) properties.

## FAB with icon

You can show icon only in Floating Action Button by setting [`iconCss`](../api/floating-action-button/fab/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting `title` attribute.

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'fab-icons fab-icon-people',
    target: '#targetElement'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');
```

## FAB with icon and text

You can show icon along with text in Floating Action Button by setting [`iconCss`](../api/floating-action-button/fab/#iconcss) and [`content`](../api/floating-action-button/fab/#content) properties.

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'fab-icons fab-icon-people',
    content:'Contacts',
    target: '#targetElement'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');
```

### Icon position

You can change the position of icon when showing along with content by setting [`iconPosition`](../api/floating-action-button/fab/#iconposition) property. By default, the icon is positioned on the left side together with text.

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'fab-icons fab-icon-people',
    content:'Contacts',
    target: '#targetElement',
    iconPosition: 'Right'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');
```

Below example demonstrates a FAB with icon and text.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/icons-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/icons-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/floating-action-button/icons-cs2/styles.css %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/icons-cs2" %}
