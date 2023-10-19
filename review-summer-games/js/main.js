//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

const h2 = document.querySelector('h2')

function findProduct(arr) {
    let product = 1;
    arr.forEach(num => product *= num);
    return product;
}

alert(findProduct([2, 3, 10]));

h2.innerText = findProduct([1, 2, 3, 4, 5]);