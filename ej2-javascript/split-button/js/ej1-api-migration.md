---
layout: post
title: Ej1 api migration in ##Platform_Name## Split button control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Split button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Split button control

This article describes the API migration process of SplitButton component from Essential JS 1 to Essential JS 2.

## Properties

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Specifies the text of the SplitButton | **Property:** *text* <br/><br/> $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *content* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Popup content | **Property:** *target* <br/><br/> $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *target* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>target: "#target",<br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Popup items | Not applicable | **Property:** *items* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); <br/> var items = [ <br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Cut' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Copy' <br/> &nbsp; },<br/> &nbsp; { <br/> &nbsp;  &nbsp; text: 'Paste' <br/> &nbsp; } <br/> ];  |
| Arrow position | **Property:** *arrowPosition* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>arrowPosition: ej.ArrowPosition.Left, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Button mode | **Property:** *buttonMode* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>buttonMode: ej.ButtonMode.Dropdown, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Content type | **Property:** *contentType* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>contentType: ej.ContentType.TextOnly, <br/>text:"login", <br/> target: "#target" <br/>}); | Not applicable |
| Adding custom css class | **Property:** *cssClass* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>cssClass: "e-custom-class", <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *cssClass* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>cssClass: "e-custom-class",<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Disabled state | **Property:** *enabled* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>enabled: false, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *disabled* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>disabled: true,<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| RTL | **Property:** *enableRTL* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>enableRTL: true, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *enableRtl* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>enableRtl: true,<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Height | **Property:** *height* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>height: 30, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Width | **Property:** *width* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>width: 100, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| HTML attributes | **Property:** *htmlAttributes* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>htmlAttributes : { disabled:"disabled" }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Icons | **Property:** *prefixIcon* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>prefixIcon:"e-icon e-handup", <br/>contentType: ej.ContentType.TextAndImage, <br/>target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *iconCss* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>iconCss: 'e-icons e-handup',<br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Icon position | **Property:** *imagePosition* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>imagePosition: ej.ImagePosition.ImageTop, <br/> prefixIcon:"e-icon e-handup", <br/>contentType: ej.ContentType.TextAndImage, <br/>target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *iconPosition* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>iconPosition: "Top",<br/> iconCss: 'e-icons e-handup',<br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Secondary icon | **Property:** *suffixIcon* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>suffixIcon:"e-icon e-icon-closed", <br/>prefixIcon:"e-icon e-handup", <br/>contentType: ej.ContentType.ImageTextImage, <br/>target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>showRoundedCorner: true, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Size | **Property:** *size* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>size: ej.ButtonSize.Small, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Property:** *cssClass* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>cssClass: "e-small",<br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Destroy method | **Method:** *destroy* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); <br/> var splitButton = $("#splitbutton").data("ejSplitButton"); <br/> splitButton.destroy(); | **Method:** *destroy* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");<br/> splitButton.destroy(); |
| Disable method | **Method:** *disable* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); <br/> var splitButton = $("#splitbutton").data("ejSplitButton"); <br/> splitButton.disable(); | Not applicable |
| Enable method | **Method:** *enable* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); <br/> var splitButton = $("#splitbutton").data("ejSplitButton"); <br/> splitButton.enable(); | Not applicable |
| Hide popup | **Method:** *hide* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); <br/> var splitButton = $("#splitbutton").data("ejSplitButton"); <br/> splitButton.hide(); | **Method:** *toggle* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");<br/> splitButton.toggle(); |
| Show popup | **Method:** *show* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/> target: "#target", <br/> text: "Split Button" <br/>}); <br/> var splitButton = $("#splitbutton").data("ejSplitButton"); <br/> splitButton.show(); | **Method:** *toggle* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");<br/> splitButton.toggle(); |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| BeforeOpen event | **Event:** *beforeOpen* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>beforeOpen: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *beforeOpen* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>beforeOpen: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Click event | **Event:** *click* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>click: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *click* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>click: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton"); |
| Close event | **Event:** *close* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>close: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *close* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>close: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|
| Create event | **Event:** *create* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>create: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *created* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>created: function() { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|
| Destroy event | **Event:** *destroy* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>destroy: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| ItemMouseOut event | **Event:** *itemMouseOut* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>itemMouseOut: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| ItemMouseOver event | **Event:** *itemMouseOver* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>itemMouseOver: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | Not applicable |
| Item select event | **Event:** *itemSelected* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>itemSelected: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *select* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>select: function(args) { /** code block */ },<br/>target: "#target",<br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|
| Open event | **Event:** *open* <br/><br/>  $("#splitbutton").ejSplitButton({ <br/>open: function(args) { /** code block */ }, <br/> target: "#target", <br/> text: "Split Button" <br/>}); | **Event:** *open* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>open: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|
| BeforeClose event | Not applicable | **Event:** *beforeClose* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>beforeClose: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|
| BeforeItemRender event | Not applicable | **Event:** *beforeItemRender* <br/><br/> var splitButton = new ej.splitbuttons.SplitButton({ <br/>beforeItemRender: function(args) { /** code block */ },<br/> items: items, <br/> content: "Split Button" <br/>}); <br/>splitButton.appendTo("#splitbutton");|