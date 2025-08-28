/*let day=3;
switch(day){
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("tues");
        break;
    default:
        console.log("other day")
}*/
let fname=prompt("enter your name");
console.log(fname);
let age=Number(prompt("enter your age"));
console.log(age)
switch(true){
    case (age<0)||Number.isNaN(age): //other than number does not accepted by using Number.isNaN(age)
        console.log("Invalid age");
        break;
    case(age<13):
        console.log("pillalu ra miru")//without the(breses) the case will be executes
        break;
    case(age>=13&&age<18):
        console.log("not eligble");
        break;
    case(age>=18&&age<65):
        console.log("eligible");
        break;
    default:
        console.log("senior citizen")
        break;
}