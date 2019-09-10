var images=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png"];
var i,ii,randomIndex;
function getImage(){
var img='<img id="id11" src=\"';
 randomIndex = Math.floor(Math.random() * images.length); 
    img += images[randomIndex];
    img += '\" alt=\"Some alt text\"/ width="200" height="200" >';
    return img;
    
} 
function myfunction(){
  alert("time up!");
  }
function displayImage(){
   document.write(getImage());
   setTimeout(myfunction,5000);
   var hidden = false;
setInterval(function(){document.getElementById("id11").style.visibility= hidden ? "visible" : "hidden";},1000);

}
displayImage();
function clik(me){
    i= me.id;
    }
 function check(){
   ii=document.getElementsByTagName("img")[randomIndex+1].getAttribute("class");
 if(i===ii){
    alert("you won");   
    document.getElementById(ii).disable=true;
    
 } else{
    alert("you lose"+"\n"+"try again");
    document.getElementById(ii).disable=true;
 }
}




