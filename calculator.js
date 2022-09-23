function display(val){
    document.getElementById("res").value+=val;
  
}

function solve(){
   var x = document.getElementById("res").value;
   var y = eval(x);
   document.getElementById("res").value=y;
}

function clearConsole(){
    document.getElementById("res").value="";
}