---
layout: post
title: Chat window user interface using ListView in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Chat window user interface using ListView in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chat window user interface using ListView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Chat window user interface using ##Platform_Name## ListView control

ListView can be customized to function as a chat window. To achieve this, use the ListView [template](../../api/list-view/#template) property alongside the [Avatar](../../avatar/getting-started) control.

* The ListView template property is used to showcase the ListView as chat window.
* Avatar control is used to design the image of contact person.

Refer to the template code snippet below for a chat window implementation:
```ts
let template =
  '<div class="settings">' +
  '${if(chat!=="receiver")}' +
  '<div id="content">' +
  '<div class="name">${text}</div>' +
  '<div id="info">${contact}</div></div>' +
  '${if(avatar!=="")}' +
  '<div id="image"><span class="e-avatar img1 e-avatar-circle">${avatar}</span></div>' +
  "${else}" +
  '<div id="image"><span class="${pic} img1 e-avatar e-avatar-circle"> </span></div>' +
  "${/if}" +
  "${else}" +
  '${if(avatar!=="")}' +
  '<div id="image2"><span class="e-avatar img2 e-avatar-circle">${avatar}</span></div>' +
  "${else}" +
  '<div id="image2"><span class="${pic} img2 e-avatar e-avatar-circle"> </span></div>' +
  "${/if}" +
  '<div id="content1">' +
  '<div class="name1">${text}</div>' +
  '<div id="info1">${contact}</div>' +
  "</div>" +
  "${/if}" +
  "</div>";
```

## Chat order in template

The ListView template is rendered with list items based on sender and receiver information from the ListView's data source.

## Adding messages to chat window

    * Use textbox to get message from user.
    * Add the textbox message to ListView dataSource using [addItem](../../api/list-view/#additem) method.

```ts
document.getElementById("btn").addEventListener("click", e => {
  var value = document.getElementById("name").value;
  document
    .getElementById("List")
    .ej2_instances[0].addItem([
      {
        text: "Amenda",
        contact: value,
        id: "2",
        avatar: "A",
        pic: "",
        chat: "receiver"
      }
    ]);
});
```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/chat-window-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/chat-window-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/chat-window-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/chat-window-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/chat-window-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/chat-window-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/chat-window-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/chat-window-cs1" %}
{% endif %}