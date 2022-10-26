var fs = require('fs');

var data = fs.readFileSync('fortunes.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line


//console.log(data.length);

function randomNumber(){
    return Math.floor(Math.random() * data.length);
}

console.log(`Your fotune today is: ${data[randomNumber()]}`);
