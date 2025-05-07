---
layout: post
title: Suggestion Customization with ##Platform_Name## Smart Textarea control | Syncfusion
description:  Checkout and learn here all about Suggestion Customization with ##Platform_Name## Smart Textarea control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Appearance of Suggestions 

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/javascript/documentation/api/smart-textarea/#showsuggestiononpopup) property in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea allows you to control how text suggestions are displayed to the users.

* If `ShowSuggestionOnPopup` is `Enable`, suggestions displayed in the pop-up window

{% tabs %}
{% highlight js tabtitle="app.js" %}

let textareaObj = new ej.inputs.SmartTextArea({
    placeholder: 'Enter your queries here',
    rows: 3,
    cols: 35,
    userRole: 'Employee communicating with internal team',
    aiSuggestionHandler: serverAIRequest,
    ShowSuggestionOnPopup: 'Enable'
});
textareaObj.appendTo('#smart-textarea');

{% endhighlight %}
{% endtabs %}

![Suggestion on popup](./images/smart-textarea-popup.gif)

* If `ShowSuggestionOnPopup` is `false`, suggestions displayed inline.

{% tabs %}
{% highlight js tabtitle="app.js" %}

let textareaObj = new ej.inputs.SmartTextArea({
    placeholder: 'Enter your queries here',
    rows: 3,
    cols: 35,
    userRole: 'Employee communicating with internal team',
    aiSuggestionHandler: serverAIRequest,
    ShowSuggestionOnPopup: 'Disable'
});
textareaObj.appendTo('#smart-textarea');

{% endhighlight %}
{% endtabs %}

![Suggestion inline](./images/smart-textarea-inline.gif)

By default `showSuggestionOnPopup` is `None`.

## See also

* [Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea](./getting-started)