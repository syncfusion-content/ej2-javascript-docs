---
layout: post
title: Api dialogModel in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Api dialogModel in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Api dialogModel 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Api dialogModel in ##Platform_Name## Dialog control

Interface for a class Dialog

## Properties

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

### allowDragging `boolean`

Specifies the value to either enable or disable draggable option in Dialog.

### animationSettings [`AnimationSettingsModel`](./api-animationSettingsModel.html)

Specifies the Dialog animation settings.

### buttons `ButtonPropsModel[]`

Specifies the collection of Dialog `buttons` with click action and button component model.

### closeOnEscape `boolean`

Specifies the Dialog that is closed when user press the ESC key.

### content `string` &#124;  `HTMLElement`

Specifies the `content` to be displayed in Dialog, it can be text or HTML element.

### cssClass `string`

Specifies the CSS class name to be added for Dialog element.
User can add single or multiple CSS classes.

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

### footerTemplate `string`

Specifies the template content to defines how the Dialog footer is rendered.

### header `string`

Specifies the `header` content that defines how the Dialog `header` is rendered.

### height `string` &#124;  `number`

Specifies the `height` of the Dialog.

### isModal `boolean`

Specifies the value to render the Dialog as modal or modeless.

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

### position `PositionDataModel`

Specifies to `position` the Dialog on built-in 9 places or any custom location with respect to the associated target elements.
For ex: {X:'left', Y:'top'} or { X: 100, Y: 100 }.
Following list of positions are available.
* for X is: left, center, right (or) any offset value
* for Y is: top, center, bottom (or) any offset value

### showCloseIcon `boolean`

Specifies the value to either show or hide the close icon button.

### target `HTMLElement` &#124;  `string`

Specifies the `target` element where the Dialog should be displayed. If the user set the specific `target` element for Dialog, it will be positioned based on the `target`.

### visible `boolean`

Specifies the value to either Dialog is opened or not.

### width `string` &#124;  `number`

Specifies the `width` of the Dialog.

### zIndex `number`

Specifies the z-index value for Dialog.
