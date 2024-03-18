//? CHAPTER ONE:
//! Q1:

// alert();

//! Q2:

// alert('Error! Please enter a valid password');

//1 Q3:

// alert('Welcome to JS land.. \n Happy coding!');

//! Q4:

// alert('Welcome to JS land');

// alert('Happy coding! \n Prevent this page from additional dialogs');

//! Q5: Ans is ---> Simple you create popup by usning console when you inspect the page, simply type alert('') and type message between the brackets

//? CHAPTER TWO:
//! Q1:

// var username = '';

//1 Q2:

// var username = 'Honey Baig';

//! Q3:

// var message = 'Hello world';

// alert(message);

//! Q4:

// var firstName = 'Jhon Doe';
// alert(firstName)

// var age = 15 + " years old";
// alert(age)

// var message = 'Certified Mobile Application Development';
// alert(message)

// var message = "Thanks, ";
// var userName = "Susan";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

//! Q5:

// alert('Pizza \n Pizz \n Piz \n Pi \n P');

//! Q6:

// var email = 'My email address is xunainali4@gmail.com';
// alert(email)

//! Q7:

// var book = 'i am tyring to learn from the book. A smarter \n way to learn javascript';
// alert(book)

//! Q8:

// document.body.innerHTML = 'Yah! i can write content through javascript';

//! Q9:

// var charac = '';
// alert(charac)

//? CHAPTER THREE:
//! Q1:

// var age = 21;
// alert('Your age is ' + age);

// Q2:

// Q3:

// var birthyear = 2001;
// document.body.innerHTML = 'My birth year is 2001 <br /> data type of my declared variable is number';

//? CHAPTER FOUR:
//! Q1:

// var a, b, c

//! Q2:
// LEGAL VARIABLE

// var myVariable
// var _myVariable
// var $myVariable
// var myVariable12
// var my_variable
// var va12riable

//! IILEGAL VARIABLE

// var 12myVariable
// var my Variable
// var my-Variable
// var !myVariable
// var @myVariable

//! Q3: Rules for variable
// Ans: Varible can only start with letters not number
//      No special characters use in the stating of variable except two characters i.e "$" and "_"
//      Javascript is case sensitive programming language if you dont follow the syntax rules accuratley you will get Error!

//? CHAPTER FIVE:
// Q1:

// Q2:

// Q3:

// Q4:

// function creatingTable(num) {
//     console.log (num + " x 1 = " + num * 1 )
//     console.log (num + " x 2 = " + num * 2 )
//     console.log (num + " x 3 = " + num * 3 )
//     console.log (num + " x 4 = " + num * 4 )
//     console.log (num + " x 5 = " + num * 5 )
//     console.log (num + " x 6 = " + num * 6 )
//     console.log (num + " x 7 = " + num * 7 )
//     console.log (num + " x 8 = " + num * 8 )
//     console.log (num + " x 19 = " + num * 9 )
//     console.log (num + " x 10 = " + num * 10 )
// }

// var num = +prompt ('Enter The Number ');
// creatingTable(num)

//! Q5:

//! Q6:

//! Q7:

//! Q8:

//! Q9:

//! Q10:

//! Q11:

//! Q12:

//! Q13:

//? IF ELSE STATEMENT EXCERCISE:

//! Q1:

// var number = +prompt('enter the number');

// if(number % 3 === 0 ){
// console.log('The number you given is divisible by 9 ' + 3);
// }else{
// console.log('The number is not divisible by 3');
// }

//! Q2:

// var num = +prompt('Enter the number');

// if( num % 2 === 0){
// console.log('The number you give is even');
// } else[
//     console.log('The number you give is odd')
// ]

//! Q3:

// var age = +prompt('Enter the age');

// if(age>18 ){
// console.log('Old enough');
// } else{
//     console.log('Too ypung');
// }

//! Q4:

// var userName = prompt('Enter the name');
// var myNAme = 'hunain'
// if(userName == myNAme){
// console.log('Yay! we have same names');
// } else{
// }

