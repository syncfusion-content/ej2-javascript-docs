---
layout: post
title: Data binding in ##Platform_Name## MultiColumn Combobox control | Syncfusion
description: Checkout and learn about Data binding in ##Platform_Name## MultiColumn Combobox control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## MultiColumn ComboBox control

The MultiColumn ComboBox loads the data either from local data sources or remote data services using the `dataSource` property. It supports the data type of `object arrays` or `DataManager`.

The MultiColumn ComboBox also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |

> The fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

The local binding in the MultiColumn ComboBox allows you to connect the component to various data sources, enabling dynamic and flexible data display.

## Binding remote data

The MultiColumn ComboBox supports retrieval of data from remote data services with the help of `DataManager` component. The `Query` property is used to fetch data from the database and bind it to the MultiColumn ComboBox.