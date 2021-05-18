var pass1=""
var pass2=""

function myClick(){
     pass1=document. getElementById("pass1"). value;
 pass2=document. getElementById("pass2"). value;
 user=document. getElementById("user"). value;
    if(pass1==pass2){
        localStorage.setItem("pass1" ,pass1); 
        window.alert("Password Saved") 
    }
    else{
       window.alert("The Passwords do not Match") 
    }
   
}
