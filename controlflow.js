//QUESTION1

function nameArray(array){
    const firstFour = array.slice(0,4).map(item=> item*8)
    const lastTwo = array.slice(-2).map(item=> item+5)
    const newArray = firstFour + ","+ array.slice(5,-2)+ ","+(lastTwo)
    console.log(newArray)
  
  }
  nameArray([3,4,5,6,7,8,7,5,9,3]);

//QUESTION2
let arrNum= [1,2,3,4,5,6,7,8,9]
let y = 0
while(y<arrNum.length){
  if(arrNum[y]===arrNum[3]){
    break;
  }
  console.log(arrNum[y]);y++;
}


//QUESTION3
let  fruits2= ['apple','plum','banana','strawberries','kiwi']
 let words =" ";
 for(let i =2;i<fruits2.length; i++){
  if(fruits2[i]==="pulm"){
continue
  }
  words+=fruits2[i]
 }
  
  console.log(words)

//QUESTION4
function myStrings(){
  let fruits = ["banana","mango","apple","melon"]
  for(element of fruits){
    console.log({element})
  }
}
myStrings();

//QUESTION5
function reverseString(str) { 
  let reversedStr = ""; 
  let x = str.length - 1; 
  while (x >= 0) { 
    reversedStr += str.substring(x, x + 1); 
    x--; 
  } 
  console.log({reversedStr}); 
} 
reverseString("Brenda")
reverseString("Edna")
reverseString("Kame")
reverseString("Faith")

