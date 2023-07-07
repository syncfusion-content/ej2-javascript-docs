---
layout: post
title: Style appearance in ##Platform_Name## Datepicker control | Syncfusion
description: Learn here all about Style appearance in Syncfusion ##Platform_Name## Datepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in ##Platform_Name## Datepicker control

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DatePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        height: 40px;
        font-size: 20px;
}
```

## Customizing the DatePicker icon element

Use the following CSS to customize the DatePicker icon element

```
/* To specify background color and font size */
.e-input-group .e-input-group-icon:last-child, .e-input-group.e-control-wrapper .e-input-group-icon:last-child {
        font-size: 12px;
        background-color: darkgray;
}
```

## Customizing the Calendar popup of the DatePicker

Please check the below section, to customize the style and appearance of the Calendar component

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full Screen Mode: Enhancing the DatePicker Component (Mobile Support Only)

We have introduced the full screen mode functionality in our DatePicker component, enabling users to see the DatePicker calendar element in full-screen mode for better visibility and an upgraded user experience. It is important to mention that this feature is exclusively available for mobile devices in both landscape and portrait orientations. To activate the full screen mode within the DatePicker component, simply set the `fullScreenMode` API value to `true`. This action will extend the calendar element to occupy the entire screen on mobile devices.

```typescript
import { DatePicker } from '@syncfusion/ej2-calendars';
// creates a datepicker with fullScreenMode property
let datepickerObject: DatePicker = new DatePicker({
    // Enable Full Screen Mode
    fullScreenMode: true,
});
datepickerObject.appendTo('#element');
```

![DatePickerFullScreen](../images/DatePickerFullScreen.gif)
