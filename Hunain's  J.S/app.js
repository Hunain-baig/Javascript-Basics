// var myName = 'Hunain Baig';

// var myAge = 21; 

// console.log(myAge);

// var _myName = 'Honey';
// console.log(_myName)

// var 1myName = 'honeyyyyyy';
// console.log(1myName);  // Not folllow the syntax rule

// var _1my__Name = 'Baig';
// console.log(_1my__Name);

// var $myName = 'Ali Baig';
// console.log($myName);

//-----------------------------------------------------------------------------------------------------------------------

// DATA TYPES IN JAVASRCIPT:

// = called Assignment Operator

// var myName = 'Hunain Baig';
// console.log(myName);
// console.log(typeof(myName));

// var myAge = 21;
// console.log(myAge);
// console.log(typeof(myAge));

// var iAmHoney = true;
// console.log(iAmHoney);
// console.log(typeof(iAmHoney));

// var iAmhoney = false;
// console.log(iAmhoney);
// console.log(typeof(iAmhoney));

//-----------------------------------------------------------------------------------------------------------------------

// DataTypes Practise

// console.log(10 + "20"); // + concate kar raha hai
// console.log(10 + 20);
// console.log(9 - "5"); // 1st Bug in J.S ..  minus(-) concate nahi kar raha may be this is bug because there is no logic behind this 
// console.log(9 - 5);
// console.log("Java " + "Script"); // string + string result in concate
// console.log(" " + " "); 
// console.log(" " + 0); 
// console.log("Hunain " - "Baig"); // if you minus the strings together result will be NaN and its stands for not a number 
// console.log(true + true); // in javaScript 1 represent true and 0 represent false
// console.log(true + false);
// console.log(false + true);
// console.log(false - true); // 0 -1 result will be - 1
// console.log(true - true);
// console.log(true - false);
// console.log(false - false);
// console.log(false + false);

//-----------------------------------------------------------------------------------------------------------------------

// QUESTION IS D/F B/T null and undefined?

// var useless = null; // Ap ne ghar bananay or usmy ap reh hi nahi rahy to ye useless hai isi tarah ye null value bhi useless hai
// console.log(useless);
// console.log(typeof(useless)); // 2nd bug in JavaScript -- null to undefined hai tu iski data type object kesy hosakti??

// var iAmStandBy; // Hum ne variable to create kardiya magar ismy koi value assign nahi kar rahy to ye console par undefined show karawayega 
// console.log(iAmStandBy);console.log(typeof(iAmStandBy));

// QUESTION WHAT IS NaN?  Do string ko minus karwayegy to result mai NaN ayega

// NaN is a property of the Global object.
// In other, it is a variable in global scope.
// the initial value of Nan is Not-A-Number 


// var myPhoneNo = 987654321;
// console.log(isNaN (myPhoneNo));    // Agar ap integar means number likh k check krogy tu ye false dega q k humny isNaN use kiya hai

// var myName = 'Hunain Baig';
// console.log(isNaN (myName));     // agar ap number k elawa kuch bhi dogy tu ye is Nan condition true hojayegi to basically agar ap koi form create karty ho to waha phone number ka ek field hota hai to user uspr phonenumber valid likh raha hai k nahi to pata kesy chalega-- to isky liye hamary paas isNaN method hai  
 
// if (isNaN (myName)){
//     console.log('You enter number')
// }   // Agar user number ki jaga koi text de to ye alert show hojayega k write a valid number q k sabse pehly condition false isliye hai q k wo tu number hainaa koi text nahii jabhi false aye hai 2sri condition mai text hai to is not a number matlb isNaN true ayegii q k text number tu naiii -- tu hum ye method lagaty hai for eg registration form k liye agar user number k bajaye koi text de tus usy invalid alert show hojaye

// PRACTISE:

// console.log(NaN === NaN); //  false
// console.log(Number.NaN === NaN);   // false
// console.log(isNaN(NaN));           // true
// console.log(isNaN(Number.NaN));    //true
// console.log(Number.isNaN(NaN));    //

//-----------------------------------------------------------------------------------------------------------------------

// EXPRESSION AND OPERATORS:

// 1: Assignment operator
//An assignment value assigns a value to its left operand
// based on the value to its operand .
// simplest assignment operator is equal sig (=)

// var x = 5;
// var y = 5;

