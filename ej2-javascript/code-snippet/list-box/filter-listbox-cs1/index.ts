


import { ListBox } from '@syncfusion/ej2-dropdowns';

// define the array of object
let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom' },
    { text: 'Bugatti Chiron' },
    { text: 'Bugatti Veyron Super Sport' },
    { text: 'SSC Ultimate Aero' },
    { text: 'Koenigsegg CCR' },
    { text: 'McLaren F1' },
    { text: 'Aston Martin One- 77' },
    { text: 'Jaguar XJ220' },
    { text: 'McLaren P1' },
    { text: 'Ferrari LaFerrari' },
];

// initialize ListBox component
let listObj: ListBox = new ListBox({
    //set the data to dataSource property
    dataSource: data,
});
listObj.appendTo('#listbox');

document.getElementById('filterTextBox').addEventListener('input', function(e) {
    listObj.filter((data as any).info, new Query().where('text', 'contains', e.target.value, true));
});



