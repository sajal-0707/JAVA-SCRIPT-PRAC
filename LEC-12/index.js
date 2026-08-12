//how to add and get elements in array
//1. Using index
let arr=[1,2,3,4,5,6,7,8,9];
// arr[5]=10;
//console.log(arr);//[ 1, 2, 3, <2 empty items>, 10 ]
// console.log(arr[3])//undefined
//access values of array in js
//let val=arr[2];
// console.log(val);//3
//2. Push and pop
//push als elements at last
// arr.push(12);//[ 1, 2, 3, <2 empty items>, 10, 12 ]
// console.log(arr);
//get element from length
// let len=arr.length;
// console.log(len-1);//6
//To remove element from last
//arr.pop();
//console.log(arr);//[ 1, 2, 3, <2 empty items>, 10 ]
//add and remove from first
//shift removes the first value
//arr.shift();
//console.log(arr);//[ 2, 3, <2 empty items>, 10 ]
// unshift adds the value to first
//arr.unshift(11)
//console.log(arr);//[ 11, 2, 3, <2 empty items>, 10 ]
//remove element of any index
//arry_name.splice(index,length)
//arr.splice(0,1);
//console.log(arr);//[ 2, 3, <2 empty items>, 10 ]
//arr.splice(4);
//console.log(arr);//[ 2, 3, <2 empty items> ]
//slice
// let no=arr.slice(0,4);
// console.log(no);//[ 1, 2, 3, 4 ]