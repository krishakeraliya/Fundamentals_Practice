// Object-Oriented Programming 
// 1. Create classes with constructors 
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
    
  }
  introduce(){
    console.log(`Hi my name is ${this.name} and I am  ${this.age} years old`)
  }
}
const p1=new Person("krisha",21)
p1.introduce()
// 2. Implement inheritance using extends 
class Animal{
  speak(){
    console.log("Animal make sound")
  }
}
class Dog extends Animal{
  speak(){
    console.log("dog barks")
  }
}
const dog1=new Dog()
dog1.speak()
// 3. Use getters and setters 
class Product{
  constructor(price){
    this._price=price
  }
  get price(){
    return this._price
  }
  set price(value){
    if(value<0){
      console.log("price can not be negative")
      return
    }
 this._price=value
  }
}
const p=new Product(30000)
p.price=40000
// 4. Create static methods 
class MathUtils{
  static add(a,b){
    return a+b
  }
}
MathUtils.add(5,3)
// 5. Implement private fields 
class BankAccount{
  #balance=0
  deposite(amount){
    this.#balance+=amount
  }
  getBalance(){
   return this.#balance
  }
}
const b=new BankAccount()
b.getBalance()
// 6. Demonstrate polymorphism 
class Shape {
  area(){
    console.log("area calculate")
  }
}
class Circle extends Shape{
  constructor(radius){
    super()
    this.radius=radius
  }
  area(){
    console.log("circle area")
  }
}
class Rectangle extends Shape{
  area(){
    console.log("rectangle area calculated")
  }
}
// 7. Use composition over inheritance

class Engine{
  start(){
    console.log('Engine started')
  }
}
class Car{
  constructor(){
    this.engine=new Engine()
  }
  start(){
    this.engine.start()
  }
}
const car=new Car()
car.start()