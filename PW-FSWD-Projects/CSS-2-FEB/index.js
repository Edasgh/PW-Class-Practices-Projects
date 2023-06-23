const menuBar = document.querySelector(".menu");
const navList = document.querySelector("ul");

// onclick event on menubar
menuBar.addEventListener("click",function(){
  //if the screenWidth is 600px or above
  if(document.body.clientWidth>=600){
    navList.style.display="flex"
  }else{

    if(navList.style.display==="none"){
      navList.style.display="flex"
    }else{
      navList.style.display="none"
    }
  }
})

// if user resizes the screen to check responsiveness
window.addEventListener("resize",function(){

  if(this.document.body.clientWidth>=600){
    navList.style.display="flex"
  }
})