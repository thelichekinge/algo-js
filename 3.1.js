function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


const test1 = [1, 2, 3, 4, 5];
const test2 = [100, 101, 102];


console.log(`Sum of [1, 2, 3, 4, 5] = ${sumArray(test1)}`);        
console.log(`Sum of [100, 101, 102] = ${sumArray(test2)}`);      
   