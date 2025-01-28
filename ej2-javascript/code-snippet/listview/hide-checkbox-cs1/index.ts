import { ListView, SelectEventArgs } from '@syncfusion/ej2-lists';
import { dataSource } from './datasource.ts';

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: dataSource,

    // map the groupBy field with category column
    fields: { tooltip: 'text' },

    headerTitle: 'Mixed Leaf Checkbox Hidden List ',
    showHeader: true,
    showCheckBox: true,
    select: (args: SelectEventArgs) => {
        // Selecting all the e-active elements from the list.
        let normalElements: HTMLElement[] = Array.prototype.slice.call(listviewInstance.element.getElementsByClassName('e-checkbox-hidden'));

        // Looping through all the selected element and removing e-active class
        // to avoid behavior interference  with getSelectedItems method
        normalElements.forEach((element) => {
            element.classList.remove('e-active');
        });

        // Finally adding e-active class to currently selected item except checkbox item.
        // because if it is checkbox item their actions will taken care from the source side itself.
        if (args.item.classList.contains('e-checkbox-hidden')) {
            args.item.classList.add('e-active');
        }
    }
});

//Render initialized ListView
listviewInstance.appendTo("#folderCheckbox");