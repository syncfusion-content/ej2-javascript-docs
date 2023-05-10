---
layout: post
title: Ej1 api migration in ##Platform_Name## Radio button control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Radio button control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Radio button control

This article describes the API migration process of RadioButton component from Essential JS 1 to Essential JS 2.

## Properties

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| RadioButton Label | **Property:** *text* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>text: "RadioButton" <br/> });  | **Property:** *label* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>label: "RadioButton" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Checked state | **Property:** *checked* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>checked: true <br/> });  | **Property:** *checked* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>checked: true<br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Adding custom class | **Property:** *cssClass* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>cssClass: "custom-class" <br/> });  | **Property:** *cssClass* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>cssClass: "custom-class" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Disabled state | **Property:** *enabled* <br/><br/>  new ej.RadioButton($("#radiobutton"), { <br/>enabled: false <br/> });  | **Property:** *disabled* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>disabled: true <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| State persistence | **Property:** *enablePersistence* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>enablePersistence: true <br/> });  | **Property:** *enablePersistence* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>enablePersistence: true <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| RTL | **Property:** *enableRTL* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>enableRTL: true, <br/> text: "RadioButton"<br/> });  | **Property:** *enableRtl* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>enableRtl: true, <br/> label: "RadioButton" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| HTML Attributes | **Property:** *htmlAttributes* <br/><br/>  new ej.RadioButton($("#radiobutton"), { <br/>htmlAttributes : { required:"required" }, <br/> text: "RadioButton" <br/>});  | Not applicable |
| Id property | **Property:** *id* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>id: "sync" <br/> });  | Not applicable |
| Prefix value of Id | **Property:** *idPrefix* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>idPrefix: "ej" <br/> });  | Not applicable |
| Name attribute | **Property:** *name* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/> name: "sports" <br/> });  | **Property:** *name* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/> name: "sports" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Value attribute | **Property:** *value* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>value: "football", <br/>name: "sports" <br/> });  | **Property:** *value* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>value: "football", <br/>name: "sports" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Size | **Property:** *size* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/>size: "small" <br/> });  | **Property:** *cssClass* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>cssClass: "e-small" <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Validation rules | **Property:** *validationRules* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/> validationRules:{ required:true } <br/> });  | Not applicable |
| Validation message | **Property:** *validationMessage* <br/><br/> new ej.RadioButton($("#radiobutton"), { <br/> validationRules:{ required:true }, <br/>validationMessage: { required: "Required RadioButton value" } <br/> });  | Not applicable |

## Methods

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Destroy | **Method:** *destroy* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>text: "RadioButton" <br/> }); <br/>radioButton.destroy()  | **Method:** *destroy* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>label: "RadioButton" <br/>}); <br/>radioButton.appendTo("#radiobutton");<br/>radioButton.destroy(); |
| Disable the RadioButton | **Method:** *disable* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>text: "RadioButton" <br/> }); <br/>radiobutton.disable()  | Not applicable |
| Enable the RadioButton | **Method:** *enable* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>text: "RadioButton" <br/> }); <br/>radiobutton.enable()  | Not applicable |

## Events

| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| BeforeChange Event | **Events:** *beforeChange* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>beforeChange: function (args) { /** code block */ } <br/> });  | Not applicable |
| Change Event | **Events:** *change* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>change: function (args) { /** code block */ } <br/> });  | **Events:** *change* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>change: (args) => { /** code block */ } <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Create Event | **Events:** *create* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>create: function (args) { /** code block */ } <br/> });  | **Events:** *created* <br/><br/> let radioButton: RadioButton= new RadioButton({ <br/>created: () => { /** code block */ } <br/>}); <br/>radioButton.appendTo("#radiobutton"); |
| Destroy Event | **Events:** *destroy* <br/><br/> var radioButton = new ej.RadioButton($("#radiobutton"), { <br/>destroy: function (args) { /** code block */ } <br/> });  | Not applicable |