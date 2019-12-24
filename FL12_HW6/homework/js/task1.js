let a = prompt('Please enter a');
let b = prompt('Please enter b');
let c = prompt('Please enter c');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
let z = 4;
let k = 2;
let d = b*b - z * a * c;
let x1;
let x2;
console.log('a= ' + a);
console.log('b= ' + b);
console.log('c= ' + c);
console.log('d= ' + d);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (k * a);
    x2 = (-b - Math.sqrt(d)) / (k * a);
    console.log('value x1 ==' + x1);
    console.log('value x2 ==' + x2);
} else if (d === 0) {
    x1 = -b / (k * a);
    console.log('Discriminant=0 ___ x1=' + x1);
} else {
    console.log('No solution');
}