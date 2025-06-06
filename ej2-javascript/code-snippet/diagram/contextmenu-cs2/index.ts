import {
    Diagram,
    DiagramContextMenu,
    NodeModel,
  } from '@syncfusion/ej2-diagrams';
  import { MenuEventArgs } from '@syncfusion/ej2-navigations';
  Diagram.Inject(DiagramContextMenu);
  //Initializes the nodes
  let node: NodeModel = {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
    annotations: [
      {
        id: 'label1',
        content: 'Rectangle1',
        style: {
          color: 'white',
        },
      },
    ],
  };
  let node2: NodeModel = {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
    annotations: [
      {
        id: 'label2',
        content: 'Rectangle2',
        style: {
          color: 'white',
        },
      },
    ],
  };
  //Initializes the Diagram component
  let diagram: Diagram = new Diagram(
    {
      width: '100%',
      height: '350px',
      nodes: [node, node2],
      contextMenuSettings: {
        //Enables the context menu
        show: true,
        // Defines the custom context menu items
        items: [
          {
            // Text to be displayed
            text: 'Fill',
            items: [
              { id: 'red', text: 'Red' },
              { id: 'yellow', text: 'Yellow' },
              { id: 'green', text: 'Green' },
              { id: 'blue', text: 'Blue' },
            ],
            //Sets the id for the item
            id: 'fill',
            target: '.e-elementcontent',
            // Sets the css icons for the item
            iconCss: 'e-icons e-paint-bucket',
          },
          {
            text: 'Annotation color',
            id: 'annotationColor',
            items: [
              { id: 'pink', text: 'Pink' },
              { id: 'orange', text: 'Orange' },
              { id: 'violet', text: 'Violet' },
              { id: 'brown', text: 'Brown' },
            ],
            target: '.e-elementcontent',
            iconCss: 'e-icons e-font-color',
          },
          {
            text: 'Clone',
            id: 'clone',
            target: '.e-elementcontent',
            iconCss: 'e-icons e-copy',
          },
        ],
        // Hides the default context menu items
        showCustomMenuOnly: true,
      },
      contextMenuClick: function (args: MenuEventArgs) {
        let selectedNode = diagram.selectedItems.nodes[0];
        if (
          selectedNode &&
          args.item.id !== 'fill' &&
          args.item.id !== 'annotationColor'
        ) {
          if (
            args.item.text === 'Red' ||
            args.item.text === 'Blue' ||
            args.item.text === 'Yellow' ||
            args.item.text === 'Green'
          ) {
            selectedNode.style.fill = args.item.text;
            diagram.dataBind();
          } else if (
            args.item.text === 'Pink' ||
            args.item.text === 'Violet' ||
            args.item.text === 'Orange' ||
            args.item.text === 'Brown'
          ) {
            selectedNode.annotations[0].style.fill = args.item.text;
            diagram.dataBind();
          } else {
            diagram.copy();
            diagram.paste();
          }
        }
      },
    },
    '#element'
  );
  