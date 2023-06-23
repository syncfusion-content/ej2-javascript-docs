---
layout: post
title: Link in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Link in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Link 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Link in ##Platform_Name## Document editor control

Document Editor supports hyperlink field. You can link a part of the document content to Internet or file location, mail address, or any text within the document.

## Navigate a hyperlink

Document Editor triggers ‘requestNavigate’ event whenever user clicks Ctrl key or tap a hyperlink within the document. This event provides necessary details about link type, navigation URL, and local URL (if any) as arguments, and allows you to easily customize the hyperlink navigation functionality.

### Add the requestNavigate event for DocumentEditor

The following example illustrates how to add requestNavigate event for DocumentEditor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/hyperlink-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/hyperlink-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/hyperlink-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/hyperlink-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/hyperlink-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/hyperlink-cs1" %}
{% endif %}

### Add the requestNavigate event for DocumentEditorContainer component

The following example illustrates how to add requestNavigate event for DocumentEditorContainer component.

```ts
import { DocumentEditor, SfdtExport, Selection, RequestNavigateEventArgs } from '@syncfusion/ej2-documenteditor';

let hostUrl: string =
  'https://ej2services.syncfusion.com/production/web-services/';

let container: DocumentEditorContainer = new DocumentEditorContainer({
  enableToolbar: true,
  height: '590px',
});
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');

// Add event listener for requestNavigate event to customize hyperlink navigation functionality
container.documentEditor.requestNavigate = (args: RequestNavigateEventArgs) => {
  if (args.linkType !== 'Bookmark') {
    let link: string = args.navigationLink;
    if (args.localReference.length > 0) {
      link += '#' + args.localReference;
    }
    //Navigate to the selected URL.
    window.open(link);
    args.isHandled = true;
  }
};
```

If the selection is in hyperlink, trigger this event by calling ‘navigateHyperlink’ method of ‘Selection’ instance. Refer to the following example.

```ts
documenteditor.selection.navigateHyperlink();
```

## Copy link

Document Editor copies link text of a hyperlink field to the clipboard if the selection is in hyperlink. Refer to the following example.

```ts
documenteditor .selection.copyHyperlink();
```

## Add hyperlink

To create a basic hyperlink in the document, press `ENTER` / `SPACEBAR` / `SHIFT + ENTER` / `TAB` key after typing the address, for instance [`http://www.google.com`](http://www.google.com). Document Editor automatically converts this address to a hyperlink field. The text can be considered as a valid URL if it starts with any of the following.

> `<http://>`<br>
> `<https://>`<br>
> `file:///`<br>
> `www.`<br>
> `mailto:`<br>

Refer to the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/hyperlink-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/hyperlink-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/hyperlink-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/hyperlink-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/hyperlink-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/hyperlink-cs2" %}
{% endif %}

Also Document Editor expose API [`insertHyperlink()`](../api/document-editor/editor/#inserthyperlink)to insert hyperlink.

Refer to the following sample code.

```ts
documenteditor.insertHyperlink('https://www.google.com', 'Google');
```

## Customize screen tip

You can customize the screen tip text for the hyperlink by using below sample code.

```ts
documenteditor.insertHyperlink('https://www.google.com', 'Google', '<<Screen tip text>>');
```

Screen tip text can be modified through UI by using the [Hyperlink dialog](../document-editor/dialog#hyperlink-dialog)

![Add or modify the screen tip text for hyperlinks in a Word document.](images/screentip.png)

## Remove hyperlink

To remove link from hyperlink in the document, press Backspace key at the end of a hyperlink. By removing the link, it will be converted as plain text. You can use ‘removeHyperlink’ method of ‘Editor’ instance if the selection is in hyperlink. Refer to the following example.

```ts
documenteditor.editor.removeHyperlink();
```

## Hyperlink dialog

Document Editor provides dialog support to insert or edit a hyperlink. Refer to the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/dialog-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/dialog-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/dialog-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/dialog-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/dialog-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/dialog-cs16" %}
{% endif %}

You can use the following keyboard shortcut to open the hyperlink dialog if the selection is in hyperlink.

| Key Combination | Description |
|-----------------|-------------|
|Ctrl + K | Open hyperlink dialog that allows you to create or edit hyperlink|

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Hyperlink dialog](../document-editor/dialog#hyperlink-dialog)
