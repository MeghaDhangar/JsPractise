// const arr = [2, 4, 5, 7, 3];
// let Largest = arr[0];
// let secondLargest = -Infinity;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > Largest) {
//         secondLargest = Largest;
//         Largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] != Largest) {
//         secondLargest = arr[i];
//     }
// }
// console.log(`largest ${Largest}`);
// console.log(`SecondLarges ${secondLargest}`)


// const arr =[3,5,6,7,9,1]
//  let findIndex = 6;
//  let index = arr.indexOf(findIndex);
//  console.log(`Findindex of 6 = ${index}`)





const arr = [12, 20, 34, 55, 39];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp
        }
    }
}
console.log(arr)



