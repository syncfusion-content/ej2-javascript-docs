ej.base.enableRipple(true);

//Initialize action items.
var items = [
    {
        text: 'Home',
        iconCss: 'e-icons e-home',
    },
    {
        text: 'Search',
        iconCss: 'e-icons e-search',
        url: 'http://www.google.com'
    },
    {
        text: 'Yes / No',
        iconCss: 'e-icons e-check-box'
    },
    {
        text: 'Text',
        iconCss: 'e-icons e-caption',
    },
    {
        separator: true
    },
    {
        text: 'Syncfusion',
        iconCss: 'e-icons e-mouse-pointer',
        url: 'http://www.syncfusion.com'
    }
];

// initialize DropDownButton component
var drpDownBtn = new ej.splitbuttons.DropDownButton({
    items: items,
    itemTemplate: (data) => {
        if (data.url) {
            return `
                <div>
                    <span class="e-menu-icon ${data.iconCss}"></span>
                    <span class="custom-class"><a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.text}</a></span>
                </div>`;
        } else {
            return `
                <div>
                    <span class="e-menu-icon ${data.iconCss}"></span>
                    <span class="custom-class" >${data.text}</span>
                </div>`;
        }
    }
}, '#element');
