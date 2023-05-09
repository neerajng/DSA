//using for lopp
function factorial(num){
    let sum = 1;
    for(let i=2;i<=num;i++){
        sum=sum*i
    }
    return sum
}
//using recursion
function factorial(num){
   if(num<=1) return 1
   return num * factorial(num-1) 
}

console.log(factorial(6))