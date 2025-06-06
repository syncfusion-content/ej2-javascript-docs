---
layout: post
title: Style in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Style in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style in ##Platform_Name## Tooltip control

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the Tooltip

Use the following CSS to customize the Tooltip.

```
.e-tooltip-wrap {
    border-radius: 4px;
    opacity: 1;
}
```

## Customizing the Tooltip popup

Use the following CSS to customize the Tooltip popup properties.

```
.e-tooltip-wrap.e-popup {
    background-color: #fff;
    border: 2px solid #000;
}
```

## Customizing the Tooltip content

Use the following CSS to customize the Tooltip content.

```
.e-tooltip-wrap .e-tip-content {
    color: red;
    font-size: 12px;
    line-height: 20px;
}
```

## Customizing the Tooltip arrow tip

Use the following CSS to customize the Tooltip arrow tip.

```
/* To customize the arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip.e-tip-bottom {
    height: 12px;
    left: 50%;
    top: 100%;
    width: 24px;
}

/* To customize the arrow tip at top */
.e-tooltip-wrap .e-arrow-tip.e-tip-top {
    height: 12px;
    left: 50%;
    top: -9px;
    width: 24px;
}

/* To customize the arrow tip at left */
.e-tooltip-wrap .e-arrow-tip.e-tip-left {
    height: 24px;
    left: -9px;
    top: 48%;
    width: 12px;
}

/* To customize the arrow tip at right */
.e-tooltip-wrap .e-arrow-tip.e-tip-right {
    height: 24px;
    left: 100%;
    top: 50%;
    width: 12px;
}
```

## Customizing the Tooltip inner tip

Use the following CSS to customize the Tooltip inner tip.

```
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-right,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-left,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-bottom,
.e-tooltip-wrap .e-arrow-tip-inner.e-tip-top {
    color: #fff;
    font-size: 25.9px;
}
```

## Customizing the Tooltip outer tip

Use the following CSS to customize the Tooltip outer tip.

```
/* To customize the arrow tip at bottom */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-bottom {
    border-left: 12px solid transparent;
    border-right: 14px solid transparent;
    border-top: 12px solid #000;
}

/* To customize the arrow tip at top */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-top {
    border-bottom: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

/* To customize the arrow tip at left */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-left {
    border-bottom: 12px solid transparent;
    border-right: 12px solid #000;
    border-top: 12px solid transparent;
}

/* To customize the arrow tip at right */
.e-tooltip-wrap .e-arrow-tip-outer.e-tip-right {
    border-bottom: 12px solid transparent;
    border-left: 12px solid #000;
    border-top: 12px solid transparent;
}
```
