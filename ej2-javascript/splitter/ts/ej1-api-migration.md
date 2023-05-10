---
layout: post
title: Ej1 api migration in ##Platform_Name## Splitter control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Splitter control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Splitter control

This article describes the API migration process of Splitter component from Essential JS 1 to Essential JS 2.

## Common

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Adding custom class | **Property:** *cssClass* <br /><br /> var splitter = new <br /> &nbsp;ej.Splitter($("#splitter"), { <br /> &nbsp; cssClass: ”custom-class” <br /> }); <br /> | **Property:** *cssClass* <br /><br /> let obj: Splitter = new Splitter({ <br /> cssClass: “custom-class" <br /> &nbsp; }) <br /> &nbsp; obj.appendTo(“#ej2_splitter”) |
| Adjusting Height | **Property:** *height* <br /><br /> var splitter = new <br /> &nbsp;ej.Splitter($("#splitter"), { <br /> height: ”100%” <br /> }); <br /> | **Property:** *height* <br /> <br /> let obj: Splitter = new Splitter ({ <br /> height: ‘100%’ <br />&nbsp; }) <br /> &nbsp; obj.appendTo(“#ej2_splitter”) |
| Adjusting Width | **Property:** *width* <br /><br /> var splitter = new <br /> &nbsp;ej.Splitter($("#splitter"), { <br /> width: ”600” <br /> }); <br /> | **Property:** *width* <br /><br /> let obj: Splitter = new Splitter({ <br /> width: ‘100%’ <br /> &nbsp;}) <br /> &nbsp; obj.appendTo(“#ej2_splitter”) |
| Orientation | **Property:** *orientation* <br /><br /> var splitter = new <br /> &nbsp;ej.Splitter($("#splitter"), { <br /> orientation: <br /> ej.Orientation.Horizontal <br /> }); | **Property:** *orientation* <br /> <br /> let obj: Splitter = new Splitter({ <br /> orientation: ‘Horizontal’ <br /> &nbsp;}) <br /> &nbsp; obj.appendTo(“#ej2_splitter”) |
| Separator Size | Not Available | **Property:** *separatorSize* <br /> <br /> let obj: Splitter = new Splitter({ <br /> separatorSize: ‘4’ <br /> &nbsp; }) <br /> &nbsp; obj.appendTo(“#ej2_splitter”) |
| Adding HTML attributes | **Property:** *htmlAttributes* <br /><br /> var splitter = new  <br /> ej.Splitter($("#splitter"), { <br />    htmlAttributes: { class: “my- <br /> class” } <br /> &nbsp;});<br /> &nbsp; | Not Available |
| Customize expand/collapse icons | **Property:** <br /> *expanderTemplate* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> expanderTemplate: ‘<img <br /> class=”eimg” <br /> src=”expander.png”<br /> alt=”employee”/>’<br />&nbsp; }); | Not Available |
| Make control flexible for mobile view | **Property:** *isResponsive* <br /><br /> var splitter = new <br />  ej.Splitter($("#splitter"), { <br /> isResponsive: true <br /> &nbsp; }); | By default, Splitter works with mobile mode.|
| Refresh the Splitter | **Method:** *refresh()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { }); <br /> splitter.refresh();<br /> &nbsp; | **Method:** *refresh()* <br /><br /> let obj: Splitter = new Splitter() <br /> obj.appendTo(“#ej2_splitter”) <br /> obj.refresh(); <br /> &nbsp; |
| Destroy the Control | **Method:** *destroy()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { }); <br />   splitter.destroy(); <br /> &nbsp;| **Method:** *destroy()* <br /><br /> let obj: Splitter = new Splitter() <br /> obj.appendTo(“#ej2_splitter”)<br /> obj.destroy(); <br /> &nbsp; |
| Event triggers after the Splitter created successfully | **Event:** *create* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> create: function(args){} <br /> &nbsp; }); <br /> &nbsp; | **Event:** *created* <br /><br />let obj: Splitter = new Splitter({ <br /> created: function() {} <br />}) <br /> obj.appendTo(“#ej2_splitter”); |
| Event triggers when Splitter has been destroyed | **Event:**  *destroy* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> destroy: function(args){} <br /> }); | Not Available |

## Accessibility and Localization

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Keyboard Navigation | **Property:** *allowKeyboardNavigation* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> allowKeyboardNavigation: true <br /> }); <br /> &nbsp; | No separate property for enable/disable keyboard navigation.  Its enabled by default. |
| Right to Left | **Property:** *enableRTL* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> enableRTL: false <br /> }); <br />&nbsp; | **Property:** *enableRtl*<br /><br /> Let obj: Splitter = new <br /> Splitter({ <br /> enableRtl: false <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |

## Control State

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Enable/Disable the control | Not Available | **Property:** *enabled* <br /><br /> let obj: Splitter = new <br /> Splitter({ <br /> enabled: true <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |

## State Maintenance

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Save the model value in local storage or cookies | Not Available | **Property:** *enablePersistence* <br /><br /> let obj: Splitter = new <br /> Splitter({<br /> enablePersistence: false <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |

## Pane Properties

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| Default | **Property:** *properties* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> properties: [ ] <br /> });<br /> | **Property:** *paneSettings* <br /><br /> let obj: Splitter = new <br /> Splitter({ <br /> paneSettings: [ ]<br /> }) <br /> obj.appendTo(“#ej2_splitter”) |
| Pane Content | Not Available | **Property:** *content* <br /><br /> let obj: Splitter = new<br /> Splitter({ <br /> paneSettings: [{ content:<br />‘First Pane Content’}]<br /> })<br /> obj.appendTo(“#ej2_splitter”) |
| Change the size of the pane | **Property:** *paneSize* <br /><br /> var splitter = new<br /> ej.Splitter($("#splitter"), { <br /> properties: [{ paneSize: “30px”}] <br /> }); <br /> | **Property:** *size* <br /><br /> let obj: Splitter = new<br /> Splitter({<br /> paneSettings: [{ size: ‘25%’}] <br /> })<br /> obj.appendTo(“#ej2_splitter”) |
| Minimum pane size | **Property:** *minSize* <br /><br /> var splitter = new<br /> ej.Splitter($("#splitter"), { <br /> properties: [{ minSize: 30 }] <br /> }); <br /> | **Property:** *min* <br /><br /> let obj: Splitter = new <br /> Splitter({ <br /> paneSettings: [{ min: ‘60px’}] <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |
| Maximum pane size | **Property:** *maxSize* <br /><br />var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> properties: [{maxSize: 30 }] <br /> });<br />| **Property:** *max* <br /><br /> let obj: Splitter = new <br /> Splitter({ <br /> paneSettings: [{ max: ‘60px’}] <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |
| Enable/Disable the Pane Resizable behavior | **Property:** *resizable* <br /><br />var splitter = new <br /> ej.Splitter($("#splitter"),{ <br />  properties: [{ resizable: false }] <br /> });<br /> | **Property:** *resizable* <br /><br /> let obj: Splitter = new<br /> Splitter({ <br /> paneSettings: [{ resizable:<br /> false }]<br /> })<br /> obj.appendTo(“#ej2_splitter”) |
| Collapsible |**Property:** *collapsible* <br /><br />var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> properties: [{ collapsible: true }] <br /> });<br /> | **Property:** *collapsible* <br /><br /> let obj: Splitter = new<br /> Splitter({<br /> paneSettings: [{ collapsible: <br /> true }] <br /> }) <br /> obj.appendTo(“#ej2_splitter”) |
| Expandable | **Property:** *expandable* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br />  properties: [{expandable: true }] <br /> }); <br /> | Not Available |
| Collapsed | Not Available | **Property:** *collapsed* <br /><br /> let obj: Splitter = new<br /> Splitter({<br /> paneSettings: [{ collapsed:<br /> true }]<br /> }) <br /> obj.appendTo(“#ej2_splitter”) |
| Add Pane | **Method:** *addItem()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { }); <br /> splitter.addItem(“New Pane 0”, { <br /> paneSize: 20, minSize: 20, maxSize: <br /> 100}, 0); |**Method:** *addPane()* <br /> <br /> let obj: Splitter = new <br /> Splitter() <br /> obj.appendTo(“#ej2_splitter”)<br /> obj.addPane({size: “25%”, <br /> content: “Pane”}, 0) |
| Remove Pane | **Method:** *removeItem()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { });<br /> splitter.removeItem(0); <br /> | **Method:** *removePane()* <br /><br /> let obj: Splitter = new<br /> Splitter()<br /> obj.appendTo(“#ej2_splitter”)<br /> obj.removePane(0); |
| Collapse Pane | **Method:** *collapse()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { }); <br /> splitter.collapse(0); <br /> | **Method:** *collapse()* <br /><br /> let obj: Splitter = new <br /> Splitter() <br /> obj.appendTo(“#ej2_splitter”) <br /> obj.collapse(0); |
| Expand Pane | **Method:** *expand()* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { });<br /> splitter.expand(0); <br /> | **Method:** *expand()* <br /><br /> let obj: Splitter = new<br /> Splitter()<br /> obj.appendTo(“#ej2_splitter”)<br /> obj.expand(0); |
| Event triggers when before panes get expanded/collapsed | **Event:** *beforeExpandCollapse* <br /><br /> var splitter = new <br />  ej.Splitter($("#splitter"), { <br /> beforeExpandCollapse: function <br /> (args) {} <br /> }); <br />| **Event:** *beforeExpand* <br /><br /> let obj = new Splitter({ <br /> beforeExpand: function() {} <br />}) <br /> obj.appendTo('#ej2_splitter') <br /> <br /> Event: beforeCollapse <br /> let obj = new Splitter({ <br /> beforeCollapse: function() {} <br /> }) <br /> obj.appendTo('#ej2_splitter') |
| Event triggers when after panes get expanded/collapsed | **Event:** *expandCollapse* <br /><br />var splitter = new <br />  ej.Splitter($("#splitter"), { <br /> beforeCollapse: function <br /> (args) {} <br /> }); <br /> | **Event:** *expand* <br /><br /> let obj = new Splitter({ <br /> expand: function() {} <br />}) <br /> obj.appendTo('#ej2_splitter') <br /> <br /> Event: collapse <br /> let obj = new Splitter({ <br /> collapse: function() {} <br /> }) <br /> obj.appendTo('#ej2_splitter') |
|  Event triggers when Resizing the pane | **Event:** *resize* <br /><br /> var splitter = new <br />  ej.Splitter($("#splitter"), { <br /> resize: function <br /> (args) {} <br /> }); <br /> | **Event:** *resizing* <br /><br /> let obj = new Splitter({ <br /> resizing: function() {} <br />}) <br /> obj.appendTo('#ej2_splitter') |
| Event triggers when pane is started to resize | Not Available | **Event:** *resizeStart* <br /><br /> let obj = new Splitter({ <br /> resizeStart: function() {} <br />}) <br /> obj.appendTo('#ej2_splitter') |
| Event triggers when pane is stopped to resize | Not Available | **Event:** *resizeStop* <br /><br /> let obj = new Splitter({ <br /> resizeStop: function() {} <br />}) <br /> obj.appendTo('#ej2_splitter') |
| Event triggers when click template icon | **Event:** *clickOnExpander* <br /><br /> var splitter = new <br />  ej.Splitter($("#splitter"), { <br /> clickOnExpander: function <br /> (args) {} <br /> }); <br /> | Not Available |

## Animation

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
| EnableAnimation | **Property:** *enableAnimation* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> enableAnimation: true <br /> }); <br /> &nbsp; | Not Available |
| AnimationSpeed | **Property:** *animationSpeed* <br /><br /> var splitter = new <br /> ej.Splitter($("#splitter"), { <br /> animationSpeed: 150 <br /> }); <br />&nbsp; | Not Available |