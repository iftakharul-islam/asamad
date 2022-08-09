
let keypressed = [];
var showbar = document.querySelector("#keyshow");
window.onkeydown = function(e){
    let key = {}
    key.name = e.key;
    key.code =  e.keyCode
    keypressed.push(key);
    console.log(showbar)
    let Ekey = document.createElement("span");
    Ekey.innerHTML = "KeyPressed = "+key.name + " KeyCode = "+key.code;
    Ekey.style = "margin:"+ keypressed.length +"px 5px;color:gray;font-size:16px; display:inline-block;";
   
    showbar.insertAdjacentElement("beforebegin",Ekey);
   
}