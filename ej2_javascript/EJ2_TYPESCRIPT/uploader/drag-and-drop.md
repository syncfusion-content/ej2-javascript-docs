# Drag and drop

The uploader component allows you to drag and drop the files to upload. You can drag the files from file explorer and drop into the drop area. By default, the uploader component act as drop area element. The drop area gets highlighted when you drag the files over drop area.

## Custom drop area

The uploader component allows you to set external target element as drop area using the [dropArea](api-uploader.html?lang=typescript#droparea) property. The element can be represented as HTML element or element’s id.

{% tab template="uploader/drop-area", es5Template="customdrop-template", sourceFiles="app.ts,index.html,index.css" %}

```typescript
import { Uploader } from '@syncfusion/ej2-inputs';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    autoUpload: false,
    dropArea: document.getElementById('droparea')
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');
```

{% endtab %}

## Customize drop area

You can customize the appearance of drop area by overriding the default drop area styles. The class “” and “” is available to handle this customization.

{% tab template="uploader/customize-drop", es5Template="customize-template", sourceFiles="app.ts,index.html,index.css" %}

```typescript
import { Uploader } from '@syncfusion/ej2-inputs';
// initialize Uploader component
let uploadObject: Uploader = new Uploader({
    asyncSettings: {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    },
    dropArea: document.getElementById('droparea')
});
// render initialized Uploader
uploadObject.appendTo('#fileupload');

document.getElementById('browse').onclick = function() {
    document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    return false;
}
```

{% endtab %}
