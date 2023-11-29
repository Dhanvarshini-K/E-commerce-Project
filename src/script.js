
let signInForm = document.getElementById("validateForm");

function signInValidateForm(event) {
  event.preventDefault(); 

  const usernameOrEmail = document.getElementById("username_and_email");
  const password = document.getElementById("user_password");
  const errorElement = document.getElementById("error");
  const errorElement1 = document.getElementById("error1");

  const usernameAndEmailRegex = /^[A-Za-z0-9]+$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  let validationPassed = true;
  let errorMessages = [];
  let errorMessages1 = [];

  if (!usernameOrEmail.value) {
    validationPassed = false;
    errorMessages.push('Username or Email is required.');
  } else if (usernameOrEmail.value.length < 3) {
    validationPassed = false;
    errorMessages.push('Username or Email should be at least 3 characters.');
  } else if (!usernameOrEmail.value.match(usernameAndEmailRegex) && !usernameOrEmail.value.match(emailRegex)) {
    validationPassed = false;
    errorMessages.push('Enter a valid username or email address.');
  }

  if (!password.value) {
    validationPassed = false;
    errorMessages1.push('Password is required.');
  } else if (password.value.length < 8) {
    validationPassed = false;
    errorMessages1.push('Password should be at least 8 characters.');
  } else if (!password.value.match(passwordRegex)) {
    validationPassed = false;
    errorMessages1.push('Password must contain at least one uppercase letter,lowercase, one number, one special character.');
  }


  errorElement.innerText = errorMessages.join(' ');
  errorElement1.innerText = errorMessages1.join(' ');

  if (validationPassed) {
    window.location.href = 'home.html';
  }
}
if(signInForm){
  signInForm.addEventListener("submit", signInValidateForm);
}


 //========================================================================

let signUpForm = document.getElementById("signUpValidateForm");

function signUpValidateForm(event) {
  event.preventDefault(); 

  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("user_password");
  const errorElement1 = document.getElementById("error1");
  const errorElement2 = document.getElementById("error2");
  const errorElement3 = document.getElementById("error3");
  const errorElement4 = document.getElementById("error4");

  const nameRegex = /^[a-zA-Z\s'.-]+$/;
  const usernameRegex = /^[A-Za-z0-9]+$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  let validationPassed = true;
  let errorMessages1 = [];
  let errorMessages2 = [];
  let errorMessages3 = [];
  let errorMessages4 = [];


  if(!name.value) {
    validationPassed = false;
    errorMessages1.push('Yourname is required')
  }else if(!name.value.match(nameRegex)) {
    validationPassed = false;
    errorMessages1.push('Enter a valid Yourname.');
  }

  if (!username.value) {
    validationPassed = false;
    errorMessages2.push('Username is required.');
  } else if (username.value.length < 3) {
    validationPassed = false;
    errorMessages2.push('Username should be at least 3 characters.');
  } else if (!username.value.match(usernameRegex)) {
    validationPassed = false;
    errorMessages2.push('Enter a valid username.');
  }

  if(!email.value) {
    validationPassed = false;
    errorMessages3.push('Email is required.');
  }else if(email.value.length < 6) {
    validationPassed = false;
    errorMessages3.push('Email should be at least 6 characters.');
  }else if(!email.value.match(emailRegex)) {
    validationPassed = false;
    errorMessages3.push('Enter a valid Email.')
  }

  if (!password.value) {
    validationPassed = false;
    errorMessages4.push('Password is required.');
  } else if (password.value.length < 8) {
    validationPassed = false;
    errorMessages4.push('Password should be at least 8 characters.');
  } else if (!password.value.match(passwordRegex)) {
    validationPassed = false;
    errorMessages4.push('Password must contain at least one uppercase letter,lowercase, one number, one special character.');
  }


  errorElement1.innerText = errorMessages1.join(' ');
  errorElement2.innerText = errorMessages2.join(' ');
  errorElement3.innerText = errorMessages3.join(' ');
  errorElement4.innerText = errorMessages4.join(' ');

  if (validationPassed) {
    window.location.href = 'index.html';
  }
}
if(signUpForm){
  signUpForm.addEventListener("submit", signUpValidateForm);
}


//========================================================================

