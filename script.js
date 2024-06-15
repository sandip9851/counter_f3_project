let increment = document.querySelector("#incri");
let decrement = document.querySelector("#dcri");
let text = document.querySelector("u")
let count = 0;




increment.addEventListener("click",upButton);
decrement.addEventListener("click",downButton);

function upButton (){
  //console.log("clicked")
count++;
text.innerText = `Your current Count is : ${count}`
if(count == 1 && !document.getElementById("reset")){
  let btn = document.createElement("button");
  btn.id = "reset";
  btn.innerText = "clear";
  document.getElementById("btn").append(btn);
  btn.addEventListener("click",()=>{
    count = 0;
    text.innerText = `Your current Count is : ${count}`
    if(count == 0){
      if(decrement){
      
        decrement.disabled = true;
      }
      if (!document.getElementById("error")) {
        let errorP = document.createElement("p");
        errorP.id = "error";
        errorP.innerText = "ERROR: cannot go below 0";
        document.getElementById("details").append(errorP);
        
      
  
     
    
    }

    if(btn){
      btn.remove()
    }

    }
   })
   
 

}
if(count > 0){
  if(decrement){
    
    decrement.disabled = false;
  }
  
  let error = document.getElementById("error")
  if(error){
    error.remove()
  }

}
}






function downButton() {
  count--;
  
  
  text.innerText = `Your current Count is : ${count}`;
  if (count == 0) {
   
    let btn = document.getElementById("reset");
    if (btn) {
      btn.remove();
    }
    if(decrement){
      
      decrement.disabled = true;
    }
    if (!document.getElementById("error")) {
      let errorP = document.createElement("p");
      errorP.id = "error";
      errorP.innerText = "ERROR: cannot go below 0";
      document.getElementById("details").append(errorP);
    

   
  
  }
 
  
  
    
}
}

if(count<=0){
  let errorP = document.createElement("p");
  errorP.id = "error";
  errorP.innerText = "ERROR : cannot go bellow 0";
  document.getElementById("details").append(errorP)

  if(decrement){
      
    decrement.disabled = true;
  }
  
  
}


