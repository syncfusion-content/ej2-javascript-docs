import { dataSource } from './es5-datasource.js';

//Initialize ListView control
var listviewInstance = new ej.lists.ListView({
    //set the data to datasource property
    dataSource: dataSource,

    // map the groupBy field with category column
    fields: {
        tooltip: 'text'
    },

    headerTitle: 'Mixed Leaf Checkbox Hidden List ',
    showHeader: true,
    showCheckBox: true,
    select: onSelect
});
listviewInstance.appendTo('#folderCheckbox');

function onSelect(args) {
    // Selecting all the e-active elements from the list.
    var normalElements = Array.prototype.slice.call(listviewInstance.curUL.getElementsByClassName('e-checkbox-hidden'));

    // Looping through all the selected element and removing e-active class
    // to avoid behaviour interference  with getSelectedItems method
    normalElements.forEach((element) => {
        element.classList.remove('e-active');
    });

    // Finally adding e-active class to currently selected item except checkbox item.
    // because if it is checkbox item their actions will taken care from the source side itself.
    if (args.item.classList.contains('e-checkbox-hidden')) {
        args.item.classList.add('e-active');
    }
}