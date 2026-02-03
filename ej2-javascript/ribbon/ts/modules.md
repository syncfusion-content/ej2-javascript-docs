---
layout: post
title: Ribbon Modules in  ##Platform_Name## Ribbon control | Syncfusion
description:  Checkout and learn about Ribbon Modules with ##Platform_Name## Ribbon control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Ribbon
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon control

The Ribbon control contains several feature-based modules that must be injected to enable their respective functionalities.

The following modules are available. If the module injection type is **selective**, it must be manually injected to extend the Ribbon's functionality.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButtonService` | Enables Button functionality in the Ribbon. | default |
| `RibbonCheckBoxService` | Enables CheckBox functionality in the Ribbon.| default |
| `RibbonDropDownService` | Enables DropDown Button functionality in the Ribbon.| default |
| `RibbonSplitButtonService` | Enables Split Button functionality in the Ribbon.| default |
| `RibbonComboBoxService` | Enables ComboBox functionality in the Ribbon. | default |
| `RibbonGroupButtonService` | Enables Group Button functionality in the Ribbon. | default |
| `RibbonColorPickerService` | Provides support for the ColorPicker item.| selective |
| `RibbonGalleryService` | Provides support for the Gallery item.| selective |
| `RibbonFileMenuService` | Enables the File Menu feature.| selective |
| `RibbonBackstageService` | Enables the Backstage view feature.| selective |
| `RibbonContextualTabService` | Enables the Contextual Tab feature.| selective |
| `RibbonKeyTipService` | Enables the KeyTip navigation feature.| selective |

These modules should be injected into the `providers` array of your application's root `NgModule` or the specific component.

`[ts]`

```typescript
Ribbon.Inject(RibbonFileMenu, RibbonColorPicker);
```
