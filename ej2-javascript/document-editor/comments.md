---
layout: post
title: Comments in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Comments in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Comments 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Comments in ##Platform_Name## Document editor control

Document Editor allows you to add comments to documents. You can add, navigate and remove comments in code and from the UI.

## Add a new comment

Comments can be inserted to the selected text.

```ts
//Add new commnt in the document.
documentEditor.editor.insertComment('Test comment');
```

## Add a New Comment with Date, Author, and Status

Comments can be inserted into the selected text with a specified date, author, and status.

{% if page.publishingplatform == "typescript" %}
{% highlight ts %}
// In this example, a comment with the text "Nancy Davolio" is added by the author Rachel Green on July 23, 2024, at 2:30 PM. The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
let specificDate = new Date(2024, 6, 23, 14, 30, 0); // Note: July is represented by 6 (0-based index).

// Define the properties of the comment including author, date, and resolution status.
let commentProperties: CommentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the document editor.
documentEditor.editor.insertComment('Hello world', commentProperties);
```
{% endhighlight %}
{% elsif page.publishingplatform == "javascript" %}
{% highlight ts %}
// In this example, a comment with the text "Nancy Davolio" is added by the author Rachel Green on July 23, 2024, at 2:30 PM. The isResolved status is set to false.

// Create a specific date: July 23, 2024, at 2:30:00 PM.
var specificDate = new Date(2024, 6, 23, 14, 30, 0); // Note: July is represented by 6 (0-based index).

// Define the properties of the comment including author, date, and resolution status.
var commentProperties = { 
    author: 'Nancy Davolio',          // The author of the comment.
    dateTime: specificDate,           // The date and time when the comment is created.
    isResolved: false                 // The status of the comment; false indicates it is unresolved.
};

// Insert the comment with the specified properties into the document editor.
documentEditor.editor.insertComment('Hello world', commentProperties);
{% endhighlight %}
{% endif %}

## Comment navigation

Next and previous comments can be navigated using the below code snippet.

```ts
//Navigate to next comment
documentEditor.selection.navigateNextComment();

//Navigate to previous comment
documentEditor.selection.navigatePreviousComment();
```

## Delete comment

Current comment can be be deleted using the below code snippet.

```ts
//Delete the selected comment.
documentEditor.editor.deleteComment();
```

## Delete all comment

All the comments in the document can be deleted using the below code snippet.

```ts
//Delete all the comments present in the current document.
documentEditor.editor.deleteAllComments();
```

## Protect the document in comments only mode

Document Editor provides support for protecting the document with `CommentsOnly` protection. In this protection, user allowed to add or edit comments alone in the document.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](../api/document-editor/editor/#enforceprotection) and [`stopProtection`](../api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
  'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

//enforce protection
container.documentEditor.editor.enforceProtection('123', 'CommentsOnly');

//stop the document protection
container.documentEditor.editor.stopProtection('123');
```

Comment only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable comment only protection](images/commentsonly.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly`. In stop protection method, parameter denotes the password.

## Mention Support in comments

Mention support displays a list of items that users can select or tag from the suggested list. To use this feature, type the @ character in the comment box and select or tag the user from the suggestion list.

The following example illustrates how to enable mention support in Document Editor

```ts
let mentionData: any = [
    { "Name": "Mary Kate", "EmailId": "marry@company.com" },
    { "Name": "Andrew James", "EmailId": "james@company.com" },
    { "Name": "Andrew Fuller", "EmailId": "andrew@company.com"}
];
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,height: '590px',
// Enable mention support in document editor
  documentEditorSettings: {
    mentionSettings: { dataSource: mentionData, fields: { text: 'Name' }},
  }
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
```