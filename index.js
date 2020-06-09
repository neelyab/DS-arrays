const Array = require('./array')

//   function main() {
//     Array.SIZE_RATIO = 3;

//     // Create an instance of the Array class
//     let arr = new Array();

//     // Add an item to the array
//     // arr.push(3);
//     // arr.push(3);
//     // // length is 2, ptr is 0 
//     // arr.push(3);
//     // // length is 3, ptr is 6;
//     // arr.push(3);
//     // length is 4, ptr is 15
   
//     // arr.pop();
//     // arr.pop();
//     // arr.pop();
//     //length is 1, ptr is 15 because pop keeps the memory open that was previously used

//     arr.push('tauhida');
//     // result is NaN
//     console.log(arr.get(0));
// }


function stringify(string){
  if (string.includes(' ')){
    let newString = string.split(' ').join('%20')
    console.log(newString);
  }
  console.log(string);
}

function filterArray(arr){
  let newArray = [];
  for (i = 0; i < arr.length; i++){
    if(arr[i] < 5){
      arr.slice([i])
    }else{
      newArray.push(arr[i]);
    }
  }
  console.log(newArray)
}
// filterArray([1,2,3,5,8,9,1])


function addTogether(total, num){
  
      return total + num
}

function greatestSum (arr) {
 const numbers = arr.filter(num => num > 0)
  const answer = numbers.reduce(addTogether)
  console.log(answer)
}
const arr = [4, 6, -3, 5, -2, 1];
// greatestSum(arr);

function merge(arr1, arr2){
  let mergedArray = arr1;
  for (i=0; i < arr2.length; i++){
    arr1.push(arr2[i])
  }
  const newArray = mergedArray.sort((a,b)=> a - b)
  console.log(newArray)
}


// merge([1,2,5,8], [3,4,6,7])


function removeCharacters(string){
  let newString= '';
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (i=0; i < string.length; i++){
      if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o' && string[i] !== 'u' ){
        console.log(string[i])
       newString = newString + string[i]
      }
      }
    // console.log(string[i])
    // newString += string[i];
    console.log(newString)
  }
removeCharacters('adrianna elephant')

function multiplyTogether(total, num){
  
  return total * num
}


function products(array){
  let answer = []
  for(i= 0; i < array.length; i++){
    const numbers = array.slice([i])
    console.log(numbers)
   const product = numbers.reduce(multiplyTogether)
   return answer.push(product)
  }
console.log(answer)
}

products([1,2,3])