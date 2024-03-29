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
let array = [2,1,3,2,4,5,6,7,4,7,12];
const findDuplicateNums = (a)=>{
let filterNums = a.filter((val,ind)=>a.indexOf(val) === ind);
let filterNums1 = [...new Set(a)];
let reduceMethods = a.reduce((uni,items)=>{
  return uni.includes(items) ? uni :[...uni,items]
},[])
return filterNums
// return filterNums1
// return reduceMethods
}
console.log(findDuplicateNums(array));

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
//substring pallindrom in a string

let a = 'madam';
        const checkPalindram=(d)=>{
            let dataInArray=d.split('');
            let finalData='';

            for(let i=dataInArray.length-1;i>=0;i--){
                finalData+=dataInArray[i]
            }

            if(d===finalData){
                console.log(d);
            }
        }
        const allPalindram=(d)=>{
            for(let i=0;i<d.length;i++){
                for(let j=i+2;j<d.length+1;j++){
                    let temp=d.substring(i,j)
                   checkPalindram(temp)
                }
            }
        }
       allPalindram(a)

//find vowel in string 
(using regex)

 let findVowel=(a)=>{
 return a.match(/[aeuio]/gi) ? a.match(/[aeuio]/gi).length : 0
 } 
console.log(findVowel('ashit kumar'));

//second method
let vowelCount = (a)=>{
  let count = 0;
  let vowel = ['a','e','i','o','u'];
  for(let char of a){
  if(vowel.includes(char.toLowerCase())){
   count++
  }
  }
  return count
 }
 console.log(vowelCount('Hello World'));

//first letter capital in a sentence

let output1 = [];
let firstCap=(n)=>{
 let splitCharcter = n.split(' ');
 for(let alph of splitCharcter){
 output1.push(alph[0].toUpperCase() + alph.slice(1) );
 }
 return output1.join(' ')
}
console.log(firstCap('hello world'));

/*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”*/


  for (let i = 0; i <= 100; i++) {
      str = (i % 5 === 0 && i % 3 === 0) ? "FizzBuzz" : (i % 3 === 0 ? "Fizz" : (i % 5 === 0) ? "Buzz" : i);
      console.log(str);
    }
//convert 12hours time to 24hours 

const convertTime12to24 = (a) => {
  const [time, newTime] = a.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (newTime === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}

console.log(convertTime12to24('01:02 PM'));

//counting group
const people = [
    {name: 'John', group: 'A'}, 
    {name: 'Andrew', group: 'C'}, 
    {name: 'Peter', group: 'A'}, 
    {name: 'James', group: 'B'}, 
    {name: 'Hanna', group: 'A'}, 
    {name: 'Adam', group: 'B'}];

const groupInfo = people.reduce((groups, person) => {
    const {A = 0, B = 0, C = 0} = groups;
    if (person.group === 'A') {
        return {...groups, A: A + 1};
    } else if (person.group === 'B') {
        return {...groups, B: B + 1};
    } else {
        return {...groups, C: C + 1};
    }

}, {});


console.log(groupInfo); // {A: 3, C: 1, B: 2}

//FizzBuzz problem is a classic coding interview question that asks you to print numbers from 1 to N,
but for multiples of 3, print "Fizz," for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."
  Here's how you can solve the FizzBuzz problem in JavaScript:
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

//To find the missing number in an array 
const arrays = [1,2,3,4,6,7,8,9];

const findTheNum = (a)=>{
 let totalSum = a.reduce((acc,nums)=> acc + nums, 0);
 let b = a.length + 1;
 let c = b*(b+1) / 2;
 return c - totalSum
}
console.log(findTheNum(arrays));

//Two sum problem in javscript
const array = [1,2,3,4,12,14,5];

const findSum = (input,output)=>{
  let result = [];
  for(let i = 0; i<input.length; i++){
    for(let j = i + 1; j <input.length; j++){
      if(input[i] + input[j] === output){
        result.push(input[i])
        result.push(input[j])
      }
    }
  }
  return result
}
console.log(findSum(array,9));
--------------------------------------------------------all array of objects---------------------------------------------------------------------------
//Object Property Frequency find out
  const votes = [
  { candidate: 'A' },
  { candidate: 'B' },
  { candidate: 'A' },
  { candidate: 'C' },
  { candidate: 'B' },
];

const voteCount = votes.reduce((count, vote) => {
  count[vote.candidate] = (count[vote.candidate] || 0) + 1;
  return count;
}, {});

console.log(voteCount);
//Filtering and Mapping:
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 16 },
  { name: 'Charlie', age: 20 },
];

