---
layout: post
title: Events in ##Platform_Name## Floating action button control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## Floating action button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Floating action button control

This section explains the available events in Floating Action Button control.

## created

Event triggers after the creation of Floating Action Button.

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'e-icons e-edit',
    content:'Edit',
    created:()=>{
        // Your required action here
    }
});

// Render initialized Floating Action Button.
fab.appendTo('#fab');
```

## onclick

Event triggers when the Floating Action Button is clicked.

```ts
import { Fab } from '@syncfusion/ej2-buttons';

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'e-icons e-edit',
    content:'Edit'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');

//onclick event handler
fab.element.onclick = (): void => {
    // Your required action here
};
```

Below example demonstrates the click event of the Floating Action Button.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/floating-action-button/events-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/floating-action-button/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/floating-action-button/events-cs3" %}
