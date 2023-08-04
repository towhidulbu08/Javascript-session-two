/* 
1.no parameters, no return
2.no parameters, has return
3.has parameters, no return
4. has parameters, has return 
*/
//1.no para no return
function show(){
    console.log("hello")
}
show()
//2.has para ,no return
function add(x,y){
    console.log(x+y)
}
add(3,4)
//3.no para has return
function giveMoney(){
   const money=400;
   return money;
}
giveMoney()
//4.has para has return
function sum(a,b){
    const result=a+b;
    return result;
}
sum(a,b)