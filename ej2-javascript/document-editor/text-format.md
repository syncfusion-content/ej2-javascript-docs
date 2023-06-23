---
layout: post
title: Text format in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Text format in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Text format 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Text format in ##Platform_Name## Document editor control

Document Editor supports several formatting options for text like bold, italic, font color, highlight color, and more. This section describes how to modify the formatting for selected text in detail.

## Bold

The bold formatting for selected text can be get or set by using the following sample code.

```ts

//Gets the value for bold formatting of selected text.
let bold : boolean = documenteditor.selection.characterFormat.bold;
//Sets bold formatting for selected text.
documenteditor.selection.characterFormat.bold = true;

```

You can toggle the bold formatting based on existing value at selection. Refer to the following sample code.

```ts
documenteditor.editor.toggleBold();
```

## Italic

The Italic formatting for selected text can be get or set by using the following sample code.

```ts
//Gets the value for italic formatting of selected text.
let italic : boolean = documenteditor.selection.characterFormat.italic;
//Sets italic formatting for selected text.
documenteditor.selection.characterFormat.italic = true|false;
```

You can toggle the Italic formatting based on existing value at selection. Refer to the following sample code.

```ts
documenteditor.editor.toggleItalic();
```

## Underline property

The underline style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for underline formatting of selected text.
let underline : Underline = documenteditor.selection.characterFormat.underline;
//Sets underline formatting for selected text.
documenteditor.selection.characterFormat.underline = 'Single' | 'None';
```

You can toggle the underline style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
documenteditor.editor.toggleUnderline('Single');
```

## Strikethrough property

The strikethrough style for selected text can be get or set by using the following sample code.

```ts
//Gets the value for strikethrough formatting of selected text.
let strikethrough : Strikethrough = documenteditor.selection.characterFormat.strikethrough;
//Sets strikethrough formatting for selected text.
documenteditor.selection.characterFormat.strikethrough = 'Single' | 'Normal';
```

You can toggle the strikethrough style of selected text based on existing value at selection by specifying a value. Refer to the following sample code.

```ts
documenteditor.editor.toggleStrikethrough();
```

## Superscript property

The selected text can be made superscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment = 'Superscript';
```

Toggle the selected text as superscript or normal using the following sample code.

```ts
documenteditor.editor.toggleSuperscript();
```

## Subscript property

The selected text can be made subscript by using the following sample code.

```ts
//Gets the value for baselineAlignment formatting of selected text.
let baselineAlignment : BaselineAlignment = documenteditor.selection.characterFormat.baselineAlignment;
//Sets baselineAlignment formatting for selected text.
documenteditor.selection.characterFormat.baselineAlignment = 'Subscript';
```

Toggle the selected text as subscript or normal using the following sample code.

```ts
documenteditor.editor.toggleSubscript();
```

You can make a subscript or superscript text as normal using the following code.

```ts
documenteditor.selection.characterFormat.baselineAlignment = 'Normal';
```

## Size

The size of selected text can be get or set using the following code.

```ts
//Gets the value for fontSize formatting of selected text.
let fontSize : number = documenteditor.selection.characterFormat.fontSize;
//Sets fontSize formatting for selected text.
documenteditor.selection.characterFormat.fontSize = 32;
```

## Color

The color of selected text can be get or set using the following code.

```ts
//Gets the value for fontColor formatting of selected text.
let fontColor : string = documenteditor.selection.characterFormat.fontColor;
//Sets fontColor formatting for selected text.
documenteditor.selection.characterFormat.fontColor = 'Pink';
documenteditor.selection.characterFormat.fontColor = '#FFC0CB';
```

## Font

The font style of selected text can be get or set using the following sample code.

```ts
//Gets the value for fontFamily formatting of selected text.
let baselineAlignment : string = documenteditor.selection.characterFormat.fontFamily;
//Sets fontFamily formatting for selected text.
documenteditor.selection.characterFormat.fontFamily = 'Arial';
```

## Highlight color

The highlight color of the selected text can be get or set using the following sample code.

```ts
//Gets the value for highlightColor formatting of selected text.
let highlightColor : HighlightColor = documenteditor.selection.characterFormat.highlightColor;
//Sets highlightColor formatting for selected text.
documenteditor.selection.characterFormat.highlightColor = 'Pink';
documenteditor.selection.characterFormat.highlightColor = '#FFC0CB';
```

## Toolbar with options for text formatting

Refer to the following example.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/text-format-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/text-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/text-format-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/text-format-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/text-format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/text-format-cs1" %}
{% endif %}

## See Also

* [Feature modules](../document-editor/feature-module/)
* [Font dialog](../document-editor/dialog#font-dialog)
* [Keyboard shortcuts](../document-editor/keyboard-shortcut#text-formatting/)