let obj1 = {
  // func1:function(){
  func1() {
    console.log("function 1 is called");
  },
};
let obj2 = {
  nepalrank: 4567,
};
obj2.__proto__ = obj1;

class Car {
  constructor() {
    console.log("constructor are invoked while creating object");
  }
  start() {
    console.log("started");
  }
  stop() {
    console.log("stopped");
  }
  setbrand(brand) {
    this.brand = brand;
    console.log(brand);
  }
}
class child_car extends Car {
  constructor() {
    super();
  }
  minicar() {
    super.start();
  }
} //inheritance
let hundai = new Car();
let skoda = new Car();
hundai.setbrand("hundai");
let child = new child_car();


class User{
   constructor(name,email){
     this.email=email;
     this.name=name;
   }
   veiwdata(){
     console.log(this.name  + this.email);
   }
}
class admin extends User{
  editdata(){

  }
}
let object=new User("aashik","a@gmail.com");
// try catch in js;
// let a=15;
// let b=13;
// console.log(a+b);
// try{
//   console.log(a+c);
// }catch(err){
//   console.log(err);
// }
// console.log(a-b);
// callback function :passing function_name as argument
sum=(a,b)=>{
  console.log(a+b);
}
function calc(a,b,sumCallback){
  sumCallback(a,b);
}
calc(34,54,sum);
// callback hell
function getdata(dataid,getnxtdata){
  setTimeout(() => {
    console.log("data",dataid);
    if(getnxtdata){
      getnxtdata();
    }
  }, 4000);
}
getdata(1,()=>{
  console.log("getting data 2");
  getdata(2,()=>{
    console.log("getting data 3");
    getdata(3)
  });
});