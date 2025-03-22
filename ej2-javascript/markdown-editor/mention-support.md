---
layout: post
title: Mention Support in ##Platform_Name## Markdown Editor control | Syncfusion
description: Learn here all about Mention Support in Syncfusion ##Platform_Name## Markdown Editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Mention Support
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mention Support in ##Platform_Name## Markdown Editor Control

By integrating the [Mention](https://helpej2.syncfusion.com/documentation/mention/getting-started) control with the Markdown Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving both efficiency and accuracy.

## Enabling Mention in ##Platform_Name## Markdown Editor

To enable the Mention functionality within the Markdown Editor, set the [target](https://helpej2.syncfusion.com/documentation/api/mention#target)  property of the Mention control to the ID of the textarea element inside the editor. When specifying the target, ensure that you append the suffix `_editable-content` to the ID. This configuration allows users to mention or tag others from the suggested list while editing text.

When a user types the `@` symbol followed by a character, the Markdown Editor displays a list of suggestions. Users can select an item from the list by either clicking on it or typing the desired name.

## Configuring Mention Properties

The Syncfusion Mention control provides several customizable properties to enhance the tagging experience:

* [allowSpaces](https://helpej2.syncfusion.com/documentation/api/mention#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://helpej2.syncfusion.com/documentation/api/mention#suggestioncount) - Defines the maximum number of items displayed in the suggestion list.
* [itemTemplate](https://helpej2.syncfusion.com/documentation/api/mention#itemtemplate) - Customizes the appearance of items in the suggestion list.

## Example: Implementing Mention in Markdown Editor

The following example demonstrates how to enable Mention support in the Markdown Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/markdown-editor/markdown-mention-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/markdown-mention-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-mention-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/markdown-editor/markdown-mention-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/markdown-editor/markdown-mention-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-mention-cs1" %}
{% endif %}