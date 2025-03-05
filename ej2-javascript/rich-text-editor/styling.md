---
layout: post
title: Styling in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn all about Styling in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Styling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Styling in ##Platform_Name## Rich text editor control

## Font name and size

By default, the Rich Text Editor initializes with the font name and font size set to "Default." This configuration means that the editor will inherit the font family and font size from its parent element in the application. If the content in the Rich Text Editor inherits its font properties from any parent element, these inherited values will appear as the default selections in the respective drop-down menus.

**Customizing font styles for text sections**

To apply a different font style to a specific section of the content:
1. Select the text that you want to customize.
2. In the editor’s toolbar, open the font name drop-down menu.
3. Choose the desired font style to apply it to the selected text.
4. Similarly, you can change the font size by selecting the desired size from the font size drop-down menu.

This will update the font style and size for the highlighted section of text, allowing customization within the content of the Rich Text Editor.

### FontName DropDowns

The following table lists the default font name and width of the [fontname](../api/rich-text-editor/fontFamily/#fontfamily) dropdown and the available list of font names.

| Default Key | Default Value |
|----------------|--------------------------------------|
| default | null |
|width | 72px|
| items | { text: 'Default', value: '' },{ text: 'Segoe UI', value: 'Segoe UI' },{ text: 'Arial', value: 'Arial,Helvetica,sans-serif' },{ text: 'Courier New', value: 'Courier New,Courier,monospace' },{ text: 'Georgia', value: 'Georgia,serif' },{ text: 'Impact', value: 'Impact,Charcoal,sans-serif' },{ text: 'Lucida Console', value: 'Lucida Console,Monaco,monospace' },{ text: 'Tahoma', value: 'Tahoma,Geneva,sans-serif' },{ text: 'Times New Roman', value: 'Times New Roman,Times,serif' },{ text: 'Trebuchet MS', value: 'Trebuchet MS,Helvetica,sans-serif' },{ text: 'Verdana', value: 'Verdana,Geneva,sans-serif' }|

## See Also

* [How to add Google fonts to the font family](./how-to/add-google-font/)
* [How to customize the toolbar items shortcut keys](./how-to/shortcut-key/)
* [How to customize the placeholder](./how-to/placeholder/)
* [How to change the default font family](./how-to/default-font/)
