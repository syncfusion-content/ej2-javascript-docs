---
layout: post
title: Validate slider using FormValidator in ##Platform_Name## Range Slider control | Syncfusion
description: Learn here all about validating the slider using FormValidator in the Syncfusion ##Platform_Name## Range Slider control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Validate slider using formvalidator
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Validate slider using FormValidator in ##Platform_Name## Range Slider control

The Range Slider control can be validated using our [FormValidator](../../form-validator/). The following steps walk through the slider validation process.

* Render the Range Slider control inside a form.
* Bind the [changed](../../api/slider/#changed) event in the Range Slider to validate the slider value when it changes.
* Initialize and render FormValidator for the form using the form ID.

{% if page.publishingplatform == "typescript" %}

```ts

// Initialize Form validation
let formObj: FormValidator;
formObj = new FormValidator("#formId", options);

```
{% elsif page.publishingplatform == "javascript" %}

```js

// Initialize Form validation
let formObj;
formObj = new FormValidator("#formId", options);

```

{% endif %}

* Set the required property in the FormValidator [rules](../../api/form-validator/#rules) collection. Here, the [min](../../api/slider/#min) property of slider that sets the minimum value in the Range Slider control is set, and it has hidden input as enable `validateHidden` property is set to true.

{% if page.publishingplatform == "typescript" %}

```ts

// Slider element
<div id="default" name="slider"></div>

// sets required property in the FormValidator rules collection
let options: FormValidatorModel = {
  rules: {
    'default': {
      validateHidden: true,
      min: [6, "You must select value greater than 5"]
    }
  }
};

```

{% elsif page.publishingplatform == "javascript" %}

```js

// Slider element
<div id="default" name="slider"></div>

// sets required property in the FormValidator rules collection
let options = {
  rules: {
    'default': {
      validateHidden: true,
      min: [6, "You must select value greater than 5"]
    }
  }
};

```

{% endif %}

> Form validation is done either by ID or name value of the Range Slider control. Above ID of the slider is used to validate it.

Using slider name: Render slider with name attribute. In the following code snippet, name attribute value of slider is used for form validation.

{% if page.publishingplatform == "typescript" %}

```ts

// Slider element
<div id="default" name="slider"></div>

// sets required property in the FormValidator rules collection
let options: FormValidatorModel = {
  rules: {
    'slider': {
      validateHidden: true,
      min: [6, "You must select value greater than 5"]
    }
  }
};

```

{% elsif page.publishingplatform == "javascript" %}

```js

// Slider element
<div id="default" name="slider"></div>

// sets required property in the FormValidator rules collection
let options = {
  rules: {
    'slider': {
      validateHidden: true,
      min: [6, "You must select value greater than 5"]
    }
  }
};

```

{% endif %}

* Validate the form using [validate](../../api/form-validator/#validate) method, and it validates the slider value with the defined rules collection and returns the result. If user selects the value less than the minimum value, form will not submit.

```ts

formObj.validate();

```

* Slider validation can be done during value changes in slider. Refer to the following code snippet.

{% if page.publishingplatform == "typescript" %}

```ts

// change event handler for slider
function onChanged(args: any) {
  formObj.validate();
}

```

{% elsif page.publishingplatform == "javascript" %}

```js

// change event handler for slider
function onChanged(args) {
  formObj.validate();
}

```

{% endif %}

The `FormValidator` has following default validation rules, which are used to validate the Range Slider control.

| Rules | Description | Example |
| ------------- | ------------- | ------------- |
| `max` | Range Slider control must have value less than or equal to `max` number | if `max: 3`, **3** is valid and **4** is invalid |
| `min` | Range Slider control must have value greater than or equal to `min` number | if `min: 4`, **5** is valid and **2** is invalid |
| `regex` | Range Slider control must have valid value in `regex` format | if `regex: '/4/`, **4** is valid and **1** is invalid |
| `range` | Range Slider control must have value between `range` number | if `range: [4,5]`, **4** is valid and **6** is invalid |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/slider/form-validation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/form-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/form-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/form-validation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/slider/form-validation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/slider/form-validation-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/slider/form-validation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/slider/form-validation-cs1" %}
{% endif %}