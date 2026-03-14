// Control Structures 
// 1. Write if-else statements for different conditions 
let age=18;
if(age>=18){
  console.log("adult")
}else{
  console.log("child")
}
// 2. Create a switch statement for multiple cases 
let day=3;
switch(day){
  case 1: console.log("monday")
          break;
  case 2:console.log("tuesday")
         break;
  case 3:console.log("wednesday")
         break;
  case 4:console.log("thrusday")
         break;
  case 5:console.log("friday")
         break;
  case 6:console.log("saturday")
        break;
 default :console.log("wrong day")       
         
  
}
// 3. Use different types of loops (for, while, do-while) 
for(let i=0; i<=10; i++){
  console.log(i)
}
let i=0
while(i<=10){
  console.log(i)
  i++
}

do{
console.log(i)
i++
}while(i<=10)
// 4. Implement nested loops 
for(let i=0; i<=10; i++){
  for(let j=1; j<=i; j++){
    console.log(j)
  }
}
// 5. Use break and continue statements
for(let i=0; i<5; i++){
  if(i===3) break;
  console.log(i)
}
for(let i=0; i<5; i++){
  if(i===3) continue;
  console.log(i)
}