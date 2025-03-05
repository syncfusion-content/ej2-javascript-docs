import { ListView, SelectedCollection } from '@syncfusion/ej2-lists';
import { Button } from '@syncfusion/ej2-buttons';
//define the array of string
let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
    { text: 'Jaguar XJ220', id: 'list-08' }
];

//Initialize the ListView control
let listviewInstance: ListView = new ListView({
    //set the data to the dataSource property
    dataSource: data,

    //Enable check box
    showCheckBox: true,
});

//Render the initialized ListView
listviewInstance.appendTo("#element");

let button: Button = new Button();
button.appendTo("#btn");
(document.getElementById('btn') as HTMLElement).addEventListener('click', () => {
    const selectedItem =
        listviewInstance.getSelectedItems() as SelectedCollection;
    const valElement = document.getElementById('val');

    if (!valElement) return;

    valElement.innerHTML = '';

    // Create table rows in a fragment to minimize reflow
    const fragment = document.createDocumentFragment();

    // Create header row
    const headerRow = document.createElement('tr');
    ['Text', 'Id'].forEach((text) => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    fragment.appendChild(headerRow);

    // Populate table rows
    (selectedItem.data as { [key: string]: any }[]).forEach((item, index) => {
        const row = document.createElement('tr');
        row.id = index.toString();
        row.innerHTML = `<td>${selectedItem.text[index]}</td><td>${item.id}</td>`;
        fragment.appendChild(row);
    });

    // Append all elements at once
    valElement.appendChild(fragment);
});
