// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood;
favFood = 'pizza'
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let assignedStr;
assignedStr = 'example string';
alert(assignedStr[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function product(n1, n2, n3) {
    return (n1 / n2) * n3;
}

alert(product(3, 3, 6));

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function root(n) {
    return n ** (1/3);
}

console.log(root(4))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month) {
    if (month === 'June' || month === 'July' || month === 'August' || month === 'May') {
        alert('YAY')
    } else {
        alert('BOOO')
    }
}

summer('May');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip(n) {
    for (let i = 1; i <= n; i++) {
        if ((i % 5 == 0)) continue;
        console.log(i);
    }
}

skip(100)