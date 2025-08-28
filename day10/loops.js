//prime num 0 to 20
for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}
//1 to 100 sum
sum=0
for(let i=0;i<=100;i++){
    sum=sum+i
}
console.log("sum of 1 to 100="+sum);
//tables
let num=Number(prompt("enter a num for its table"));
for(let i=1;i<=10;i++){
    console.log(num+"*"+i+"=",i*num);
}
//for ...of loop
const fs=["a","b","c"];
for(const f of fs){
    console.log(f)
}
//while loop
let count=0
while(count<3){
    console.log("count is:"+count);
    count++;
}
//table using while
let t=1;
let table=Number(prompt("Enter a num"))
while(t<=10){
    console.log(t+"*"+table+"="+t*table)
    t++
}