const filteredNames = people.filter(person => person.age < 18).map(person => person.name);
console.log(filteredNames); // Output: [ 'Bob' ]

//Sorting Objects:

const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 },
];

const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
console.log(sortedProducts);
//Grouping Objects:
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
];

const groupedStudents = students.reduce((result, student) => {
  if (!result[student.grade]) {
    result[student.grade] = [];
  }
  result[student.grade].push(student.name);
  return result;
}, {});

console.log(groupedStudents);

//Finding Maximum Value:
const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 },
];

const maxPriceProduct = products.reduce((max, product) => (product.price > max.price ? product : max));
console.log(maxPriceProduct);
//Combining Arrays of Objects:
const store1Products = [
  { name: 'Laptop', price: 800 },
  { name: 'Phone', price: 500 },
];

const store2Products = [
  { name: 'Phone', price: 450 },
  { name: 'Tablet', price: 300 },
];

const combinedProducts = [...store1Products, ...store2Products].reduce((uniqueProducts, product) => {
  if (!uniqueProducts.some(p => p.name === product.name)) {
    uniqueProducts.push(product);
  }
  return uniqueProducts;
}, []);

console.log(combinedProducts);

//Calculating Object Property Sum:

const expenses = [
  { category: 'Food', amount: 50 },
  { category: 'Transport', amount: 30 },
  { category: 'Food', amount: 20 },
];

const expenseSumByCategory = expenses.reduce((sums, expense) => {
  sums[expense.category] = (sums[expense.category] || 0) + expense.amount;
  return sums;
}, {});

console.log(expenseSumByCategory);
//Finding Common Property:

const users1 = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

const users2 = [
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
];

const commonEmails = users1.map(user => user.email)
  .filter(email => users2.some(user => user.email === email));

console.log(commonEmails);
//Replacing Object Property:

const books = [
  { title: 'Book 1', author: 'Author 1', year: 1990 },
  { title: 'Book 2', author: 'Author 2', year: 2005 },
];

const currentYear = new Date().getFullYear();
const updatedBooks = books.map(book => ({
  ...book,
  author: book.year < 2000 ? 'Anonymous' : book.author,
}));

console.log(updatedBooks);
//Object Property Manipulation:
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
];

const salaryIncreasePercentage = 10;
const updatedEmployees = employees.map(employee => ({
  ...employee,
  salary: employee.salary * (1 + salaryIncreasePercentage / 100),
}));

console.log(updatedEmployees);
//Binary search of element in an array

const array = [1,3,12,4,5,67,8,10];

const findAnElements = (a,target)=>{
  let findIndex = a.indexOf(target);
  if(a.includes(target)){
    return `element found of ${target} in ${findIndex}`
  }else{
    return `element not found ${target}`
  }
}
console.log(findAnElements(array,121));

// all array in singale array in an array of object------------------------------------------

import "./styles.css";

const objects = [
  { name: "ashit", books: ["abc", "cde", "def"] },
  { name: "anil", books: ["pqr", "cde", "rst"] },
  { name: "sagar", books: ["abc", "cde", "xyz"] }
];

const accuAllBooks = (a) =>{
 let allBooks = a.reduce((acc,arr)=>{
   return acc.concat(arr.books)
 },[])
 return allBooks
}
console.log(accuAllBooks(objects));
------------------------------------------------filter in an array of object ------------------------------------
const objects = [
  { name: "ashit", books: ["abc", "cde", "def"] },
  { name: "anil", books: ["pqr", "cde", "rst"] },
  { name: "sagar", books: ["abc", "cde", "xyz"] }
];

let findAllBooks = objects.reduce((acc,arr)=>{
  return acc.concat(arr.books)
},[])
let filterOfAllDuplicate = findAllBooks.filter((val,ind,array)=>{
  return array.indexOf(val) === ind;
})
let secondMethod = [... new Set(findAllBooks)];
// console.log(filterOfAllDuplicate)
console.log(secondMethod)
//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

const steps = 10; // Example: 5 steps
console.log(`Number of ways to climb ${steps} stairs: ${climbStairs(steps)}`);
