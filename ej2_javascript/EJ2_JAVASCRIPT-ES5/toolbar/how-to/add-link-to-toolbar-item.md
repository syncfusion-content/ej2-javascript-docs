---
title: "Add link to Toolbar Item"
component: "Toolbar"
description: "This example demonstrates how to add hyperlink into JavaScript Toolbar item."
---

# Add link to Toolbar Item

Toolbar supports to add link by using the template configuration. The Toolbar can be rendered by item based collection and by HTML elements. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

The template property also allows getting template content through query `selector`. Here, anchor element 'ID' attribute is specified in the template.

```typescript
template: "#AnchorTemplate"

```

{% tab template="toolbar/toolbar-how-link", es5Template="es5_toolbar_link", sourceFiles="index.ts,index.html" %}

```typescript

import {Toolbar} from '@syncfusion/ej2-navigations';

let toolbar: Toolbar = new Toolbar({
    items: [
        { text: "Cut" },
        { text: "Copy" },
        { type: "Separator" },
        { text: "Paste" },
        { type: "Separator" },
        { template: '#AnchorTemplate' }
    ]
});
toolbar.appendTo('#element');

```

{% endtab %}