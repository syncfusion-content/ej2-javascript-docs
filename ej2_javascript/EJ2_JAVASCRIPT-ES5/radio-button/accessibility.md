---
title: "RadioButton Accessibility"
component: "RadioButton"
description: "TypeScript RadioButton component has accessibility support to help access the features via keyboard, on-screen readers, or other assistive technology devices."
---

# Accessibility

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.
RadioButton provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-checked` and `aria-disabled`. It helps the people with disabilities by providing information about the widget for assistive
technology in the screen readers. RadioButton component contains the `radiobutton` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the type of input element. |
| aria-checked | Indicates whether the input is checked, unchecked, or represents mixture of checked and unchecked values. |
| aria-disabled | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Up/Left arrow</kbd></td><td>
Move and select the previous options.</td></tr>
<tr>
<td>
<kbd>Down/Right arrow</kbd></td><td>
Move and select the next options.</td></tr>
</table>

{% tab template= "radio-button/accessibility", sourceFiles="app.ts,index.html,styles.css",
es5Template="state-template" %}

```typescript
import { RadioButton } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//checked state.
let radiobutton: RadioButton = new RadioButton({ label: 'Option 1', name: 'state', checked: true });
radiobutton.appendTo('#radiobutton1');

//unchecked state.
radiobutton = new RadioButton({ label: 'Option 2', name: 'state' });
radiobutton.appendTo('#radiobutton2');

//unchecked state.
let radiobutton = new RadioButton({ label: 'Option 3', name: 'state' });
radiobutton.appendTo('#radiobutton3');

//unchecked state.
radiobutton = new RadioButton({ label: 'Option 4', name: 'state' });
radiobutton.appendTo('#radiobutton4');
```

{% endtab %}