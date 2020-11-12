<!--varriable-->
/*var a ="hello ujjwals";

document.write(a);

var first_name ="hello manoj";

document.write(first_name);*/

/*
let firstname ="ujjwal";

const middlename ="kumar";

let lastname ="shukla";



document.write(firstname);

document.write(middlename);

document.write(lastname);
*/
/*
<!--datatype-->

var x = "ujjwal";
x = 13.39;
x = true;
x = undefined;
x =["UJJWAL","MANOJ"];

x = {
    name : "ujjwal",
    country :"india"
}
document.write(x);
document.write("<br>");
document.write(typeof x);
*/

/*
<!--Arithmetic Operators-->

var a = 5;
var b = 6;
var c = a + b;
document.write(c);
*/

/*
<!--Assignment Operators-->

var a = 5;
var b = 6;
a *= b;

document.write(a);
*/

<!--Comparison Operators-->
/*
var a = 10;

var b = 9;

console.log(20 >= 20);
*/

<!--If Statement-->
/*
var a = 100;
var b = 100;

if(a == b){
    document.write("ujjwal shukla");
}
*/

<!--Logical Operators-->
/*
var age = 28;
if(age >=26 && age <=29){
    document.write("yes you are eligible");
}

var a = 10;
var b = 15
if(a >=8 || b <=29){
    document.write("yes you are eligible");
}

var a = 30;
var b = 15
if(!a >=8){
    document.write("yes you are eligible");
}
*/

<!-- If Else Statement -->

/* var x =55;

if(x >30){
    document.write("x is Greater");
}else{
    document.write("x is Smaller");
}

var name ='ujjwal shukla';
var gender = "male";

if(gender =="male"){
    document.write("Hello Mr." + name);
}else{
    document.write("Hello Miss." + name);
} */

<!-- If Else If Statement-->

/* var per = 20;

if(per >= 80 && per <= 100){
    document.write("you are un Merit");
}else if (per >= 60 && per <= 80){
    document .write("you are Ist Division");
}else if(per >= 45 && per <=60){
    document.write("you are IInd Division");
}else if(per >= 33 && per <= 45){
    document.write("you are IIIrd Division");
}else if(per <= 33){
    document.write("you are Fail");
}else{
    document.write("please enter valid percentage");
} */



<!--Conditional Ternary -->

/* var a = 100;
var b;
b = "value is" + (a > 100? b ="True" : b ="False");

document.write(b); */

/* <!--Switch Case-->

var day = 5;


switch(day){
    case 0:
        document.write("today is Monday");
    break;
    case 1:
        document.write("today is Tuesday");
    break;
    case 2:
        document.write("today is Wednesday");
    break;
    case 3:
        document.write("today is Thursday");
    break;
    case 4:
        document.write("today is Friday");
    break;
    case 5:
        document.write("today is Saterday");
    break;
    case 6:
        document.write("today is Sunday");
    break;
    
    default:
        document.write("Enter the valid Week Day");
}

var age = 21;

switch(true){
    case (age >= 15 && age <= 20):
        document.write("you are Eligible");
    break;
    
    case (age >= 20 && age <= 30):
    document.write("you are Not Eligible");

    break;

    default:
            document.write("Enter the valid age.");
} */

<!--Alert Box -->

/* var a =220;
var b =20;

if(a > b){
    alert("Hello ujjwal shukla");
}else{
    alert("Hello Manoj");
} */

<!--Confirm Box -->
/* 
var a = confirm("Do you like our website ?");

if(a){
    alert("Thanks");
}else{
    alert("sorry");
} */

<!--Prompt Box -->
/* 
var a = prompt("What is your name ?");

document.write(a);
 */
<!--function -->
/* 
function hello(){
    document.write("hello world i m ujjwal i m from darbhanga bihar");
}
    hello();

function ujjwal(){
    document.write("hello ujjwal kumar shukla");
}
ujjwal(); */

<!--Functions with Parameters-->
/* 
function hello(fname,lname){
    document.write("Hello" + fname + " " + lname);
}
hello("ujjwal","shukla"); */

<!--Functions with Return Value-->
/* 
function fullname(fname ="ujjwal",lname ="shukla"){
    var a =fname + " " + lname;

    return a;
}
var fn = fullname("ujjwal","shukla");
document.write(fn);
 */

 function sum(math,eng,sc){
     var s = math + eng + sc;

     return s;
 }

 function percentage(tt){
     var per = tt/300*100;
     document.write(per);
 }

    var total = sum(80,80,80);
    percentage(total);
 
