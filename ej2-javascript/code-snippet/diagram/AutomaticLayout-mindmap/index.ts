import {
    Diagram,
    ConnectorModel,
    Node,
    DataBinding,
    NodeModel,
    TextModel,
    MindMap,
  } from '@syncfusion/ej2-diagrams';
  import { DataManager, Query } from '@syncfusion/ej2-data';
  Diagram.Inject(DataBinding, MindMap);
  //Initializes data source
  let data: object[] = [
    {
      id: 1,
      Label: 'StackPanel',
    },
    {
      id: 2,
      Label: 'Label',
      parentId: 1,
    },
    {
      id: 3,
      Label: 'ListBox',
      parentId: 1,
    },
    {
      id: 4,
      Label: 'StackPanel',
      parentId: 2,
    },
    {
      id: 5,
      Label: 'Border',
      parentId: 2,
    },
    {
      id: 6,
      Label: 'Border',
      parentId: 4,
    },
    {
      id: 7,
      Label: 'Button',
      parentId: 4,
    },
    {
      id: 8,
      Label: 'ContentPresenter',
      parentId: 5,
    },
    {
      id: 9,
      Label: 'Text Block',
      parentId: 5,
    },
  ];
  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
  // Initializes Diagram
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    snapSettings: { constraints: 0 },
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
      //Sets layout type
      type: 'MindMap',
      orientation: 'Horizontal',
      //get branch for the node
      getBranch: (node: NodeModel) => {
        if ((node.data as any).id === 1) {
          return 'Root';
        }
        return 'Right';
      },
    }, //Configures data source for diagram
    dataSourceSettings: {
      id: 'id',
      parentId: 'parentId',
      dataManager: items,
      root: String(1),
    }, //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: Node) => {
      obj.shape = {
        type: 'Text',
        content: (
          obj.data as {
            Label: 'string';
          }
        ).Label,
      };
      obj.style = {
        fill: '#6BA5D7',
        strokeColor: 'none',
        strokeWidth: 2,
      };
      obj.borderColor = 'white';
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      (obj.shape as TextModel).margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      };
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.type = 'Orthogonal';
      return connector;
    },
  });
  diagram.appendTo('#element');
  