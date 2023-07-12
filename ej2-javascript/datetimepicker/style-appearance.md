---
layout: post
title: Style appearance in ##Platform_Name## Datetimepicker control | Syncfusion
description: Learn here all about Style appearance in Syncfusion ##Platform_Name## Datetimepicker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Style appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in ##Platform_Name## Datetimepicker control

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateTimePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
    }
```

## Customizing the DateTimePicker icons element

Use the following CSS to customize the DateTimePicker icons element

```
/* To specify background color and font size */
.e-datetime-wrapper .e-input-group-icon.e-date-icon, .e-datetime-wrapper .e-input-group-icon.e-time-icon {
        font-size: 16px;
        background-color: blanchedalmond;
    }
```

## Customizing the time picker popup in the DateTimePicker

Use the following CSS to customize the time picker popup in the DateTimePicker

```
/* To specify height */
.e-datetimepicker.e-popup {
        height: 100px;
}
```

## Customizing the Calendar popup of the DateTimePicker

Please check the below section, to customize the style and appearance of the Calendar component in the DateTimePicker

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full screen mode support in mobiles and tablets

The DateTimePicker component's full-screen mode feature enables users to view the component popup element in full-screen mode on mobile devices with improved visibility and a better user experience. It is important to mention that this feature is exclusively available for mobile and tablet devices in both landscape and portrait orientations. To activate the full screen mode within the DateTimePicker component, simply set the [fullScreenMode](../api/datetimepicker#fullScreenMode) API value to `true`. This action will extend the calendar and time popup element to occupy the entire screen on mobile devices.

```typescript
import { DateTimePicker } from '@syncfusion/ej2-calendars';
// creates a datetimepicker with fullScreenMode property
let datetimepickerObject: DateTimePicker = new DateTimePicker({
    // Enable Full Screen Mode
    fullScreenMode: true,
});
datetimepickerObject.appendTo('#element');
```

![DateTimePickerFullScreen](../images/DateTimePickerFullScreen.gif)