// data
var data = { name: 'Aston Martin' };

// Compiling template string into executable function
var getDOMString = ej.base.compile('<div>${name}</div>');

// Using generated function to get output element collection
var output = getDOMString(data);

// append html collection to element
document.getElementById('element').appendChild(output[0]);

