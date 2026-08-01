//Explicit type casting
//1. Number-> use number function to convert any data tyle into a number
let num="10";
let num2= Number(num);
console.log(typeof num);
console.log(typeof num2);
function incrementby10(num){
    return Number(num)+10;
}
let res=incrementby10(num);
console.log(Number("1,2"));
console.log(Number({}));//NaN
console.log(Number(String({})));
//2. String
console.log(String(10));//"10"
console.log(String([]));//" "
console.log(String({a:10}));//