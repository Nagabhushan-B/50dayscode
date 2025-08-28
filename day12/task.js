document.getElementById("task").addEventListener
("focus",function(){
    this.style.backgroundColor="lightblue";
});
document.getElementById("task").addEventListener
("input",function(){
    document.getElementById("input").innerHTML=this.value;
});
document.getElementById("input").addEventListener
("dblclick",function(){
    this.style.fontStyle="italic";
    this.style.color="Red"
});
document.getElementById("h2").addEventListener
("dblclick",function(){
    alert("You double clicked the word")
});
document.getElementById("task").addEventListener
("blur",function(){
    this.style.backgroundColor="white"
});

