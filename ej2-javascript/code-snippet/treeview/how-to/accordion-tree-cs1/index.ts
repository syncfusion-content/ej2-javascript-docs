


import { TreeView } from '@syncfusion/ej2-navigations';

/**
 * Accordion tree sample
 */
    // Hierarchical data source for TreeView component
   let continents: { [key: string]: Object; }[] = [
    {
        code: "AF", name: "Africa", countries: [
            { code: "NGA", name: "Nigeria" },
            { code: "EGY", name: "Egypt" },
            { code: "ZAF", name: "South Africa" }
        ]
    },
    {
        code: "AS", name: "Asia", countries: [
            { code: "CHN", name: "China" },
            { code: "IND", name: "India", selected: true },
            { code: "JPN", name: "Japan" }
        ]
    },
    {
        code: "EU", name: "Europe", countries: [
            { code: "DNK", name: "Denmark" },
            { code: "FIN", name: "Finland" },
            { code: "AUT", name: "Austria",
             }
        ]
    },
    {
        code: "NA", name: "North America", countries: [
            { code: "USA", name: "United States of America" },
            { code: "CUB", name: "Cuba" },
            { code: "MEX", name: "Mexico" }
        ]
    },
    {
        code: "OC", name: "Oceania", countries: [
            { code: "AUS", name: "Australia" },
            { code: "NZL", name: "New Zealand" },
            { code: "WSM", name: "Samoa" }
        ]
    },
];

// Render treeview with cssClass
let tree1: TreeView = new TreeView({
    fields: { dataSource: continents, id: "code", text: "name", child: "countries" },
    nodeSelected: nodeSelect,
    cssClass: ("accordiontree")
});
tree1.appendTo('#tree');

function nodeSelect (args: NodeSelectEventArgs) {
    if (args.node.classList.contains('e-level-1')) {
        this.collapseAll();
        this.expandAll([args.node]);
    }
}



