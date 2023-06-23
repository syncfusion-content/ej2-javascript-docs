
// To get the all input fields and its container.

let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

// Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].addEventListener("focus", function () {
        this.parentNode.classList.add('e-input-focus')
    });
    inputElement[i].addEventListener("blur", function () {
        this.parentNode.classList.remove('e-input-focus')
    });
}

// To get the all icon elements on the input field.

var inputIcon = document.querySelectorAll('.e-input-group-icon');

// Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

for (let i = 0; i < inputIcon.length; i++) {
    inputIcon[i].addEventListener('mousedown', function () {
        this.classList.add('e-input-btn-ripple');
    });
    inputIcon[i].addEventListener('mouseup', function () {
        var element = this;
        setTimeout(function () {
            element.classList.remove('e-input-btn-ripple');
        }, 500);
    });
}


import { Input, InputObject } from  '@syncfusion/ej2-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let inputObj: InputObject;

let element: HTMLInputElement = <HTMLInputElement>document.createElement('input');
document.getElementById('input-container').appendChild(element);
Input.createInput({
    element: element,
    floatLabelType: "Auto",
    properties:{
        placeholder:'Enter Name'
    }
});

let element2: HTMLInputElement = <HTMLInputElement>document.createElement('input');
document.getElementById('input-container-01').appendChild(element2);
Input.createInput({
    element: element2,
    floatLabelType: "Always",
    properties:{
        placeholder:'Enter Name'
    }
});

let element3: HTMLInputElement = <HTMLInputElement>document.createElement('input');
document.getElementById('input-container-02').appendChild(element3);
Input.createInput({
    element: element3,
    floatLabelType: "Never",
    properties:{
        placeholder:'Enter Name'
    }
});

// Render float label TextBox with icon

let element4: HTMLInputElement = <HTMLInputElement>document.createElement('input');
document.getElementById('input-container-03').appendChild(element4);
Input.createInput({
    element: element4,
    floatLabelType: "Auto",
    buttons: ['e-input-group-icon e-input-down'],
    properties:{
        placeholder:'Enter Value'
    }
});



