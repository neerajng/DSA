function plusOne(arr) {
    let num = "";
    for (let i = 0; i < arr.length; i++) {
      num = num + arr[i];
    }
    return num;
  }
  
  let number = parseInt(plusOne([1,2,3])) + 1;
  let i = 0;
  let arr1 = [];
  
  while (number !== 0) {
    let k = number % 10;
    arr1[i]=k;
    number = Math.floor(number / 10);
    i++;
  }
  let rev = []

  for(let j=arr1.length-1,i = 0;j>=0;j--){
    rev[i] = arr1[j]
    i++    
  }

  console.log(rev); 

  
  