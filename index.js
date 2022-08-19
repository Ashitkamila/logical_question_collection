let arrayNums = [1, 2, 3, 5, 4, 6, 7, 8, 12, 11, 17];
//find prime number
let isPrimeNums = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return n > 1;
};

console.log(arrayNums.filter(isPrimeNums));
//find even&odd number
let isOdd = (a) => {
  for (let i = 2; i <= a; i++) {
    // if(a%2===0){
    //     return true;
    // }
    if (a % 2 !== 0) {
      return true;
    }
  }
};
// console.log(arrayNums.filter(isEven));
console.log(arrayNums.filter(isOdd));

//swap the zero to last
let array1 = [1, 0, 5, 3, 0, 8, 0, 9, 0];
function swapZero(array1) {
  for (let i = array1.length - 1; i >= 0; i--) {
    if (array1[i] == 0) {
      array1.splice(i, 1);
      array1.push(0);
    }
  }
  return array1;
}
console.log(swapZero(array1));

//unique number
let array2 = [1, 2, 3, 2, 5, 3, 7, 8, 9, 4, 6, 4];
let uniqueNum = [];
for (let val of array2) {
  if (!uniqueNum.includes(val)) {
    uniqueNum.push(val);
  }
}
console.log(uniqueNum);

//duplicate number

let findDuplicate = array2.filter((val, ind, arr) => arr.indexOf(val) !== ind);
console.log(findDuplicate);

//is Anagram
let isAnagram = function (str1, str2) {
  let sorted1 = str1.split("").sort().join("").toLowerCase();
  let sorted2 = str2.split("").sort().join("").toLowerCase();
  return sorted1 === sorted2;
};
console.log(isAnagram("Hello", "Jello"));
console.log(isAnagram("pappu", "apppu"));

//reverse string without method
let string = "ashit";
let reverseString = "";
function reverse(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}
console.log(reverse(string));

//with method
let reverseString1 = string.split("").reverse().join("");
console.log(reverseString1);

//find secondLargest without method
let array3 = [1, 5, 15, 3, 6, 58, 7, 9, 11];
let secondLargestNoUsingArrowFunction = (n) => {
  let max1 = n[0];
  let max2 = n[0];
  for (let i = 1; i < n.length; i++) {
    if (max1 < n[i]) {
      max2 = max1;
      max1 = n[i];
    } else if (max2 < n[i] || max1 === max2) {
      max2 = n[i];
    }
  }
  console.log(max2);
};
secondLargestNoUsingArrowFunction(array3);
//bubblesort without methods

let array4 = [67, 98, 34, 6, 475, 23, 4, 1];
let bubbleShortUsingArrowFunction = (n) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length - 1 - i; j++) {
      if (n[j] > n[j + 1]) {
        let temp = n[j];
        n[j] = n[j + 1];
        n[j + 1] = temp;
      }
    }
  }
  console.log(n);
};

bubbleShortUsingArrowFunction(array4);

//fibonaci series

let fibonaciWithAnonymousFucntion = function (n) {
  let a = 0;
  let b = 1;
  let c = 0;
  while (c <= n) {
    console.log(c);
    a = b;
    b = c;
    c = a + b;
  }
};

fibonaciWithAnonymousFucntion(20);

//function currying nth sum

let sum = (a) => {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};
console.log(sum(10)(15)(20)(10)());

//check pallindrom

function pallindrom(str) {
  let a = str.split('').reverse().join('');
  if(str===a){
    return true
  }else{
    false
  }
}
console.log(pallindrom("madam"));

//flaten array

let array5 = [1, 2, [4, 6, [10, 13, [24, 50]]]];
let output3 = [];
function flatenArr(array5) {
    for (let i = 0; i < array5.length; i++) {
        if (Array.isArray(array5[i])) {
            flatenArr(array5[i])
        } else {
            output3.push(array5[i])
        }

    }
    return output3
}
console.log(flatenArr(array5));

// second method

let output2 = [];

function flatenArray(array5) {
    array5.map((b) => {
        if (Array.isArray(b)) {
            flatenArray(b)
        } else {
            output2.push(b)
        }
    })
 return output2
}

console.log(flatenArray(array5));
//counting paricular char in string
let array8 = ['Hello world'];
let output8 = [];
let count = 0;
let map = array8.map((a)=>{
   a.split('').forEach((b)=>{
     if(b==='l'){
       count++;
     }
     return count
   })
})
console.log(`No of l is-${count}`);

//Alternative upper and lower case
let string2 = 'Ashit Kumar Kamila';
function alternativeCase(a){
  let b =a.toLowerCase().split('');
  for(let i =0;i<b.length;i+=2){
    b[i] = b[i].toUpperCase();
  }
  return b.join('')
}console.log(alternativeCase(string2));

