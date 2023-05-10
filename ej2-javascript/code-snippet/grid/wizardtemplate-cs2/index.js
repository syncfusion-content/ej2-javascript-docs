var countryData = ej.data.DataUtil.distinct(data, 'ShipCountry', true);
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);
var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265,
    actionComplete: (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            new ej.dropdowns.DropDownList({
                value: args.rowData.ShipCountry,
                popupHeight: '300px',
                floatLabelType: 'Always',
                dataSource: countryData,
                fields: {text: 'ShipCountry', value: 'ShipCountry'},
                placeholder: 'Ship Country'
            },
                args.form.elements.namedItem('ShipCountry'));
            new ej.buttons.CheckBox({
                label: 'Verified',
                checked: args.rowData.Verified
            }, 
               args.form.elements.namedItem('Verified'));
            // Set initail Focus
            if (args.requestType === 'beginEdit') {
                args.form.elements.namedItem('CustomerID').focus();
            }
            initializeWizard();
        }
    }
});
grid.appendTo('#Grid');

function initializeWizard() {
    let currentTab = 0;
    document.getElementById('nextBtn').onclick = function () {
        if (validate()) {
            if (this.innerHTML !== 'SUBMIT'){
                currentTab++;
                nextpre(currentTab);
            } else {
                grid.endEdit();
            }
        }
    }
    function validate(tab) {
        let valid = true;
            [].slice.call(document.getElementById('tab' + currentTab).querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
            return false;
        }
        return true;
    }
    document.getElementById('prevBtn').onclick = function () {
        if (validate()) {
            currentTab--;
            nextpre(currentTab);
        }
    }
}

function nextpre(current) {
    let tabs = [].slice.call(document.getElementsByClassName('tab'))
    tabs.forEach(element => element.style.display = 'none');
    tabs[current].style.display = '';
    if(current) {
        document.getElementById('prevBtn').style.display = '';
        document.getElementById('nextBtn').innerHTML = 'SUBMIT';
    } else {
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').innerHTML = 'NEXT';
    }
}

