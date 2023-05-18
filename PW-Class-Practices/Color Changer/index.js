const btn = document.getElementById("btn");
const copy_btn=document.getElementById("copy");
const colorChanger=()=> {
  let variable = "0123456789ABCDEF";
  let hash_symbol = "#";
  for (let i = 0; i < 6; i++) {
    hash_symbol = hash_symbol + variable[Math.floor(Math.random() * 16)];
    // console.log("Inside for loop "+hash_symbol)
  }
  copy_btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(hash_symbol);
  })
  document.getElementById("h1").innerText=`Color: ${hash_symbol} `
  return hash_symbol;
  
}


function bgcolChanger(){
    document.body.style.backgroundColor=colorChanger();
   
}


btn.addEventListener("click", bgcolChanger);

//init call
bgcolChanger();