// console.log('Is both x and y are equal' + x === y);      //  + operator use kiya dono ko concatinate krny k liye liye lekin result false ayaa ub is cheez ko problem kehsakty hai
// lekin nechy dono method se true ayaa

// console.log(x === y);  // result is true

// console.log(`Is both x and y are equal : ${x === y}`);   // result is true

// -----------------------------------------------------------------------------------------------------------------------

// 2: Airthmetic operator:

// An airthmetic operator takes numeric values
// (either literals or variables) as their operands and 
//  reyurns a single numeric values.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5+6);
// console.log(5+6);

// console.log('Remainder operator ' + 81%11);  //   remainder 4
// console.log('Remainder operator ' + 80%10);  //  remainder 0

// % --> also called modulus it returns the division number

// --------------------------------------------------------------------------------------------------------------

// 3: Increment and Decrement operator
//    operator: x++ , ++x or x--, --x
//    If used postfix, with operator after operand (for eg, x++)
//    the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num++;

// console.log(num);        // result 16 
// console.log(newNum);    // result 15

// Dono value alag alag arrahi hai --> post increment mai .. hum num mai 15 value assign kar chuky hai .. jab console par num check kiya to value incrmnt hochuki hai hai but ... lekin jab mai isi num ko new variable mai assgin kr waya hun lekin wo assign naii horha ans 15 arha hai q k wo baad mai jaaky increment karega ub wo baat ayega hi nahi


// var num = 15;
// var newNum = num-- + 5;

// console.log(num);      // result 14
// console.log(newNum);   // result 20

// num tu decrement hogya or result mai 14 ayaa lekin .. jab mai (num-- + 5) --> is expression ko newNum mai perform karwarha hun tu mjhy 20 milrha hai .. agar mai 5 add na karun expression mai tu mjhy tu mjhy newnum mai 15 milrha hai increment hony k bad ki value jo k 14 thi wo store naii hui huii yaha




//    If used prefix, with operator before operand (for eg, ++x)
//    the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = ++num;

// console.log(num);       // result 16
// console.log(newNum);    // result 16

// Prefix increment means the variable is incremented first and then the expression is evaluated using the new value of the variable

//  prefix increment use karny k baad hamy 16 or 16 value mili --> means num 15 hta humny increment operator use kiya tu wo 1 barhgya or 16 hogya and jab humny jab humny isy new varible i.e(newNum) pr assign karna chaha .. tu jo value increment hochuki thi .. ub wo (newNum) par stored hogai hai 


// var num = 15;
// var newNum = --num + 5;

// console.log(num);      // result 14
// console.log(newNum);   // result 19

// Prefix increment means the variable is incremented first and then the expression is evaluated using the new value of the variable

// -------------------------------------------------------------------------------------------------------------------------


// COMPARISION OPERATOR:

// A comparision operator comapres its operand and return a logical based on whether the comparision is true and false

// var a = 30;
// var b =10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// Greater than or equal (>), (>=)
// console.log(a>b);
// console.log(a>=b);

// less than or equal (<), (<=
// console.log(a<b);
// console.log(a<=b);

// ---------------------------------------------------------------------------------------------------------


// 4: LGICAL OPERATORS:
//    logical operators are typically used with boolean (logical) values;
//    when they are, they return a boolean value.

// var a = 30;
// var b = 20;

// logical AND (&&)
// The logical AND (&&) operator (logical conjuction) for a set of 
// operands is true if and only if all of its operands are true.

// console.log(a>b && b<0);   // result false
// console.log(a>b && b>0);   // result true 

// && operator --> jitni bhi expression ap use kro operator ap ko output tab hi degaa jab all expression true hogi agar ek bhi expression wrong hui tu output false hi ayega


// Logocal OR (||)
// The Logical OR (||) operator (logical disjunction) for a set of
//operands is true and only if one or more of its operands is true.

// console.log((a < b) || (b < a) );  //  result true  
// console.log(a < b || b > a );      //  result false
// console.log((a < b) || (b > a) );  //  result faslse

// jitni bhi expression ap use karo operator output dedega agar ek bhi expression true zaruri naii saari true ho ek bhi true hui reslut mai true hi milega

// ----------------------------------------------------------------------------------------------------------

// 5: LOGICAL NOT (!);
//    The logical NOT (!) operator (logical complement, negation)
//    takes truth to falsity and vice versa (sahi ko galat -- galat ko sahi -- kardeta hai)