//! Q5:

// var num = +prompt("Enter the number");
// if (num % 3 !== 0) {
//   console.log("number is not divisible by 3");
// } else {
//   num % 3 === 0;
//   console.log("Number is divisible by 3");
// }

//! Q6:

// function checkCharacterType(character) {
//   var charCode = character.charCodeAt(0);
//   if (charCode >= 48 && charCode <= 57) {
//     console.log("NUmber");
//   } else if (charCode >= 65 && charCode <= 90) {
//     console.log("uppercase");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("lowercase");
//   } else {
//     console.log("other characters");
//   }
// }
// var input = prompt("enter the character");
// var result = checkCharacterType(input);

//! Q7:

//! Q8:

//! Q9:

// var year = +prompt('Enter the year');
// if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0 ){
// console.log('This year ' + year + ' is a leap year');
// } else{
//     console.log('This year is not a leap year');
// }

//! Q 10:

// var password1 = prompt('Enter password');
// var password2 = prompt('Enter to confirm password');

// if (password1 === password2){
// console.log('Correct!');
// } else {
// console.log('Incorrect!');
// }

//! Q11:

// var userName = prompt('Enter username');
// var firstName = 'hunain';

// if(userName === firstName){
// console.log('Hello Hunain');
// } else {
//     console.log('You are not Hunain');
// }

//! Q12:

// var hour = +prompt("Enter the with respect to 24 hour's")

// if (hour < 18){
// console.log('Good day!');
// } else if ( hour <= 24){
// console.log('Good evening!');
// } else {
//     console.log('Sahi time likh chomu!');
// }

//! Q13:

// var integer1 = +prompt('Enter the first integer!')
// var integer2 = +prompt('Enter the second integer!')

// if (integer1 === integer2) {
//     console.log(integer1 + ' & ' + integer2 +' both integer are equal ')
// } else if (integer1 > integer2 ){
// console.log(integer1 + ' & ' + integer2 + ' integer1 is greater than integer 2');
// } else if (integer1 < integer2){
// console.log(integer1 + ' & ' + integer2 + ' integer1 is less than integer2');
// } else{
//     console.log('please put the corect integer');
// }

//! Q14:

// var num = +prompt('Enter the number');

// if(num > 0 ) {
// console.log('The number you enter is positive')
// } else if (num < 0 ) {
// console.log('The number you enter is negative');
// } else if (num === 0){
// console.log('The number you enter is zero');
// } else{
//     console.log('Please provide the number rather than give other symbols');
// }

//! Q15:

// var hour = +prompt("Enter the current hour");

// if (hour >= 6 && hour < 9) {
//   console.log("Breakfast served");
// } else if (hour >= 9 && hour < 11) {
//   console.log("Breakfast time is over");
// } else if (hour >= 11 && hour < 15) {
//   console.log("Time for lunch");
// } else if (hour >= 15 && hour < 18) {
//   console.log("It's dinner time");
// } else if (hour >= 18 && hour < 19) {
//   console.log("Dinner time is over");
// } else if (hour >= 19 && hour <= 24) {
//   console.log("Sorry, you will have to wait or go get a snack");
// } else {
//   console.log("Enter the correct time!");
// }

//! Q16:

//! Q17:

// var character = prompt("Ente the character");

// if (character.length > 1) {
//   console.log("Put only one character");
// } else if (
//   character === "a" ||
//   character === "e" ||
//   character === "i" ||
//   character === "o" ||
//   character === "u"
// ) {
//   console.log("Yes! its a vovel");
// } else {
//   console.log("Its not a vovel");
// }

//! Q18:

// var a = 10, b =8;
// if(a>b){
// console.log('True');
// }else{
//     console.log('False');
// }

//! Q19:

