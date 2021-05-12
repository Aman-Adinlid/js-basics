console.log('Hello World');
let name = 'Aman';
console.log(name);
let firstName = 'Adam';
console.log(firstName);
let lastName = 'Svensson';
console.log(lastName);
let age = 25;

let person ={
    name :'Sarah',
age: 22
};
person.name = 'Marray';
console.log(person.name);
let selectedColors = ['blue','white'];
//for all the colores
//console.log(selectedColors)
// blue
//console.log(selectedColors[0]);
selectedColors[2] = 'black';
//for all colres black color added

console.log(selectedColors.length);
function greet(name,lastName){
    console.log('Hello ' + name + ' ' + lastName); // default means undefined 
}
greet('Taram', 'Adin');
greet('Shaun');

function square(number){
    return number * number;
}
console.log(square(3));

//let x = 10;
//let y = 30;
 //console.log(x * y);
// console.log(x + y);
 //console.log(x - y);

 //increment(++)
 //console.log(x++); // we get 10
 //console.log(x); // get 11 cuz ++ means 1

 //decrement(--)
//console.log(--x); // get 9 cuz of --

let x = 1;
console.log(x > 0); // it is a boolean means that the answer should be true or false
console.log(x>=1);
console.log(x<0);
console.log(x<=1);
console.log(x===1);// true cuse it means that=== 1 equal to one
console.log(x!==1);// false cuz it is not equal one


console.log(true && true); // true
console.log(false && true); // false

// in or || if we set true + true we get true, if we set true + false we get true also
