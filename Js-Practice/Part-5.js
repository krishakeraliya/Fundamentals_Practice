// Objects and Arrays 
// 1. Create and manipulate objects 
const student={
  name:"krisha",
  age:21,
  course:"information technology"
}
student.city="surat"
student.age=22

// 2. Use different methods to create objects
//object literal
const person={
  name:"krisha",
  age:21
} 
//constructor
function Person(name,age){
  this.name=name
  this.age=age
  this.greet=function(){
    console.log(`hello ${this.name}`)
  }
}
const p1=new Person("krisha",21)
p1.greet()


//factory function
function createPerson(name,age){
  return{
    name,
    age,
    greet(){
      console.log(`hi i am ${name}`)
    }
  }
}
const p2=createPerson("harshil",21)
const obj=Object.create({})
// 3. Access object properties using dot and bracket notation 
const car={
  brand:"maruti",
  model:213,
  price:40000
}
car.brand
car.model
car.price
car['brand']
car['model']
car['price']
// Dot → simple access
// Bracket → dynamic access
// 4. Loop through object properties 
const product={
name:"book",
price:30000,
category:"easy"
}
for(let key in product){
  console.log(key,product[key])
}
// 5. Create and manipulate arrays 
const fruits=["apple","banana","mango"]
fruits.push("graphs")
fruits.shift()
console.log(fruits.length)
// 6. Use array methods (map, filter, reduce, etc.) 
const numbers = [1,2,3,4,5]
const double=numbers.map(num=>num*2)
const grater=numbers.filter(num=>num>2)
const sum=numbers.reduce((acc,item)=>acc+item,0)
// 7. Implement array destructuring 
const colors=["red","green","blue"]
const [first,second,third]=colors
// 8. Sort arrays of objects
const products = [
 {name:"laptop",price:800},
 {name:"phone",price:500},
 {name:"tablet",price:300}
]
products.sort((a,b)=>a.price-b.price)

class Product{
  constructor(name,price,category){
    this.name=name
    this.price=price
    this.category=category
  }
    getdetails(){
      console.log(`${this.name},${this.price},${this.category}`)
    }
  
}
const p3=new Product("lapotop",700,"elecronics")
p3.getdetails()