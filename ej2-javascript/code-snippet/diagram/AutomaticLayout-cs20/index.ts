


import {
    Diagram, ConnectorModel, Node, DataBinding, HierarchicalTree, TreeInfo
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding, HierarchicalTree);
import {
    DataManager,
    Query
} from '@syncfusion/ej2-data';
//Initializes data source
let data: object[] = [
    {
        Id: 1,
        Role: "General Manager"
    },
    {
        Id: 2,
        Role: "Assistant Manager",
        Team: 1
    },
    {
        Id: 3,
        Role: "Human Resource Manager",
        Team: 1
    },
    {
        Id: 4,
        Role: "Design Manager",
        Team: 1
    },
    {
        Id: 5,
        Role: "Operation Manager",
        Team: 1
    },
    {
        Id: 6,
        Role: "Marketing Manager",
        Team: 1
    }
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '530px',
    snapSettings: {
        constraints: 0
    },//Uses layout to auto-arrange nodes on the Diagram page
    layout: {
        //Sets layout type
        type: 'OrganizationalChart',
        getLayoutInfo: (node: Node, options: TreeInfo) => {
            if (!options.hasSubTree) {
                options.type = 'Center';
                options.orientation = 'Horizontal';
            }
        }
    },//Configures data source for Diagram
    dataSourceSettings: {
        id: 'Id',
        parentId: 'Team',
        dataManager: items
    },
    //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.width = 150;
        obj.height = 50;
        obj.style.fill = '#6BA5D7';
        obj.annotations = [{
            content: obj.data['Role'],
            style: {
                color: 'white'
            }
        }];
        return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.style =
        {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill  =  '#6BA5D7';
        connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
        connector.targetDecorator.shape = 'None';
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#element');


