let a=Number(prompt("enter a num"));
/*let oe=function(){
    if(a%2==0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
console.log(oe());*/
//arrow function
/*let oe=()=>{
    if(a%2==0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
console.log(oe());*/
//ternary opr
/*let oe=()=>{
    let b=(a%2==0)?"even":"odd";
    console.log(b);
}
console.log(oe());
//parameters & args
let x=Number(prompt("1st num"));
let y=Number(prompt("2nd num"));
let num=(x,y)=>{
    console.log(x+y);
}
console.log(num(x,y));

mul=1
let factorial=()=>{
    for(i=1;i<=a;i++){
        mul=mul*i;   
    }
    console.log(mul);
}
console.log(factorial());
*/
let fun=(a)=>{
    if(a%3==0 && a%5==0){ //&& execute when 2 conditions are true
        console.log("FizzBuzz");
    }
    else if(a%3==0){
        console.log("Fizz");
    }
    else if(a%5==0){
        console.log("Buzz");
    }
    else{
        console.log(a);
    }
}
console.log(fun(a));
