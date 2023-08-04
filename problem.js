function sumOfOdds(array){
       let sum=0;
     for(var i=0;i<array.length;i++){

        if(array[i]%2===0){
            sum+=array[i];
        }
       
     }
      return sum;
}
const numbers=[1,2,3,4,5,6,7,8,9]
const result=sumOfOdds(numbers)
console.log(result)