// let month = prompt('Enter the month number(1--10)');
// switch (month){
//     case '1':
//         console.log('January');
//         break;
//     case '2':
//         console.log('February');
//         break;
//     case '3':
//         console.log('March');
//         break;
//     case '4':
//         console.log('April');
//         break;
//     case '5':
//         console.log('May');
//         break;
//     case '6':
//         console.log('June');
//         break;
//     case '7':
//         console.log('July');
//         break;
//     case '8':
//         console.log('August');
//         break;
//     case '9':
//         console.log('September');
//         break;
//     case '10':
//         console.log('October');
//         break;
//     case '11':
//         console.log('November');
//         break;
//     case '12':
//         console.log('December');
//         break;

//     default:
//         console.log('Enter the valid month number');
// }

//! Q20:

// let age = prompt('Enter you age');
// console.log(age >= 18 ? "You can vote" : "You can not vote");

// --------------------------------------------------------------------------------------------------

//* | IF STATEMENTS NESTED | ARRAYS |

//? Q1:

// let studentsName = [ ]

//? Q2:

// let studentsName = {}

//? Q3:

// let carBrand = [ 'tesla', 'bmw', 'honda', 'corolla', 'suzuki', 'yamaha'];

//? Q4:

// let studentAges = [ 21, 22, 24, 26, 27];

//? Q5:

// let truefalse = [true, false, true]

// console.log(typeof truefalse);

//? Q6:

// let misxedArr = ['hunian', 'ali', 'baig', 24, 25, true, false];

//? Q7:

// let simArr = ['telenor', 'jazz', 'zong', 'ufobne'];

//? Q8:

// let qualifications = ['SSC', 'HSC', 'BSC', 'BS', 'B.COM', 'MS', 'M.PHIL', 'PHD']
// let div = document.querySelector('div');

// for(i=0; i<qualifications.length; i++){
//     console.log(qualifications[i]);
// div.innerHTML += `<div> ${qualifications[i]} </div>`
// }

//? Q9:

//? Q10:

// let favCars = ['audi', 'volvo', 'ford', 'lamborghini'];
// console.log(`first index of array: ${favCars[0]}`);
// console.log(`car at first index of array: ${favCars[0]}`);
// console.log(`last index of array: ${favCars.length-1}`); // when you minus 1 form the favCars.length you obtained the index value!!
// console.log(`car at first index of array: ${favCars[3]}`);

//? Q11:

// let students = ['hunain', 'ali', 'baig'];
// let score = [350, 400, 500];
// let total = 500;
// let percentage = [score/total*100, score/total*100, score/total*100 ]

// for(i=0; i <= 3; i++){
//     console.log(`score of ${students[i]} is ${score[i]}. percentage ${percentage[i]}% `);
// }

//? Q12:

//? Q13:

// let fruits = ['strawberry','apple','orange','banana'];
// let sortFruits = fruits.sort();
// console.log(`Ordered fruit list ${sortFruits}`);

//? Q14:

// let fruits = ['strawberry','apple','orange','banana'];
// let sortFruits = fruits.sort();
// console.log(`Ordered fruit list ${sortFruits}`);

//? Q15:

// let cities = ['karachi','lahore','islamabad','quetta','pechawar'];
// let selectedCities = cities.slice(2,4);
// console.log(selectedCities);

//? Q16:

// let a = ["this", "is", "my", "cat"];
// let joinA = a.join(" ");  // if we use single or double quote code will run
// console.log(joinA);

//? Q17:

//? Q18:

//? Q19:

// let phoneBrands = ['apple', 'samsung','motorla','nokia','sony','haier','vivo'];
// let select = document.querySelector('select');

// for (i=0; i <phoneBrands.length; i++){
//     select.innerHTML += `<option>${phoneBrands[i]}</option>`;
// }

//? Q20:

// let nestedArr = [[]];

//? Q21:

// let matrix = [
//   [1, 0, 1, 2], // index 0 ==> indices 0,1,2,3
//   [0, 1, 2, 1], // index 1 ==> indices 0,1,2,3
//   [2, 1, 0, 1], // index 2 ==> indices 0,1,2,3
// ];
// console.log(matrix[0][3]);

// ------------------------------------------------------------------------------------------------

//* LOOPS:

//? Q1:

