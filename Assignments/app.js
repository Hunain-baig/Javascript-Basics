// CHAPTER ONE:
// Q1:

// alert();

// Q2:

// alert('Error! Please enter a valid password');

// Q3:

// alert('Welcome to JS land.. \n Happy coding!');

// Q4:

// alert('Welcome to JS land');

// alert('Happy coding! \n Prevent this page from additional dialogs');

// Q5: Ans is ---> Simple you create popup by usning console when you inspect the page, simply type alert('') and type message between the brackets

// CHAPTER TWO:
// Q1:

// var username = '';

// Q2:

// var username = 'Honey Baig';

// Q3:

// var message = 'Hello world';

// alert(message);

// Q4:

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

// Q5:

// alert('Pizza \n Pizz \n Piz \n Pi \n P');

// Q6:

// var email = 'My email address is xunainali4@gmail.com';
// alert(email)

// Q7:

// var book = 'i am tyring to learn from the book. A smarter \n way to learn javascript';
// alert(book)

// Q8:

// document.body.innerHTML = 'Yah! i can write content through javascript';

// Q9:

// var charac = '';
// alert(charac)

// CHAPTER THREE:
// Q1:

// var age = 21;
// alert('Your age is ' + age);

// Q2:

// Q3:

// var birthyear = 2001;
// document.body.innerHTML = 'My birth year is 2001 <br /> data type of my declared variable is number';

// CHAPTER FOUR:
//Q1:

// var a, b, c

// Q2:
// LEGAL VARIABLE

// var myVariable
// var _myVariable
// var $myVariable
// var myVariable12
// var my_variable
// var va12riable

// IILEGAL VARIABLE

// var 12myVariable
// var my Variable
// var my-Variable
// var !myVariable
// var @myVariable

// Q3: Rules for variable
// Ans: Varible can only start with letters not number
//      No special characters use in the stating of variable except two characters i.e "$" and "_"
//      Javascript is case sensitive programming language if you dont follow the syntax rules accuratley you will get Error!

// CHAPTER FIVE:
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

// Q5:

// Q6:

// Q7:

// Q8:

// Q9:

// Q10:

// Q11:

// Q12:

// Q13:

// IF ELSE STATEMENT EXCERCISE:

// Q1:

// var number = +prompt('enter the number');

// if(number % 3 === 0 ){
// console.log('The number you given is divisible by 9 ' + 3);
// }else{
// console.log('The number is not divisible by 3');
// }

// Q2:

// var num = +prompt('Enter the number');

// if( num % 2 === 0){
// console.log('The number you give is even');
// } else[
//     console.log('The number you give is odd')
// ]

// Q3:

// var age = +prompt('Enter the age');

// if(age>18 ){
// console.log('Old enough');
// } else{
//     console.log('Too ypung');
// }

// Q4:

// var userName = prompt('Enter the name');
// var myNAme = 'hunain'
// if(userName == myNAme){
// console.log('Yay! we have same names');
// } else{
// }

// Q5:

// var num = +prompt("Enter the number");
// if (num % 3 !== 0) {
//   console.log("number is not divisible by 3");
// } else {
//   num % 3 === 0;
//   console.log("Number is divisible by 3");
// }

// Q6:

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

// Q7:

// Q8:

// Q9:

// var year = +prompt('Enter the year');
// if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0 ){
// console.log('This year ' + year + ' is a leap year');
// } else{
//     console.log('This year is not a leap year');
// }

// Q 10:

// var password1 = prompt('Enter password');
// var password2 = prompt('Enter to confirm password');

// if (password1 === password2){
// console.log('Correct!');
// } else {
// console.log('Incorrect!');
// }

// Q11:

// var userName = prompt('Enter username');
// var firstName = 'hunain';

// if(userName === firstName){
// console.log('Hello Hunain');
// } else {
//     console.log('You are not Hunain');
// }

// Q12:

// var hour = +prompt("Enter the with respect to 24 hour's")

// if (hour < 18){
// console.log('Good day!');
// } else if ( hour <= 24){
// console.log('Good evening!');
// } else {
//     console.log('Sahi time likh chomu!');
// }

// Q13:

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

// Q14:

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

// Q15:

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

// Q16:


// Q17:

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

// Q18:

// var a = 10, b =8;
// if(a>b){
// console.log('True');
// }else{
//     console.log('False');
// }

// Q19:

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


// Q20:

// let age = prompt('Enter you age');
// console.log(age >= 18 ? "You can vote" : "You can not vote");
