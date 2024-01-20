var name="aashiq"
let age=7
var mess=`${name} age is ${age}`
var len=mess.length
//console.log('your name is ' +(a))
//console.log(app + a)
console.log(mess.trim())//trim removes whitespaces from beg and end
console.log(`length of mess is \n${len}`)
var pos=mess.indexOf('is');
console.log(pos)
// var sub=mess.slice(0,5)
//  sub=mess.substring(2,5)
// var sub=mess.substr(2,5)
var rep=mess.replace('aashiq','popcorn')
console.log(rep.toUpperCase())
console.log(rep.concat("hello i am concat"))
var char4=mess.charAt(3)
console.log(char4)
let arr=new Array(0,1,1,23,44,
"hello")
let employee ={
    name:"apple",
    id:1
}
for(key1 in employee){
    console.log(`${key1} has value ${employee[key1]} `)
}
// console.log(arr)
// console.log(employee)
// // var n=prompt("enter your name");
// // console.log(n) 
// function calculate(age){
//     console.log("your age is "+age)
// }
// calculate(age);
// let conf=confirm("are you sure")
// if(conf){
//     console.log("u have confirmed");
// }
// else{
//     console.log("u have not confirmed");
// }
