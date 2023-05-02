


import { ComboBox } from '@syncfusion/ej2-dropdowns';
  // create local data
    let data: string[] = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'];
    // initialize ComboBox component
    let comboObj: ComboBox = new ComboBox({
        //set the local data to dataSource property
        dataSource: data,
        // set the placeholder to ComboBox input element
        placeholder: 'e.g: aero',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true,
        // set true for enable the filtering support.
        allowFiltering: true
    });
    comboObj.appendTo('#comboelement');



