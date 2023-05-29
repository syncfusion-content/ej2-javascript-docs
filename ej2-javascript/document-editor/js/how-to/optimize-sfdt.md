---
layout: post
title: Optimize sfdt in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Optimize sfdt in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Optimize sfdt 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Optimize sfdt in ##Platform_Name## Document editor control

Starting from version v21.1.x, the SFDT file generated in Word Processor component is optimized by default to reduce the file size. All static keys are minified, and the final JSON string is compressed. This helps reduce the SFDT file size relative to a DOCX file and provides the following benefits,
* File transfer between client and server through the internet gets faster.
* The new optimized SFDT files require less storage space than the old SFDT files.
Hence, the optimized SFDT file can't be directly manipulated as JSON string.

> This feature comes with a public API to switch between the old and new optimized SFDT format, allowing backward compatibility.

As a backward compatibility to create older format SFDT files, refer the following code changes,

<table>
<tr>
<td>Client/Server</td><td>Old Code</td><td>New Code from v21.1.x</td>
</tr>
<tr>
<td>Client-side</td>
<td>

```ts
var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer();
```

</td>
<td>

```ts
var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ documentEditorSettings: { optimizeSfdt: false } });
```

</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>

```c#
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
```

</td>
<td>

```c#
WordDocument sfdtDocument = WordDocument.Load(stream, formatType);
sfdtDocument.OptimizeSfdt = false;
string sfdt = Newtonsoft.Json.JsonConvert.SerializeObject(sfdtDocument);
```

</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>

```java
String sfdtDocument = WordProcessorHelper.load(stream, formatType);
```

</td>
<td>

```java
String sfdtDocument = WordProcessorHelper.load(stream, formatType, false);
```

</td>
</tr>
</table>

To convert from older format SFDT from a new optimized SFDT file, refer the following code example,

<table>
<tr>
<td>Client/Server</td><td>Code example</td>
</tr>
<tr>
<td>Client-side</td>
<td>

```ts
var documenteditorContainer = new ej.documenteditor.DocumentEditorContainer({ documentEditorSettings: { optimizeSfdt: false } });
```

</td>
</tr>
<tr>
<td>Server-side C#</td>
<td>

```c#
using(Syncfusion.DocIO.DLS.WordDocument docIODocument = WordDocument.Save(optimizedSfdt)) {
sfdtDocument = WordDocument.Load(docIODocument);
sfdtDocument.OptimizeSfdt = false;
string oldSfdt = JsonSerializer.Serialize(sfdtDocument);
}
```

</td>
</tr>
<tr>
<td>Server-side Java</td>
<td>

```java
WordDocument docIODocument = WordProcessorHelper.save(optimizedSfdt);
String oldSfdt = WordProcessorHelper.load(docIODocument, false);
```

</td>
</tr>
</table>