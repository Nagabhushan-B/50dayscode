//click event
document.getElementById("myButton").addEventListener
("click",function(){
    alert("button was clicked")
});
//mouse event
document.getElementById("mevent").addEventListener
("mouseover",function(){
    this.style.backgroundColor="pink"; 
    this.style.fontStyle="italic"
});
//mouseout 
document.getElementById("mevent").addEventListener
("mouseout",function(){
    this.style.backgroundColor="white";
});
//keydown
document.getElementById("input").addEventListener
("keydown",function(event){
    console.log("you pressed:"+event.key);
});
//keyup
document.getElementById("ku").addEventListener
("keyup",function(event){
    console.log("you released:"+event.key);
});
//input event
document.getElementById("myip").addEventListener
("input",function(){
    console.log("current input:"+this.value);
});
//change
document.getElementById("change").addEventListener
("change",function(){
    console.log("input changed to:"+this.value);
});
//Submit
let a=document.getElementById("name");
document.getElementById("myform").addEventListener
("submit",function(event){
    event.preventDefault();
    alert("form submited!: "+a.value)
});
//double click event(dblclick)
document.getElementById("dbl").addEventListener
("dblclick",function(){
    this.style.fontStyle="italic";
    this.style.color="Red"
});
//focus perform on a input event
document.getElementById("myip").addEventListener
("focus",function(){
    this.style.backgroundColor="lightgray";
});
//blur on on input event
document.getElementById("myip").addEventListener
("blur",function(){
    this.style.backgroundColor="lightblue"
})