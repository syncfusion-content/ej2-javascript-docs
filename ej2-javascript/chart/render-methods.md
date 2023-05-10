---
layout: post
title: Render methods in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Render methods in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Render methods 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Render methods in ##Platform_Name## Chart control

Chart uses following two rendering methods.

* SVG
* Canvas

## SVG

SVG is used to render Chart by default for all browsers expect IE8 and old versions.

## Canvas

You can switch between SVG and Canvas rendering by using the `enableCanvas` option. The canvas mode rendering is used in the following scenarios,

* Plotting large number of data points.
* Performing high frequency live updates.

**Limitations**

* Animation is not supported.