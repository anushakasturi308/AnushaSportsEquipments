var header =document.querySelector("a")
header
header.style.color= "blue"

function getRandonColor()
{
    var letters="01234567879ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeHeaderColor()
{
    colorInput=getRandonColor()
    header.style.color=colorInput;
}
setInterval("changeHeaderColor()",500);
var text = document.getElementById("c1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(var i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

var char = 0;
var timer = setInterval(onTick, 600);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }