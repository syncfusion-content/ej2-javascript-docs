import { FormRenderer } from '@syncfusion/ej2-formrenderer';

// initialize Form Renderer control
let formRenderer: FormRenderer = new FormRenderer({
    schema: {
        "version": "0.1.0",
        "properties": {
            "emailAddress": {
                "id": "textbox_1785491685456_167",
                "name": "emailAddress",
                "type": "string",
                "label": "Email Address",
                "textboxType": "email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "required": true,
                "minLength": 6,
                "widget": "textbox"
            },
            "rememberMe": {
                "id": "checkbox_1785491685456_262",
                "name": "rememberMe",
                "type": "boolean",
                "label": "Remember Me",
                "widget": "checkbox"
            },
            "reset": {
                "id": "reset_button_initial",
                "name": "defaultFormreset",
                "type": "button",
                "label": "Reset",
                "buttonType": "reset",
                "widget": "button",
                "style": "primary",
                "disabled": false
            },
                "submit": {
                "id": "submit_button_initial",
                "name": "defaultFormsubmit",
                "type": "button",
                "label": "Submit",
                "buttonType": "submit",
                "widget": "button",
                "style": "primary",
                "disabled": false
            }
        },
        "layout": [
            { "type": "field", "propertyId": "emailAddress" },
            { "type": "field", "propertyId": "password" },
            { "type": "field", "propertyId": "rememberMe" },
            { "type": "field", "propertyId": "reset" },
            { "type": "field", "propertyId": "submit" }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    }
});

// Render initialized Form Renderer.
formRenderer.appendTo('#formrenderer');