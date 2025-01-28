import { ListView } from '@syncfusion/ej2-lists';
import { continent } from './datasource.ts';

//Initialize ListView control
let listviewInstance: ListView = new ListView({
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