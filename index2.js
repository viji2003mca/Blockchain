//node.js program to demonstrate
//the fs.readFile()method

//Include fs module
var fs=require('fs');


//use fs.readFile() method to read the file
fs.readFile('Demo.txt', 'utf8', function(err, data){

    //Display t(he file constant
    console.log(data);
})

console.log('readFile called');