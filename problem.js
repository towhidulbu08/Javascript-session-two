function largestName(friends){
    let largest=friends[0]
         for(var i=1;i<friends.length;i++){
            const String=friends[i]
            if(String.length>largest.length)
            largest=String
         }
         return largest
}
const array=['Tamim','sakibulhasan','TowhidulIslam']

console.log(largestNum(array))







function sumOfOdds(array){
       //let sum=0;
     for(var i=0;i<array.length;i++){

        if(array[i]%2===0){
            //sum+=array[i];
        }
       
     }
      //return sum;
}
const numbers=[1,2,3,4,5,6,7,8,9]
const result=sumOfOdds(numbers)
//console.log(result)
function information(info){

    const sentence='amar nam '+info.name+ ", amar bari "+info.address+", amar boyos "+info.age
    return sentence
}

const myInfo={
    name:'mehedy',
    age:56,
    address:'Barishal'
}
//console.log(information(myInfo))
