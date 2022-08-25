---
title: "Signature Accessibility "
component: "Signature"
description: "This section explains the details of the Accessibility of the signature control."
---

# Accessibility

## Keyboard interaction

The following list of keys can be used to interact with the Signature control.

| **Properties** | **Functionality** |
| --- | --- |
| <kbd>Ctrl + Z</kbd>  | Undo the last user action. |
| <kbd>Ctrl + Y</kbd>  | Redo the last user action. |
| <kbd>Ctrl + S</kbd>  | To save the signature. |
| <kbd>delete</kbd>  | Erases all the signature strokes signed by user. |

{% tab template="signature/accessibility", isDefaultActive = "true", sourceFiles="app.ts,index.html,styles.css", es5Template="accessibility-template" %}

```typescript
import { Signature } from '@syncfusion/ej2-inputs';

let signature: Signature = new Signature({}, '#signature');

```

{% endtab %}