// console.log(!true);    // result false 
// console.log(!false);   // result true

// console.log(a < 0 || b < 0 );    // result false
// console.log(!(a < 0 || b < 0));  // reult true

// -----------------------------------------------------------------------------------------------------------


//  STRING CONCATENATION (OPERATOR) (+):
//  The concatination operator (+) concatenates two strings values togehther, 
//  returning another string i.e the union of the two operand strings.

// console.log('Hellow ' + 'Hunain Biag');

// var myName = 'Honey';
// console.log(myName + ' baig');
// console.log('baig ' + myName);
// console.log(myName + ' Ali' + ' Baig');

// -----------------------------------------------------------------------------------------------------

// 6: CONDITIONAL (ternary) OPERATORS:
// we will see later when we learning if else statement


// ------------------------------------------------------------------------------------------------------

// PRACTISE:

// sol 1:
// console.log(4**4);   // 4 x 4 x 4 x 4
// console.log(2**4);   // same as the above
// console.log(3**4);   //  same as the above
// console.log(9**2);   // 9 x 9

// console.log(10 ** -1);  // 0.1

// sol 2:
// console.log(10 + 'honey');

// sol 3:
// var a = 5;
// var b = 10;

// we want the output of values in a swap manner  .. for eg b convert into 5 b=5 and a convert into 10 a=10..

// var c = b;
// b = a
// a = c
// console.log('The value of a is ' + a);  //  result 10
// console.log('The value of b is ' + b);  //  result 5

// sol 4:
// var a = 5;
// var b = 10;

// we want the output of values in a swap manner  .. for eg b convert into 5 b=5 and a convert into 10 a=10.. without using third valriable:

// a = a + b; // 15
// b = a - b; // 5
// a = a - b;
// console.log('The value of a is '+ a);
// console.log('The value of b is '+ b);

// ------------------------------------------------------------------------------------------------------

// QUESTION: D/F B/W == VS ===?
//           (==)  ---> check only the value
//           (===)  ---> check the values and datatype of the value

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);   // result true b/c it can only check the value not datatype


// var num1 = 5;
// var num2 = '10';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 === num2);  // result fasle b/c it can check the value as well as data type

// --------------------------------------------------------------------------------------------------------------


// CONTROL STATEMENT AND LOOPS:

//  IF ... ELSE STATEMENT:
//  The 'if' statement executes a statement if a specified condition is truthy. 
//  If the condition is falsy, another statement can  be can be executed the is  written on he else statment

//  if raining = Take umbrella
//  else dont take umbrella

// var tomorrow = 'rain';

// if (tomorrow == 'rain' ) {
//     console.log('Take umbrela!');
// } else {
//     console.log('Dont take umbrella!');
// }

// var a = 10;

// if (a == 0) {
//     console.log("false"); 
// } else {
// console.log('a equal to 10');
// }

// //  PRACTISE:

// var year = 2024;  // you can change the value to check the result on console

// if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
// console.log('This year ' + year + ' is a leap year');
// } else {
//     console.log('This year ' + year + ' is not a leap year');
// }

// Given below is shorter pattern to solve this problem


// var year = +prompt('Enter the year number');

// if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
// console.log('This year ' + year + ' is a leap year');
// }else {
//     console.log('This year' + year + 'is not a leap year');
// }

// ----------------------------------------------------------------------------------------

// QUESTION: WHAT IS TRUTHY AND FALSY VALUES IN JAVASCRIPT?
// We have total 5 falsy values in javascript i.e 0, "", undefined, null, NaN, false** is false anyway

// var num = + prompt ('Enter the truthy and falsy values to check the result in console');

// if(num !== 0 || num !== "" || num !== undefined || num || null || num !== NaN ) {
// console.log('you loss the game');
// } else {
//     console.log('you won the game');
// }

// ----------------------------------------------------------------------------------------


// IF , ELSE , ELSE IF STATEMENTS:

// if (score = 12){
//     console.log('you loss the game');
//     } else{
//     console.log('you won the game');
//     }

// var a = +prompt ('Enter the Age')  // before adding (+) operator ye datatype string tha , after adding (+) operator ye datatype --> number mai convert hogya 

// console.log(typeof(a));