// for (let i = 1; i <= 5; i++){
// console.log(`Hello World ${i}`);
// }

//? Q2:

// for (let i = 1; i<= 10; i++){
// console.log(i);
// }

//? Q3:

// const tableNumber = +prompt('enter the number');
// const tableLength = +prompt('enter the length');

// for (let i = 1; i <= tableLength; i++){
//     console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
// }

//? Q4:

// let a = ['nokia', 'samsung', 'apple', 'sony', 'huawei'];
// const div = document.querySelector('div');

// for (let i = 0; i < a.length; i++){
// div.innerHTML += `<h1>${a[i]}</h1>`
// }

//? Q5:

// let fruits = ['apple','banana','mango','orange','strawberry'];
// const firstdiv = document.querySelector('.firstdiv');
// const seconddiv = document.querySelector('.seconddiv');

// for(let i =0; i < fruits.length; i++){
// firstdiv.innerHTML += `<p>${fruits[i]}</p>`
// seconddiv.innerHTML += `<p>element at index ${i} is ${fruits[i]}</p>`
// }

//? Q6:

// const numberOfItems = +prompt('Enter the number of items');

// const firstDiv = document.querySelector('#first');
// const secondUl = document.querySelector('#second');

// for (let i = 0 ; i < numberOfItems; i++){
// const value = prompt(`Enter the value of index ${i}`);
// secondUl.innerHTML += `<li>${value}</li>`
// }

// firstDiv.innerHTML += `<h1>Number Of Items: ${i}</h1>`

//? Q7:

// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");
// const fourth = document.querySelector(".fourth");
// const fifth = document.querySelector(".fifth");

// const counting = 10;
// for (let i = 0; i <= counting; i++) {
//   first.innerHTML += ` ${i} `;
// }

// const revCounting = 0;
// for (let i = 10; i > revCounting; i--) {
//     second.innerHTML += ` ${ i } `
// }

// const even = 10;
// for(let i = 0; i <= even; i += 2){
// third.innerHTML += ` ${ i } `
// }

// const odd = 19;
// for(let i = 1; i <= odd; i += 2){
// fourth.innerHTML += ` ${ i } `
// }

// const series = 20;
// for (let i = 0; i <= series; i += 2) {
//   fifth.innerHTML += ` ${ i }k, `;
// }

//? Q8:

// const items = prompt('Serach for the items')
// const arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// if(arr.includes(items.toLocaleLowerCase())){
// alert('Yes! Availbale')
// }else{
//     alert('Sorry! Not Available')
// }

//? Q9:

// const arr = [24, 56, 87, 89, 98];
// let largest = arr[0];
// const firstdiv = document.querySelector('.one')
// const seconddiv = document.querySelector('.two')

// for (let i = 0; i < largest; i++){
// if(arr[i] > largest){
// largest = arr[i]
// }
// }

// firstdiv.innerHTML = `Array Items: ${arr}`
// seconddiv.innerHTML += `the largest number of array is ==> ${largest}`

// console.log(largest);

//? Q10:

// const arr = [23, 56,89,98,12];
// let smallArray = arr[0];

// const firstdiv = document.querySelector('.three');
// const seconddiv = document.querySelector('.four');

// for(let i = 0; i < smallArray; i++){
// if (arr[i] < smallArray) {
//     smallArray = arr[i]
// }
// }

// firstdiv.innerHTML = `Array Items: ${arr}`
// seconddiv.innerHTML = `The smallest number is ==> ${smallArray}`;

//? Q11:

// const arr = [ 23 , 56 , 89 , 98 , 12 ];

// let smallArray = arr[0];
// let largestArray = arr[0];

// const firstdiv = document.querySelector('.five');
// const seconddiv = document.querySelector('.six');
// const thirddiv = document.querySelector('.seven');

// for(let i = 0; i < smallArray; i++){
// if (arr[i] < smallArray) {
//     smallArray = arr[i]
// }
// }

// for (let i = 0; i < largestArray; i++){
// if(arr[i] > largestArray){
// largestArray = arr[i]
// }
// }

