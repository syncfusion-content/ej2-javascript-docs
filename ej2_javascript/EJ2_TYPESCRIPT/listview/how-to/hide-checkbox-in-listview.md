---
title: "ListView how to hide checkbox in listview"
component: "ListView"
description: "ListView how to section, get selected item, dual list, listview filtering, add & remove items from listview, grid layout using listview, listview drag & drop."
---

# How to hide checkbox in listview

The checkbox of the any list item can be hidden by using
[`htmlAttributes`](../../api/list-view#htmlattributes) of
[`fields`](../../api/list-view#fields) object. With
the help of `htmlAttributes` we can add unique class to each list item that will be rendered from the data source, from
the CSS class we can hide the checkbox of the list item.

In this sample, we had hidden the multiple leaf node of nested list. The `e-checkbox-hidden` class has been added in the data
source where the checkbox needs to be hidden. Refer the below snippet for simple data source.

```typescript
    {
        'text': 'New York',
        'id': '3002',
        'category': 'USA',
        'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' }
    }
```

Even though we have hidden the checkbox the functionality will be same for the list item which might affect the
`getSelectedItems` method. So, to counteract that we will follow certain logic in the `select` event. The Logic here is to
remove the `e-active` class from the other checkbox hidden list item which will be added when we select on that item and
retain `e-active` on currently selected item.

> In this process we will exclude the visible checkbox list items and only consider the hidden checkbox items.

{% tab template="listview/hide-checkbox", isDefaultActive=true, sourceFiles="index.ts,index.html,index.css", es5Template="hidden-checkbox-template" %}

```typescript
import { ListView, SelectEventArgs } from '@syncfusion/ej2-lists';

//define the array of JSON
let dataSource: { [key: string]: Object }[] = [
    {
        'text': 'Asia',
        'id': '01',
        'category': 'Continent',

        'child': [{
            'text': 'India',
            'id': '1',
            'category': 'Asia',

            'child': [{
                'text': 'Delhi',
                'id': '1001',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Kashmir',
                'id': '1002',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Goa',
                'id': '1003',
                'category': 'India',
                'htmlAttributes': { 'class': 'e-file' },
            },
            ]
        },
        {
            'text': 'China',
            'id': '2',
            'category': 'Asia',

            'child': [{
                'text': 'Zhejiang',
                'id': '2001',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Hunan',
                'id': '2002',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Shandong',
                'id': '2003',
                'category': 'China',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },

    {
        'text': 'North America',
        'id': '02',
        'category': 'Continent',

        'child': [{
            'text': 'USA',
            'id': '3',
            'category': 'North America',

            'child': [{
                'text': 'California',
                'id': '3001',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'New York',
                'id': '3002',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Florida',
                'id': '3003',
                'category': 'USA',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        },
        {
            'text': 'Canada',
            'id': '4',
            'category': 'North America',

            'child': [{
                'text': 'Ontario',
                'id': '4001',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Alberta',
                'id': '4002',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Manitoba',
                'id': '4003',
                'category': 'Canada',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },

    {
        'text': 'Europe',
        'id': '03',
        'category': 'Continent',

        'child': [{
            'text': 'Germany',
            'id': '5',
            'category': 'Europe',

            'child': [{
                'text': 'Berlin',
                'id': '5001',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Bavaria',
                'id': '5002',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Hesse',
                'id': '5003',
                'category': 'Germany',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }, {
            'text': 'France',
            'id': '6',
            'category': 'Europe',

            'child': [{
                'text': 'Paris',
                'id': '6001',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Lyon',
                'id': '6002',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Marseille',
                'id': '6003',
                'category': 'France',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    },
    {
        'text': 'Australia',
        'id': '04',
        'category': 'Continent',

        'child': [{
            'text': 'Australia',
            'id': '7',
            'category': 'Australia',

            'child': [{
                'text': 'Sydney',
                'id': '7001',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Melbourne',
                'id': '7002',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Brisbane',
                'id': '7003',
                'category': 'Australia',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }, {
            'text': 'New Zealand',
            'id': '8',
            'category': 'Australia',

            'child': [{
                'text': 'Milford Sound',
                'id': '8001',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Tongariro National Park',
                'id': '8002',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Fiordland National Park',
                'id': '8003',
                'category': 'New Zealand',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }]
    },
    {
        'text': 'Africa',
        'id': '05',
        'category': 'Continent',

        'child': [{
            'text': 'Morocco',
            'id': '9',
            'category': 'Africa',

            'child': [{
                'text': 'Rabat',
                'id': '9001',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Toubkal',
                'id': '9002',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file' },
            },
            {
                'text': 'Todgha Gorge',
                'id': '9003',
                'category': 'Morocco',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            }]
        }, {
            'text': 'South Africa',
            'id': '10',
            'category': 'Africa',

            'child': [{
                'text': 'Cape Town',
                'id': '10001',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Pretoria',
                'id': '10002',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file e-checkbox-hidden' },
            },
            {
                'text': 'Bloemfontein',
                'id': '10003',
                'category': 'South Africa',
                'htmlAttributes': { 'class': 'e-file' },
            }]
        }]
    }
];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: dataSource,

    // map the groupBy field with category column
    fields: { tooltip: 'text' },

    headerTitle: 'Mixed Leaf Checkbox Hidden List ',
    showHeader: true,
    showCheckBox: true,
    select: (args: SelectEventArgs) => {
        // Selecting all the e-active elements from the list.
        let normalElements: HTMLElement[] = Array.prototype.slice.call(listviewInstance.element.getElementsByClassName('e-checkbox-hidden'));

        // Looping through all the selected element and removing e-active class
        // to avoid behaviour interference  with getSelectedItems method
        normalElements.forEach((element) => {
            element.classList.remove('e-active');
        });

        // Finally adding e-active class to currently selected item except checkbox item.
        // because if it is checkbox item their actions will taken care from the source side itself.
        if (args.item.classList.contains('e-checkbox-hidden')) {
            args.item.classList.add('e-active');
        }
    }
});

//Render initialized ListView
listviewInstance.appendTo("#folderCheckbox");

```

{% endtab %}
