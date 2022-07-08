
var brn=document.getElementById("brn")
var hr=document.getElementById("hr")
var zhr=document.getElementById("zhr")
var neg=document.getElementById("neg")
var hoyr=document.getElementById("hoyr")
var guraw=document.getElementById("guraw")
var gl=document.getElementById("gl")
var zneg=document.createElement("i")
zneg.className="fa-solid fa-hand-scissors"
var zhoyr=document.createElement("i")
zhoyr.className="fa-solid fa-hand-back-fist"
var zguraw=document.createElement("i")
zguraw.className="fa-solid fa-hand"
var songolt=[zneg,zhoyr,zguraw];
var i=0;
var Score1=1;
var Score2=1;
var rockIcon ="fa-solid fa-hand-back-fist";
var paperIcon ="fa-solid fa-hand";
var scissorsIcon="fa-solid fa-hand-scissors"
gl.addEventListener("click",function(e){
var zbarih=e.target
var eParent=zbarih.parentElement
    zhr.removeChild(zhr.firstChild)
    zhr.appendChild( i=songolt[Math.floor(Math.random()*songolt.length)])
})
neg.addEventListener("click", function(e){
  hr.appendChild(neg)
  gl.appendChild(hoyr)
  gl.appendChild(guraw)
  var nparent=e.target
  var x =nparent.className;
  
if(i.className=="fa-solid fa-hand-back-fist" ){
   alert("player won!!!")
}else if( i.className == "fa-solid fa-hand"){
    alert("computer won!!!")
}else if(i.className=="fa-solid fa-hand-scissors"){
    alert("It's tie!!!")
}
})
hoyr.addEventListener("click",function(e){
    hr.appendChild(hoyr)
    gl.appendChild(neg)
    gl.appendChild(guraw)
    // var hbarih=e.target
    // var hparent=barih.parentElement
    if(i.className=="fa-solid fa-hand-back-fist" ){
        alert("it's tie!!!")
    }else if( i.className == "fa-solid fa-hand"){
        alert("player won!!!")
    }else if(i.className=="fa-solid fa-hand-scissors"){
        alert("it's tie!!!")
    }
})
guraw.addEventListener("click",function(e){
    var barih=e.target
    // var parent=barih.parentElement
    hr.appendChild(guraw)
    gl.appendChild(neg)
    gl.appendChild(hoyr)
    if(i.className=="fa-solid fa-hand-back-fist" ){
        alert("computer win!!!")
    }else if( i.className == "fa-solid fa-hand"){
        alert("it's tie!!!")
    }else if(i.className=="fa-solid fa-hand-scissors"){
        alert("player win!!!")
    }
   
})