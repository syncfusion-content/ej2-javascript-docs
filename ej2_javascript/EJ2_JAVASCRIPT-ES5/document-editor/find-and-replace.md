---
title: "Find and replace"
component: "DocumentEditor"
description: "Learn how to find a portion of text in JavaScript document editor and replace it with another portion of text."
---

# Find and replace

The Document Editor component searches a portion of text in the document through a built-in interface called `OptionsPane` or rich APIs. When used in combination with selection performs various operations on the search results like replacing it with some other text, highlighting it, making it bolder, and more.

## Options pane

This provides the options to search for a portion of text in the document. After search operation is completed, the search results will be displayed in a list and options to navigate between them. The current occurrence of matched text or all occurrences with another text can be replaced by switching to `Replace` tab. This pane is opened using the keyboard shortcut `CTRL+F`. You can also open it programmatically using the following sample code.

{% tab template="document-editor/find",es5Template="find" , sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Selection, Editor, Search, OptionsPane } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Selection, Search, Editor, OptionsPane);
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false, enableOptionsPane: true });
documenteditor.appendTo('#DocumentEditor');
let sfdt: string = `{
    "sections": [
        {
            "blocks": [
                {
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": true
                            },
                            "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                        }
                    ]
                }
            ]
        }
    ]
}`;
documenteditor.open(sfdt);
document.getElementById('showhidepane').addEventListener('click', () => {
    documenteditor.showOptionsPane();
});
```

{% endtab %}

You can close the options pane by pressing `Esc` key.

## Search

The `Search` module of Document Editor exposes the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`findAll()`](../api/document-editor/search/#findall)| Method |Searches for specified text in the whole document and highlights it with yellow.|
|[`searchResults`](../api/document-editor/search/#searchresults) |Property |This is an instance of `SearchResults`.|
|[`find()`](../api/document-editor/search/#find) | Method |Find immediate occurrence of specified text from cursor position in the document and highlights it with yellow.|

### Find the immediate occurrence in the document

Using [`find()`](../api/document-editor/search/#find) method, you can find the immediate occurrence of specified text from current cursor position in the document.

The following example code illustrates how to use find in Document editor.

```typescript
documenteditor.search.find('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

### Find all the occurrences in the document

Using [`findAll()`](../api/document-editor/search/#findall) method, you can find all the occurrences of specified text in the whole document and highlight it with yellow.

The following example code illustrates how to find All the text in the document.

```typescript
documenteditor.search.findAll('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

## Search results

The `SearchResults` class provides information about the search results after a search operation is completed that can be identified using the `searchResultsChange` event. This will expose the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`length`](../api/document-editor/searchResults/#length)|Property|Returns the total number of results found on the search.|
|[`index`](../api/document-editor/searchResults/#index)|Property|Returns the index of selected search result. You can change the value for this property to move the selection.|
|[`replaceAll()`](../api/document-editor/searchResults/#replaceall)|Method|Replaces all the occurrences with specified text.|
|[`clear()`](../api/document-editor/searchResults/#clear)|Method|Clears the search result.|

### Replace all the occurrences

Using [`replaceAll`](../api/document-editor/searchResults/#replaceall), you can replace all the occurrences with specified text.

The following example code illustrates how to use replace All in Document editor.

```typescript
documentEditor.search.findAll ('Some text');
// Replace all the searched text with word 'Mike'
documentEditor.search.searchResults.replaceAll("Mike");  
```

### Replace

Using [`insertText`](../api/document-editor/editor/#inserttext), you can replace the current searched text with specified text and it replace single occurrence.

>Note: This [`insertText`](../api/document-editor/editor/#inserttext) API accepts following control characters
>* New line characters ("\r", "\r\n", "\n") - Inserts a new paragraph and appends the remaining text to the new paragraph.
>* Line break character ("\v") - Moves the remaining text to start in new line.
>* Tab character ("\t") - Allocates a tab space and continue the next character.

The following example code illustrates how to find a text in the document and replace each occurrence of the text one by one programmatically.

```typescript
container.documentEditor.search.findAll('works');

let searchLength: number = container.documentEditor.search.searchResults.length;

for (let i = 0; i < searchLength; i++) {
  // It will move selection to specific searched index,move to each occurrence one by one
  container.documentEditor.search.searchResults.index = i;
  // Replace it with some text
  container.documentEditor.editor.insertText('Hello');
}

container.documentEditor.search.searchResults.clear();
```

## SearchResultsChange event

`DocumentEditor` exposes the `searchResultsChange’`event that will be triggered whenever search results are changed. Consider the following scenarios:

* A search operation is completed with some results.
* The results are replaced with some other text, since it will be cleared automatically.
* The results are cleared explicitly.

Refer to the following code example.

```typescript
documenteditor.searchResultsChange = function() {

};
```

## Customize find and replace

Using the exposed APIs, you can customize the find and replace functionality in your application. Refer to the following sample code.

{% tab template="document-editor/replace",es5Template="replace" , sourceFiles="index.ts,index.html" %}

```typescript
import { DocumentEditor, Selection, Editor, Search } from '@syncfusion/ej2-documenteditor';
//Inject require modules.
DocumentEditor.Inject(Selection, Search, Editor);

//Initialize the Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({ height: '370px', enableSelection: true, enableSearch: true, enableEditor: true, isReadOnly: false });
documenteditor.appendTo('#DocumentEditor');
let sfdt: string = `{
    "sections": [
        {
            "blocks": [
                {
                    "inlines": [
                        {
                            "characterFormat": {
                                "bold": true,
                                "italic": true
                            },
                            "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                        }
                    ]
                }
            ]
        }
    ]
}`;

//Open the SFDT document in Document Editor.
documenteditor.open(sfdt);
document.getElementById('replace_all').addEventListener('click', () => {
    let textToFind: string = (document.getElementById('find_text') as HTMLInputElement).value;
    let textToReplace: string = (document.getElementById('replace_text') as HTMLInputElement).value;
    if (textToFind !== '') {
        // Find all the occurences of given text
        documenteditor.searchModule.findAll(textToFind);
        if (documenteditor.searchModule.searchResults.length > 0) {
            // Replace all the occurences of given text
            documenteditor.searchModule.searchResults.replaceAll(textToReplace);
        }
    }
});
```

{% endtab %}