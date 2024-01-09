function verify() {
    let age = document.getElementById("age").value;
    if (age == "") {
        document.write("Input is blank. Please reload and enter a valid age.");
        return;  
    }

  else  if ( age < 0) {
        document.write("Invalid input reload the page");
    } else if (age >= 18) {
        document.getElementById("teen").style.display = "none";
      let adult=  document.getElementById("adult")
      adult.style.display="block"
      adult.classList.add("anime")
        
        
         
      

    } else {
        document.getElementById("adult").style.display = "none";
       let teen= document.getElementById("teen")
       teen.style.display="block"
       teen.classList.add("anime")
       
    }
   
}

classList.add("anime")
.style.display="block"

