let input = document.querySelector('#email-input');
let submit = document.getElementById("submit");
let errDisp = document.getElementById("errMsg");
let errIcon = document.getElementById("errIcon");

let mail_format =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (input.value === "" || input.value === null || !input.value.match(mail_format)) {
        errIcon.style.display = "block";
        errDisp.innerHTML = "Please provide a valid email!";
        submit.style.background = "hsl(0, 80%, 86%)";
        input.style.border ="2px solid hsl(0, 93%, 68%) ";
    } else {
        errIcon.style.display = 'none'
        input.style.border = '0.08rem solid hsl(0, 36%, 70%)'; 
        errDisp.innerHTML = "Email successfully sent!";
        }
    })