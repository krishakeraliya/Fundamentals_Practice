// ES6 Features 
// 1. Use template literals 
let name='krisha'
let age=22
console.log(`My name is ${name} and I am ${age} years old`)

// 2. Implement destructuring for arrays and objects
const user={
  name1:"rahul",
  age1:22,
} 
const{name1,age1}=user
// 3. Use spread and rest operators 
const arr1=[1,2]
const arr2=[...arr1,3,4]
function sum(...numbers){
  console.log(numbers)
}
sum(1,2,3,4)
// 4. Create classes and inheritance 
class Person{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  greet(){
    console.log(`${this.name}`)
  }
}
const p1=new Person("krisha",21)
p1.greet()
// 5. Use modules (import/export) 
export function add(a,b){
  return a+b
}
import {add} from './math'
// 6. Work with Map and Set 
const map=new Map()
map.set('name','krisha')
map.get('name')
const set=new Set([1,1,2,3])
console.log(set)

// 7. Create generators and iterators
function* generator(){
  yield 1
  yield 2
}