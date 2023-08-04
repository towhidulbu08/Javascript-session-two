//includes method return boolean value..
const array=['cat','dog','bird']
const result=array.includes("cat")
//console.log(result)
//slice method
const pets=['ant','camel','duck','elephant','cat']
console.log(pets.slice(2))
console.log(pets.slice(0,3))
//splice(startIndex,deleteCount,insertItem) method---> add or removes elements at certain position from an array
const item=pets.splice(2,2)
console.log(item)
console.log(pets)

