---
layout: post
title: Styles in ##Platform_Name## Query Builder UI | Syncfusion
description: Customize the ##Platform_Name## Query Builder UI by overriding CSS classes for group headers, rules, buttons, and connectors, or by using Theme Studio.
platform: ej2-javascript
control: Style and appearance
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in ##Platform_Name## Query Builder UI

To modify the Query Builder appearance, override the default CSS classes. The following table lists the primary CSS selectors and the sections they affect. A custom theme for the controls can also be created with [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

| CSS Class | Purpose of Class |
| --- | --- |
| .e-group-header .e-btn | Customizes the condition button |
| .e-group-body .e-rule-container | Customizes the rule container |
| .e-group-container .e-group-header .e-dropdown-btn | Customizes the Add Group/Condition button |
| .e-query-builder .e-group-header .e-deletegroup | Customizes the Delete group button |
| .e-query-builder .e-rule-field .e-rule-value-delete .e-rule-delete | Customizes the Delete condition button |
| .e-query-builder .e-rule-list > ::after, .e-query-builder .e-rule-list > ::before | Customizes the group joining line |
| .e-query-builder .e-rule-container.e-joined-rule | Customizes the condition joining line |