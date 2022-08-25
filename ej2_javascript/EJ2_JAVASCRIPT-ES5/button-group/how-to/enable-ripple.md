---
title: "Enable ripple"
component: "ButtonGroup"
description: "ButtonGroup how to section, create ButtonGroup using util function, icons, form submit, show selected state on initial render."
---

# Enable ripple

Ripple can be enabled by importing `rippleEffect` method from `ej2-base` and initialize rippleEffect with `.e-btn-group`
element, and selector as `e-btn`.

The following example illustrates how to enable ripple for ButtonGroup.

<!-- markdownlint-disable MD033 -->

{% tab template= "button-group/ripple", sourceFiles="app.ts,index.html,styles.css", es5Template="ripple-template" %}

```typescript

import { rippleEffect, enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// To enable ripple in ButtonGroup.
let button: HTMLElement = document.querySelector('.e-btn-group');
rippleEffect(button, { selector: '.e-btn' });

```

{% endtab %}