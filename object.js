//dot notation,bracket notation
const person={
    name:'Tamim',
    age:25,
    address:'Rajshahi',
    phone:'016454354'
}
const keys=Object.keys(person)
for(let key of keys){
    //console.log(person[key])
}
for(let i in person){
    console.log(i,person[i])
}