// firstdiv.innerHTML = `Array Items: ${arr}`;
// seconddiv.innerHTML = `The smallest number is ==> ${smallArray}`;
// thirddiv.innerHTML = `The largest number is ==> ${largestArray}`;

//? Q12:

// const divv = document.querySelector('.awami')
// const multiple = 100;
// for(let i = 0; i <= multiple; i += 5){
// divv.innerHTML += ` ${ i } `
// }

//? Q13:

// const div2 = document.querySelector('.awami2')

// let obj = {
//     Students : "Scores",
//     Ali : 58,
//     Sami : 73,
//     Taha : 89,
//     Inam : 90
// }

// for (let key in obj){
//     div2.innerHTML += `<h1>${key} ==> ${obj[key]}</h1>`
// }

//? Q14:

// let stopppingValue = prompt("Enter the stopping value");
// let arr = [12, 34, 5, 67, 89, 92];

// for (let i = 0; i < arr[i]; i++) {
  // console.log(arr[i]);

//   if (stopppingValue == arr[i]) {
//       break
//     }
//     console.log(arr[i]);
// }


//? Q15:

// const div = document.querySelector('.awami');

// const arr = [[1, 2, 3], [4, 5, 6], [7 , 8, 9]];

// for (let i = 0; i <arr.length; i++){

// }
// console.log(arr);

// div.innerHTML += `<h1>${arr[0]}</h1>`
// div.innerHTML += `<h1>${arr[1]}</h1>`
// div.innerHTML += `<h1>${arr[2]}</h1>`

//? Q16:

// const div = document.querySelector('.awami');

// const user = +prompt('Enter the number');

// for (let i = user; i > 0; i--){
// console.log(i-0.5);

//     div.innerHTML += `${i-0.5}`
// }

//? Q17:

// let even = 0;
// let odd = 0;

// for(let i = 0; i <= 20; i++){
// if(i % 2 === 0){
//     console.log(`Even numbers = ${i}`);

// }
// else if(i % 2 !== 0){
//     console.log(`Odd number = ${i}`);
// }
// }

//? Q18:

// let n = +prompt('Enter the value to calculate odd integer multiplication');
// let mul = 1;

// for(let i = 1; i <= n; i++){
//     if(i % 2 !== 0){
// console.log(i);
//         mul = mul * i;

//     }
// }
// console.log(`The product of odd integer = ${mul}`);

//? Q19:

// const val = +prompt('Enter the postive number')

// for(let i = val; i > 1; i-- ){
//     console.log('*'.repeat(i-1));
// }

//? Q20:

// //* a:

// for(let i = 4; i < 5; i++){
// console.log(
//   `${"*".repeat(i)}\n${"*".repeat(i)}\n${"*".repeat(i)}\n${"*".repeat(i)}`
// );
// }

// for (let j = 4; j < 5; j++) {
//   console.log("*".repeat(j));
// }

//* b:

// const val = +prompt('Enter the number');

// for(let i = 1; i < val; i++){
//     console.log('*'.repeat(i));
// }

//* c:

// const val = +prompt('Enter the number')
// for(let i = val; i>1; i--){
//     console.log('*'.repeat(i-1));

// }

// let user = {
//     name : 'm. hunina ali baig',
//     email : 'xunainali4@gmail.com',
//     age : 21,
//     greetUser : function(){
//         console.log('Hello');
//     },

//     fruits: ['apple', 'banana', 'orange', {
//         name : 'usman',
//         fruits2: ['apple', {
//         name: 'ammar'
//         }]
//     } ]

// }

// user.greetUser()

// console.log(user.fruits[3].fruits2[1].name)

// const div = document.querySelector('.awami');

// let students = [
//     {name : 'Alice', age:20, grade: 'A'},
//     {name : 'Bob', age:22, grade: 'B'},
//     {name : 'Mutahir', age:21, grade: 'C'}
// ];

// for(let i = 0; i < students.length; i++){
// console.log(students[i].name);
// }
