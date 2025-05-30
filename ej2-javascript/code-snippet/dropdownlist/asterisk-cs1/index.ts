

import { DropDownList } from '@syncfusion/ej2-dropdowns';

// defined the array of data
let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    // set placeholder to DropDownList input element
    placeholder: "Select a game" ,

    floatLabelType: "Auto"
});

// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');


