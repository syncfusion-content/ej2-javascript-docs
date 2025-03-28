---
layout: post
title: Track changes in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Track changes in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Track changes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Track changes in ##Platform_Name## Document editor control

Track Changes allows you to keep a record of changes or edits made to a document. You can then choose to accept or reject the modifications. It is a useful tool for managing changes made by several reviewers to the same document. If track changes option is enabled, all editing operations are preserved as revisions in Document Editor.

## Enable track changes in Document Editor

The following example demonstrates how to enable track changes.

{% if page.publishingplatform == "typescript" %}

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableTrackChanges: true,
});
container.appendTo('#container');
```

{% elsif page.publishingplatform == "javascript" %}

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableTrackChanges: true });
container.appendTo('#container');
```

{% endif %}

## Show/Hide Revisions Pane
 
The Show/Hide Revisions Pane feature in the Document Editor allows users to toggle the visibility of the revisions pane, providing flexibility in managing tracked changes within the document.
 
The following example code illustrates how to show/hide the revisions pane.

{% if page.publishingplatform == "typescript" %}

```ts

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableTrackChanges: true,
});
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.appendTo('#container');
container.documentEditor.showRevisions = true; // To show revisions pane
container.documentEditor.showRevisions = false; // To hide revisions pane

```

{% elsif page.publishingplatform == "javascript" %}

```js

var container = new ej.documenteditor.DocumentEditorContainer({ enableTrackChanges: true });
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar); 
container.appendTo('#container');
container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
container.documentEditor.showRevisions = true; // To show revisions pane
container.documentEditor.showRevisions = false; // To hide revisions pane

```

{% endif %}

## Get all tracked revisions

The following example demonstrate how to get all tracked revision from current document.

{% if page.publishingplatform == "typescript" %}

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableTrackChanges: true,
});
container.appendTo('#container');
/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = container.documentEditor.revisions;
```

{% elsif page.publishingplatform == "javascript" %}

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableTrackChanges: true });
container.appendTo('#container');

/**
 * Get revisions from the current document
 */
var revisions = container.documentEditor.revisions;
```

{% endif %}

## Accept or Reject all changes programmatically

The following example demonstrates how to accept/reject all changes.

{% if page.publishingplatform == "typescript" %}

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableTrackChanges: true,
});
container.appendTo('#container');
/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = container.documentEditor.revisions;

/**
 * Accept all tracked changes
 */
revisions.acceptAll();

/**
 * Reject all tracked changes
 */
revisions.rejectAll();
```

{% elsif page.publishingplatform == "javascript" %}

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableTrackChanges: true });
container.appendTo('#container');
/**
 * Get revisions from the current document
 */
var revisions = container.documentEditor.revisions;

/**
 * Accept all tracked changes
 */
revisions.acceptAll();

/**
 * Reject all tracked changes
 */
revisions.rejectAll();
```

{% endif %}

## Accept or reject a specific revision

The following example demonstrates how to accept/reject specific revision in the Document Editor.

{% if page.publishingplatform == "typescript" %}

```ts
/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = container.documentEditor.revisions;
/**
 * Accept specific changes
 */
revisions.get(0).accept();
/**
 * Reject specific changes
 */
revisions.get(1).reject();
```

{% elsif page.publishingplatform == "javascript" %}

```js
/**
 * Get revisions from the current document
 */
var revisions = container.documentEditor.revisions;
/**
 * Accept specific changes
 */
revisions.get(0).accept();
/**
 * Reject specific changes
 */
revisions.get(1).reject();
```

{% endif %}

## Navigate between the tracked changes

The following example demonstrates how to navigate tracked revision programmatically.

{% if page.publishingplatform == "typescript" %}

```ts

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableTrackChanges: true,
});
container.appendTo('#container');
/**
 * Navigate to next tracked change from the current selection.
 */
container.documentEditor.selection.navigateNextRevision();

/**
 * Navigate to previous tracked change from the current selection.
 */
container.documentEditor.selection.navigatePreviousRevision();
```

{% elsif page.publishingplatform == "javascript" %}

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableTrackChanges: true });
container.appendTo('#container');
/**
 * Navigate to next tracked change from the current selection.
 */
container.documentEditor.selection.navigateNextRevision();

/**
 * Navigate to previous tracked change from the current selection.
 */
container.documentEditor.selection.navigatePreviousRevision();
```

{% endif %}

## Filtering changes based on user

In DocumentEditor, we have built-in review panel in which we have provided support for filtering changes based on the user.

![Track changes](images/track-changes.png)

## Protect the document in track changes only mode

Document Editor provides support for protecting the document with `RevisionsOnly` protection. In this protection, all the users are allowed to view the document and do their corrections, but they cannot accept or reject any tracked changes in the document. Later, the author can view their corrections and accept or reject the changes.

Document editor provides an option to protect and unprotect document using [`enforceProtection`](../api/document-editor/editor/#enforceprotection) and [`stopProtection`](../api/document-editor/editor/#stopprotection) API.

The following example code illustrates how to enforce and stop protection in Document editor container.

{% if page.publishingplatform == "typescript" %}

```ts

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
container.serviceUrl = 'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

//enforce protection
container.documentEditor.editor.enforceProtection('123', 'RevisionsOnly');

//stop the document protection
container.documentEditor.editor.stopProtection('123');
```

{% elsif page.publishingplatform == "javascript" %}

```js
var container = new ej.documenteditor.DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
ej.documenteditor.DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
  'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

//enforce protection
container.documentEditor.editor.enforceProtection('123', 'RevisionsOnly');

//stop the document protection
container.documentEditor.editor.stopProtection('123');
```

{% endif %}

Tracked changes only protection can be enabled in UI by using [Restrict Editing pane](../document-editor/document-management#restrict-editing-pane)

![Enable track changes only protection](images/tracked-changes.png)

>Note: In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly |RevisionsOnly`. In stop protection method, parameter denotes the password.

## Events

DocumentEditor provides [beforeAcceptRejectChanges](../api/document-editor-container#beforeacceptrejectchanges) event, which is triggered before a tracked content is accepted or rejected. This event provides an opportunity to perform custom logic before accepting or rejecting changes. The event handler receives the [RevisionActionEventArgs](../api/document-editor/revisionActionEventArgs) object as an argument, which allows access to information about the tracked content. . 

To demonstrate a specific use case, let's consider an example where we want to restrict the accept and reject changes functionality based on the author name. The following code snippet illustrates how to allow only the author of the tracked content to accept or reject changes:

{% if page.publishingplatform == "typescript" %}

```ts

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({ 
  beforeAcceptRejectChanges: beforeAcceptRejectChanges.bind(this),
  enableToolbar: true,
  height: '590px',
  currentUser: 'Hary'
});
container.appendTo('#container');

// Event get triggerd before accepting/rejecting changes
function beforeAcceptRejectChanges(args : RevisionActionEventArgs) : void {
  // Check the author of the revision and current user are different
  if (args.author !== container.currentUser) {
    // Cancel the accept/reject action
    args.cancel = true;
  }
}
```

{% elsif page.publishingplatform == "javascript" %}

```js

var container = new ej.documenteditor.DocumentEditorContainer({ 
  beforeAcceptRejectChanges:{beforeAcceptRejectChanges},
  enableToolbar: true,
  height: '590px',
  currentUser: 'Hary'
});
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);

container.appendTo('#container');

// Event get triggerd before accepting/rejecting changes
function beforeAcceptRejectChanges(args) {
  // Check the author of the revision and current user are different
  if (args.author !== container.currentUser) {
    // Cancel the accept/reject action
    args.cancel = true;
  }
}
```

{% endif %}