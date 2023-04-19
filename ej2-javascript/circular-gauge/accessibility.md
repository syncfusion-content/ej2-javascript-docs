---
layout: post
title: Accessibility in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Accessibility in ##Platform_Name## Circular gauge control

Circular gauge provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications.
WAI-ARIA Accessibility supports are achieved through the attributes like `aria-label`. It helps to provides information about elements
in a document for assistive technology.

**Aria-label:**   Attribute provides the text label with some default description for below elements in gauge.

<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>Pointer</td>
<td>Reads the pointer value</td>
</tr>
<tr>
<td>Annotation</td>
<td>Read the annotation description</td>
</tr>
<tr>
<td>Gauge Title</td>
<td>Reads the gauge title</td>
</tr>
</table>

 You can change this default description, using description property available in [`Pointers`](../api/circular-gauge/pointer), [`Annotations`](../api/circular-gauge/annotation) and [`CircularGauge`](../api/circular-gauge) object.
 It helps the screen reader to read for assistive purpose.