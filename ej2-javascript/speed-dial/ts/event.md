---
layout: post
title: Event in ##Platform_Name## Speed dial control | Syncfusion
description: Learn here all about Event in Syncfusion ##Platform_Name## Speed dial control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Event 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Event in ##Platform_Name## Speed dial control

This section explains the Speed Dial events that will be triggered when appropriate actions are performed.

## clicked

The SpeedDial control triggers the [`clicked`](../api/speed-dial#clicked) event with [`SpeedDialItemEventArgs`](../api/speed-dial/speedDialItemEventArgs/) argument when an action item is clicked. You can use this event to perform the required action.

```ts
import { SpeedDial, SpeedDialItemEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    clicked: (args:SpeedDialItemEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## created

The Speed Dial control triggers the [`created`](../api/speed-dial#created) event when SpeedDial control rendering is completed.

```ts
import { SpeedDial, SpeedDialItemEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    created: ()=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## beforeOpen

The SpeedDial control triggers the [`beforeOpen`](../api/speed-dial#beforeopen) event with [`SpeedDialBeforeOpenCloseEventArgs`](../api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is opened.

```ts
import { SpeedDial, BeforeOpenCloseEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    beforeOpen: (args:BeforeOpenCloseEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## onOpen

The SpeedDial control triggers the [`onOpen`](../api/speed-dial#onopen) event with [`SpeedDialOpenCloseEventArgs`](../api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is opened.

```ts
import { SpeedDial, OpenCloseEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    onOpen: (args:OpenCloseEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## beforeClose

The SpeedDial control triggers the [`beforeClose`](../api/speed-dial#beforeclose) event with [`SpeedDialBeforeOpenCloseEventArgs`](../api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is closed.

```ts
import { SpeedDial, BeforeOpenCloseEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    beforeClose: (args:BeforeOpenCloseEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

## onClose

The SpeedDial control triggers the [`onClose`](../api/speed-dial#onclose) event with [`SpeedDialOpenCloseEventArgs`](../api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is closed.

```ts
import { SpeedDial, OpenCloseEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    onClose: (args:OpenCloseEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial.
speeddial.appendTo('#speeddial');
```

## beforeItemRender

The SpeedDial control triggers the [`beforeItemRender`](../api/speed-dial#beforeitemrender) event with [`SpeedDialItemEventArgs`](../api/speed-dial/speedDialItemEventArgs/) argument for each `SpeedDialItem` once it is rendered.

```ts
import { SpeedDial, SpeedDialItemEventArgs, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    beforeItemRender: (args:SpeedDialItemEventArgs)=> {
       //Your required action here
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');
```

Below example demonstrates the clicked event of the Speed Dial control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/speed-dial/action-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/speed-dial/action-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/speed-dial/action-cs2" %}