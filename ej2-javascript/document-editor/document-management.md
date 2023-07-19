---
layout: post
title: Document management in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Document management in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Document management 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Document management in ##Platform_Name## Document editor control

Document Editor provides support to restrict editing. When the protected document includes range permission, then unique user or user group only authorized to edit separate text area.

# Set current user

You can use the `currentUser` property to authorize the current document user by name, email, or user group name.

The following code shows how to set currentUser

```ts
documentEditor.currentUser = 'engineer@mycompany.com';
```

# Customize highlight color of text area

You can highlight the editable region of the current user using the `userColor` property.

The following code shows how to set userColor.

```ts
documentEditor.userColor = '#fff000';
```

# Highlighting the editable text area

You can toggle the highlight the editable region value using the "highlightEditableRanges" property.

The folowing code shows how to toggle the highlight editable region value.

```typescript
documentEditor.documentEditorSettings.highlightEditableRanges = true; 
```

# Restrict Editing Pane

Restrict Editing Pane provides the following options to manage the document:
* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read only check box.
* To add users to the current document, select more users option and add user from the popup dialog.
* To include range permission to the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check box.
* To apply the chosen editing restrictions, click the **YES,START ENFORCING PROTECTION** button. A dialog box displays asking for a   password to protect.
* To stop protection, select **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

The following code shows Restrict Editing Pane. To unprotect the document, use password '123'.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/data-protection-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/data-protection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/data-protection-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/data-protection-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/data-protection-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/data-protection-cs1" %}
{% endif %}

## See Also

* [How to protect the document in form filling mode](../document-editor/form-fields/#protect-the-document-in-form-filling-mode)
* [How to protect the document in comments only mode](../document-editor/comments/#protect-the-document-in-comments-only-mode)
* [How to protect the document in track changes only mode](../document-editor/track-changes/#protect-the-document-in-track-changes-only-mode)