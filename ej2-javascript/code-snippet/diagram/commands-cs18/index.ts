import { Diagram, Keys, KeyModifiers } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram(
  {
    width: '700px',
    height: '350px',
    scrollSettings: { scrollLimit: 'Infinity' },
    nodes: [
      {
        id: 'node1',
        offsetX: 100,
        offsetY: 100,
        width: 70,
        height: 40,
        style: { fill: '#64abbb' },
      },
    ],
    commandManager: {
      commands: [
        {
          //Preventing default cut command
          name: 'cut',
          canExecute: function () {
            return false;
          },
          execute: null,
          gesture: {
            key: Keys.X,
            keyModifiers: KeyModifiers.Control,
          },
        },
        {
          //Preventing default delete command
          name: 'delete',
          canExecute: function () {
            return false;
          },
          execute: null,
          gesture: {
            key: Keys.Delete,
          },
        },
        {
          //Modifying copy command to clone node
          name: 'clone',
          canExecute: function () {
            let execute: boolean = diagram.selectedItems.nodes.length > 0;
            return execute;
          },
          execute: function () {
            diagram.copy();
            diagram.paste();
          },
          gesture: {
            //Press CTRL+C to clone node
            key: Keys.C,
            keyModifiers: KeyModifiers.Control,
          },
        },
      ],
    },
  },
  '#element'
);
