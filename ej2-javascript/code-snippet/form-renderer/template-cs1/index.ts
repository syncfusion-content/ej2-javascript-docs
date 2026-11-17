import { FormRenderer } from '@syncfusion/ej2-form-renderer';

// Initialize Form Renderer control.
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
                "placeholder": "Enter you email",
                "required": true,
                "widget": "textbox"
            },
            "password": {
                "id": "textbox_1785491685456_537",
                "name": "password",
                "type": "string",
                "label": "Password",
                "textboxType": "password",
                "placeholder": "Enter your Password",
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
            {
                "type": "field",
                "propertyId": "emailAddress"
            },
            {
                "type": "field",
                "propertyId": "password"
            },
            {
                "type": "field",
                "propertyId": "rememberMe"
            },
            {
                "type": "field",
                "propertyId": "submit"
            }
        ],
        "settings": {
            "name": "Untitled Form"
        }
    },
    customWidgetSettings: [ { type: 'textbox', template: inputTemplate } ]
});

// Custom template for input field
function inputTemplate(data: any) {
  const input = document.createElement('input');
  input.type = data.fieldData.textboxType;
  input.id = data.fieldData.id;
  input.name = data.fieldData.name;
  input.placeholder = data.fieldData.placeholder;
  input.className = 'custom-input';
  input.addEventListener('change', (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    formRenderer.setFieldValue(data.fieldData.id, value);
  });
  return input;
}

formRenderer.appendTo('#formrenderer');