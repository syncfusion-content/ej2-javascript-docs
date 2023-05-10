---
layout: post
title: Accessibility in ##Platform_Name## Linear gauge control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Linear gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Linear gauge control

Linear Gauge provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications. The WAI-ARIA accessibility support is achieved through the attribute like `aria-label` in the SVG element. It helps to provide information about elements in a document for assistive technology. This attribute sets the text label with some default descriptions for the following elements in the Linear Gauge.

<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>Gauge title</td>
<td>Specifies the title of the Linear Gauge.</td>
</tr>
<tr>
<td>Pointer value</td>
<td>Specifies the value of the pointer in the Linear Gauge.</td>
</tr>
</table>

To change this default description, use the [`description`](../api/linear-gauge/#description) property available in [`pointer`](../api/linear-gauge/pointerModel/#description) and [`LinearGauge`](../api/linear-gauge/#description). It helps the screen reader to read for an assistive purpose.
