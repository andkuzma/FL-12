let a = prompt('Please enter a');
let b = prompt('Please enter b');
let c = prompt('Please enter c');

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers ');
} else if ( a < 0 || b < 0 || c < 0 || a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
}else if (a + b < c || b + c < a || a + c < b) {
    console.log('Triangle doesn�t exist');
}else if (a === b && b === c) {
    console.log('Equilateral triangle');
} else if (a === b && a !== c || b === c && b !== a || a === c && b !== c) {
    console.log('Isosceles triangle');
} else if (a!==b && b!==c && a!==c) {
    console.log('Scalene triangle');
    }