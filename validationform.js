document.addEventListener('DOMContentLoaded', function() {
  console.log("we have started");
  started();
});

var secretPassword = 'DOMCONTENTLOADED'

function started() {
  // try oninput
  document.getElementById("password1").onkeyup = validatePassword;
  document.getElementById("password2").onkeyup = validatePassword;
  document.getElementById("email1").onkeyup = validateEmail;
  document.getElementById("email2").onkeyup = validateEmail;
  document.getElementById("adminpass").onkeyup = checkSecret;
  let admin = document.getElementById("admin")
  admin.addEventListener("change", secretPass)
  var submit = document.getElementById("submit")
  submit.addEventListener("click", success)

}

function success() {
  console.log("get in here");
  if (document.getElementById("adminpass").classList.contains("hidden")) {
    if (validateEmail() === true &&
      validatePassword() === true &&
      document.getElementById("password1").value !== "" &&
      document.getElementById("password2").value !== "" &&
      document.getElementById("email1").value !== '' &&
      document.getElementById("email2").value !== '') {
      alert("success")
    }
  } else if (!document.getElementById("adminpass").classList.contains("hidden")) {
    if (validateEmail() === true && validatePassword() === true &&
      checkSecret() === true &&
      document.getElementById("password1").value !== '' &&
      document.getElementById("password2").value !== '' &&
      document.getElementById("email1").value !== '' &&
      document.getElementById("email2").value !== '') {
      alert("success")
    }
  }
}




function validatePassword() {
  var pass2 = document.getElementById("password2").value;
  var pass1 = document.getElementById("password1").value;
  if (pass1 !== pass2)
    document.getElementById("password2").setCustomValidity("Passwords No Match");
  else {
    document.getElementById("password2").setCustomValidity('');
    return true
  }
  //empty string means no validation error
}

function validateEmail() {
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;
  if (email1 !== email2)
    document.getElementById("email1").setCustomValidity("Emails No Match");
  else {
    document.getElementById("email1").setCustomValidity('');
    return true
  }
}

function secretPass() {
  var check = document.querySelectorAll(".admin")
  if (check[0].classList.contains("hidden") || check[1].classList.contains("hidden")) {
    check[0].classList.remove('hidden')
    check[1].classList.remove('hidden')
    check[1].required = true;
    check[1].addEventListener('change', checkSecret)
  } else if (!check[0].classList.contains("hidden") || !check[1].classList.contains("hidden")) {
    check[0].classList.add('hidden')
    check[1].classList.add('hidden')
    check[1].required = false;
  }
}

function checkSecret() {
  var value = document.getElementById("adminpass").value
  if (value !== secretPassword) {
    document.getElementById("adminpass").setCustomValidity("Pass No No");
  } else {
    document.getElementById("adminpass").setCustomValidity('')
    return true
  }
}