//permutation
let string3 ='ashit';
let permutation=(string3,result)=>{
    if(string3.length===0){
        console.log(result);
    }
    for(let i =0;i<string3.length; i++){
        let rest = string3.substring(0,i)+string3.substring(i+1);
        permutation(rest,result+string3[i])
    }
}
 console.log(permutation(string3,'')); 

 //No of element count in an array
 let array6 = [1,2,5,1,3,5,10,11,12,15,10];
 let obj={};
 array6.forEach((n)=>{
    obj[n]= obj[n]+1 ||1;
 })
 console.log(obj);

 //No of letter count in an array

 let string4 = 'Ashit Kumar';
 let obj1={};
 let c =string4.toLowerCase().split('')
 c.forEach((n)=>{
    obj1[n]= obj1[n]+1 ||1;
 })
 console.log(obj1);
 //No of counting occurance of charc

 let array7 = ['ashit','sagar','rakesh','ashit','rakesh'];
 let obj2={};
 array7.forEach((val)=>{
    obj2[val] = obj2[val]+1 || 1
 })
 console.log(obj2);

 //find largest charc

 let findLargest =(a)=>{
    let newCha = a.split(' ');
    let newCha1 = newCha.reduce((cur,pre)=>{
        return cur.length>pre.length?cur:pre
    })
    return newCha1
 }
console.log(findLargest('my name is ashit'));

//largest char of length

let findLargCharLength = (a)=>{
    let d = a.split('');
    let e = d.sort((p,q)=>{
        return p.length-q.length;
    })
    return e.length
}
console.log(findLargCharLength('my name is ashit'));

//duplicate string
function findDuplicateString(str){
    let r = str.split('').filter((value,index,array)=>{
        return array.indexOf(value)===index
    }).join('')
    return r
}
console.log(findDuplicateString('harhar'));
//nested array of obj and find average of nos

const someArray = [
    {
        name: 'Some Item',
        id: 12223,
        type: {
            category: {
                attributes: [
            {
                element: 'earth',
                nature: 'calm',
                power: 2899
            },
            {
                element: 'magic',
                nature: 'feurious',
                power: 1300
            },
            {
                element: 'water',
                nature: 'stable',
                power: 907
           },
            ]
            }
        }
    }
   
    ]
    let findThePower = someArray.map((val)=>val.type.category.attributes.map((value)=>value.power));
   let flatTheArr = findThePower.flat(1);
   let findAverage = flatTheArr.reduce((cur,pre)=>{
    return (cur+pre)/flatTheArr.length
   });
   console.log(findAverage);
//find 20 positive numbers those are divisble wit 7 and when divide by 2,3,4,5,6 reminder will be 1

let count1 =1;
for(let i =7;count<=20;i++){
  if(i%7===0 && i%2===1 && i%3===1 && i%4===1 && i%5===1 && i%6===1){
    console.log(i);
    count++;
  }
}
//hello print 10tmes in 1sec duration

let g = setInterval(()=>{
    console.log('Hello');
},1000);
let h = setTimeout(()=>{
    clearInterval(g)
},10000)

//chunk the array

let array2 = [1, 5, 15, 3, 6, 58, 7, 9, 11,20];
let chunk = 3;
let output = [];

for(let i = 0;i<array2.length;i+chunk){
output.push(array2.splice(i,i+chunk));
}
console.log(output);
//counting boomerangs

const array = [1,7,1,7,7,1,7,1,7]
let count = 0;

function countingBoomerangs(a){
  for(let i =0;i<a.length;i++){
   if(a[i] !== a[i+1] && a[i] === a[i+2]){
     count++;
   }
  }
  return count
}
console.log(countingBoomerangs(array));

//subarray is a contiguous part of an array.
const array = [-2,1,-3,4,-1,2,1,-5,4];
function maxSum(arr){
  let a1 = 0
  let a2 = arr[0]
  arr.forEach((i,a) => {
    a1 = Math.max(i, a1 + i)
    a2 = Math.max(a2, a1)
  })
  return a2
}
console.log(maxSum(array));

//find permutation
let findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i];

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
  
    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}
console.log(findPermutations('abc'));

//valid parenthesis

let findBalancedBracket = (bracket)=>{
   let stack = [];
   for(let char of bracket){
    if(char === '('){
    stack.push(char)
    }else{
    let lastChar = stack.pop();
    if(lastChar!=='('){
    return false
    }
    }
   }
   if(stack.length !==0){
   return false
   }
   return true
}
console.log(findBalancedBracket('()'));
console.log(findBalancedBracket('())'));
