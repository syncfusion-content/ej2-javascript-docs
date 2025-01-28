---
layout: post
title: Customize ListView with dynamic tags in ##Platform_Name## ListView control | Syncfusion
description: Learn here all about Customize ListView with dynamic tags in Syncfusion ##Platform_Name## ListView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize ListView with dynamic tags
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView with dynamic tags in ##Platform_Name## ListView control

You can customize the ListView items using the [`template`](../../api/list-view/#template) property. Here, dynamic tags are added or removed in the list item from another ListView. Refer to the following steps to achieve this.

* Render the ListView with a data source, and add a button element with each list item of the ListView on the [`actionComplete`](../../api/list-view/#actioncomplete) event. Refer to the following code sample of the actionComplete event.

```ts

// The actionComplete event for first ListView to add the button

function addButton() {
    let buttonObj: { [key: string]: Object } = { obj: Button, prop: { iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round' } };
    let ele: HTMLCollection = document.getElementsByClassName("e-but");
    for (let i: number = 0; i < ele.length; i++) {
        buttonObj.obj = new Button(buttonObj.prop);
        (buttonObj.obj as Button).appendTo(ele[i] as HTMLElement);
    }
}

```

* Initialize a dynamic ListView with the required properties that hold the tags of the parent ListView, and bind the [`select`](../../api/list-view/#select) event (triggers when a list item is selected) to add the selected item value as tags into the parent ListView. Refer to the following code sample.

```ts

//Select the event that is is rendered inside dialog for ListView
function addTag(e: SelectEventArgs) {
    let listTag: HTMLSpanElement = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem: HTMLSpanElement = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem: HTMLSpanElement = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag: HTMLSpanElement = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    listviewInstance.element.querySelector('.e-active').appendChild(tag);
}

```

* Render the dialog control with empty content and append the created dynamic ListView object to the dialog on the [`created`](../../api/dialog/#created) event.

* Bind the click event to the button icon (+) to update the ListView data source with tags, and open the dialog with this dynamic ListView. Refer to the following code sample.

```ts

//Method to hide/show the dialog and update the ListView data source
function renderDialog(id: string): void {
    if (document.getElementsByClassName('e-popup-open').length != 0) {
        dialog.hide();
    }
    else {
        listObj.dataSource = datasource[id];
        listObj.dataBind();
        dialog.show();
    }

}

```

* Bind the click event with added dynamic tags to remove them. Refer to the following code sample.

```ts

//Method to remove the list item
function removeTag() {
    this.parentNode.parentNode.remove();
}

```

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/tags-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/tags-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/tags-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/tags-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/tags-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/tags-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/listview/tags-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/tags-cs1" %}
{% endif %}