---
layout: post
title: Ej1 api migration in ##Platform_Name## Color picker control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Color picker control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Color picker control

This article describes the API migration process of ColorPicker component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Properties

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Default|**property**: *value*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     value: "#278787"<br/>});|**property:** *value*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    value: '#278787'<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
| Inline mode color picker |**property**: *displayInline*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     displayInline: true<br/>});|**property:** *inline*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    inline: true<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Adding custom class|**property**: *cssClass*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     cssClass: "e-custom"<br/>});|**property:** *cssClass*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    cssClass: 'e-custom'<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Disable the ColorPicker component|**property**: *enabled*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     enabled: false<br/>});|**property:** *disabled*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>   disabled: true<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|To display custom text in button elements|**property**: *buttonText*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     buttonText: { apply: "Apply", cancel: "Cancel", swatches: "Swatches" }<br/>});|Not Applicable|
|To display customized text or content when mouse over the color picker elements|**property**: *tooltipText*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     tooltipText: { switcher: "Switch",  currentColor: "New Color", selectedColor: "Old Color" }}<br/>});|Not Applicable|
|Disable / hide opacity|**property**: *enableOpacity*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     enableOpacity: false<br/>});|**property:** *enableOpacity*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    enableOpacity: false<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|ColorPicker Button mode|**property**: *buttonMode*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     buttonMode: "Dropdown"<br/>});|Not Applicable|
|To show / hide the control (apply /  cancel) buttons |**property**: *showApplyCancel*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showApplyCancel: false<br/>});|**property:** *showButtons*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    showButtons: false<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|To show / hide the clear button|**property**: *showClearButton*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showClearButton: true<br/>});|Not Applicable|
|Show / hide the mode (picker / palette) switcher|**property**: *showSwitcher*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showSwitcher: false<br/>});|**property:** *modeSwitcher*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    modeSwitcher: false<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|To show / hide the preview area|**property**: *showPreview*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showPreview: false<br/>});|Not Applicable|
|To show / hide the recent selected color list|**property**: *showRecentColors*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showRecentColors: true<br/>});|Not Applicable|
|To show / hide the color picker slider tooltip|**property**: *showTooltip*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     showTooltip: false<br/>});|Not Applicable|
|Custom icon in dropdown control color area|**property**: *toolIcon*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     toolIcon: null<br/>});|Not Applicable|
|ColorPicker mode|**property**: *modelType*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     modelType: "picker"<br/>});|**property:** *mode*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    mode: 'Palette'<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Opacity value|**property**: *opacityValue*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     opacityValue: 80<br/>});|Not Applicable|
|Number of columns in color palette|**property**: *columns*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     columns: 10<br/>});|**property:** *columns*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    columns: 15<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Custom colors|**property**: *palette*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     palette: ej.ColorPicker.Palette.CustomPalette<br/>     custom: ["ffffff", "ffccff", "ff99ff", "ff66ff",<br/>     "ff33ff", "ff00ff", "ccffff", "ccccff",<br/>          "cc99ff", "cc66ff", "cc33ff", "cc00ff",<br/> "99ffff", "99ccff", "9999ff", "9966ff",<br/>          "9933ff", "9900ff", "ffffcc", "ffcccc"<br/>      ]<br/>});|**property:** *presetColors*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    presetColors: {<br/>  'custom': ["ffffff", "ffccff", "ff99ff", "ff66ff",  <br/>"ff33ff", "ff00ff", "ccffff", "ccccff",<br/>          "cc99ff", "cc66ff", "cc33ff", "cc00ff",<br/> "99ffff", "99ccff", "9999ff", "9966ff",<br/>          "9933ff", "9900ff", "ffffcc", "ffcccc"]<br/>}<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Rendering palette from the predefined set of palettes|**property**: *presetType*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     presetType: ej.ColorPicker.Presets.FlatColors<br/>});|Not Applicable|
|No color option in color palette|Not Applicable|**property:** *noColor*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    noColor: true,<br/>    modeSwitcher: false<br/>    mode: 'Palette'<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
| Localization |**property**: *locale* <br/><br/>$("#colorpicker").ejColorPicker({<br/>     locale: 'zh-CN'<br/>});<br/> ej.ColorPicker.Locale["zh-CN"] = {<br/>    buttonText: {<br/>      apply: "应用",<br/>      cancel: "取消",<br/>      swatches: "色板"<br/>    },<br/>    tooltipText: {<br/>      switcher: "切换器,<br/>      addButton: "添加颜色",<br/>      basic: "基本"<br/>    }<br/> } | **property:** *locale*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    locale: 'ar'<br/>});<br/>colorPickerObj.appendTo('#colorpicker');<br/>ej.base.L10n.load({<br/>    'ar': {<br/>        'colorpicker': {<br/>            "Apply":"تطبيق",<br/>            "Cancel":"إلغاء",<br/>            "ModeSwitcher": "مفتاح كهربائي الوضع"<br/>        }<br/>    }<br/>}); |
| Right to left |**property:** *enableRTL*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     enableRTL: true<br/>});|**property:** *enableRtl* <br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>    enableRtl: true<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|

