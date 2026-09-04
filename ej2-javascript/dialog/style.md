---
layout: post
title: Style in ##Platform_Name## Dialog | Syncfusion
description: Style the ##Platform_Name## Dialog by overriding CSS for header, content, overlay, resize icon, close button, and footer button appearances.
platform: ej2-javascript
control: Style 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style in ##Platform_Name## Dialog

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preference.

## Customizing the dialog header

Use the following CSS to customize the dialog header properties.

```css
.e-dialog .e-dlg-header {
    color: green;
    font-size: 20px;
    font-weight: normal;
}
```

## Customizing the dialog content

Use the following CSS to customize the dialog content properties.

```css
.e-dialog .e-dlg-content {
    color: red;
    font-size: 10px;
    font-weight: normal;
    line-height: normal;
}
```

## Customizing the modal dialog overlay

Use the following CSS to customize the modal dialog overlay.

```css
.e-dlg-overlay {
    background-color: slategray;
    opacity: 0.6;
}
```

## Customizing the dialog resize icon

Use the following CSS to customize the dialog resize icon. The Font Awesome font package must be referenced in the page for the icon pack to work.

```css
/* To change the icon content */
.e-dialog .e-south-east::before, .e-dialog .e-south-west::before {
    content: '\f047';
}

/* To set the icon pack */
.e-dialog .e-resize-handle {
    font: normal normal normal 14px/1 FontAwesome;
}
```

The above CSS demonstration uses the Font Awesome icon.

## Customizing the dialog close button

Use the following CSS to customize the dialog close button.

```css
/* To specify font size and color */
.e-dialog .e-btn .e-btn-icon.e-icon-dlg-close {
    font-size: 12px;
    color: red;
}
```

## Customizing the dialog footer button

Use the following CSS to customize the dialog footer button. Note that selectors differ for other button style variants (e.g., outline, solid).

```css
/* To specify font color, background color and border color */
.e-btn.e-flat.e-primary, .e-css.e-btn.e-flat.e-primary {
    background-color: transparent;
    border-color: transparent;
    color: blue;
}
```
