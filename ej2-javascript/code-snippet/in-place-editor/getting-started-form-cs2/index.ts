


import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let genderData = ['Male', 'Female'];
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Date',
    mode: 'Inline',
    value: new Date('04/12/2018'),
    model: {
        showTodayButton: true,
         placeholder: 'Select date of birth'
    }
});
editObj.appendTo('#dateofbirth');
let editObj1: InPlaceEditor = new InPlaceEditor({
    value: 'Andrew',
    mode: 'Inline',
    model: {
        placeholder: 'Enter your name'
    }
});
editObj1.appendTo('#element');
let editObj2: InPlaceEditor = new InPlaceEditor({
    type: 'DropDownList',
    value: 'Male',
    mode: 'Inline',
    model: {
        dataSource: genderData,
        placeholder: 'Select gender'
    }
});
editObj2.appendTo('#gender');



