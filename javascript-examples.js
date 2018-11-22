// Add any JavaScript!!!
/*
  more comments in JavaScript
*/

let name = "nico";
let age = 39;
let likeSports = true;
let likeSports2; // undefined
let likeSports3 = null; // undefined

let nico = {
  name: 'Nico',
  age: 39,
  likeSports: true,
  play: function () {
    console.log('yes');
  }
};

nico.name; // Nico
nico.age; // 39
nico.likeSports; // true
nico.play(); // yes

const greeting = function () {
  console.log('hi');
}

const greeting = () => { // arrow functions
  console.log('hi');
}

function greeting() {
  console.log('hi');
}

greeting();