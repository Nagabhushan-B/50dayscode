let integer=Number(prompt("enter a num"));
if(integer<0){
   if(num=(integer%2==0)){
       alert("negative and even");
    }
    else{
        alert("negative and odd");
        }
}
else if(integer>0)
{
    if(num=(integer%2==0)){
        alert("+ve & even");
    }
    else{
        alert("+ve & odd");
        }
}
else{
    alert("Its a Zero");
}