function signup(e) {
    e.preventDefault()

    let register = document.getElementById("register");

    let fname = register.fname.value;
    let lname = register.lname.value;
    let mob   = register.mob.value;
    let email = register.email.value;
    let password = register.password.value;


     register.fname.value=null;
 
 register.lname.value=null;
 
register.mob.value=null;
    
register.email.value=null;
  
register.password.value=null;


    // should go to the local Storage
    if(localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    // get all the user data 
    let users = JSON.parse(localStorage.getItem("users"))        // existing users

    if (already_user(fname, email, users)) {
        alert("User Already Exists");
    } else {
        let user = {
            fname,
            lname,
            mob,
            email,
            password,
        };

        // get array from localStorage


        //push new user
        users.push(user)

        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html"
    }




}
//check if user already exits or not
       function already_user(name,email,users){
          for(let i = 0;i<users.length;i++) {
               if(users[i].name === name && users[i].email === email){
                 return true;
               }
           };
           return false;

       }
