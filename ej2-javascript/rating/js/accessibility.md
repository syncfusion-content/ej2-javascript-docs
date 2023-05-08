---
layout: post
title: Accessibility in ##Platform_Name## Rating control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Rating control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Rating control

Accessibility is achieved in the rating control through `WAI-ARIA` standard and keyboard navigations. The rating control can be effectively accessed through assistive technologies such as screen readers.

## Keyboard interaction

The rating control is interactive with below keyboard shortcuts.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Space</kbd> | If a **Reset Button** is focused, resets the value to `min` value. |
| <kbd>Arrow Up</kbd> | Increases the value. |
| <kbd>Arrow Left</kbd> | Decreases the value and in RTL mode, increases the value. |
| <kbd>Arrow Down</kbd> | Decreases the value. |
| <kbd>Arrow Right</kbd> | Increases the value and in RTL mode, decreases the value. |

## ARIA attribute

The following ARIA attributes are used in rating control based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | This attribute is added to the div element to describe the actual role. |
| aria-label | Attribute provides the text label with some default description for the Rating and its items. |
| aria-valuemin | It defines the minimum value of rating. |
| aria-valuemax | It defines the maximum value of rating. |
| aria-valuenow | It defines the current value of rating. |
