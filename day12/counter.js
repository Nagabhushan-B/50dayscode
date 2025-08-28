let a=document.getElementById("p1");
let b=document.getElementById("p2");
let c=document.getElementById("p3");
let count=0;
count=Number(count);
a.addEventListener
("click",function(){
    count=count-1//count++ are also works
    b.innerHTML=count;
});
c.addEventListener
("click",function(){
    count=count+1//count-- are also works
    b.innerHTML=count;
})