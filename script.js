function userna() {
  document.getElementById("submit").disabled = false;
  var user = document.getElementById("username");

  let regex = /^[a-zA-Z]{5,9}$/;
  var u = regex.test(user.value);
  if (u == false) {
    ErrorOf(user, "Username Must Be 5-10 Characters");
    return false;
  } else if (u == true) {
    SuccessOf(user, "Username Valid");
    return true;
  }
}

function emailvalidation() {
  document.getElementById("submit").disabled = false;
  var email = document.getElementById("email");
  var main =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  var res = main.test(email.value);

  if (email.value == "") {
    ErrorOf(email, "Email cannot be blank");
    return false;
  } else if (res !== true) {
    ErrorOf(email, "Plese enter correct Email");
    return false;
  } else {
    SuccessOf(email, "Email valid");
    return true;
  }
}

function phnumber() {
  document.getElementById("submit").disabled = false;
  const ph = document.getElementById("phoneNumber");
  if (ph.value.length == 10) {
    SuccessOf(ph, "phone number valid");
    return true;
  } else {
    ErrorOf(ph, "Enter your phone number correctly");
    return false;
  }
}

function gender() {
  document.getElementById("submit").disabled = false;
  var mal = document.getElementById("male");
  var fem = document.getElementById("female");

  if (mal.checked == true || fem.checked == true) {
    setSuccess(mal, " Your Gender is checked");
    return true;
  } else {
    setError(mal, "please choose your Gender");
    return false;
  }
}

function language() {
  document.getElementById("submit").disabled = false;
  var checked = 0;

  var c1 = document.getElementById("main");
  var k1 = document.getElementById("Telugu");

  var chks = c1.getElementsByTagName("INPUT");

  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      checked++;
    }
  }

  if (checked >= 2) {
    setSuccess(k1, " Your languages are selected");
    return true;
  } else {
    setError(k1, " please select atleast 2 languages");
  }
}

function ads() {
  document.getElementById("submit").disabled = false;
  var ad = document.getElementById("address");
  var adr = ad.value;
  console.log(adr.length);
  if (adr.length < 50 || adr.length > 150) {
    ErrorOf(ad, "please type your address in between 50-150 characters");
  } else {
    SuccessOf(ad, "your address is valid");
    return true;
  }
}

function desig() {
  document.getElementById("submit").disabled = false;
  var d1 = document.getElementById("designation");


  if (d1.value == " ") {
    ErrorOf(d1, "please select atleast one designation");
    return false;
  } else {
    SuccessOf(d1, "Your designation was selected");
    return true;
  }
}

function mul() {
  document.getElementById("submit").disabled = false;
  var checked = 0;

  var c1 = document.getElementById("multi");

  var chks = c1.getElementsByTagName("OPTION");
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].selected) {
      checked++;
    }
  }

  if (checked >= 2) {
    setSuccess(c1, " Your languages are selected");
    return true;
  } else {
    setError(c1, " please select atleast 2 languages");
    return false;
  }
}

function Validate() {
  var c = 0;
  if (userna() == true) {
    if (emailvalidation() == true) {
      if (phnumber() == true) {
        if (gender() == true) {
          if (language() == true) {
            if (ads() == true) {
              if (desig() == true) {
                if (mul() == true) {
                    document.getElementById("submit").disabled = false;
                } else {
                  c = 1;
                }
              } else {
                c = 1;
              }
            } else {
              c = 1;
            }
          } else {
            c = 1;
          }
        } else {
          c = 1;
        }
      } else {
        c = 1;
      }
    } else {
      c = 1;
    }
  } else {
    c = 1;
  }
  if (c == 1) {
    document.getElementById("submit").disabled = true;
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "aa error";
  console.log(message);
  const small = formControl.querySelector("small");

  small.innerText = message;
}

function setSuccess(input, message) {
  const formControl = input.parentElement;

  formControl.className = "aa success";
  console.log(message);
  const small = formControl.querySelector("small");
  small.innerText = message;
  console.log(small.innerText);
}

function ErrorOf(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";

  small.innerText = message;
}

function SuccessOf(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control success";
  small.innerText = message;
}
