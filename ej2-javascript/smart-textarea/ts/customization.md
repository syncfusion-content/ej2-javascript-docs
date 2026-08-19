---
layout: post
title: Customization in ##Platform_Name## Smart TextArea | Syncfusion
description: Control how AI suggestions appear in the ##Platform_Name## Smart TextArea by toggling the ShowSuggestionOnPopup property to display them in a popup or inline.
platform: ej2-javascript
control: Customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customization in ##Platform_Name## Smart TextArea

The [ShowSuggestionOnPopup](https://ej2.syncfusion.com/documentation/api/smart-textarea#showsuggestiononpopup) property in Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smart TextArea allows you to control how text suggestions are displayed to the users.

* If `ShowSuggestionOnPopup` is `Enable`, suggestions displayed in the pop-up window

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let textareaObj: SmartTextArea = new SmartTextArea({
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
{% highlight ts tabtitle="app.ts" %}

let textareaObj: SmartTextArea = new SmartTextArea({
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