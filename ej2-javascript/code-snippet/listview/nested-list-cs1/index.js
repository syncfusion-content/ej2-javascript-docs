import { continent } from './es5-datasource.js';

//Initialize ListView control
var listviewInstance = new ej.lists.ListView({
    //set the data to datasource property
    dataSource: continent,
    // map the groupBy field with category column
    fields: { tooltip: 'text' },
    headerTitle: 'Continent',
    showHeader: true,
    animation: { duration: 0 }
});
//Render initialized ListView
listviewInstance.appendTo("#element");