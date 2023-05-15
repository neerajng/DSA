let salary = [1000,2000,3000]
let min=salary[0] , max=salary[0] , sum=0;

for(let i=0;i<salary.length;i++){
    if(max<salary[i]){
        max=salary[i]
    }
    if(min>salary[i]){
        min=salary[i]
    }
    sum+=salary[i]
}
let avg = (sum-(min+max))/(salary.length-2)
console.log(avg)

