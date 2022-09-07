6// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="zishan";
  let pass="zishan123.";

let entered_uid="zishan";
let enterd_pwd="zishan123."

if(username==entered_uid){
  //main if start here
  
         if(username==entered_uid && pass==enterd_pwd){
           //loging if strat here
           
                     console.log("Login Successfully!")
                     console.log("welcom to te home page");
                     
          // loging if end here
     
           }else if(pass!=enterd_pwd){          
            //incorrect else if strat here
           
                     console.log("Invalid password");
           
           //incorrect else if end here
         }
  
  //main if end here
}else{
          //main else start
  
            console.log("Invalid User-id");
  
          // main else end
}