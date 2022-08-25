---
title: Style and Appearance in TextBox Component | Syncfusion
component: "Textbox"
description: "Checkout and learn here all about Style and appearance in Syncfusion TextBox component and more."
---

# Style and Appearance in TextBox Component

The [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material) for Essential JS 2 can be used to customize a new theme from an existing theme. It allows modification and preview for primary font and color as well as secondary font and color of the chosen theme. This section covers the instructions and techniques to customize the appearance and styling of the TextBox component beyond the basic requirement provided by the theme studio.

>Note: The styling and customization provided in this section will be applied globally for all the Textbox in the page when used as such. To apply the customization only to a specific textbox component, the [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) property can be used. [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) API adds the custom class attribute to the textbox component, using which the styling can be restricted to the specific component.

{% tab template= "textbox/textbox-cssclass", sourceFiles="index.html,index.ts,index.css", es5Template="textbox-cssclass-template" %}

## Customize the Textbox container element

The width and height properties can be applied to the container element of the textbox which contains the CSS class `.e-input-group`. Applying the customized height and size through the `.e-input-group` selector will override the default styles.

```css
/* To specify height and width */
.e-input-group input.e-input {
          width: 100px;
          height: 50px;
}
```

![customizing Textbox size](./images/javascript-customize-textbox-size.png)

## Customize the Floating Placeholder element

The font size and color of the floating Label in the TextBox are applied to the label element which contains the CSS class `.e-float-text .e-label-top`. Applying the customization through the `.e-float-text .e-label-top` will override default styles.

```css
/* To specify font size and color */
.e-float-input.e-control-wrapper:not(.e-error) input ~ label.e-label-top.e-float-text {
        color: blue;
        font-size: 15px;
}
```

![customizing Floating label](./images/javascript-customize-textbox-placeholder.png)

## Customize the Textbox focus element

Textbox control's border CSS styles will change, when the input is focused. This focus behavior is applied to the before and after CSS pseudo elements with class `.e-float-line` and it can be customized by overriding them.

```css
/* To specify border color */
.e-float-input.e-control-wrapper:not(.e-input-group)
.e-float-line::after,
.e-float-input.e-control-wrapper:not(.e-input-group)
.e-float-line::before {
        background: blue;
}
```

![customizing Textbox focus](./images/javascript-customize-textbox-focus.png)

## Customize the Textbox border

The border styles of the Textbox control are applied to the element with the CSS class `.e-input-group` and can be overridden through this CSS Class.

```css
/* To specify border color and border radius */
.e-input-group {
        border-color: red;
        border-radius: 15px;
}
```

![customizing Textbox border](./images/javascript-customize-textbox-border.png)

All the CSS style customization explained above can be previewed in the below example.

{% tab template="textbox/styles", es5Template="styles-template", sourceFiles="app.ts,index.html" %}

```typescript
import { TextBox } from '@syncfusion/ej2-inputs';
// Initialize TextBox component
let textbox: TextBox = new TextBox({
  placeholder: 'First Name',
  floatLabelType: 'Auto',
});
textbox.appendTo('#firstname');
```

{% endtab %}

## Filled and Outline mode

The Filled and Outline modes can be enabled in the Textbox component by adding the `e-outline` or `e-filled` class to the [cssClass](https://ej2.syncfusion.com/documentation/api/textbox#cssclass) API.

{% tab template="textbox/filled-outlined", es5Template="filled-outlined-template", sourceFiles="app.ts,index.html" %}

```typescript
import { TextBox } from '@syncfusion/ej2-inputs';
// Initialize TextBox component with cssClass 'e-filled'
let filledTextBox: TextBox = new TextBox({
    placeholder: 'Filled',
    cssClass: 'e-filled',
    floatLabelType: 'Auto'
});
filledTextBox.appendTo('#filled');
// Initialize TextBox component with cssClass 'e-outline'
let outlineTextBox: TextBox = new TextBox({
    placeholder: 'Outlined',
    cssClass: 'e-outline',
    floatLabelType: 'Auto'
});
outlineTextBox.appendTo('#outlined');
```

{% endtab %}

>Note: Filled and Outline theme customization are available only with Material theme.