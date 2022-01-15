
function login(e) {
    e.preventDefault();

    let loginForm = document.getElementById("loginForm");

    // console.log("loginForm:" , loginForm);
    
    let email = loginForm.email.value;
    let password = loginForm.password.value;

    loginForm.email.value=null;
    loginForm.password.value=null;




   let users = JSON.parse(localStorage.getItem("users"));
         
        if(user_exist(password,email,users)){
            window.location.href ="../home.html";
        }else{
            alert("Invalid Credentials");
        }

    

}
//check if user already exits or not
       function user_exist(password,email,users){
          for(let i = 0;i<users.length;i++) {
               if(users[i].password === password && users[i].email === email){
                 return true;
               }
           };
           return false;
       }