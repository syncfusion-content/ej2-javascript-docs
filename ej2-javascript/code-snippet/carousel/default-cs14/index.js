var productItems = [
    { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
    { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
    { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
    { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
    { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
];

var carouselObj = new ej.navigations.Carousel({
    dataSource: productItems,
    itemTemplate: '<div class="fs-5"><img src="${getImage(data.imageName)}" alt="${Name}" style="height:100%;width:100%;"/><figcaption class="img-caption">${Name}</figcaption></div>'
});
carouselObj.appendTo('#carousel');

