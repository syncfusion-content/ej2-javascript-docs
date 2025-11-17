---
layout: post
title: Mail Merge in ##Platform_Name## Rich Text Editor Control | Syncfusion
description: Learn all about Mail Merge in the Syncfusion ##Platform_Name## Rich Text Editor control, part of Essential JS 2.
platform: ej2-javascript
control: Mail Merge 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mail merge in ##Platform_Name## Rich Text Editor Control

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

## Adding custom toolbar items for inserting merge fields

To enable mail merge functionality, the Rich Text Editor toolbar is extended with two custom buttons: `Insert Field` and `Merge Data`. These buttons are added using the `template` property in [toolbarSettings.items](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#items), which points to custom HTML elements (#insertField and #merge_data).

- **Insert Field:** Opens a dropdown list of merge fields for inserting placeholders like `{{FirstName}}` into the editor.
- **Merge Data:** Replaces all placeholders in the editor with actual values from a predefined data source.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const mailMergeEditor: RichTextEditor = new RichTextEditor({
   toolbarSettings: {
      items: [
         'Bold', 'Italic', 'Underline', '|',
         'Formats', 'Alignments', '|',
         { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
         { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
         'SourceCode', '|', 'Undo', 'Redo'
      ],
   },
});
mailMergeEditor.appendTo('#mailMergeEditor');

{% endhighlight %}
{% endtabs %}

## Using DropDownButton for selecting placeholders

The **DropDownButton** component displays a list of merge fields such as First Name, Last Name, and Company Name. When a user selects an item, the corresponding placeholder (e.g., {{FirstName}}) is inserted at the current cursor position using the `insertHTML` command.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let insertField: DropDownButton = new DropDownButton({
   items: [
      { text: 'First Name' },
      { text: 'Last Name' },
      { text: 'Support Email' },
      { text: 'Company Name' },
      { text: 'Promo Code' },
      { text: 'Support Phone Number' },
      { text: 'Customer ID' },
      { text: 'Expiration Date' },
      { text: 'Subscription Plan' },
   ],
   content: `<span style="display:inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>`,
   select: onItemSelect,
});
insertField.appendTo('#insertField');

function onItemSelect(args: MenuEventArgs): void {
   const value = textToValueMap[args.item.text];
   mailMergeEditor.executeCommand(
      'insertHTML',
      `<span contenteditable="false" class="e-mention-chip"><span>{{${value}}}</span></span>&nbsp;`,
      { undo: true }
   );
}

{% endhighlight %}
{% endtabs %}

## Populating merge fields using Mention

The **Mention** component provides an alternative way to insert placeholders by typing the `@` character inside the editor. A popup list of merge fields appears, allowing quick selection without using the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const mentionObj: Mention = new Mention({
   dataSource: mergeData,
   target: '#mailMergeEditor',
   mentionChar: '@',
   fields: { text: 'text' },
   allowSpaces: true,
   popupWidth: '250px',
   popupHeight: '200px',
   displayTemplate: '<span> {{${value}}} </span>',
});
mentionObj.appendTo('#mentionField');

{% endhighlight %}
{% endtabs %}

## Replacing placeholders with actual data dynamically

When the **Merge Data** button is clicked, the editor content is processed to replace all placeholders with actual values from the `placeholderData` object. This is done using a regular expression in the `replacePlaceholders()` function.

{% endhighlight %}
{% endtabs %}

document.getElementById('merge_data')?.addEventListener('click', onClickHandler);

function onClickHandler(): void {
   let editorContent = mailMergeEditor.value;
   let mergedContent = replacePlaceholders(editorContent, placeholderData);
   mailMergeEditor.value = mergedContent;
}

function replacePlaceholders(template: string, data: { [key: string]: string }): string {
   return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => data[key.trim()] || match);
}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/mail-merge/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mail-merge/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/mail-merge/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mail-merge/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge" %}
{% endif %}