## Methods

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Method to open color picker popup|**Method:** *show*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.show();|**Method:** *toggle*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.toggle();|
|Method to close color picker popup|**Method:** *hide*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.hide();|**Method:** *toggle*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.toggle();|
|Enable the color picker control|**Method:** *enable*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.enable();|Not Applicable|
|Disables the color picker control|**Method:** *disable*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.disable();|Not Applicable|
|Method returns the selected color value as hex code|**Method:** *getValue*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.getValue();|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue();|
|Method returns the selected color value in RGB format|**Method:** *getColor*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.getColor();|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue(null, 'RGB');|
|Method convert the color value from hexCode to RGB|**Method:** *hexCodeToRGB*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.hexCodeToRGB("#278787");|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue("#278787", 'RGB');|
|Method convert the color value from RGB to Hex code|**Method:** *RGBToHEX*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.RGBToHEX({r:38,g:133,b:133});|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue("rgb(38,133,133)", 'Hex');|
|Method convert the color value from RGB to HSV|**Method:** *RGBToHSV*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.RGBToHSV({h:230,s:98,v:98});|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue("rgb(180,71.1,52.9)", 'HSV');|
|Method convert the color value from HSV to RGB|**Method:** *HSVToRGB*<br/><br/>$("#colorpicker").ejColorPicker({}); <br/> var colorPickerObj = $("#colorpicker").data("ejColorPicker"); <br/>colorPickerObj.HSVToRGB({h:230,s:98,v:98});|**Method:** *getValue*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({});<br/>colorPickerObj.appendTo('#colorpicker');<br/>colorPickerObj.getValue("hsv(180,71.1,52.9)", 'RGB');|

## Events

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Event triggers before opening the ColorPicker popup|Not Applicable|**Event:** *beforeOpen*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>beforeOpen: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers before closing the ColorPicker popup|Not Applicable|**Event:** *beforeClose*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>beforeClose: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers after opening the ColorPicker popup|**Event:** *open*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     open: function(args) { }<br/>});|**Event:** *open*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>open: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers after closing the ColorPicker popup|**Event:** *close*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     close: function(args) { }<br/>});|Not Applicable|
|Event triggers once the component rendering is completed|**Event:** *create*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     create: function(args) { }<br/>});|**Event:** *created*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>created: function() { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers once the color picker control is destroyed|**Event:** *destroy*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     destroy: function(args) { }<br/>});|Not Applicable|
|Event triggers before Switching between Picker / Palette mode|Not Applicable|**Event:** *beforeModeSwitch*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>beforeModeSwitch: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers after color value has been selected|**Event:** *select*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     select: function(args) { }<br/>});|**Event:** *select*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>select: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
|Event triggers after color value has been changed|**Event:** *change*<br/><br/>$("#colorpicker").ejColorPicker({<br/>     change: function(args) { }<br/>});|**Event:** *change*<br/><br/>var colorPickerObj = new ej.inputs.ColorPicker({<br/>change: function(args) { }<br/>});<br/>colorPickerObj.appendTo('#colorpicker');|
