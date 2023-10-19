//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNums(nums) {
    let evenNumsArr = []
    nums.forEach(num => num % 2 === 0 ? evenNumsArr.push(num): null)
    return evenNumsArr;
}

console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 10]))