---
layout: post
title: Style and appearance in ##Platform_Name## Context menu | Syncfusion
description: Customize the Syncfusion ##Platform_Name## Context menu appearance with CSS for wrapper, items, caret, and menu icons.
platform: ej2-javascript
control: Style and appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in ##Platform_Name## Context menu

To modify the ContextMenu's appearance, you need to override the default CSS of the ContextMenu component. Below is the list of CSS classes and their corresponding sections in the ContextMenu component. You can also create your own custom theme for all the controls using the [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

| CSS Class | Purpose of Class |
| ----- | ----- |
| `.e-contextmenu-wrapper` | To customize the context menu wrapper. |
| `.e-contextmenu-wrapper .e-menu-parent` | To customize the context menu items. |
| `.e-contextmenu-wrapper ul .e-menu-item.e-selected .e-caret::before` | To customize the context menu caret icon. |
| `.e-contextmenu-wrapper ul .e-menu-item .e-menu-icon::before` | To customize the icons of the context menu. |