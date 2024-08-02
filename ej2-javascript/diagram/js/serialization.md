---
layout: post
title: Serialization in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Serialization in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Serialization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in ##Platform_Name## Diagram control

**Serialization** is the process of converting the state of the diagram into a format that can be saved and later restored. This ensures that the diagram's current state, including its nodes, connectors, and configurations, can be persisted across sessions.

Serialization involves saving the diagram's state as a JSON string, which can then be stored in a database, file, or other storage medium. When needed, the serialized string can be deserialized to recreate the diagram in its previous state.

## Save

The diagram method [`saveDiagram`](../api/diagram/#savediagram), helps to serialize the diagram as a string. This method captures the entire diagram's configuration and content, converting it into a string representation.

The following code illustrates how to save the diagram:

```javascript
//returns serialized string of the Diagram
var savedData = diagram.saveDiagram();

```

This JSON string can be stored in local storage for future use. The following code illustrates how to save the serialized string into local storage and how to retrieve it:

```javascript
// Store the serialized string in local storage
localStorage.setItem('fileName', savedData);

// Retrieve the saved string from local storage
savedData = localStorage.getItem('fileName');

```

The diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to the [`Print`](./print.md) and [`Export`](./export.md) section.

## Load

The diagram can be loaded from serialized string data using the [`loadDiagram`](../api/diagram#loadDiagram) method. The saved string should be passed as the parameter of the loadDiagram method. The following code illustrates how to load the diagram from serialized string data:

```javascript
/*
 * Loads the diagram from saved JSON data.
 * parameter 1 - The string representing the diagram model JSON to be loaded.
 * parameter 2 - Whether it is ej1 data or not (optional)
 */
diagram.loadDiagram(savedData);

```

N> Before loading a new diagram, existing diagram is cleared.

## Prevent Default Values

The [`preventDefaults`](../api/diagram/serializationSettingsModel) property of serializationSettings is used to simplifying the saved JSON object without adding the default properties that are presented in the diagram.

The [`preventDefaults`](../api/diagram/serializationSettingsModel/#preventdefaults) property of [`serializationSettings`](../api/diagram/serializationSettingsModel/) is used to simplify the saved JSON object by excluding default properties that are inherent to the diagram. This helps reduce the size of the serialized data and improves efficiency when saving and loading diagrams.

By enabling preventDefaults, only properties that you set in diagram are included in the serialized JSON object. This optimization is useful for scenarios where minimizing data size is crucial, such as in applications with large diagrams or when optimizing network transfers.

The following code illustrates how to enable the preventDefaults property to simplify the JSON object:


```javascript
var diagram = new ej.diagrams.Diagram({
 serializationSettings: { preventDefaults: true },
});

```

## Save and load diagram using uploader control

The JSON files can be uploaded using the uploader component, where they are parsed to extract the JSON data they contain. To achieve this, configure the uploader component with the saveUrl property to receive uploaded files and store them on the server. Similarly, use the removeUrl property to handle file removal operations on the server.

When a JSON file is uploaded, it undergoes parsing to extract its JSON data. This data is then loaded into the diagram using the [`loadDiagram`](../api/diagram#loadDiagram) method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/serialisation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/serialisation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/serialisation-cs1" %}