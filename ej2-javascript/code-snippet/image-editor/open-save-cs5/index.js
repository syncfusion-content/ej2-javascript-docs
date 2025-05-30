let resultData = [
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\",
    hasChild: true,
    id: "0",
    isFile: false,
    name: "Pictures",
    parentId: "0",
    size: 228465,
    type: "folder"
  },
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\Pictures\\",
    hasChild: false,
    id: '1',
    isFile: true,
    name: "Flower",
    parentId: '0',
    size: 69632,
    type: ".png",
    imageUrl: "flower.png"
  },
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\Pictures\\",
    hasChild: false,
    id: '2',
    isFile: true,
    name: "Bridge",
    parentId: '0',
    size: 48951,
    type: ".png",
    imageUrl: "bridge.png"
  }
];

var imageEditorObj = new ej.imageeditor.ImageEditor({ width: '550px', height: '350px' }, '#imageeditor');

function fileOpen(args) {
  var file = args.fileDetails;
  if (file.isFile && file.imageUrl) {
    args.cancel = true;
    imageEditorObj.open(file.imageUrl);
  }
}

const fileObject = new ej.filemanager.FileManager({ fileSystemData: resultData, height: '200px', fileOpen: fileOpen }, '#filemanager');
