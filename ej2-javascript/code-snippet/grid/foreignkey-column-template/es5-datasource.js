var data = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate:new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', Mask: '1111', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0, OrderStatus: "Pending"
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', Mask: '2222', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1, OrderStatus: "Confirmed"
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '3333', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0, OrderStatus: "Shipped"
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', Mask: '4444', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0, OrderStatus: "Pending"
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', Mask: '5555', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0, OrderStatus: "Cancelled"
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '6666', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0, OrderStatus: "Shipped"
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', Mask: '7777', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1, OrderStatus: "Confirmed"
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', Mask: '8888', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0, OrderStatus: "Pending"
    },
    {
        OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
        ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
        ShipRegion: 'SP', Mask: '9999', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1, OrderStatus: "Confirmed"
    },
    {
        OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
        ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        ShipRegion: 'Táchira', Mask: '1234', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0, OrderStatus: "Shipped"
    },
    {
        OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
        ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
        ShipRegion: 'CJ', Mask: '2345', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0, OrderStatus: "Cancelled"
    },
    {
        OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
        ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
        ShipRegion: 'CJ', Mask: '3456', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1, OrderStatus: "Confirmed"
    },
    {
        OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
        ShipRegion: 'CJ', Mask: '4567', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0, OrderStatus: "Shipped"
    },
    {
        OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
        ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
        ShipRegion: 'RJ', Mask: '5678', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1, OrderStatus: "Pending"
    },
    {
        OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
        ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
        ShipRegion: 'NM', Mask: '6789', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0, OrderStatus: "Confirmed"
    }
];

var customerData = [
    {
        CustomerID: 'VINET',
        ContactName: 'Paul Henriot',
        CompanyName: 'Vins et alcools Chevalier',
        Address: "59 rue de l'Abbaye",
        Country: 'France',
    },
    {
        CustomerID: 'TOMSP',
        ContactName: 'Karin Josephs',
        CompanyName: 'Toms Spezialitäten',
        Address: 'Luisenstr. 48',
        Country: 'Germany',
    },
    {
        CustomerID: 'HANAR',
        ContactName: 'Mario Pontes',
        CompanyName: 'Hanari Carnes',
        Address: 'Rua do Paço, 67',
        Country: 'Brazil',
    },
    {
        CustomerID: 'VICTE',
        ContactName: 'Mary Saveley',
        CompanyName: 'Victuailles en stock',
        Address: '2, rue du Commerce',
        Country: 'France',
    },
    {
        CustomerID: 'SUPRD',
        ContactName: 'Pascale Cartrain',
        CompanyName: 'Suprêmes délices',
        Address: 'Boulevard Tirou, 255',
        Country: 'Belgium',
    },
    {
        CustomerID: 'CHOPS',
        ContactName: 'Yang Wang',
        CompanyName: 'Chop-suey Chinese',
        Address: 'Hauptstr. 29',
        Country: 'Switzerland',
    },
    {
        CustomerID: 'RICSU',
        ContactName: 'Michael Holz',
        CompanyName: 'Richter Supermarkt',
        Address: 'Grenzacherweg 237',
        Country: 'Switzerland',
    },
    {
        CustomerID: 'WELLI',
        ContactName: 'Paula Parente',
        CompanyName: 'Wellington Importadora',
        Address: 'Rua do Mercado, 12',
        Country: 'Brazil',
    },
    {
        CustomerID: 'HILAA',
        ContactName: 'Carlos Hernández',
        CompanyName: 'HILARION-Abastos',
        Address: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        Country: 'Venezuela',
    },
    {
        CustomerID: 'ERNSH',
        ContactName: 'Roland Mendel',
        CompanyName: 'Ernst Handel',
        Address: 'Kirchgasse 6',
        Country: 'Austria',
    },
    {
        CustomerID: 'CENTC',
        ContactName: 'Francisco Chang',
        CompanyName: 'Centro comercial Moctezuma',
        Address: 'Sierras de Granada 9993',
        Country: 'Mexico',
    },
    {
        CustomerID: 'OTTIK',
        ContactName: 'Henriette Pfalzheim',
        CompanyName: 'Ottilies Käseladen',
        Address: 'Mehrheimerstr. 369',
        Country: 'Germany',
    },
    {
        CustomerID: 'QUEDE',
        ContactName: 'Bernardo Batista',
        CompanyName: 'Que Delícia',
        Address: 'Rua da Panificadora, 12',
        Country: 'Brazil',
    },
    {
        CustomerID: 'RATTC',
        ContactName: 'Paula Wilson',
        CompanyName: 'Rattlesnake Canyon Grocery',
        Address: '2817 Milton Dr.',
        Country: 'USA',
    }
]