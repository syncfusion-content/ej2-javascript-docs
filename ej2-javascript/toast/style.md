---
layout: post
title: Style in ##Platform_Name## Toast | Syncfusion
description: Style ##Platform_Name## Toast with custom CSS to change title, content, icon, and background colors and fonts.
platform: ej2-javascript
control: Style
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style in ##Platform_Name## Toast

The following content provides the exact CSS structure that can be used to modify the control's appearance based on preference.

## Customizing the toast title

Use the following CSS to customize the default toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-title {
    color: red;
    font-size: 18px;
    font-weight: bold;
}
```

## Customizing the toast content

Use the following CSS to customize the default toast's content properties like font-family, font-size and color.

```css
/* To change color, font family and font size */
.e-toast-container .e-toast .e-toast-message .e-toast-content {
    color: aqua;
    font-size: 13px;
    font-weight: normal;
}
```

## Customizing the toast icon

Use the following CSS to customize the default toast icon color.

```css
/* To change icon color */
.e-toast-container .e-toast .e-toast-icon {
    color: yellow;
}
```

## Customizing the toast background

Use the following CSS to customize the default toast's background color.

```css
/* To change background color */
.e-toast-container .e-toast {
    background-color: navy;
}
```