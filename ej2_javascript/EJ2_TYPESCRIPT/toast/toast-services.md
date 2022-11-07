---
title: "Toast Utility Services"
component: "Toast"
description: "This section explains about the Toast utility where the toast can be shown anywhere."
---

# Toast Utility Services

The Toast component provides a built-in utility function to render the toast with minimal code. The utility function will render the toast without the need of rendering the container element in the DOM where the toast is appended. So that, the toast can now be rendered on the go. The following are the option to render the toast using the utility function.

## Show Toast with predefined types

The Toast component support 4 types of predefined toast with essential colors for various situations which can be shown using the `ToastUtility.show` by just defining the type of the toast without defining any class names. The following options are used as an argument on calling the utility function for predefined types:

| Options   | Description |
|-----------|-------------|
| [content](../api/toast/#content) | Specifies the content that can be displayed on the Toast. |
| type | Specifies the type of the predefined Toasts. The 4 types of predefined toasts are `Information`, `Success`, `Error`, `Warning` |
| [timeOut](../api/toast/#timeOut) | Specifies the Toast display time duration on the page in milliseconds. Once the time expires, Toast message will be removed. Setting 0 as a time out value displays the Toast on the page until the user closes it manually. |

{% tab template="toast/typeUtility", es5Template="es5_type_utility", isDefaultActive=true, sourceFiles="index.ts,index.html"  %}

```typescript
import { ToastUtility, Toast } from '@syncfusion/ej2-notifications';

let toastObj: Toast;
document.getElementById('info_Toast').onclick = function () {
    toastObj = ToastUtility.show('Please read the comments carefully', 'Information', 20000);
};
document.getElementById('success_Toast').onclick = function () {
    toastObj = ToastUtility.show('Your message has been sent successfully', 'Success', 20000);
};
document.getElementById('error_Toast').onclick = function () {
    toastObj = ToastUtility.show('A problem has been occurred while submitting the data', 'Error', 20000);
};
document.getElementById('warning_Toast').onclick = function () {
    toastObj = ToastUtility.show('There was a problem with your network connection', 'Warning', 20000);
};
document.getElementById('hide_Toast').onclick = function () {
   toastObj.hide('All');
};

```

{% endtab %}

## Show Toast with ToastModel

The utility function can be called using the [ToastModel](../api/toast/toastModel/) as argument to show the toast where all the properties in the `ToastModel` like any events, position, close icon, action buttons, etc. can be used in the `ToastUtility.show`.

{% tab template="toast/toastModelUtility", es5Template="es5_toastModel_utility", isDefaultActive=true, sourceFiles="index.ts,index.html"  %}

```typescript
import { ToastUtility, Toast } from '@syncfusion/ej2-notifications';

let toastObj: Toast;
document.getElementById('show_Toast').onclick = (): void => {
    toastObj = ToastUtility.show({
        title: 'Toast Title',
        content: 'Toast shown using utility function with ToastModel',
        timeOut: 20000,
        position: { X: 'Right', Y: 'Bottom' },
        showCloseButton: true,
        click: toastClick,
        buttons:  [{
            model: { content: 'Close' }, click: toastClose
        }]
    });
};

function toastClick() {
    console.log('Toast click event triggered');
}

function toastClose() {
    toastObj.hide();
}

```

{% endtab %}
