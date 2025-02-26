---
layout: post
title: Mentions in ##Platform_Name## Rich text editor control | Syncfusion
description: Learn here all about Mentions in Syncfusion ##Platform_Name## Rich text editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Mentions
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mentions in ##Platform_Name## Rich text editor control

By integrating the [Mention](https://ej2.syncfusion.com/documentation/mention/getting-started) control with a Rich Text Editor, users can effortlessly mention or tag other users or objects from a suggested list. This eliminates the need to manually type out names or identifying information, improving efficiency and accuracy.

Use the [target](https://ej2.syncfusion.com/documentation/api/mention/#target) property of the Mention control to specify the `ID` of the content editable div element within the Rich Text Editor. When setting the target, make sure to append the suffix `_rte-edit-view` to the ID. This allows you to enable the Mention functionality within the Rich Text Editor, so that users can mention or tag other users or objects from the suggested list while editing the text.

When the user types the `@` symbol followed by a character, the Rich Text Editor displays a list of suggestions. Users can then select an item from the list by:

* Clicking on it
* Typing the name of the item they want to tag

In the following sample, we configured the following properties with popup dimensions.

* [allowSpaces](https://ej2.syncfusion.com/documentation/api/mention/#allowspaces) - Allow to continue search action if user enter space after mention character while searching.
* [suggestionCount](https://ej2.syncfusion.com/documentation/api/mention/#suggestioncount) - The maximum number of items that will be displayed in the suggestion list.
* [itemTemplate](https://ej2.syncfusion.com/documentation/api/mention/#itemtemplate) - Used to display the customized appearance in suggestion list.


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor/mention-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/mention-integration-cs1" %}
{% endif %}

> [View Sample](https://ej2.syncfusion.com/demos/#/bootstrap5/rich-text-editor/mention-integration.html)


## See Also

* [Getting Started with Mention](https://ej2.syncfusion.com/documentation/mention/getting-started)