---
layout: post
title: Ej1 api migration in ##Platform_Name## Check box control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Check box control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Check box control

This article describes the API migration process of Checkbox component from Essential JS 1 to Essential JS 2.

## Properties

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Checkbox Label | **Property:** *text* <br/><br/> new ej.CheckBox($("#checkbox"), { <br/>text: "Checkbox" <br/> });  | **Property:** *label* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>label: "Checkbox" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Checked state | **Property:** *checked* <br/><br/> new ej.CheckBox($("#checkbox"), { <br/>checked: true <br/> });  | **Property:** *checked* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>checked: true<br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Indeterminate state | **Property:** *enableTriState and checkState* <br/><br/> new ej.CheckBox($("#checkbox"), { <br/>enableTriState: true, <br/>checkState: "indeterminate" <br/> });  | **Property:** *indeterminate* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>indeterminate: true<br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Adding custom class | **Property:** *cssClass* <br/><br/> new ej.CheckBox($("#checkbox"), { <br/>cssClass: "custom-class" <br/> });  | **Property:** *cssClass* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>cssClass: "custom-class" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Disabled state | **Property:** *enabled* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>enabled: false <br/> });  | **Property:** *disabled* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>disabled: true <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| State persistence | **Property:** *enablePersistence* <br/><br/> new ej.CheckBox($("#checkbox"), { <br/>enablePersistence: true <br/> });  | **Property:** *enablePersistence* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>enablePersistence: true <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| RTL | **Property:** *enableRTL* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>enableRTL: true, <br/> text: "Checkbox"<br/> });  | **Property:** *enableRtl* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>enableRtl: true, <br/> label: "Checkbox" }); <br/>checkbox.appendTo("#checkbox"); |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>htmlAttributes : { required:"required" }, <br/> text: "Checkbox" <br/>});  | Not applicable |
| Id property | **Property:** *id* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>id: "sync" <br/> });  | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>idPrefix: "ej" <br/> });  | Not applicable |
| Name attribute | **Property:** *name* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>name: "sports" <br/> });  | **Property:** *name* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>name: "sports" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Value attribute | **Property:** *value* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>value: "football", <br/>name: "sports" <br/> });  | **Property:** *value* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>value: "football", <br/>name: "sports" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Show rounded corner | **Property:** *showRoundedCorner* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>showRoundedCorner: true <br/> });  | Not applicable |
| Size | **Property:** *size* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/>size: "small" <br/> });  | **Property:** *cssClass* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>cssClass: "e-small" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Label position | Not applicable | **Property:** *labelPosition* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>label: "Checkbox", <br/>labelPosition: "Before" <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Validation rules | **Property:** *validationRules* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/> validationRules:{ required:true } <br/> });  | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/>  new ej.CheckBox($("#checkbox"), { <br/> validationRules:{ required:true }, <br/>validationMessage: { required: "Required CheckBox value" } <br/> });  | Not applicable |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>text: "Checkbox" <br/> }); <br/>checkbox.destroy(); | **Method:** *destroy* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>label: "Checkbox" <br/>}); <br/>checkbox.appendTo("#checkbox");<br/>checkbox.destroy(); |
| Disable the Checkbox | **Method:** *disable* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>text: "Checkbox" <br/> }); <br/>checkbox.disable(); | Not applicable |
| Enable the Checkbox | **Method:** *enable* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>text: "Checkbox" <br/> }); <br/>checkbox.enable(); | Not applicable |
| Check state of the Checkbox | **Method:** *isChecked* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>text: "Checkbox" <br/> }); <br/>checkbox.isChecked(); | Not applicable |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Events:** *beforeChange* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>beforeChange: function (args) { /** code block */ } <br/> });  | Not applicable |
| Change Event | **Events:** *change* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>change: function (args) { /** code block */ } <br/> });  | **Events:** *change* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>change: (args) => { /** code block */ } <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Create Event | **Events:** *create* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>create: function (args) { /** code block */ } <br/> });  | **Events:** *created* <br/><br/> let checkbox: CheckBox = new CheckBox({ <br/>created: () => { /** code block */ } <br/>}); <br/>checkbox.appendTo("#checkbox"); |
| Destroy Event | **Events:** *destroy* <br/><br/>  var checkbox = new ej.CheckBox($("#checkbox"), { <br/>destroy: function (args) { /** code block */ } <br/> }); | Not applicable |