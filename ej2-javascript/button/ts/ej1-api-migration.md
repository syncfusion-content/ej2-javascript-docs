---
layout: post
title: Ej1 api migration in ##Platform_Name## Button control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Button control

This article describes the API migration process of Button component from Essential JS 1 to Essential JS 2.

## Properties

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Specifies the text of the button | **Property:** *text* <br/><br/> new ej.Button($("#button"), {<br/> text: "Button" <br/>}); | **Property:** *content* <br/><br/> let button: Button = new Button({ <br/>content: "Button"<br/>}); <br/>button.appendTo("#button"); |
| Specifies the content type of the button | **Property:** *ContentType* <br/><br/>  new ej.Button($("#button"), {<br/> contentType: ej.ContentType.TextAndImage,<br/> prefixIcon: "e-icon e-save",<br/> text: "Save"<br/> });| Not applicable |
| Specifies icon for the button | **Property:** *prefixIcon* <br/><br/> new ej.Button($("#button"), { <br/>contentType: ej.ContentType.ImageOnly, <br/>prefixIcon: "e-icon e-save"<br/> }); | **Property:** *iconCss* <br/><br/> let button: Button = new Button({ <br/>iconCss: "e-icons e-save" <br/>}); <br/>button.appendTo("#button"); |
| Positioning icon in the button | **Property:** *imagePosition* <br/><br/> new ej.Button($("#button"), { <br/>imagePosition: ej.ImagePosition.ImageRight, <br/>contentType: ej.ContentType.TextAndImage, <br/>prefixIcon: "e-icon e-save", <br/>text: "Save"<br/> }); | **Property:** *iconPosition* <br/><br/> let button: Button = new Button({<br/> iconCss: "e-icons e-save",<br/> iconPosition: "Right",<br/> content: "Save"<br/>});<br/> button.appendTo("#button"); |
| Specifies secondary icon for the button | **Property:** *suffixIcon* <br/><br/> new ej.Button($("#button"), {<br/> contentType: ej.ContentType.ImageTextImage, <br/>suffixIcon: "e-icon e-file-html", <br/>prefixIcon: "e-icon e-search",<br/> text: "FileSearch" <br/>}); | Not applicable |
| Specifies the size of the button | **Property:** *size* <br/><br/> new ej.Button($("#button"), { <br/>size: ej.ButtonSize.Small,<br/> text: "Button" <br/>}); | **Property:** *cssClass* <br/><br/> let button: Button = new Button({ <br/>cssClass: "e-small",<br/> content: "Button"<br/>}); <br/>button.appendTo("#button"); |
| Adding custom css class | **Property:** *cssClass* <br/><br/>  new ej.Button($("#button"), { <br/>cssClass: "custom-class",<br/> text: "Button" <br/> }); | **Property:** *cssClass* <br/><br/> let button: Button = new Button({ <br/>cssClass: "custom-class", <br/>content: "Button"<br/>}); <br/>button.appendTo("#button"); |
| Triggers click event repeatedly while pressing the button | **Property:** *repeatButton* <br/><br/>  new ej.Button($("#button"), {<br/> repeatButton: true,<br/> text: "Button"<br/> }); | Not applicable |
| Sets time interval between two consecutive click event on the repeat button | **Property:** *timeInterval* <br/><br/> new ej.Button($("#button"), {<br/> repeatButton: true,<br/> timeInterval : "100", <br/>text: "Button" <br/>}); | Not applicable |
| Specifies the type of the button | **Property:** *type* <br/><br/> new ej.Button($("#button"), { <br/>type: ej.ButtonType.Submit,<br/> text: "Submit" <br/>}); | Not applicable |
| Changes normal button into rounded corner | **Property:** *showRoundedCorner* <br/><br/>  new ej.Button($("#button"), { <br/>showRoundedCorner: true,<br/> text: "Button" <br/>}); | Not applicable |
| Specifies the width of the button | **Property:** *width* <br/><br/> new ej.Button($("#button"), { <br/>width: "150px", <br/>text: "Button" <br/>}); | Not applicable |
| Specifies the height of the button | **Property:** *height* <br/><br/>  new ej.Button($("#button"), { <br/>height: "30px",<br/>text: "Button" <br/> }); | Not applicable |
| Adds HTML attributes to the button | **Property:** *htmlAttributes* <br/><br/>  new ej.Button($("#button"), {<br/> htmlAttributes : { disabled:"disabled" },<br/> text: "Button"<br/> }); | Not applicable |
| Allows the appearance of the Button to be enhanced and visually appealing | Not applicable | **Property:** *isPrimary* <br/><br/> let button: Button = new Button({<br/> isPrimary: true, <br/>content: "Button"<br/>}); <br/>button.appendTo("#button"); |
| Makes the button toggle from normal to active state | Not applicable | **Property:** *isToggle* <br/><br/> let button: Button = new Button({ <br/>isToggle: true, <br/>content: "Button"<br/>}); <br/>button.appendTo("#button");  |
| Specifies the disabled state of the button | **Property:** *enabled* <br/><br/> new ej.Button($("#button"), { <br/>enabled: false, <br/>text: "Button" <br/>}); | **Property:** *disabled* <br/><br/> let button: Button = new Button({<br/> disabled: true,<br/> content: "Button"<br/>});<br/> button.appendTo("#button"); |
| Enable or disable rendering component in right to left direction | **Property:** *enableRTL* <br/><br/>  new ej.Button($("#button"), {<br/> enableRTL: true,<br/> text: "Button" <br/>}); | **Property:** *enableRtl* <br/><br/> let button: Button = new Button({ <br/>enableRtl: true, <br/>content: "Button"<br/>});<br/> button.appendTo("#button"); |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Destroys the control | **Methods:** *destroy* <br/><br/> var button = new ej.Button($("#button"), { <br/>text: "Button" <br/>}); <br/>button.destroy(); | **Methods:** *destroy* <br/><br/> let button: Button = new Button({ <br/>content: "Button"<br/>});<br/> button.appendTo("#button"); <br/>button.destroy(); |
| Disables the button | **Methods:** *disable* <br/><br/> var button = new ej.Button($("#button"), {<br/> text: "Button"<br/> });<br/> button.disable(); | Not applicable |
| Enables the button | **Methods:** *enable* <br/><br/>  var button = new ej.Button($("#button"), {<br/>enabled: false, <br/>text: "Button" <br/>}); <br/>button.enable(); | Not applicable |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Triggers while clicking the button | **Events:** *click* <br/><br/> var button = new ej.Button($("#button"), { <br/>text: "Button", <br/>click: function(args) { /** code block */ } <br/>}); | Not applicable |
| Triggers once the component rendering is completed | **Events:** *create* <br/><br/> var button = new ej.Button($("#button"), { <br/>text: "Button", <br/>create: function(args) { /** code block */ } <br/>}); | **Events:** *created* <br/><br/> let button: Button = new Button({ <br/>content: "Button",<br/>created: () => { /** code block */ } <br/>});<br/> button.appendTo("#button"); |
| Triggers once the component is destroyed | **Events:** *destroy* <br/><br/> var button = new ej.Button($("#button"), { <br/>text: "Button", <br/>destroy: function(args) { /** code block */ } <br/>}); | Not applicable |