let result=10+5; //=,-,%,*(arthematic operators),count
console.log("10+5=",result);
let count=0;
count++;
console.log(count);
let x=10;//Assignment oprators =, +=,-=,*=,/=,%=
x+=5;
console.log("x+=5",x);
//comparision oprators ==,===(types also same for '==='),!=,!==,<,>,>=,<=
console.log("==",5=="5");//String "5" become number 5
console.log("===",5==="5")
console.log("10>5",10>5)
//logical oprators &&(and)for and both should be true,||(or) atleast one true,!(not)
let a=true;
let b=false;
console.log("a&&b",a&&b);
console.log("a||b",a||b);
console.log("!a",!a);//it change true to false
//Ternary oprators(condition oprators) if-else
let age=18;
let st=(age>=18)?"Adult":"Minor";
console.log("if-else",st);
//conditon statements(if,if-else,if-else-if)
//if-else
let vote=prompt("Enter your age");
if(vote>18){
    console.log("your eligible for vote");
}
else{
    console.log("yuo are not eligible for vote");
}
//Else-if
let marks=prompt("Enter your marks:");
if(marks>=90){
    console.log("ewww topper");
}
else if(marks>=35){
    console.log("sadhuvali inka");
}
else{
    console.log("Fail nv badiki poo")
}