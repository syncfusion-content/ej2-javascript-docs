

import { enableRipple, AnimationOptions } from '@syncfusion/ej2-base';
import { ListView, SelectEventArgs } from '@syncfusion/ej2-lists';
import { Animation } from '@syncfusion/ej2-base';

enableRipple(true);

let dataSource: { [key: string]: Object }[] = [
    {
        text: 'Appliances',
        id: 'list1',
        child: [
            {
                text: 'Kitchen',
                id: 'list1_1',
                child: [
                    { id: 'list1_1_1', text: 'Electric Cookers' },
                    { id: 'list1_1_2', text: 'Coffee Makers' },
                    { id: 'list1_1_3', text: 'Blenders' },
                ]
            },
            {
                text: 'Washing Machine',
                id: 'list1_2',
                child: [
                    { id: 'list1_2_1', text: 'Fully Automatic' },
                    { id: 'list1_2_2', text: 'Semi Automatic' }
                ]
            },
            {
                text: 'Air Conditioners',
                id: 'list1_3',
                child: [
                    { id: 'list1_3_1', text: 'Inverter ACs' },
                    { id: 'list1_3_2', text: 'Split ACs' },
                    { id: 'list1_3_3', text: 'Window ACs' },
                ]
            }
        ]
    },
    {
        text: 'Accessories',
        id: 'list2',
        child: [
            {
                text: 'Mobile',
                id: 'list2_1',
                child: [
                    { id: 'list2_1_1', text: 'Headphones' },
                    { id: 'list2_1_2', text: 'Memory Cards' },
                    { id: 'list2_1_3', text: 'Power Banks' }
                ]
            },
            {
                text: 'Computer',
                id: 'list2_2',
                child: [
                    { id: 'list2_2_1', text: 'Pendrives' },
                    { id: 'list2_2_2', text: 'External Hard Disks' },
                    { id: 'list2_2_3', text: 'Monitors' }
                ]
            }
        ]
    },
    {
        text: 'Fashion',
        id: 'list3',
        child: [
            { id: 'list3_1', text: 'Men' },
            { id: 'list3_2', text: 'Women' }
        ]
    },
    {
        text: 'Home & Living',
        id: 'list4',
        child: [
            { id: 'list4_1', text: 'Furniture' },
            { id: 'list4_2', text: 'Decor'}
        ]
    },
    {
        text: 'Entertainment',
        id: 'list5',
        child: [
            { id: 'list5_1', text: 'Televisions' },
            { id: 'list5_2', text: 'Home Theatres' },
            { id: 'list5_3', text: 'Gaming Laptops' }
        ]
    }
];

//Initialize ListView component
let listObj: ListView = new ListView({

    //Set defined data to dataSource property
    dataSource: dataSource,

    //Set header title
    headerTitle: 'Menu',

    //Set true to show header title
    showHeader: true,

    select: onSelect
});

//Render initialized ListView component
listObj.appendTo('#listview');

document.getElementById('hamburger').onclick = (): void => {
    let animation: Animation = new Animation({ duration: 500 });
    animation.animate(listObj.element, {
        name: 'SlideDown' ,
        begin: function(args: AnimationOptions) {
            listObj.element.style.display = 'block';
            document.getElementById('close').style.display = 'block';
        }
    });
};

// Close the ListView
document.getElementById('close').onclick = (): void => {
    listObj.element.style.display = 'none';
    document.getElementById('close').style.display = 'none';
};

function onSelect (e: SelectEventArgs): void {
    if (e.data && !(e.data as { child: object }).child) {
        listObj.element.style.display = 'none';
        document.getElementById('close').style.display = 'none';
        listObj.refresh();
    }
}


