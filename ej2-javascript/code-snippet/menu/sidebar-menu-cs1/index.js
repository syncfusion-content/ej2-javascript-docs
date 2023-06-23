ej.base.enableRipple(true);

var acrdnObj;

// Sidebar Initialization
var defaultSidebar = new ej.navigations.Sidebar({
    width: '220px', type: 'Over', created: created
}, '#default-sidebar');

// Close the Sidebar
document.getElementById('close').onclick = () => {
    defaultSidebar.hide();
};

document.getElementById('hamburger').onclick = () => {
    defaultSidebar.show();
    acrdnObj.refresh();
};

function created() {
    var data = [
        {
            header: 'Appliances',
            content: '<div id="Appliances_Items"></div>',
            subItems: [
                {
                    header: 'Kitchen',
                    content: '<div id="Appliances_Kitchen_Items"></div>',
                    subItems: [
                        { header: 'Electric Cookers' },
                        { header: 'Coffee Makers' },
                        { header: 'Blenders' },
                    ]
                },
                {
                    header: 'Washing Machine',
                    content: '<div id="Appliances_Washing_Items"></div>',
                    subItems: [
                        { header: 'Fully Automatic' },
                        { header: 'Semi Automatic' }
                    ]
                },
                {
                    header: 'Air Conditioners',
                    content: '<div id="Appliances_Conditioners_Items"></div>',
                    subItems: [
                        { header: 'Inverter ACs' },
                        { header: 'Split ACs' },
                        { header: 'Window ACs' },
                    ]
                }
            ]
        },
        {
            header: 'Accessories',
            content: '<div id="Accessories_Items"></div>',
            subItems: [
                {
                    header: 'Mobile',
                    content: '<div id="Accessories_Mobile_Items"></div>',
                    subItems: [
                        { header: 'Headphones' },
                        { header: 'Memory Cards' },
                        { header: 'Power Banks' }
                    ]
                },
                {
                    header: 'Computer',
                    content: '<div id="Accessories_Computer_Items"></div>',
                    subItems: [
                        { header: 'Pendrives' },
                        { header: 'External Hard Disks' },
                        { header: 'Monitors' }
                    ]
                }
            ]
        },
        {
            header: 'Fashion',
            content: '<div id="Fashion_Items"></div>',
            subItems: [
                { header: 'Men' },
                { header: 'Women' }
            ]
        },
        {
            header: 'Home & Living',
            content: '<div id="Home_Living_Items"></div>',
            subItems: [
                { header: 'Furniture' },
                { header: 'Decor'}
            ]
        },
        {
            header: 'Entertainment',
            content: '<div id="Entertainment_Items"></div>',
            subItems: [
                { header: 'Televisions' },
                { header: 'Home Theatres' },
                { header: 'Gaming Laptops' }
            ]
        }
    ];

    //Initialize Accordion component
    acrdnObj = new ej.navigations.Accordion({
        items: data,
        expanding: expand,
        clicked: clicked
    }, '#accordionMenu');
}

//Expanding Event function for Accordion component.
function expand(e) {
    if (e.isExpanded) {
        if (e.element.getElementsByClassName('e-acrdn-content')[0].children[0].classList.contains('e-accordion')) {
            return;
        }
        //Initialize Nested Accordion component
        var nestAcrdn = new ej.navigations.Accordion({
            items: e.item.subItems,
            expanding: expand,
            clicked: clicked
        });

        var elemId = e.element.getElementsByClassName('e-acrdn-content')[0].children[0].id;
        //Render initialized Nested Accordion component
        nestAcrdn.appendTo('#' + elemId);
    }
}

function clicked(e) {
    if (!e.item && !(e.originalEvent.target).closest('.e-acrdn-item').getElementsByClassName('e-tgl-collapse-icon').length) {
        defaultSidebar.hide();
    }
}

