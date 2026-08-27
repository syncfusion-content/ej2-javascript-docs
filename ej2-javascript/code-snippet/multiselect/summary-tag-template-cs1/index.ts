import { MultiSelect, CheckBoxSelection, VirtualScroll } from '@syncfusion/ej2-dropdowns';

MultiSelect.Inject(CheckBoxSelection);
MultiSelect.Inject(VirtualScroll);

// Large dataset sample with 15000 records and CheckBox mode with virtualization
let records: { id: string, text: string }[] = [];

for (let i: number = 1; i <= 15000; i++) {
    const item: { id: string, text: string } = {
        id: 'id' + i,
        text: 'Item ' + i,
    };
    records.push(item);
}

const value: string[] = records.map((item: { id: string, text: string }) => item.text);

let listObj: MultiSelect = new MultiSelect({
    dataSource: records,
    fields: { text: 'id', value: 'text' },
    mode: 'CheckBox',
    enableVirtualization: true,
    allowFiltering: true,
    showDropDownIcon: true,
    showSelectAll: true,
    maximumSelectionLength: 15000,
    summaryTagCount: 5,
    summaryTagTemplate: '${selectedCount} items selected',
    value: value
});

//render the component
listObj.appendTo('#select');



