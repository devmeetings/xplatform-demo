"use strict";

const fs = require('fs');
console.log(Object.keys(fs));

for (let counter = 99; counter >= 1; counter = counter - 1) {
    let bottles;
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }

    console.log(`${counter} ${bottles} of beer on the wall.`);
    if (counter < 99) {
        console.log("");
        console.log(`${counter} ${bottles} of beer on the wall.`);
    }
    console.log(`${counter} ${bottles} of beer.`);
    console.log('Take one down.');
    console.log('Pass it around.');

    if (counter == 1) {
        console.log('No bottles of beer on the wall.');
    }
}
