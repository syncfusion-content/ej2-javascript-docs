---
layout: post
title: Disable context menu in JavaScript PDF Viewer Control | Syncfusion
description: Learn here all about disable context menu option in Syncfusion Essential JavaScript PDF Viewer control, it's elements and more.
platform: ej2-javascript
control: Disable context menu option 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Disable context menu in JavaScript PDF Viewer Control

To disable the context menu in the Syncfusion PDF viewer control, you can use the **ContextMenuOption** property as `'None'` to hide all context menu options. Default value of the **ContextMenuOption** is `'RightClick'`.

Here is an example of how you can use the **ContextMenuOption** to disable context menu in the PDF Viewer:

```

<button id='disable'>Disable ContextMenuOption</button>

```

```javascript

// Disable ContextMenuOption
document.getElementById('disable').addEventListener('click', ()=> {
  viewer.contextMenuOption = 'None';
});

```

This will hide the context menu and prevent the user from right-clicking on the PDF viewer.

Find the sample [how to disable context menu](https://stackblitz.com/edit/jlphem-uicunx?devtoolsheight=33&file=index.js)