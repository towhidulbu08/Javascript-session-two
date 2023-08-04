function sum(num1,num2){
    var result=num1+num2;
    return result;
}
var totalSum=sum(10,20)
function subtraction(num1,num2){
    var result =num1-num2;
    return result;
}
var totalSubtraction=subtraction(200,100)
var total=totalSum+totalSubtraction;
//console.log(total)

function workout(workoutName){
    var bicepWorkOut=['a','b','c']
    var chestWorkOut=['1','3','5']
    if(workoutName==='bicep'){
        return bicepWorkOut;
    }
    else if(workoutName==='chest'){
        return chestWorkOut
    }
    else{
        return 'dont know';
    }
}
var workOutPlan=workout('1')
//console.log(workOutPlan)
function checkingAlphabet(alphabet){
    if(alphabet==='a'||alphabet==='e'||alphabet==='i'||alphabet==='o'||alphabet==='u'){
        return "Vowel"
    }
    else if(alphabet===0||alphabet<0||alphabet>0){
        return 'digit'
    }
    else{
        return 'consonant'
    }
}
var output=checkingAlphabet(1.1)
console.log(output)