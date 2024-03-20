---
layout: post
title: Events in ##Platform_Name## TextArea control | Syncfusion
description: Handling events triggered by user interactions or changes in the ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## TextArea control

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea control.

## created

The TextArea control triggers the [created](../api/textarea/#created) event when the TextArea component is created. This event provides users with an opportunity to perform actions immediately after the TextArea has been created and initialized.

```ts
import { TextArea } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    created: ()=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```

## input

The TextArea control triggers the [input](../api/textarea/#input) each time when the value of TextArea has changed. This event provides users with an opportunity to perform actions in response to real-time changes in the TextArea's content.
The [InputEventArgs](../api/textbox/InputEventArgs/) passed as an event argument provides the details about the input event in the TextArea.

```ts
import { TextArea, InputEventArgs } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    input: (args: InputEventArgs)=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```

## change

The TextArea control triggers the [change](../api/textarea/#change) event when the content of TextArea has changed and gets focus-out. This event provides users with an opportunity to execute specific actions in response to changes made by the user.
The [ChangedEventArgs](../api/textbox/ChangedEventArgs/) passed as an event argument provides the details about the changes in the TextArea's value.

```ts
import { TextArea, ChangedEventArgs } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    change: (args: ChangedEventArgs)=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```

## focus 

The TextArea control triggers the [focus](../api/textarea/#focus ) when the TextArea gains focus. This event allows developers to execute specific actions when the user interacts with the TextArea by focusing on it.
The [FocusInEventArgs](../api/textbox/FocusInEventArgs/) passed as an argument provides details about the focus event in the TextArea.

```ts
import { TextArea, FocusInEventArgs } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    focus: (args: FocusInEventArgs)=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```

## blur 

The TextArea control triggers the [blur](../api/textarea/#blur) when the TextArea loses focus. This event allows users to execute specific actions when the user interacts with the TextArea by moving focus away from it.
The [FocusOutEventArgs](../api/textbox/FocusOutEventArgs/) passed as an argument provides details about the blur event in the TextArea.

```ts
import { TextArea, FocusOutEventArgs } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    blur: (args: FocusOutEventArgs)=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```

## destroyed 

The TextArea control triggers the [destroyed](../api/textarea/#destroyed) when the TextArea component is destroyed.

```ts
import { TextArea } from '@syncfusion/ej2-inputs';

// Initialize the TextArea control.
let textareaObj: TextArea = new TextArea ({
    destroyed: ()=> {
       //Your required action here
    }
});

// Render initialized TextArea.
textareaObj.appendTo('#default');

```
