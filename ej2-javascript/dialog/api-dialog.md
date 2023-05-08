---
layout: post
title: Api dialog in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Api dialog in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Api dialog 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Api dialog in ##Platform_Name## Dialog control

Represents the Dialog component that displays information to the user, and used to get the user input.
```
<div id="dialog"></div>
```
```ts
<script>
  var dialogObj = new Dialog({ header: 'Dialog' });
  dialogObj.appendTo("#dialog");
</script>
```

## Properties

### allowDragging `boolean`

Specifies the value to either enable or disable draggable option in Dialog.

Defaults to *false*

### animationSettings [`AnimationSettingsModel`](./api-animationSettingsModel.html)

Specifies the Dialog animation settings.

Defaults to *{ effect: 'Fade', duration: 400, delay:0 }*

### buttons `ButtonPropsModel[]`

Specifies the collection of Dialog `buttons` with click action and button component model.

Defaults to *[{}]*

### closeOnEscape `boolean`

Specifies the Dialog that is closed when user press the ESC key.

Defaults to *true*

### content `string` &#124;  `HTMLElement`

Specifies the `content` to be displayed in Dialog, it can be text or HTML element.

Defaults to *''*

### cssClass `string`

Specifies the CSS class name to be added for Dialog element.
User can add single or multiple CSS classes.

Defaults to *''*

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

Defaults to *false*

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

Defaults to *false*

### footerTemplate `string`

Specifies the template content to defines how the Dialog footer is rendered.

Defaults to *''*

### header `string`

Specifies the `header` content that defines how the Dialog `header` is rendered.

Defaults to *''*

### height `string` &#124;  `number`

Specifies the `height` of the Dialog.

Defaults to *'auto'*

### isModal `boolean`

Specifies the value to render the Dialog as modal or modeless.

Defaults to *false*

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

Defaults to *undefined*

### position `PositionDataModel`

Specifies to `position` the Dialog on built-in 9 places or any custom location with
respect to the associated target elements.
For ex: {X:'left', Y:'top'} or { X: 100, Y: 100 }.
Following list of positions are available.
* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value

Defaults to *{X:'center', Y:'center'}*

### showCloseIcon `boolean`

Specifies the value to either show or hide the close icon button.

Defaults to *false*

### target `HTMLElement` &#124;  `string`

Specifies the `target` element where the Dialog should be displayed.
If the user set the specific `target` element for Dialog, it will be positioned based on the `target`.

Defaults to *null*

### visible `boolean`

Specifies the value to either Dialog is opened or not.

Defaults to *true*

### width `string` &#124;  `number`

Specifies the `width` of the Dialog.

Defaults to *'100%'*

### zIndex `number`

Specifies the z-index value for Dialog.

## Methods

### addEventListener

Adds the handler to the given event listener.

Returns *void*

### appendTo

Appends the control within the given HTML element

| Parameter | Type | Description |
|------|------|-------------|
| selector (*optional*) |  `string` &#124;  `HTMLElement` | Target element where control needs to be appended<br> |

Returns *void*

### dataBind

When invoked, applies the pending property changes immediately to the component.

Returns *void*

### hide

To hide the Dialog element on screen.

Returns *void*

### refresh

Applies all the pending property changes and render the component again.

Returns *void*

### refreshPosition

Specifies dialog offset x and y position changed dynamically or change the header,footer height or width dynamically, reposition the dialog as per the new changes.

Returns *void*

### removeEventListener

Removes the handler from the given event listener.

Returns *void*

### show

To show the Dialog element on screen.
To enable the fullScreen Dialog pass the parameter to 'true'.

| Parameter | Type | Description |
|------|------|-------------|
| isFullScreen (*optional*) |  `boolean` | Enable the fullScreen Dialog. |

Returns *void*

### Inject

Dynamically injects the required modules to the component.

Returns *void*

## Events

### beforeClose [`EmitType<BeforeCloseEventArgs>`](./api-beforeCloseEventArgs.html)

Event triggers before close the Dialog.

### beforeOpen [`EmitType<BeforeOpenEventArgs>`](./api-beforeOpenEventArgs.html)

Event triggers before open the Dialog.

### close  `EmitType<Object>`

Event triggers once the Dialog is closed.

### created  `EmitType<Object>`

Event triggers when the Dialog is `created`.

### drag  `EmitType<Object>`

Event triggers when the user drags Dialog.

### dragStart  `EmitType<Object>`

Event triggers when user starts to drag the Dialog.

### dragStop  `EmitType<Object>`

Event triggers when the user stops dragging the Dialog.

### open  `EmitType<Object>`

Event triggers once Dialog is opened.

### overlayClick  `EmitType<Object>`

Event triggers when modal Dialog overlay is clicked.
