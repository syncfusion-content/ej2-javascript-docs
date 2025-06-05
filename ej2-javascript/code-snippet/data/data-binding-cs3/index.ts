import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';

let localData: { [key: string]: Object }[] = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
];

let sportsData = new DataManager(localData);

let dropDownListObject: DropDownList = new DropDownList({
  // bind the sports data to dataSource property.
  dataSource: sportsData,
  fields: { text: 'Game', value: 'Id' },
  placeholder:"Select a game"
});

dropDownListObject.appendTo('#ddlelement');
