---
title: "Validation"
component: "Textbox"
description: "Covers how to apply different validation styles to the text box (input) control such as error, warning, and success with a ripple effect."
---

# Validation

The TextBox supports three types of validation styles namely `error`, `warning`, and `success`. These states are
enabled by adding corresponding classes `.e-error`, `.e-warning`, or `.e-success` to the input parent element.

{% tab template= "textbox/icon-samples", sourceFiles="index.html,index.ts,index.css", es5Template="icon-template" %}

```html

   <div class="e-input-group e-warning">
     <input class="e-input" type="text" placeholder="Input with warning" />
   </div>

   <div class="e-input-group e-error">
     <input class="e-input" type="text" placeholder="Input with error" />
   </div>

   <div class="e-input-group e-success">
     <input class="e-input" type="text" placeholder="Input with success" />
   </div>

```

{% endtab %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-float-input.e-control-wrapper .e-float-text::after</b> class.

{% tab template= "textbox/asterisk", sourceFiles="index.html,index.ts,asterisk.css", isDefaultActive=true, es5Template="icon-template" %}

```html
        <input class="e-input" type="text" placeholder="Enter Date" floatLabelType="Auto"/>
        <div class="e-input-group">
            <input class="e-input" name='input' type="text" placeholder="Enter Date" floatLabelType="Auto"/>
            <span class="e-input-group-icon e-input-popup-date"></span>
        </div>

```

{% endtab %}
