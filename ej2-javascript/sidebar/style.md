---
layout: post
title: Style in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Style in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style in ##Platform_Name## Sidebar control

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user's preference.

## Customizing the Sidebar

Use the below CSS to customize the Sidebar root element.

```

.e-sidebar {
    background: #898b2b
}

```

## Customizing the Sidebar based on the positions

Use the below CSS to customize the left positioned Sidebar.

```

.e-sidebar.e-left {
    border-right: 2px solid red;
}

```

Use the below CSS to customize the right positioned Sidebar.

```

.e-sidebar.e-right {
    border-left: 2px solid red;
}

```

## Customizing the Sidebar based on the active state

Use the below CSS to customize the open state of the left positioned Sidebar.

```

.e-sidebar.e-left.e-open {
    transition: transform 2.5s ease;
}

```

Use the below CSS to customize the open state of the right positioned Sidebar.

```

.e-sidebar.e-right.e-open {
     transition: transform 2.5s ease;
}

```

Use the below CSS to customize the closed state of the left positioned Sidebar.

```

.e-sidebar.e-left.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}

```

Use the below CSS to customize the closed state of the right positioned Sidebar.

```

.e-sidebar.e-right.e-transition.e-close {
    transition: transform 2.5s ease, visibility 1200ms;
}

```

## Customizing the Sidebar with dock state

When you enable the Dock support, the "e-dock" class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the Sidebar element with a dock state.

```

.e-sidebar.e-dock {
    background: #2d323e;
}

```

## Customizing the different types of Sidebar

Use the below CSS to customize the auto type Sidebar.

```

.e-sidebar.e-left.e-auto {
    background-color: pink;
}

```

Use the below CSS to customize the push type Sidebar.

```

.e-sidebar.e-left.e-push {
    background-color: beige;
}

```

Use the below CSS to customize the over type Sidebar.

```

.e-sidebar.e-left.e-over {
    background-color: aqua;
}

```

Use the below CSS to customize the slide type Sidebar.

```

.e-sidebar.e-left.e-slide {
    background-color: green;
}

```

## Customizing the backdrop of the Sidebar

Use the below CSS to customize the backdrop of the Sidebar.

```

.e-sidebar-overlay {
    background-color: aqua;
}

```

## Customizing the Sidebar in the RTL direction

When you enable the RTL (right to left direction) support, the "e-rtl" class will be added to the root element. Based on that class, you can also customize all the above stated customization. Use the following CSS to customize the Sidebar element in the RTL (right to left direction) mode.

```

.e-sidebar.e-left.e-rtl {
    background-color: antiquewhite;
}

```

## Prevent the animation transition for the Sidebar control

Use the below CSS to prevent the animation transition for the Sidebar control.

```

.e-sidebar-context .e-content-animation {
    transition: none !important;
    transform: none !important;
}

```
