---
layout: post
title: Set default format in document editor in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set default format in document editor 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in ##Platform_Name## Document editor control

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use [`setDefaultCharacterFormat`](../../api/document-editor/#setdefaultcharacterformat) method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.

The following example code illustrates how to change the default font size in Document editor.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
DocumentEditorContainer.Inject(Toolbar);
// Default font size set as 20
container.setDefaultCharacterFormat({ fontSize: 20 });
container.appendTo('#container');  
```

Similarly, you can change the required [`CharacterFormatProperties`](../../api/document-editor/characterFormatProperties) default value.

The following example code illustrates how to change other character format default value in Document editor.

```ts
import { CharacterFormatProperties, DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
DocumentEditorContainer.Inject(Toolbar);
// Set default value
let defaultCharacterFormat: CharacterFormatProperties = {
    bold: false,
    italic: false,
    baselineAlignment: 'Normal',
    underline: 'None',
    fontColor: "#000000",
    fontFamily: 'Algerian',
    fontSize: 12
};
container.setDefaultCharacterFormat(defaultCharacterFormat);
container.appendTo('#container');
```

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](../../api/document-editor/#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](../../api/document-editor/paragraphFormatProperties) default value.

The following example code illustrates how to change the paragraph format(before spacing, line spacing etc.,) default value in Document editor.

```ts
import { ParagraphFormatProperties, DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
DocumentEditorContainer.Inject(Toolbar);

let defaultParagraphFormat: ParagraphFormatProperties = {
    beforeSpacing: 8,
    lineSpacing: 1.5,
    leftIndent: 24,
    textAlignment: "Center"
};
container.setDefaultParagraphFormat(defaultParagraphFormat);
container.appendTo('#container');  
```

## Set the default section format

You can use [`setDefaultSectionFormat`](../../api/document-editor/#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](../../api/document-editor/sectionFormatProperties) default value.

The following example code illustrates how to change the section format(header and footer distance, page width and height, etc.,) default value in Document editor.

```ts
import { SectionFormatProperties, DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ height: "590px" });
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
DocumentEditorContainer.Inject(Toolbar);

let defaultSectionFormat: SectionFormatProperties = {
    pageWidth: 500,
    pageHeight: 800,
    headerDistance: 56,
    footerDistance: 48,
    leftMargin: 12,
    rightMargin: 12,
    topMargin: 0,
    bottomMargin: 0

};
container.setDefaultSectionFormat(defaultSectionFormat);
container.appendTo('#container');  
```