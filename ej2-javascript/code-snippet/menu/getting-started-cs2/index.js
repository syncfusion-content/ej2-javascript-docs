ej.base.enableRipple(true);

//Menu datasource
var dataSource = [
    {
        continent: 'Asia',
        countries: [
            {
                country: 'China',
                languages: [
                    { language: 'Chinese' },
                    { language: 'Cantonese' }
                ]
            },
            {
                country: 'India',
                languages: [
                    { language: 'English' },
                    { language: 'Hindi' },
                    { language: 'Tamil' }
                ]
            },
            {
                country: 'Japan',
                languages: [
                    { language: 'Japanese' }
                ]
            }
        ]
    },
    {
        continent: 'Africa',
        countries: [
            {
                country: 'Nigeria',
                languages: [
                    { language: 'English' },
                    { language: 'Hausa' }
                ]
            },
            {
                country: 'Egypt',
                languages: [
                    { language: 'Arabic' }
                ]
            },
            {
                country: 'South Africa',
                languages: [
                    { language: 'Tswana' },
                    { language: 'Swati' }
                ]
            }
        ]
    },
    {
        continent: 'North America',
        countries: [
            {
                country: 'Canada',
                languages: [
                    { language: 'French' }
                ]
            },
            {
                country: 'Mexico',
                languages: [
                    { language: 'Spanish' }
                ]
            },
            {
                country: 'USA',
                languages: [
                    { language: 'English' }
                ]
            }
        ]
    },
    {
        continent: 'South America',
        countries: [
            {
                country: 'Brazil',
                languages: [
                    { language: 'Portuguese' }
                ]
            },
            {
                country: 'Colombia',
                languages: [
                    { language: 'Spanish' }
                ]
            },
            {
                country: 'Argentina',
                languages: [
                    { language: 'Spanish' }
                ]
            }
        ]
    },
    {
        continent: 'Oceania',
        countries: [
            {
                country: 'Australia'
            },
            {
                country: 'New Zealand'
            },
            {
                country: 'Samoa'
            },
        ]
    }
];

//Menu fields definition
var menuFields = {
    text: ['continent', 'country', 'language'],
    children: ['countries', 'languages']
};

// Initialize Menu component.
var menuObj = new ej.navigations.Menu({ items: dataSource, fields: menuFields }, '#menu');

