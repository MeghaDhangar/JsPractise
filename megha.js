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




// const arr=[12,34,55,61,10];
// let largest=arr[0];
// let secondLargest=-Infinity;
// for(let i= 0 ;i<arr.length;i++){
//     if(arr[i]>largest){
//       secondLargest = largest;
//       largest=arr[i];
//     }else if(arr[i]>secondLargest && arr[i]!=largest ){
//          secondLargest=arr[i];
//     }
// }
// console.log(`largest ${largest}`)
// console.log(`secondLargest ${secondLargest}`)




// const arr =[2,4,33,5,6,7];
// let findIndex = 6;
//  let index = -1
// for(let i=1; i< arr.length;i++){
//     if(arr[i]===findIndex){
//         index = i;
//         break;
//     }
    
// }
// console.log(`element ${findIndex} of index  ${index}`)


// FIND NUMBER OF ARRAY 
// const arr= [12,31,14,8,9,8,12,55,14,12,8];
// let number = 12;
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===number){
//      count++;
//     }
// }

// console.log(`find number of ${number} of ${count}`)


// SUM OF ARRAY
// const arr = [2,3,4,7,8];
// let sum=0;
// arr.forEach(ele=>{
//     sum+=ele;
// })
// console.log(`sum of element = ${sum}`)



// SORT ARRAY
// const arr = [2,4,7,8,9,3,6];
// for(let i=0;i<arr.length-1;i++){
//   for(let j=0; j<arr.length-i-1;j++){
//     if(arr[j] > arr[j+1]){
//     let temp = arr[j];
//     arr[j]= arr[j+1];
//     arr[j+1]=temp;
//     }
//   }
// }
// console.log(arr)

// COUNT OF NUMBER IN ARRAY 
// const num = [12,34,55,10,27,20,55];
// let findNum = 55;
// let count=0;
// for(let i=0;i<num.length;i++){
//   if(num[i]===findNum){
//    count++;
//   }
// }
// console.log(`${findNum} of ${count}`)


//  SECOND HIGHEST NUMBER FIND 
// const arr = [1,3,6,9,10,4];
//  let Largest = arr[0];
//  let secondLargest = -Infinity;
//  for(let i= 0; i<arr.length; i++){
//   if(arr[i] > Largest){
//      secondLargest = Largest;
//      Largest = arr[i]; 
//   }else if(arr[i] > secondLargest && arr[i]!= Largest){
//     secondLargest= arr[i];
//   }
//  }
// console.log(`largest number ${Largest} and secondlargest ${secondLargest}`)


// const arr = [1,2,4,5,8,9];
// let sum =0;
// arr.forEach((num)=>{
//   sum=+ sum+num;
// })
// console.log(`sum of number is ${sum}`)


// const arr= [ 12,2,4,7,8,12,2,4];
//  const removeDuplicate = (arr)=>{
//   return arr.filter ((value,index)=> arr.indexOf (value)==index);
//  }
//  const uniqueNum = removeDuplicate(arr);
//  console.log(uniqueNum);


const arr = [12,34,7,8,9,1];
let min= arr[0];
for(let i =0; i<arr.length-1; i--){
 
}