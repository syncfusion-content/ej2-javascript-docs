---
layout: post
title: Ej1 api migration in ##Platform_Name## Dialog control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Dialog control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Dialog control

This section describes the API migration process of Dialog component from Essential JS1 to Essential JS2.

## Header

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Header Content
</td>
<td>
<b>property</b> : title
<br/>
<br/>$('#dialog').ejDialog({<br/>
   title: 'EJ1 Dialog header'
<br/>})
<br/><br/>
<b>Method</b>: setTitle
<br/>
<br/>$('#dialog').ejDialog('setTitle', 'EJ1 Dialog Header')
</td>
<td>
<b>property</b>: header
<br/>
<br/>let dialog = new Dialog({ <br/>
     header: 'EJ2 Dialog'
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
close button
</td>
<td>
<b>property</b>: actionButtons
<br/>
<br/>$('#dialog').ejDialog({<br/>
    actionButtons: ["close"]
<br/>})
</td>
<td>
<b>property</b>: showCloseIcon
<br/>
<br/>let dialog = new Dialog({ <br/>
    showCloseIcon: true
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Event triggers when click on action buttons
</td>
<td>
<b>Event</b> : actionButtonClick
<br/>$('#dialog').ejDialog({<br/>
  actionButtonClick: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Minimize
</td>
<td>
<b>property</b>: actionButtons
<br/>
<br/>$('#dialog').ejDialog({<br/>
    actionButtons: ["minimize"]
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Maximize
</td>
<td>
<b>property</b>: actionButtons
<br/>
<br/>$('#dialog').ejDialog({<br/>
    actionButtons: ["maximize"]
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Collapse /Expand
</td>
<td>
<b>property</b>: actionButtons <br/>
<b>Method</b>: collapse(), expand ()
<br/>
<br/>$('#dialog').ejDialog({<br/>
    actionButtons: ["collapsible"]
<br/>})
<br/>
<br/>$('#dialog').ejDialog('collapse')
<br/>
<br/>$('#dialog').ejDialog('expand')

</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers when expanding the collapsed dialog
</td>
<td>
<b>Event: </b>expand
<br/>
<br/>$('#dialog').ejDialog({<br/>
  expand: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers when collapsing the expanded dialog
</td>
<td>
<b>Event:</b> collapse
<br/>
<br/>$('#dialog').ejDialog({<br/>
  collapse: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Pin
</td>
<td>
<b>property:</b> actionButtons
<br/>
<br/>$('#dialog').ejDialog({<br/>
    actionButtons: ["pin"]
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Header visibility
</td>
<td>
<b>property:</b> showHeader
<br/>
<br/>$('#dialog').ejDialog({<br/>
   showHeader: true
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Close on escape key press
</td>
<td>
<b>property</b>: closeOnEscape
<br/>
<br/>$('#dialog').ejDialog({<br/>
    closeOnEscape: true
<br/>})
</td>
<td>
<b>property</b>: closeOnEscape
<br/>
<br/>let dialog = new Dialog({ <br/>
     closeOnEscape: true
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
</table>

## Footer

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Footer Content
</td>
<td>
<b>property</b>: footerTemplateId
<br/>
<br/>$('#dialog').ejDialog({<br/>
    footerTemplateId: 'sample'
<br/>})

</td>
<td>
<b>property:</b> footerTemplate
<br/>
<br/>let dialog = new Dialog({ <br/>
   footerTemplate: '&lt;button&gt;Submit&lt;/button&gt;'
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Footer action buttons
</td>
<td>
Not applicable
</td>
<td>
<b>property:</b> buttons
<br/>
<br/>let dialog = new Dialog({ <br/>
   buttons: [{
     click: dialogBtnClick,
buttonModel: {
content: 'OK',  isPrimary: true
}
}]
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Footer visibility
</td>
<td>
<b>property:</b> showFooter
<br/>
<br/>$('#dialog').ejDialog({<br/>
   showFooter: true
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
</table>

## Content

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Dialog content
</td>
<td>
<b>Method:</b> setContent
<br/>
<br/>$('#dialog').ejDialog('setContent', 'Dialog Content')
</td>
<td>
<b>property</b>: content
<br/>
<br/>let dialog = new Dialog({ <br/>
  content: 'Dialog content'
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Loading content using AJAX request

</td>
<td>
<b>property:</b> contentType, contentUrl
<br/>
<br/>$('#dialog').ejDialog({<br/>
   contentType: "ajax",
   contentUrl: ' '
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers after the dialog content loaded in DOM
</td>
<td>
<b>Event:</b> contentLoad
<br/>
<br/>$('#dialog').ejDialog({<br/>
  contentLoad: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event trigger when fails to load ajax content
</td>
<td>
<b>Event:</b> ajaxError
<br/>
<br/>$('#dialog').ejDialog({<br/>
  ajaxError: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event trigger when load ajax content successfully
</td>
<td>
<b>Event:</b> ajaxSuccess
<br/>
<br/>$('#dialog').ejDialog({<br/>
  ajaxSuccess: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
</table>

## Animation

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>property I Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Enabling Animation
</td>
<td>
<b>property:</b> enableAnimation
<br/>
<br/>$('#dialog').ejDialog({<br/>
    enableAnimation: true
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Animation effects
</td>
<td>
<b>property:</b> animation.show.effect<br/><br/>$('#dialog').ejDialog({<br/> Animation: {<br/>
show: {<br/>         effect: 'slide'<br/> }<br/>    }<br/><br/>})<br/><br/></td>
<td>
<b>property:</b>
 animationSettings.effect
<br/>
<br/>let dialog = new Dialog({ <br/>
  animationSettings: {
    effect: 'Zoom'
    }
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Animation duration
</td>
<td>
<b>property:</b> animation.show.duration<br/><br/>$('#dialog').ejDialog({<br/><br/>  Animation: {<br/>      show: {<br/>         effect: 'slide',<br/>         duration: 500<br/>       }<br/>    }<br/><br/>})<br/><br/></td>
<td>
<b>property</b>: animationSettings.duration
<br/>let dialog = new Dialog({ <br/>
  animationSettings: {
    effect: 'Zoom',
     duration: 500
    }
<br/>})<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Animation delay
</td>
<td>
Not applicable
</td>
<td>
<b>property:</b>
animationSettings.delay
<br/>
<br/>let dialog = new Dialog({ <br/>
  animationSettings: {
    effect: 'Zoom',
    duration: 500,
    delay: 300
    }
<br/>})<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
</table>

## Draggable and resizing

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Draggable dialog
</td>
<td>
<b>property:</b> allowDraggable
</br>
<br/>$('#dialog').ejDialog({<br/>
   allowDraggable: true
<br/>})
</td>
<td>
<b>property:</b> allowDragging
<br/>
<br/>let dialog = new Dialog({ <br/>
   allowDragging: true
<br/>})
<br/>
dialog.appendTo('#ej2_dialog')
</td>
</tr>
<tr>
<td>
Event triggers when the user drags the dialog
</td>
<td>
<b>Event:</b>drag
<br/>
<br/>$('#dialog').ejDialog({<br/>
  drag: function () {}
<br/>})
</td>
<td>
<b>Event:</b> drag
<br/>
<br/>let dialog = new Dialog({ <br/>
drag: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')

</td>
</tr>
<tr>
<td>
Event triggers when the start to drag the dialog
</td>
<td>
<b>Event:</b>dragStart
<br/><br/>$('#dialog').ejDialog({<br/>
  dragStart: function () {}
<br/>})
</td>
<td>
<b>Event:</b> dragStart
</br/>
<br/>let dialog = new Dialog({ <br/>
dragStart: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')

</td>
</tr>
<tr>
<td>
Event triggers when the stops to drag the dialog
</td>
<td>
<b>Event:</b>dragStop
<br/><br/>$('#dialog').ejDialog({<br/>
  dragStop: function () {}
<br/>})
</td>
<td>
<b>Event:</b> dragStop
<br/>
<br/>let dialog = new Dialog({ <br/>
dragStop: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')

</td>
</tr>
<tr>
<td>
Resizing dialog
</td>
<td>
<b>property:</b> enableResize
<br/>
<br/>$('#dialog').ejDialog({<br/>
   enableResize: true
<br/>})

</td>
<td>
Not applicable
</td>
</tr>
<tr>
<td>
Event triggers when resizing the dialog
</td>
<td>
<b>Event:</b> resize
<br/>
<br/>$('#dialog').ejDialog({<br/>
  resize: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers when starts to resizing the dialog
</td>
<td>
<b>Event: </b> resizeStart
<br/><br/>$('#dialog').ejDialog({<br/>
  resizeStart: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers when the stops to resizing the dialog
</td>
<td>
<b>Event: </b> resizeStop
<br/>$('#dialog').ejDialog({<br/>
  resizeStop: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
</table>

## Target

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Target element to append dialog in document
</td>
<td>
<b>property:</b> target
<br/>
<br/>$('#dialog').ejDialog({<br/>
    target: '#dialogTarget'
<br/>})

</td>
<td>
<b>property:</b> target
<br/>
<br/>let dialog = new Dialog({ <br/>
    target: '#dialogTarget'
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Element for draggable area
</td>
<td>
<b>property:</b> containment
<br/>
<br/>$('#dialog').ejDialog({<br/>
    containment: '#dragArea'
<br/>})

</td>
<td>
Not applicable
</td>
</tr>
</table>

## Position

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Customizing dialog position using X, Y coordinate values
</td>
<td>
<b>property:</b> position
<br/>
<br/>$('#dialog').ejDialog({<br/>
  position: { X: 300, Y: 100 }
<br/>})
</td>
<td>
<b>property:</b> position
<br/>
<br/>let dialog = new Dialog({ <br/>
position: { X: 300, Y: 100}
<br/>})
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
positioning dialog using position values
</td>
<td>
Not Applicable
</td>
<td>
<b>property:</b> position
<br/>
<br/>let dialog = new Dialog({ <br/>
position: { X: 'Center', Y: 'Center'}
<br/>})
dialog.appendTo('#ej2Dialog')
</td>
</tr>
</table>

## Visibility

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Render dialog in visible/hidden state
</td>
<td>
<b>property: </b>showOnInit
<br/>
<br/>$('#dialog').ejDialog({<br/>
   showOnInit: true
<br/>})
</td>
<td>
<b>property:</b> visible
<br/>
<br/>let dialog = new Dialog({ <br/>
  visible: true
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
</table>

## Dialog Mode

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Render modal dialog
</td>
<td>
<b>property:</b> enableModal
<br/>
<br/>$('#dialog').ejDialog({<br/>
   enableModal: true
<br/>})
</td>
<td>
<b>property</b>: isModal
<br/>
let  dialog = new Dialog({ <br/>
  isModal: true
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
</table>

## Tooltip

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2 </b>
</td>
</tr>
<tr>
<td>
Sets the tooltip for dialog buttons
</td>
<td>
<b>property</b>: tooltip
<br/>
<br/>$('#dialog').ejDialog({<br/>
  tooltip: {
      close: 'Exit'
   }
<br/>})
</td>
<td>
No Separate property for tooltip. It renders based on locale text.
</td>
</tr>
</table>

## Control State

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Enable/Disable the control
</td>
<td>
<b>property:</b> enabled
<br/>
<br/>$('#dialog').ejDialog({<br/>
   enabled: false
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Enable/ Disable page scrolling
</td>
<td>
<b>property:</b> backgroundScroll
<br/>
<br/>$('#dialog').ejDialog({<br/>
   backgroundScroll: false
<br/>})
</td>
<td>
No separate property for disabling page scroll.
By default, scrolling prevented for modal dialog

</td>
</tr>
</table>

## State Maintenance

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2 </b>
</td>
</tr>
<tr>
<td>
Save the model values in local storage or cookies
</td>
<td>
<b>property:</b> enablePersistence
<br/><br/>
$('dialog').ejDialog({<br/>
   enablePersistence: true
<br/>})
</td>
<td>
<b>property:</b> enablePersistence
<br/>
<br/>let dialog = new Dialog ({
  enablePersistence: true
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
</table>

## Common

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Adjusting Height
</td>
<td>
<b>property</b>: height
<br/>
<br/>$('#dialog').ejDialog({<br/>
    height: 400
<br/>})

</td>
<td>
<b>property</b>: height
<br/>
<br/>let dialog = new Dialog({ <br/>
 height:  '50%'
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Adjusting width
</td>
<td>
<b>property: </b>width
<br/>
<br/>$('#dialog').ejDialog({<br/>
    width: 400
<br/>})
</td>
<td>
<b>property:</b> width
<br/>
<br/>let dialog = new Dialog({ <br/>
 width:  '50%'
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Adding custom class
</td>
<td>
<b>property:</b> cssClass
<br/>
<br/>$('#dialog').ejDialog({<br/>
  cssClass:  'custom-class'
<br/>})

</td>
<td>
<b>property:</b> cssClass
<br/>
<br/>let dialog = new Dialog({ <br/>
 cssClass:  'custom-class'
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Adding zIndex
</td>
<td>
<b>property:</b> zIndex
<br/>
<br/>$('#dialog').ejDialog({<br/>
zIndex: 2000
<br/>})
</td>
<td>
<b>property:</b> zIndex<br/>
<br/>let dialog = new Dialog({ <br/>
zIndex: 2000
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Maximum height
</td>
<td>
<b>property:</b> maxHeight
<br/>
<br/>$('#dialog').ejDialog({<br/>
  maxHeight: 600
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Maximum width
</td>
<td>
<b>property:</b> maxWidth
<br/>
<br/>$('#dialog').ejDialog({<br/>
  maxWidth: 600
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Minimum height
</td>
<td>
<b>property:</b> minHeight
<br/>
<br/>$('#dialog').ejDialog({<br/>
   minHeight: 300
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Minimum width
</td>
<td>
<b>property:</b> minWidth
<br/>
<br/>$('#dialog').ejDialog({<br/>
   minWidth: 300
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Adding html attributes
</td>
<td>
<b>property:</b>htmlAttributes
<br/>
<br/>$('#dialog').ejDialog({<br/>
   htmlAttributes: {
      class:  'my-class'
   }
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Custom icon in the header
</td>
<td>
<b>property:</b>faviconCSS
<br/>
<br/>$('#dialog').ejDialog({<br/>
   faviconCSS:  'custom-icon'
<br/>})

</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Rounded corner appearance
</td>
<td>
<b>property:</b> showRoundedCorner
<br/>
<br/>$('#dialog').ejDialog({<br/>
   showRoundedCorner: true
<br/>})

</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Make control flexible for mobile view
</td>
<td>
<b>property:</b> isResponsive
<br/>
<br/>$('#dialog').ejDialog({<br/>
    isResponsive: true
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Close the Dialog
</td>
<td>
<b>Method:</b>close()
<br/>
<br/>$('#dialog').ejDialog('close')
</td>
<td>
<b>Method</b>: hide()
<br/>
<br/>let dialog = new Dialog()
<br/>
dialog.appendTo(''#ej2Dialog'')
<br/>
dialog.hide()
</td>
</tr>
<tr>
<td>
Event triggers before the dialog closes
</td>
<td>
<b>Event:</b>beforeClose
<br/>
<br/>$('#dialog').ejDialog({<br/>
  beforeClose: function () {}
<br/>})
</td>
<td>
<b>Event:</b>beforeClose
<br/>
<br/>let dialog = new Dialog({ <br/>
beforeClose: beforeCloseDialog
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
<br/>
function beforeCloseDialog() {}
</td>
</tr>
<tr>
<td>
Event triggers when the dialog closes
</td>
<td>
<b>Event:</b>close <br/>
<br/>$('#dialog').ejDialog({<br/>
  close: function () {}
<br/>})
</td>
<td>
<b>Event:</b>close <br/>
<br/>let dialog = new Dialog({ <br/>
close: CloseDialog
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
<br/>
function CloseDialog() {}
</td>
</tr>
<tr>
<td>
Destroy the control
</td>
<td>
<b>Method:</b>destroy()
<br/>
<br/>$('#dialog').ejDialog('destroy');
</td>
<td>
<b>Method:</b>destroy()
<br/>
<br/>let dialog = new Dialog()
<br/>
dialog.appendTo(''#ej2Dialog'')
<br/>
dialog.destroy()
<br/>
</td>
</tr>
<tr>
<td>
Focus the dialog element
</td>
<td>
<b>Method:</b>focus()
<br/>
<br/>$('#dialog').ejDialog('focus')
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Check whether the dialog is open
</td>
<td>
<b>Method:</b> isOpen()
<br/>
<br/>$('#dialog').ejDialog('isOpen')
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Maximize the dialog
</td>
<td>
<b>Method:</b> maximize()<br/>
<br/>$('#dialog').ejDialog('maximize')
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Minimize the dialog
</td>
<td>
<b>Method:</b>minimize() <br/>
<br/>$('#dialog').ejDialog('minimize')
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Open the dialog
</td>
<td>
<b>Method:</b>open() <br/>
<br/>$('#dialog').ejDialog('open')
</td>
<td>
<b>Method</b>: show() <br/>
<br/>let dialog = new Dialog() <br/>
dialog.appendTo(''#ej2Dialog'') <br/>
dialog.show()
</td>
</tr>
<tr>
<td>
Event trigger before the dialog opens
</td>
<td>
<b>Event:</b> beforeOpen <br/>
<br/>$('#dialog').ejDialog({<br/>
  beforeOpen: function () {}
<br/>})
</td>
<td>
<b>Event:</b>beforeOpen <br/>
<br/>let dialog = new Dialog({ <br/>
beforeOpen: beforeOpenDialog
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
<br/>
function beforeOpenDialog() {}
</td>
</tr>
<tr>
<td>
Event triggers when the opens the dialog
</td>
<td>
<b>Event:</b>open
<br/>
<br/>$('#dialog').ejDialog({<br/>
  open: function () {}
<br/>})
</td>
<td>
<b>Event: </b> open
<br/>
<br/>let dialog = new Dialog({ <br/>
open: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')

</td>
</tr>
<tr>
<td>
Refresh the dialog
</td>
<td>
<b>Method:</b>refresh()
<br/>
<br/>$('#dialog').ejDialog('refresh')
</td>
<td>
<b>Method</b>: refreshPosition()
<br/>
<br/>let dialog = new Dialog()
<br/>
dialog.appendTo(''#ej2Dialog'')
<br/>
dialog.refreshPosition()
</td>
</tr>
<tr>
<td>
Pin/ unpin the dialog
</td>
<td>
<b>Method:</b>pin
<br/>
<br/>$('#dialog').ejDialog('pin')
<br/>
<br/>$('#dialog').ejDialog('unpin')

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Event triggers after the dialog created successfully
</td>
<td>
<b>Event:</b>create
<br/>
<br/>$('#dialog').ejDialog({<br/>
  create: function () {}
<br/>})
</td>
<td>
<b>Event</b>: created
<br/>
<br/>let dialog = new Dialog({ <br/>
created: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
<tr>
<td>
Event triggers when the control destroyed successfully
</td>
<td>
<b>Event:</b>destroy
<br/>
<br/>$('#dialog').ejDialog({<br/>
  destroy: function () {}
<br/>})
</td>
<td>
Not Applicable
</td>
</tr>
<tr>
<td>
Event triggers on clicking on modal dialog overlay
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event</b>: overlayClick
<br/>
let  dialog = new Dialog ({
  overlayClick: function() {}
<br/>})
<br/>
dialog.appendTo('#ej2Dialog')
</td>
</tr>
</table>

## Accessibility and Localization

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Behavior</b>
</td>
<td>
<b>API in Essential JS 1</b>
</td>
<td>
<b>API in Essential JS 2</b>
</td>
</tr>
<tr>
<td>
Keyboard Navigation
</td>
<td>
<b>property</b> : allowKeyboardNavigation
<br/>
<br/>$('#dialog').ejDialog({<br/>
     allowKeyboardNavigation: true
<br/>})
</td>
<td>
No separate property for enable/disable keyboard navigation.
Its enabled by default.
</td>
</tr>
<tr>
<td>
Localization
</td>
<td>
<b>property</b>: locale
<br/>
<br/>$('#dialog').ejDialog({<br/>
     locale: 'es-ES'
<br/>})
</td>
<td>
<b>property</b>: locale
<br/>
<br/>let dialog = new Dialog({ <br/>
    locale: 'es-ES'
<br/>})
<br/>
dialog.appendTo('#ej2_dialog');
</td>
</tr>
<tr>
<td>
Right to left
</td>
<td>
<b>property</b>: enableRTL
<br/>
<br/>$('#dialog').ejDialog({<br/>
     enableRTL: true
<br/>})
</td>
<td>
<b>property</b> : enableRtl
<br/>
<br/>let dialog = new Dialog({ <br/>
    enableRtl: true
<br/>})
<br/>
dialog.appendTo('#ej2_dialog');
</td>
</tr>
</table>