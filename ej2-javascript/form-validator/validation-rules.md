---
layout: post
title: Validation rules in ##Platform_Name## Form validator control | Syncfusion
description: Learn here all about Validation rules in Syncfusion ##Platform_Name## Form validator control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Validation rules 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Validation rules in ##Platform_Name## Form validator control

## Default Rules

The `FormValidator` has following default validation rules, which are used to validate the form.

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `required` | The form input element must have any input values | a or 1 or - |
| `email` | The form input element must have valid `email` format values | `<form@syncfusion.com>` |
| `url` | The form input element must have valid `url` format values | <http://syncfusion.com/> |
| `date` | The form input element must have valid `date` format values | 05/15/2017 |
| `dateIso` | The form input element must have valid `dateISO` format values | 2017-05-15 |
| `number` | The form input element must have valid `number` format values | 1.0 or 1 |
| `digits` | The form input element must have valid `digits` values | 1 |
| `maxLength` | Input value must have less than or equal to `maxLength` character length | if `maxLength: 5`, **check** is valid and **checking** is invalid |
| `minLength` | Input value must have greater than or equal to `minLength` character length | if `minLength: 5`, **testing** is valid and **test** is invalid |
| `rangeLength` | Input value must have value between `rangeLength` character length | if `rangeLength: [4,5]`, **test** is valid and **key** is invalid |
| `range` | Input value must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |
| `max` | Input value must have less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Input value must have greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Input value must have valid `regex` format | if `regex: '^[A-z]+$'`, **a** is valid and **1** is invalid |

> The [`rules`](../api/form-validator#rules) option should map the input element's `name` attribute.
> The `FormValidator` library only validates the mapped input elements.

## Defining Custom Rules

You can also define custom rules in the [`rules`](../api/form-validator#rules) property and validate the form with custom logics.

The custom validation method need to return the boolean value for validating an input.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/form-validator/form-validator2-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/form-validator2-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/form-validator/form-validator2-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/form-validator/form-validator2-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/form-validator2-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-validator/form-validator2-cs4" %}
{% endif %}

## Adding or Removing Rules

After creating `FormValidator` object, you can add more rules to an input element by using [`addRules`](../api/form-validator#addrules)
method and you can also remove an existing rule from the input element by using [`removeRules`](../api/form-validator#removerules) method.

```ts
import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

let options: FormValidatorModel = {
    rules: {
        'user': { required: true },
        'age': { number: true }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);
// Add email rule to user element
formObject.addRules('user', { maxLength: 7 });
// Remove number rule from age element
formObject.removeRules('age', ['number']);
```

## Validating a Form

You can manually trigger validation by calling the [`validate`](../api/form-validator#validate) method of [`FormValidator`](../api/form-validator).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/form-validator/form-validator3-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/form-validator3-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/form-validator/form-validator3-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/form-validator/form-validator3-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/form-validator3-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-validator/form-validator3-cs2" %}
{% endif %}

## Validating a Single Element

The [`validate`](../api/form-validator#validate) method have an optional argument, where you can pass an input element's name attribute to validate its value against the defined rule.

```ts
import {FormValidator, FormValidatorModel} from '@syncfusion/ej2-inputs';

let options: FormValidatorModel = {
    rules: {
        'user': { required: true },
        'age': { number: true }
    }
}
let formObject: FormValidator = new FormValidator('#form-element', options);
// validate user element alone
formObject.validate('user');
```

## HTML5 Form Validation

HTML5 validation is the ability to `validate the user data without relying any scripts`. This is done by using validation attributes on form elements, which allows you to specify rules for a form input like whether a value needs to be filled In the maximum and minimum length of the data, whether it needs to be number, an email address, or something else and pattern that it match. If the entered data follows all the
specified rules, it is considered as valid; if not, it is considered as invalid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/form-validator/html5-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/html5-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/form-validator/html5-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/form-validator/html5-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/form-validator/html5-validation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/form-validator/html5-validation-cs1" %}
{% endif %}
