let eye = document.getElementById("eye");
let password = document.getElementById("user_password")

eye.onclick = function(){
  if(password.type == "password"){
    password.type = "text";
    eye.src = "../icons/password_icon.svg"

  }
  else{
    password.type = "password";
     eye.src = "../icons/hide_password_icons.png"

  }
}