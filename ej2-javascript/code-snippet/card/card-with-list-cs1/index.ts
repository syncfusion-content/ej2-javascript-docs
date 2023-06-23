

import { ListView } from '@syncfusion/ej2-lists';

//Define the array of JSON
let todoList: { [key: string]: Object }[] = [
    {  todoList: 'Pay Bills' },
    {  todoList: 'Call Chris' },
    {  todoList: 'Meet Andrew' },
    {  todoList: 'Visit Manager' },
    {  todoList: 'Customer Meeting' },
];

//Initialize ListView component
let listviewInstance: ListView = new ListView({
    dataSource: todoList,
    //Map the appropriate columns to fields property
    fields: { text: 'todoList' },
    showCheckBox: true,
});

//Render initialized ListView
listviewInstance.appendTo("#element");



