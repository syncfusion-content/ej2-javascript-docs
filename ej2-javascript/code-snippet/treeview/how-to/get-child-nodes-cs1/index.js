 /**
 * Accordion tree sample
 */

// Hierarchical data source for TreeView component
 var data = [
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
            { code: "IND", name: "India" , countries: [
              {code: "TN", name: "TamilNadu" }
            ]},
            { code: "JPN", name: "Japan" }
        ]
    },
    {
        code: "EU", name: "Europe", countries: [
            { code: "DNK", name: "Denmark" },
            { code: "FIN", name: "Finland" },
            { code: "AUT", name: "Austria" }
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
        code: "SA", name: "South America", countries: [
            { code: "BR", name: "Brazil" },
            { code: "COL", name: "Colombia" },
            { code: "ARG", name: "Argentina" }
        ]
    },
    
];
var tree1 = new ej.navigations.TreeView({
    fields: { dataSource: data, id: 'code', text: 'name', child: 'countries' },
    loadOnDemand: false,
    created: onCreate
});
tree1.appendTo('#tree');
function onCreate() {
    var proxy = this;
     document.getElementById("btn").addEventListener("click",function(){
          var id = document.getElementById('Nodes').value;
          var element= proxy.element.querySelector('[data-uid="' + id + '"]');
          // Gets the child Element
          var liElements = element.querySelectorAll('ul li');
          var arr= [];
              for (var i = 0; i < liElements.length; i++) {
                var nodeData= proxy.getNode(liElements[i]);
                arr.push(nodeData);
                } 
                alert(JSON.stringify(arr));
        })
}