// if(a < 5){
// console.log('This age is invalid for driving license');
// }
// else if(a < 9){
//     console.log('you are kid not eligible for driving license');
// }
// else if (a < 19 || a <= 9){
// console.log("soon you are eligible for license");
// }
// else{
// console.log('You are eligible for driving');
// }

// ---------------------------------------------------------------------------------------------

//  CONDITIONAL (TERNARY) OPERATOR:
//  the condiotinal (ternary) operator is the only javascript operator that takes three operands

// hum is condition ko shorter way mai perform karengy nechy
// var age = 18;   // hum yaha values change karky bhi value observe karsakty hai
// var age = +prompt('Enter your age');   // or yaha ek prompt laga k user se input leku result dikha sakty

// if(age >= 18){
// console.log('you are eligible to vote');
// } else{
//     console.log('you are not eligible to vote');
// }

// here is the shorter condition also called ternary operator:

// var age = 18; // yaha values ko chnage kar bhi result observe karskty console par

// var age = +prompt('Enter your age');   // prompt par bhi values put kar k check karsakty
// console.log((age >= 18) ? "you can vote":"you can't vote");

// -------------------------------------------------------------------------------------------------


//   SWITCH STATEMENT:
//   Evaluates an expression, matching the expression's value to a case clause, and executes statements associsted with that case.

//  1st without break statment
//  find the area of circle, triangle and rectangle?

// var area = 'circle';  // simple area mai humny circl

// var area = prompt('Enter find the area of circle, triangle and rectangle')   // simple humny ek variable assign kiya
// var pi = 3.142, l=5, b=4, r=3;  // varible mai values di
// if(area == 'circle'){
// console.log('The value of circle is '+ (pi*r**2));
// }  // mainy yaha condition banai area agar circle k equal hai to console.log mai result show karwado 
// else if (area == 'triangle') {
// console.log('The value of triangle is ' + (l*b)/2);
// }   // mainy yaha condition banai area agar triangle k equal hai to console.log mai result show karwado 
// else if (area == 'rectangle') {
// console.log('The value of rectangle is ' + (l*b));
// }
// else{
//     console.log('Please enter the valid text');
// }    // mainy yaha condition banai area agar rectangle k equal hai to console.log mai result show karwado 


// Its to long method to solve this find out the area of d/f things which was mentioned above

//  Here is the shorter method to solve this big method called switch method:

// if ki jaga switch statement (jo k ek condition hai) eg humne area likha then case mai area ki values likhdengy jesi ki circle, triangle or rectangle and we will observe the result in console..

// var area = 'triangle';  //  values change karky console par result dekh sakty

// var area = prompt('Enter the text');
// var pi = 3.142, l=5, b=4, r=3;


// if(area == 'circle'){
// console.log('The value of circle is '+ (pi*r**2));
// switch (area) {
//     case 'circle' :
//         console.log('the value of circle is ' + (pi*r**2));
//         break;

// else if (area == 'triangle') {
// console.log('The value of triangle is ' + (l*b)/2);
//         case 'triangle' :
//         console.log('the value of triangle is ' + (l*b)/2);
//         break;

// else if (area == 'rectangle') {
// console.log('The value of rectangle is ' + (l*b));
//         case 'cricle' :
//         console.log('the value of rectangle is ' + (l*b));
//         break;

//     default:
//         console.log('Enter the valid text');
// }

//   break use:
//   Terminates the current loop, switch, or label
//   statement and transfers
//   program control to the statement following the terminated statement.

// ---------------------------------------------------------------------------------------------

//  WHILE LOOP:
//  The statement creates a loop that executes a specified statement as log as the test condition evaluates to true.

// while condition jab tak false nahi hojati ye perform hota jayega  .... while loop ki value true hoti hai jabhi wo block scope mai enter hota hai ... or agar false hoti hai to kuch perform nai hotaa

// {} ---> is curly braces ko block scope kehty or isme mujoood undr value ko bhi
//         Agar condition true nahi hogi to block scope mai kuch

// var num = 0;
// while (num <= 10) {
//     console.log(num);  // agar mai yahi tak likhun tu infinite loop banjayega --> it will be dangerous to your system 
//     num++;  // num++ isliye likhty value ko post increment karwana hai
// }

// var num = 0;
// while (num <= 20) {
//     console.log(num);
//     num++;
// }

// -----------------------------------------------------------------------------------------------



























































































































