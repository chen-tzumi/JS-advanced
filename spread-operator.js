const sum = (...numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

const min = (...numbers) => {
    let min = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(min(1, 2, 3, 4, 5, 6));

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2[0] = 0;
console.log(arr2, arr1);
