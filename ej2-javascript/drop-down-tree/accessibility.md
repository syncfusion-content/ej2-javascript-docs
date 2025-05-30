---
layout: post
title: Accessibility in ##Platform_Name## Dropdown Tree control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Dropdown Tree control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Dropdown Tree control

The Dropdown Tree control is designed with `WAI-ARIA` specifications in mind, implementing WAI-ARIA roles, states, and properties along with `keyboard support`. This control features full keyboard interaction support and ARIA accessibility that enhances usability for users of assistive technologies (AT) and those who rely entirely on keyboard navigation.

## ARIA attributes

The Dropdown Tree control uses the `listbox` role. Each parent tree item in the popup has the `group` role, and each item in the popup uses the `treeitem` role. The following ARIA attributes are utilized in the Dropdown Tree control:

| **Properties** | **Functionalities** |
| --- | --- |
| aria-haspopup | Indicates whether the Dropdown Tree input element has a popup list or not. |
| aria-expanded | Indicates whether the popup list is expanded or not. |
| aria-selected | Indicates the selected option. |
| aria-readonly | Indicates the read only state of the Dropdown Tree element. |
| aria-disabled | Indicates whether the Dropdown Tree control is in the disabled state or not. |
| aria-activedescendent | This attribute holds the ID of the active list item to focus its descendant child element. |
| aria-owns | This attribute contains the ID of the popup list to indicate popup as a child element. |

## Keyboard interaction

The Dropdown Tree functionalities can be interactive when keyboard shortcuts are used.

The Dropdown Tree supports the following keyboard shortcuts:

| Interaction Keys | Description |
|------|---------|
| <kbd>Alt + Down</kbd> | Opens the popup. |
| <kbd>Alt + Up</kbd> | Closes the popup. |
| <kbd>Esc(Escape)</kbd> | Closes the popup when it is in an open state. |
| <kbd>Arrow Up</kbd> | Goes to the previous item in the popup. |
| <kbd>Arrow Down</kbd> | Goes to the next item in the popup. |
| <kbd>Arrow Right</kbd> | Expands the current item. |
| <kbd>Arrow Left</kbd> | Collapses the current item in the popup. |
| <kbd>Home</kbd> | Goes to the first item in the popup. |
| <kbd>End</kbd> | Goes to the last item in the popup. |
| <kbd>Enter</kbd> | Selects the focused item in the popup. |
| <kbd>Space</kbd> | Checks the current item in the popup. |